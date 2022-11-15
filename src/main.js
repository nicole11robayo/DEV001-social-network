// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();
//import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, createUser } from './firebase.js';
import { Register } from './componentes/registro.js';

const rootDiv = document.getElementById('root');

const routes = {
  '/src/': Register,
};

const componente = routes[window.location.pathname];
rootDiv.appendChild(componente());

const registroButton = document.getElementById('home');
console.log(registroButton);

registroButton.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = registroButton.correoInput.value;
  const contraseña = registroButton['contraseñaInput'].value;
  console.log(registroButton);
  console.log(email, contraseña);

  /*.then {
    const userCredentials = await createUser(auth, email, contraseña);
    console.log(userCredentials);
  } catch (error) {
    console.log(error);
  }*/
});
