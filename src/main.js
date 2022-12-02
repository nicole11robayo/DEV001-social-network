// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();

import { perfil } from './componentes/Perfil/perfilIndex.js';
import { Register } from './componentes/Registro/registroindex.js';
import { Login } from './componentes/login/loginIndex.js';
import { Wall } from './componentes/Muro/muroIndex.js';

const rootDiv = document.getElementById('root');

let routes = {};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[pathname]);
};

routes = {
  '/': Register(onNavigate),
  '/profile': perfil(onNavigate),
  '/login': Login(onNavigate),
  '/muro': Wall(),
};

const componente = () => routes[window.location.pathname];
rootDiv.appendChild(componente());

window.onpopstate = () => {
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[window.location.pathname]());
};
