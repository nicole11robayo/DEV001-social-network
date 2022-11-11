// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();

import { Register } from './componentes/registro.js';

const rootDiv = document.getElementById('root');

const routes = {
  '/': Register,
};

const componente = routes[window.location.pathname];
rootDiv.appendChild(componente());