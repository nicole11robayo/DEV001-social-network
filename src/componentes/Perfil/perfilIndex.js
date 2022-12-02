import { logOut } from '../../firebase';

const correo = document.getElementById('title');
console.log(correo);

export const perfil = (onNavigate) => {
  const registroPerfil = document.createElement('div');
  registroPerfil.className = 'registroPerfil';

  const logo = document.createElement('header');
  logo.setAttribute('id', 'logo');
  logo.innerText = '<LM>';

  const containerImage = document.createElement('div');
  containerImage.className = 'containerImage';

  const imageOne = document.createElement('img');
  imageOne.src = '../Image/mayorque.png';

  const inputImage = document.createElement('input');
  inputImage.className = 'inputImage';
  inputImage.setAttribute('type', 'file');

  const imageTwo = document.createElement('img');
  imageTwo.src = '../Image/menorque.png';

  const divInicio = document.createElement('div');

  const saludo = document.createElement('p');
  saludo.innerText = 'Hola,';
  const nombreUsuario = document.createElement('p');
  nombreUsuario.innerText = '<Usuario> <Usuario>';
  const correoUsuario = document.createElement('p');
  correoUsuario.innerText = correo;
  const continuar = document.createElement('p');
  continuar.innerText = 'Continua con tu registro:';

  const registerFinish = document.createElement('form');
  registerFinish.className = 'registroFinal';
  const userNameDiv = document.createElement('div');
  const userName = document.createElement('label');
  userName.innerText = 'UserName';
  const userNameInput = document.createElement('input');
  userNameInput.placeholder = 'Inserta tu UserName';

  const userDescriptionDiv = document.createElement('div');
  const userDescription = document.createElement('label');
  userDescription.innerText = 'Acerca de ti';
  const userDescriptionInput = document.createElement('textarea');
  userDescriptionInput.placeholder = 'Me gusta el rock y...';

  const buttonMuro = document.createElement('button');
  buttonMuro.innerText = 'Finalizar Registro';

  containerImage.appendChild(imageOne);
  containerImage.appendChild(inputImage);
  containerImage.appendChild(imageTwo);

  divInicio.appendChild(saludo);
  divInicio.appendChild(nombreUsuario);
  divInicio.appendChild(correoUsuario);
  divInicio.appendChild(continuar);

  userNameDiv.appendChild(userName);
  userNameDiv.appendChild(userNameInput);

  userDescriptionDiv.appendChild(userDescription);
  userDescriptionDiv.appendChild(userDescriptionInput);

  registerFinish.appendChild(userNameDiv);
  registerFinish.appendChild(userDescriptionDiv);
  registerFinish.appendChild(buttonMuro);

  registroPerfil.appendChild(logo);
  registroPerfil.appendChild(containerImage);
  registroPerfil.appendChild(divInicio);
  registroPerfil.appendChild(registerFinish);

  buttonMuro.addEventListener('click', () => {
    logOut();
    onNavigate('/');
  });
  return registroPerfil;
};
