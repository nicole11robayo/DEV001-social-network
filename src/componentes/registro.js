export const Register = () => {
  const Home = document.createElement('section');

  const title = document.createElement('h1');
  title.innerText = 'Laboratorians Music';

  const welcome = document.createElement('p');
  welcome.innerText = 'Inicia sesión para compartir música con la comunidad de Laboratoria.';

  const userDiv = document.createElement('div');
  const user = document.createElement('p');
  user.innerText = 'Usuario';
  const userInput = document.createElement('input');
  userInput.placeholder = 'User';
  const correoDiv = document.createElement('div');
  const correo = document.createElement('p');
  correo.innerText = 'Correo';
  const correoInput = document.createElement('input');
  correoInput.placeholder = 'Correo';
  const correoInput2 = document.createElement('input');
  correoInput2.placeholder = 'Verifica tu correo';

  const contraseñaDiv = document.createElement('div');
  const contraseña = document.createElement('p');
  contraseña.innerText = 'Contraseña';
  const contraseñaInput = document.createElement('input');
  contraseñaInput.placeholder = 'Contraseña';
  const contraseñaInput2 = document.createElement('input');
  contraseñaInput2.placeholder = 'Verifica tu contraseña';

  const buttonRegister = document.createElement('button');
  buttonRegister.innerText = 'Registrarse';

  const buttonGoogle = document.createElement('button');
  buttonGoogle.innerText = 'Ingresa con Google';

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
