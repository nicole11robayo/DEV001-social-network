import { registerClick, googleClick, datosUsuario } from './registroevents.js';
import { validar } from './registroValidar';
// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../../main.js';

export const Register = () => {
  const registro = document.createElement('section');
  registro.setAttribute('id', 'registro');

  const Home = document.createElement('form');
  Home.setAttribute('id', 'home');

  const title = document.createElement('h1');
  title.innerText = '<Laboratorians Music>';

  const welcome = document.createElement('p');
  welcome.innerText = 'Registrate para compartir música con la comunidad de Laboratoria.';

  const userDiv = document.createElement('div');
  const user = document.createElement('label');
  user.innerText = 'Nombre';

  const userInput = document.createElement('input');
  userInput.setAttribute('name', 'usuario');
  userInput.setAttribute('required', '');
  userInput.ariaRequired = 'rellena este campo';
  userInput.placeholder = 'Ingresa tu nombre';
  userInput.id = 'userInput';
  userInput.setAttribute('class', 'inputForm');
  const errorUser = document.createElement('h6');
  errorUser.innerText = 'El nombre debe tener entre 3 y 16 caracteres, puede contener números, _ y - .';
  errorUser.setAttribute('class', 'error');
  errorUser.setAttribute('id', 'message-error-user-1');

  const correoDiv = document.createElement('div');
  const correo = document.createElement('label');
  correo.innerText = 'Correo';

  const correoInput = document.createElement('input');
  correoInput.setAttribute('class', 'inputForm');
  correoInput.setAttribute('name', 'correo1');
  correoInput.setAttribute('required', '');
  correoInput.placeholder = 'Ingresa tu correo';
  correoInput.id = 'correoInput';
  correoInput.setAttribute('type', 'email');
  const errorCorreo = document.createElement('h6');
  errorCorreo.innerText = 'Ejemplo: example@correo.com';
  errorCorreo.setAttribute('class', 'error');
  errorCorreo.setAttribute('id', 'message-error-mail-1');

  const correoInput2 = document.createElement('input');
  correoInput2.setAttribute('class', 'inputForm');
  correoInput2.setAttribute('name', 'correo2');
  correoInput2.setAttribute('required', '');
  correoInput2.placeholder = 'Válida tu correo';
  correoInput2.id = 'correoInput2';
  correoInput2.setAttribute('type', 'email');
  const errorCorreo2 = document.createElement('h6');
  errorCorreo2.innerText = 'Ambos correos deben ser iguales';
  errorCorreo2.setAttribute('class', 'error');
  errorCorreo2.setAttribute('id', 'message-error-mail-2');

  const contraseñaDiv = document.createElement('div');
  const contraseña = document.createElement('label');
  contraseña.innerText = 'Contraseña';

  const contraseñaInput = document.createElement('input');
  contraseñaInput.setAttribute('class', 'inputForm');
  contraseñaInput.setAttribute('required', '');
  contraseñaInput.placeholder = 'Ingresa tu contraseña';
  contraseñaInput.id = 'contraseñaInput';
  contraseñaInput.setAttribute('type', 'password');
  contraseñaInput.setAttribute('name', 'contraseña1');
  const errorContraseña = document.createElement('h6');
  errorContraseña.innerText = 'La contraseña debe tener entre 6 y 16 caracteres, puede contener números, _ y - .';
  errorContraseña.setAttribute('class', 'error');
  errorContraseña.setAttribute('id', 'message-error-contraseña-1');

  const contraseñaInput2 = document.createElement('input');
  contraseñaInput2.setAttribute('required', '');
  contraseñaInput2.setAttribute('class', 'inputForm');
  contraseñaInput2.setAttribute('name', 'contraseña2');
  contraseñaInput2.placeholder = 'Válida tu contraseña';
  contraseñaInput2.id = 'contraseñaInput2';
  contraseñaInput2.setAttribute('type', 'password');
  const errorContraseña2 = document.createElement('h6');
  errorContraseña2.innerText = 'Ambas contraseñas deben ser iguales';
  errorContraseña2.setAttribute('class', 'error');
  errorContraseña2.setAttribute('id', 'message-error-contraseña-2');

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

  const inputs = Home.querySelectorAll('input');
  inputs.forEach((input, index) => {
    const messageError = Home.querySelectorAll('h6')[index].id;
    input.addEventListener('keyup', () => {
      validar(input.name, input.value, messageError);
    });
    input.addEventListener('blur', () => {
      validar(input.name, input.value, messageError);
    });
  });

  Home.addEventListener('submit', (e) => {
    e.preventDefault();
    registerClick(correoInput, contraseñaInput);
    datosUsuario(userInput, correoInput, contraseñaInput);
    onNavigate('/profile');
    // inputForm();
  });

  buttonGoogle.addEventListener('click', () => {
    onNavigate('/profile');
    googleClick();
  });
  // console.log(inputs);
  // console.log(inputForm);

  return registro;
};
