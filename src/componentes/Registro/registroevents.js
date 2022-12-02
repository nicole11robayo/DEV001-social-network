/* eslint-disable no-console */
// import {
//   createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, sendEmailVerification,
//   onAuthStateChanged, signOut,
// } from 'firebase/auth';
// import { addDoc, collection } from 'firebase/firestore';
// import { auth, database } from '../../firebase.js';

// const verificar = auth.onAuthStateChanged((user) => {
//   if (user) {
//     console.log(user);
//     const emailVerified = user.emailVerified;
//     console.log(emailVerified);
//     if (emailVerified === false) {
//       alert('No se ha verificado tu correo');
//       console.log('Email No Verificado');
//     } else if (emailVerified === true) {
//       console.log('Email Verificado');
//       perfil();
//     }
//   }
// });

// export const logOut = () => {
//   signOut(auth).then(() => {
//     console.log('cerro sesión');
//   }).catch((error) => {
//     console.log(error);
//     // An error happened.
//   });
// };
// import { Register } from '/componentes/Registro/registroindex.js';

// const registroButton = document.getElementById('home');np

/**
 * TODO: investigate about JSDOC
 */
// export const registerClick = (email, contraseña, usuario) => {
//   // e.preventDefa   ult();

//   console.log(email, contraseña);

//   createUserWithEmailAndPassword(auth, email, contraseña)
//     .then((userCredentials) => {
//       //alert('Te hemos enviado un correo de verificación');
//       //sendEmailVerification(auth.currentUser);
//       console.log(auth.currentUser);
//       console.log(auth.currentUser.emailVerified);
// const user2 = userCredentials.user.uid;
// addDoc(collection(database, 'users'), {
//   user: usuario,
//   correo: email,
//   password: contraseña,
// })
//   .then((docRef) => {
//     console.log(docRef);
//     console.log(docRef.id);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
//     return userCredentials.user;
//     });
// };

// export const googleClick = () => {
//   const provider = new GoogleAuthProvider();

//   signInWithPopup(auth, provider)
//     .then((credenciales) => {
//       console.log(credenciales);
//     })
//     .catch((error) => console.log(error));
// };

// export const datosUsuario = (usuario, email, contraseña) => {
//   addDoc(collection(database, 'users'), {
//     user: usuario,
//     correo: email,
//     password: contraseña,
//   }).then((docRef) => {
//     console.log(docRef);
//   }).catch(() => {
//   });
// };
//   console.log(usuario, email, contraseña);
// console.log('Document written with ID: ', docRef.id);//
// export const google = async () => {
//   const provider = new GoogleAuthProvider();

//   try {
//     const credenciales = await signInWithPopup(auth, provider);
//     console.log(credenciales);
//   } catch (error) { console.log(error); }
// };
/*
export const verificarEmail = () => {
  console.log(auth.currentUser);
  sendEmailVerification(auth.currentUser)
    .then(() => {
      console.log('Hola');
    // Email verification sent!
    // ...
    })
    .catch((error) => console.log(error));
};
*/
// onAuthStateChanged(verificarEmail(auth) => {
//   if (auth.currentUser.emailVerified === false) {
//     alert('No se ha verificado tu correo');
//     console.log('Email No Verificado');
//   } else {
//     console.log('Email Verificado');
//     perfil();
//   }
//   return verificarEmail;
// });
