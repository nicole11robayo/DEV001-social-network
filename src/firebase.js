// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA3maUa17yJd5U-6oLPwJezQ7NfOP1Ycnw',
  authDomain: 'laboratorians-music-2.firebaseapp.com',
  projectId: 'laboratorians-music-2',
  storageBucket: 'laboratorians-music-2.appspot.com',
  messagingSenderId: '603110199557',
  appId: '1:603110199557:web:1a7d20d7f0905017db276c',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const createUser = createUserWithEmailAndPassword();
