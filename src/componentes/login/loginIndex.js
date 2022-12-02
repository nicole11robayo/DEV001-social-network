import { loginEmailAndPassword } from '../../firebase';

export const Login = (onNavigate) => {
  const login = document.createElement('section');
  login.setAttribute('id', 'login');

  const Home = document.createElement('form');
  Home.setAttribute('id', 'home');

  const title = document.createElement('h1');
  title.innerText = '<Laboratorians Music>';
  title.id = 'title';

  const welcome = document.createElement('p');
  welcome.innerText = 'Inicia sesión para compartir música con la comunidad de Laboratoria.';

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

  const buttonRegister = document.createElement('button');
  buttonRegister.innerText = 'Iniciar sesión';
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

  correoDiv.appendChild(correo);
  correoDiv.appendChild(correoInput);

  contraseñaDiv.appendChild(contraseña);
  contraseñaDiv.appendChild(contraseñaInput);

  Home.appendChild(correoDiv);
  Home.appendChild(contraseñaDiv);
  Home.appendChild(buttonRegister);
  Home.appendChild(buttonGoogle);
  // Home.appendChild(buttonGoogle);
  login.appendChild(title);
  login.appendChild(welcome);
  login.appendChild(Home);

  Home.addEventListener('submit', (e) => {
    e.preventDefault();

    // TODO: antes de llamar a registerClick, deben validar los inputs
    loginEmailAndPassword(correoInput.value, contraseñaInput.value)
      .then((userCrendentials) => {
        console.log(userCrendentials.user);
        onNavigate('/muro');
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Contraseña incorrecta, intentalo de nuevo');
        } else if (errorCode === 'auth/user-not-found') {
          alert('Por favor registrate');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
    // verificarEmail();
    // datosUsuario(userInput.value, correoInput.value, contraseñaInput.value);
    // inputForm();
  });

  buttonGoogle.addEventListener('click', () => {
    // onNavigate('/profile');
    // googleClick();
  });
  // console.log(inputs);
  // console.log(inputForm);
  return login;
};
