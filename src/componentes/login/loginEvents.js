import {
  signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider,
} from 'firebase/auth';
import { auth } from '../../firebase.js';

export const verificarEmail = () => {
  if (auth.currentUser.emailVerified === false) {
    alert('No se ha verificado tu correo');
    console.log('Email No Verificado');
  } else {
    console.log('Email Verificado');
  }
  return verificarEmail;
};

export const googleClick = () => {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((credenciales) => {
      console.log(credenciales);
    })
    .catch((error) => console.log(error));
};

export const loginClick = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => userCredential.user)
    .catch((error) => {
    // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
};

// firebase.auth().signInWithEmailAndPassword(email, password)
//     .catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   if (errorCode === 'auth/wrong-password') {
//     alert('Wrong password.');
//   } else {
//     alert(errorMessage);
//   }
//   console.log(error);
// });
