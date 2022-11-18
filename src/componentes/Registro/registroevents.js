import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '/firebase.js';
// import { Register } from '/componentes/Registro/registroindex.js';

console.log(auth);

// const registroButton = document.getElementById('home');
export const registerClick = (correoInput, contraseñaInput) => {
  // e.preventDefa   ult();

  const email = correoInput.value;
  const contraseña = contraseñaInput.value;

  console.log(email, contraseña);

  createUserWithEmailAndPassword(auth, email, contraseña)
    .then((userCredentials) => {
      console.log(userCredentials);
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

export const google = async () => {
  const provider = new GoogleAuthProvider();

  try {
    const credenciales = await signInWithPopup(auth, provider);
    console.log(credenciales);
  } catch (error) { console.log(error); }
};
