export const perfil = () => {
  const perfil = document.createElement('div');

  const logo = document.createElement('header');
  logo.setAttribute('id', 'logo');
  logo.innerText = '<LM>';

  const registerFinish = document.createElement('form');
  
  const userNameDiv = document.createElement('div');
  const userName = document.createElement('label');
  userName.innerText = 'UserName';
  const userNameInput = document.createElement('input');
  userNameInput.placeholder = 'Inserta tu UserName';
  
  const userDescriptionDiv = document.createElement('div');
  const userDescription = document.createElement('label');
  userDescription.innerText = 'Acerca de ti';
  const userDescriptionInput = document.createElement('input');
  userDescriptionInput.placeholder = 'Me gusta el rock y...';

  userNameDiv.appendChild(userName);
  userNameDiv.appendChild(userNameInput);

  userDescriptionDiv.appendChild(userDescription);
  userDescriptionDiv.appendChild(userDescriptionInput);

  registerFinish.appendChild(userNameDiv);
  registerFinish.appendChild(userDescriptionDiv);
  
  perfil.appendChild(logo);
  perfil.appendChild(registerFinish);


  return perfil;
};