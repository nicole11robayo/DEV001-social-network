import { registerClick, googleClick } from './registroevents.js';

export const Register = () => {
  const registro = document.createElement('section');
  registro.setAttribute('id', 'registro');
  const Home = document.createElement('form');
  // Home.id = 'home';
  Home.setAttribute('id', 'home');
  const title = document.createElement('h1');
  title.innerText = '<Laboratorians Music>';

  const welcome = document.createElement('p');
  welcome.innerText = 'Inicia sesión para compartir música con la comunidad de Laboratoria.';

  const userDiv = document.createElement('div');
  const user = document.createElement('label');
  user.innerText = 'Usuario';
  const userInput = document.createElement('input');
  userInput.placeholder = 'Ingresa tu usuario';
  userInput.id = 'userInput';
  const correoDiv = document.createElement('div');
  const correo = document.createElement('label');
  correo.innerText = 'Correo';
  const correoInput = document.createElement('input');
  correoInput.placeholder = 'Ingresa tu correo';
  correoInput.id = 'correoInput';
  correoInput.setAttribute('type', 'email');
  const correoInput2 = document.createElement('input');
  correoInput2.placeholder = 'Válida tu correo';
  correoInput2.id = 'correoInput2';
  correoInput2.setAttribute('type', 'email');

  const contraseñaDiv = document.createElement('div');
  const contraseña = document.createElement('label');
  contraseña.innerText = 'Contraseña';
  const contraseñaInput = document.createElement('input');
  contraseñaInput.placeholder = 'Ingresa tu contraseña';
  contraseñaInput.id = 'contraseñaInput';
  contraseñaInput.setAttribute('type', 'password');
  const contraseñaInput2 = document.createElement('input');
  contraseñaInput2.placeholder = 'Válida tu contraseña';
  contraseñaInput2.id = 'contraseñaInput2';
  contraseñaInput2.setAttribute('type', 'password');

  const buttonRegister = document.createElement('button');
  buttonRegister.innerText = 'Registrarse';
  buttonRegister.id = 'registerButton';

  const buttonGoogle = document.createElement('button');
  const imagen = document.createElement('img');
  imagen.src = 'https://andigarcia.com/wp-content/uploads/2020/04/Google-Logo-Fondo-negro.jpg';
  buttonGoogle.innerText = 'Ingresa con Google';
  buttonGoogle.setAttribute('id', 'buttonGoogle');

  // buttonGoogle.addEventListener('click', async (e) => {
  // try {
  // await registroGoogle();
  // } catch (error) {}
  // });
  buttonGoogle.appendChild(imagen);

  userDiv.appendChild(user);
  userDiv.appendChild(userInput);

  correoDiv.appendChild(correo);
  correoDiv.appendChild(correoInput);
  correoDiv.appendChild(correoInput2);

  contraseñaDiv.appendChild(contraseña);
  contraseñaDiv.appendChild(contraseñaInput);
  contraseñaDiv.appendChild(contraseñaInput2);

  Home.appendChild(userDiv);
  Home.appendChild(correoDiv);
  Home.appendChild(contraseñaDiv);
  Home.appendChild(buttonRegister);
  Home.appendChild(buttonGoogle);
  // Home.appendChild(buttonGoogle);
  registro.appendChild(title);
  registro.appendChild(welcome);
  registro.appendChild(Home);
  
  

  //   Home.addEventListener('submit', (e) => {
  //     e.preventDefault();
  //   });
  
  Home.addEventListener('submit', (e) => {
    e.preventDefault();
    registerClick(correoInput, contraseñaInput)
});

  buttonGoogle.addEventListener('click', () => googleClick());

  return registro;
};
