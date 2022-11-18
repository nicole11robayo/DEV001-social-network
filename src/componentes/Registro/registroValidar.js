/* eslint-disable no-useless-escape */
const expresiones = {
  usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  password: /^[a-zA-Z0-9\_\-]{6,16}$/,
};

const validarCampo = (expresion, input, campo, messageId) => {
  if (expresion.test(input)) {
    document.getElementById(`${campo}`).classList.add('check');
    document.getElementById(`${campo}`).classList.remove('wrong');
    document.querySelector(`#${messageId}`).classList.remove('activo');
  } else {
    document.getElementById(`${campo}`).classList.remove('check');
    document.getElementById(`${campo}`).classList.add('wrong');
    document.querySelector(`#${messageId}`).classList.add('activo');
  }
};

const validarIguales = (input, input2, messageId) => {
  const inputVer1 = document.getElementById(`${input}`);
  const inputVer2 = document.getElementById(`${input2}`);
  if (inputVer1.value === inputVer2.value) {
    document.getElementById(`${input2}`).classList.add('check');
    document.getElementById(`${input2}`).classList.remove('wrong');
    document.querySelector(`#${messageId}`).classList.remove('activo');
  } else {
    document.getElementById(`${input2}`).classList.remove('check');
    document.getElementById(`${input2}`).classList.add('wrong');
    document.querySelector(`#${messageId}`).classList.add('activo');
  }
};
const validarprimeros = (input, input2) => {
  const inputVer1 = document.getElementById(`${input}`);
  const inputVer2 = document.getElementById(`${input2}`);
  if (inputVer1.value === inputVer2.value) {
    document.getElementById(`${input2}`).classList.add('check');
    document.getElementById(`${input2}`).classList.remove('wrong');
  } else {
    document.getElementById(`${input2}`).classList.remove('check');
    document.getElementById(`${input2}`).classList.add('wrong');
  }
};

export const validar = (nombre, valor, elementId) => {
  switch (nombre) {
    case 'usuario':
      validarCampo(expresiones.usuario, valor, 'userInput', elementId);
      break;
    case 'correo1':
      validarCampo(expresiones.correo, valor, 'correoInput', elementId);
      validarprimeros('correoInput', 'correoInput2');
      break;
    case 'correo2':
      validarIguales('correoInput', 'correoInput2', elementId);
      break;
    case 'contraseña1':
      validarCampo(expresiones.password, valor, 'contraseñaInput', elementId);
      validarprimeros('contraseñaInput', 'contraseñaInput2');
      break;
    case 'contraseña2':
      validarIguales('contraseñaInput', 'contraseñaInput2', elementId);
      break;
    default: {}
  }
};
