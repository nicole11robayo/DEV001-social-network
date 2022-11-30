/* eslint-disable no-console */
import {
  createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, sendEmailVerification, updateProfile,
  onAuthStateChanged, signOut
} from 'firebase/auth';
import { setDoc, collection } from 'firebase/firestore';
import { auth, database } from '../../firebase.js';
import { onNavigate } from '../../main.js';
// eslint-disable-next-line import/no-cycle
import { perfil } from '../Perfil/perfilIndex.js';

const verificar = auth.onAuthStateChanged((user) => {
  if (user) {
    console.log(user);
    const emailVerified = user.emailVerified;
    console.log(emailVerified);
    if (emailVerified === false) {
      alert('No se ha verificado tu correo');
      console.log('Email No Verificado');
    } else if (emailVerified === true) {
      console.log('Email Verificado');
      perfil();
    }
  }
});

export const logOut = () => {
  signOut(auth).then(() => {
    console.log('cerro sesión');
  }).catch((error) => {
    // An error happened.
  });
};
// import { Register } from '/componentes/Registro/registroindex.js';

// const registroButton = document.getElementById('home');np
export const registerClick = (email, contraseña, usuario) => {
  // e.preventDefa   ult();

  console.log(email, contraseña);

  createUserWithEmailAndPassword(auth, email, contraseña)
    .then((userCredentials) => {
      sendEmailVerification(auth.currentUser);
      const user2 = userCredentials.user.uid;
      setDoc(collection(database, 'user', user2), {
        user: usuario,
        correo: email,
        password: contraseña,
      }).then((docRef) => {
        console.log(docRef);
      }).catch(() => {
      });
      onAuthStateChanged()
        .then(() => {
          verificar();
          return userCredentials.user;
        });
      console.log(auth.currentUser);
      console.log(userCredentials.user.uid);
    })

    .catch((error) => console.log(error));
};

export const googleClick = () => {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((credenciales) => {
      console.log(credenciales);
    })
    .catch((error) => console.log(error));
};
// export const datosUsuario = (usuario, email, contraseña) => {
//   const user2 = auth.currentUser;
//   console.log(auth.user);
//   setDoc(collection(database, 'user', user2.uid), {
//     user: usuario,
//     correo: email,
//     password: contraseña,
//   }).then((docRef) => {
//     console.log(docRef);
//   }).catch(() => {
//   });

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
