// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();

import { perfil } from './componentes/Perfil/perfilIndex.js';
// eslint-disable-next-line import/no-cycle
import { Register } from './componentes/Registro/registroindex.js';

const rootDiv = document.getElementById('root');

const routes = {
  '/': Register,
  '/profile': perfil,
};

const componente = routes[window.location.pathname];
rootDiv.appendChild(componente());

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[pathname]());
};
