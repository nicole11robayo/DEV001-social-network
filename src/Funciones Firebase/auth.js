// import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
// import { auth } from '../firebase.js';
//import { async } from 'regenerator-runtime';
import { Register } from '../componentes/registro.js';

const registroButton = document.getElementById('registerButton');


registroButton.addEventListener('click', async (e) => {
  e.preventDefault();
  console.log(registroButton);
});

// const provider = new GoogleAuthProvider();

// const inicio = signInWithPopup(auth, provider);

// export function registroGoogle() {
//   try {
//     const response = inicio;
//     console.log(response);
//     return response.user;
//   } catch (error) {
//     throw new Error(error);
//   }
// }

// signInWithPopup(auth, provider)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     // ...
//   }).catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });
