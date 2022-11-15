// import { registroGoogle } from '../Funciones Firebase/auth.js';

// podemos crear funciones separadas para crear los diferentes componentes

export const Register = () => {
  const Home = document.createElement('form');
  // Home.id = 'home';
  Home.setAttribute('id', 'home');
  const title = document.createElement('h1');
  title.innerText = 'Laboratorians Music';

  const welcome = document.createElement('p');
  welcome.innerText = 'Inicia sesión para compartir música con la comunidad de Laboratoria.';

  const userDiv = document.createElement('div');
  const user = document.createElement('label');
  user.innerText = 'Usuario';
  const userInput = document.createElement('input');
  userInput.placeholder = 'User';
  userInput.id = 'userInput';
  const correoDiv = document.createElement('div');
  const correo = document.createElement('label');
  correo.innerText = 'Correo';
  const correoInput = document.createElement('input');
  correoInput.placeholder = 'Correo';
  correoInput.id = 'correoInput';
  const correoInput2 = document.createElement('input');
  correoInput2.placeholder = 'Verifica tu correo';
  correoInput2.id = 'correoInput2';

  const contraseñaDiv = document.createElement('div');
  const contraseña = document.createElement('label');
  contraseña.innerText = 'Contraseña';
  const contraseñaInput = document.createElement('input');
  contraseñaInput.placeholder = 'Contraseña';
  contraseñaInput.id = 'contraseñaInput';
  contraseñaInput.setAttribute('type', 'password');
  const contraseñaInput2 = document.createElement('input');
  contraseñaInput2.placeholder = 'Verifica tu contraseña';
  contraseñaInput2.id = 'contraseñaInput2';
  contraseñaInput2.setAttribute('type', 'password');

  const buttonRegister = document.createElement('button');
  buttonRegister.innerText = 'Registrarse';
  buttonRegister.id = 'registerButton';

  const buttonGoogle = document.createElement('button');
  buttonGoogle.innerText = 'Ingresa con Google';

  // buttonGoogle.addEventListener('click', async (e) => {
  // try {
  // await registroGoogle();
  // } catch (error) {}
  // });

  userDiv.appendChild(user);
  userDiv.appendChild(userInput);

  correoDiv.appendChild(correo);
  correoDiv.appendChild(correoInput);
  correoDiv.appendChild(correoInput2);

  contraseñaDiv.appendChild(contraseña);
  contraseñaDiv.appendChild(contraseñaInput);
  contraseñaDiv.appendChild(contraseñaInput2);

  Home.appendChild(title);
  Home.appendChild(welcome);
  Home.appendChild(userDiv);
  Home.appendChild(correoDiv);
  Home.appendChild(contraseñaDiv);
  Home.appendChild(buttonRegister);
  Home.appendChild(buttonGoogle);

  return Home;
};
