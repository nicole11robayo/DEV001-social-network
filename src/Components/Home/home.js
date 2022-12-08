export const Home = (onNavigate) => {
  const homeDiv = document.createElement('div');
  homeDiv.className = 'homeDiv';

  const title = document.createElement('h1');
  title.innerText = '<Laboratorians Music>';
  title.id = 'title';

  const messageP = document.createElement('p');
  messageP.innerText = 'Inicia sesión o regístrate para que compartas musica con la comunidad de Laboratoria';
  messageP.className = 'messageP';

  const buttonLogin = document.createElement('button');
  buttonLogin.className = 'buttonLogin';
  buttonLogin.innerText = 'Inicia sesión';

  const buttonRegister = document.createElement('button');
  buttonRegister.className = 'buttonRegister';
  buttonRegister.innerText = 'Regístrate';

  homeDiv.appendChild(title);
  homeDiv.appendChild(messageP);
  homeDiv.appendChild(buttonLogin);
  homeDiv.appendChild(buttonRegister);

  buttonLogin.addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/login');
  });

  buttonRegister.addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/register');
  });

  return homeDiv;
};
