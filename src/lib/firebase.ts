import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';
import { getFirestore, doc, getDocFromServer } from 'firebase/firestore';

// Handle missing config file gracefully for Vercel/Production
let firebaseConfig;
try {
  // Use @ alias or relative path. Since it's in the root, it might not be bundled if not explicitly handled.
  // In Vite, it's safer to use an object or env vars for production.
  firebaseConfig = await import('../../firebase-applet-config.json').then(m => m.default);
} catch (e) {
  // Fallback to env vars for Vercel
  firebaseConfig = {
    apiKey: (import.meta as any).env.VITE_FIREBASE_API_KEY,
    authDomain: (import.meta as any).env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: (import.meta as any).env.VITE_FIREBASE_PROJECT_ID,
    appId: (import.meta as any).env.VITE_FIREBASE_APP_ID,
    firestoreDatabaseId: (import.meta as any).env.VITE_FIREBASE_DATABASE_ID
  };
}

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId || '(default)');
export const googleProvider = new GoogleAuthProvider();

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
