// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword,
  GoogleAuthProvider, signInWithPopup,
} from 'firebase/auth';
import {
  getFirestore, addDoc, collection, doc, setDoc, getDocs, onSnapshot, getDoc, where, query,
} from 'firebase/firestore';
import { async } from 'regenerator-runtime';
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

// export const user = auth.onAuthStateChanged;

export const user = () => {
  auth.onAuthStateChanged((us) => {
    if (us) {
      getDoc(doc(database, 'users', us.uid))
        .then((users) => {
          console.log(users.data().user);
          console.log(localStorage.setItem('uidUsuario', us.uid));
          return users.data().user;
        });
      console.log('state = definitely signed in');
      console.log(us.email);
      console.log(us.uid);
    } else {
      // User is signed out.
      console.log('state = definitely signed out');
    }
  });
};


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
  addDoc(collection(database, 'posts'), {
    post,
  });
  //post, orderBy('name', 'desc');
  //post.orderBy('fecha', 'desc');
};

//database.collection('posts').orderBy('fecha', 'desc');
export const onGetUsers = (callback) => onSnapshot(collection(database, 'users'), callback);

export const onGetPosts = (callback) => onSnapshot(collection(database, 'posts'), callback);

export const getUserLog = (uid) => getDoc(doc(database, 'users', uid)).then(() => console.log('hola'));
// export const catchData = getDocs(collection(database, 'users'));
// catchData.forEach((doc) => {
//   console.log(doc.id, doc);
//   return doc;
// });

// doc.data() is never undefined for query doc snapshots
