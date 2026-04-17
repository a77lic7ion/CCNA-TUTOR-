import React, { useState, useEffect } from 'react';
import { AuthScreen } from './components/AuthScreen';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { Quiz } from './components/Quiz';
import { Simulations } from './components/Simulations';
import { Settings } from './components/Settings';
import { LessonView } from './components/LessonView';
import { ViewType } from './components/Sidebar';
import { auth, db, onAuthStateChanged, FirebaseUser, googleProvider } from './lib/firebase';
import { signInWithPopup } from 'firebase/auth';
import { doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore';
import { UserProfile } from './types';

export default function App() {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [currentView, setCurrentView] = useState<ViewType>('dashboard');
  const [isAuthReady, setIsAuthReady] = useState(false);
  const [isAuthLoading, setIsAuthLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setIsAuthReady(true);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) {
      setProfile(null);
      return;
    }

    const unsub = onSnapshot(doc(db, 'users', user.uid), (snap) => {
      if (snap.exists()) {
        setProfile(snap.data() as UserProfile);
      }
    });

    return () => unsub();
  }, [user]);

  const handleStart = async (name: string) => {
    if (isAuthLoading) return;
    
    // Explicit guest check to avoid unnecessary auth triggers
    if (name === 'Guest') {
      localStorage.setItem('ccna_tutor_name', 'Guest');
      setResumeName('Guest');
      return;
    }

    setIsAuthLoading(true);
    try {
      let currentUser = user;
      if (!currentUser) {
        const cred = await signInWithPopup(auth, googleProvider);
        currentUser = cred.user;
      }

      const userRef = doc(db, 'users', currentUser.uid);
      const snap = await getDoc(userRef);
      if (!snap.exists()) {
        const newProfile: UserProfile = {
          uid: currentUser.uid,
          name: name || currentUser.displayName || 'Pupil',
          totalSessions: 1,
          totalQuestionsAnswered: 0,
          overallScore: 0,
          selectedAIModel: 'gemini-3-flash-preview',
          lastActive: new Date().toISOString()
        };
        await setDoc(userRef, newProfile);
        setProfile(newProfile);
      }
      localStorage.setItem('ccna_tutor_name', name || currentUser.displayName || 'Pupil');
      setResumeName(name || currentUser.displayName || 'Pupil');
    } catch (err: any) {
      console.error("Auth/Persistence Error:", err);
      
      // Handle the "Cancelled Popup Request" or "Closed by User" specifically 
      // to avoid breaking the UI state
      if (err.code === 'auth/cancelled-popup-request' || err.code === 'auth/popup-closed-by-user') {
        console.warn("Auth request was interrupted or closed by user.");
      }

      // Fallback: If auth fails, still allow guest entry with the name provided
      if (name) {
        localStorage.setItem('ccna_tutor_name', name);
        setResumeName(name);
      }
    } finally {
      setIsAuthLoading(false);
    }
  };

  // Mock checking local storage for resume
  const [resumeName, setResumeName] = useState(localStorage.getItem('ccna_tutor_name'));

  if (!resumeName && !profile) {
    return <AuthScreen onStart={handleStart} isLoading={isAuthLoading} />;
  }

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard 
          stats={{ overallMastery: profile?.overallScore || 64, streak: 5, sessions: profile?.totalSessions || 12, lastSynced: '2023-11-24 14:02:11' }} 
          onViewChange={setCurrentView}
        />;
      case 'quiz':
        return <Quiz />;
      case 'labs':
        return <Simulations />;
      case 'lessons':
        return <LessonView />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard 
          stats={{ overallMastery: 64, streak: 5, sessions: 12, lastSynced: '2023-11-24 14:02:11' }} 
          onViewChange={setCurrentView}
        />;
    }
  };

  return (
    <Layout 
      currentView={currentView} 
      onViewChange={setCurrentView} 
      userName={profile?.name || resumeName || 'Admin'}
    >
      {renderContent()}
    </Layout>
  );
}
