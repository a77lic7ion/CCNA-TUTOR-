import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, User as FirebaseUser, Auth } from 'firebase/auth';
import { getFirestore, doc, getDocFromServer, Firestore } from 'firebase/firestore';

// Handle missing config file gracefully for Vercel/Production
// We import the config sync or provide a fallback.
import firebaseConfigData from '../../firebase-applet-config.json';

const firebaseConfig = {
  ...firebaseConfigData,
  apiKey: (import.meta as any).env.VITE_FIREBASE_API_KEY || firebaseConfigData.apiKey,
  authDomain: (import.meta as any).env.VITE_FIREBASE_AUTH_DOMAIN || firebaseConfigData.authDomain,
  projectId: (import.meta as any).env.VITE_FIREBASE_PROJECT_ID || firebaseConfigData.projectId,
  appId: (import.meta as any).env.VITE_FIREBASE_APP_ID || firebaseConfigData.appId,
  firestoreDatabaseId: (import.meta as any).env.VITE_FIREBASE_DATABASE_ID || (firebaseConfigData as any).firestoreDatabaseId
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId || '(default)');
export const googleProvider = new GoogleAuthProvider();

// Customizing the provider for better behavior in iframes if needed
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

// Connection test
async function testConnection() {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.error("Please check your Firebase configuration. You may be offline or the config is invalid.");
    }
  }
}

testConnection();

export { onAuthStateChanged };
export type { FirebaseUser };
