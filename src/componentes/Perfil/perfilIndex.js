// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../../main';
import { logOut } from '../Registro/registroevents';

export const perfil = () => {
  const registroPerfil = document.createElement('div');
  registroPerfil.className = 'registroPerfil';

  const logo = document.createElement('header');
  logo.setAttribute('id', 'logo');
  logo.innerText = '<LM>';

  const divInicio = document.createElement('div');

  const saludo = document.createElement('p');
  saludo.innerText = 'Hola,';
  const nombreUsuario = document.createElement('p');
  nombreUsuario.innerText = '<Usuario> <Usuario>';
  const correoUsuario = document.createElement('p');
  correoUsuario.innerText = 'example@example.com';
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
  registroPerfil.appendChild(divInicio);
  registroPerfil.appendChild(registerFinish);

  buttonMuro.addEventListener('click', () => {
    logOut();
    onNavigate('/');
  });
  return registroPerfil;
};
