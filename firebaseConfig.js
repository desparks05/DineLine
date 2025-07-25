// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCrU3oZOZAU-4lhS98KXCn3_W3Fy3g0gxM',
  authDomain: 'dineline-1f727.firebaseapp.com',
  projectId: 'dineline-1f727',
  messagingSenderId: '261235202476',
  appId: '1:261235202476:web:cd27b2108ca9cd2e658209',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
