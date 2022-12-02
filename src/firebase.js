// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword,
  GoogleAuthProvider, signInWithPopup,
} from 'firebase/auth';
import {
  getFirestore, addDoc, collection, doc, setDoc,
} from 'firebase/firestore';
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
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const database = getFirestore(app);

// eslint-disable-next-line arrow-body-style
export const loginEmailAndPassword = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logOut = () => signOut(auth);

// eslint-disable-next-line arrow-body-style
export const registerEmailAndPassword = (email, contraseña) => {
  return createUserWithEmailAndPassword(auth, email, contraseña);
};

export const googleRegister = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider);
};

export const newUserCollection = (userID, usuario, email, contraseña) => {
  setDoc(doc(database, 'users', userID), {
    user: usuario,
    correo: email,
    password: contraseña,
    id: userID,
  });
};

export const newPostCollection = (post) => {
  addDoc(collection(database, 'Posts'), {
    post,
  });
};

// export const catchData = getDocs(collection(database, 'users'));
// catchData.forEach((doc) => {
//   console.log(doc.id, doc);
//   return doc;
// });

// doc.data() is never undefined for query doc snapshots
