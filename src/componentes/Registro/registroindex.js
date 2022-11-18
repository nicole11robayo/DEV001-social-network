import { registerClick, googleClick } from './registroevents.js';
import { validar } from './registroValidar';

export const Register = () => {
  const registro = document.createElement('section');
  registro.setAttribute('id', 'registro');

  const Home = document.createElement('form');
  Home.setAttribute('id', 'home');

  const title = document.createElement('h1');
  title.innerText = '<Laboratorians Music>';

  const welcome = document.createElement('p');
  welcome.innerText = 'Inicia sesión para compartir música con la comunidad de Laboratoria.';

  const userDiv = document.createElement('div');
  const user = document.createElement('label');
  user.innerText = 'Usuario';

  const userInput = document.createElement('input');
  userInput.setAttribute('name', 'usuario');
  userInput.placeholder = 'Ingresa tu usuario';
  userInput.id = 'userInput';
  userInput.setAttribute('class', 'inputForm');
  const errorUser = document.createElement('h6');
  errorUser.innerText = 'El usuario debe tener entre 4 y 16 caracteres, puede contener números, _ y - .';
  errorUser.setAttribute('class', 'error');

  const correoDiv = document.createElement('div');
  const correo = document.createElement('label');
  correo.innerText = 'Correo';

  const correoInput = document.createElement('input');
  correoInput.setAttribute('class', 'inputForm');
  correoInput.setAttribute('name', 'correo1');
  correoInput.placeholder = 'Ingresa tu correo';
  correoInput.id = 'correoInput';
  correoInput.setAttribute('type', 'email');
  const errorCorreo = document.createElement('h6');
  errorCorreo.innerText = 'Ejemplo: example@correo.com';
  errorCorreo.setAttribute('class', 'error');

  const correoInput2 = document.createElement('input');
  correoInput2.setAttribute('class', 'inputForm');
  correoInput2.setAttribute('name', 'correo2');
  correoInput2.placeholder = 'Válida tu correo';
  correoInput2.id = 'correoInput2';
  correoInput2.setAttribute('type', 'email');
  const errorCorreo2 = document.createElement('h6');
  errorCorreo2.innerText = 'Ambos correos deben ser iguales';
  errorCorreo2.setAttribute('class', 'error');

  const contraseñaDiv = document.createElement('div');
  const contraseña = document.createElement('label');
  contraseña.innerText = 'Contraseña';

  const contraseñaInput = document.createElement('input');
  contraseñaInput.setAttribute('class', 'inputForm');
  contraseñaInput.placeholder = 'Ingresa tu contraseña';
  contraseñaInput.id = 'contraseñaInput';
  contraseñaInput.setAttribute('type', 'password');
  contraseñaInput.setAttribute('name', 'contraseña1');
  const errorContraseña = document.createElement('h6');
  errorContraseña.innerText = 'La contraseña debe tener entre 6 y 16 caracteres, puede contener números, _ y - .';
  errorContraseña.setAttribute('class', 'error');

  const contraseñaInput2 = document.createElement('input');
  contraseñaInput2.setAttribute('class', 'inputForm');
  contraseñaInput2.setAttribute('name', 'contraseña2');
  contraseñaInput2.placeholder = 'Válida tu contraseña';
  contraseñaInput2.id = 'contraseñaInput2';
  contraseñaInput2.setAttribute('type', 'password');
  const errorContraseña2 = document.createElement('h6');
  errorContraseña2.innerText = 'Ambas contraseñas deben ser iguales';
  errorContraseña2.setAttribute('class', 'error');

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
  userDiv.appendChild(errorUser);

  correoDiv.appendChild(correo);
  correoDiv.appendChild(correoInput);
  correoDiv.appendChild(errorCorreo);
  correoDiv.appendChild(correoInput2);
  correoDiv.appendChild(errorCorreo2);

  contraseñaDiv.appendChild(contraseña);
  contraseñaDiv.appendChild(contraseñaInput);
  contraseñaDiv.appendChild(errorContraseña);
  contraseñaDiv.appendChild(contraseñaInput2);
  contraseñaDiv.appendChild(errorContraseña2);

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

  const inputs = Home.querySelectorAll('input');
  inputs.forEach((input) => {
    input.addEventListener('keyup', () => {
      validar(input.name, input.value);
    });
    input.addEventListener('blur', () => {
      validar(input.name, input.value);
    });
  });

  Home.addEventListener('submit', (e) => {
    e.preventDefault();
    registerClick(correoInput, contraseñaInput);
    // inputForm();
  });

  buttonGoogle.addEventListener('click', () => googleClick());

  // console.log(inputs);
  // console.log(inputForm);

  return registro;
};
