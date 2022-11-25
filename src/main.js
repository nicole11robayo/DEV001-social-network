// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();

import { perfil } from './componentes/Perfil/perfilIndex.js';
import { Register } from './componentes/Registro/registroindex.js';

const rootDiv = document.getElementById('root');

const routes = {
  '/': Register,
  '/profile': perfil,
};

const componente = routes[window.location.pathname];
rootDiv.appendChild(componente());

// export const onNavigate = (pathname) => {
//   window.history.pushState(
//     {},
//     pathname,
//     window.location.origin + pathname 
//   )
//   rootDiv.innerHTML = routes[pathname]
// }
// routes[window.location.pathname].loadEvents()

// const registroButton = document.getElementById('home');
// console.log(registroButton);

// registroButton.addEventListener('submit', (e) => {
//   e.preventDefault();

//   const email = registroButton.correoInput.value;
//   const contraseña = registroButton['contraseñaInput'].value;
//   console.log(registroButton);
//   console.log(email, contraseña);

//   try {
//     const userCredentials = createUserWithEmailAndPassword(auth, email, contraseña);
//     console.log(userCredentials);
//   } catch (error) {
//     console.log(error);
//   }
// });

// const googleButton = document.querySelector('#buttonGoogle');

// googleButton.addEventListener('click', () => {
//   const provider = new GoogleAuthProvider();

//   try {
//     const credenciales = signInWithPopup(auth, provider);
//     console.log(credenciales);
//   } catch (error) {
//     console.log(error);
//   }
// });
