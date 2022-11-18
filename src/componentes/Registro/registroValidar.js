
const expresiones = {
  usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  password: /^[a-zA-Z0-9\_\-]{6,16}$/,
};

const validarCampo = (expresion, input, campo) => {
  if (expresion.test(input)) {
    document.getElementById(`${campo}`).classList.add('check');
    document.getElementById(`${campo}`).classList.remove('wrong');
    document.querySelector('.error').classList.remove('activo');
  } else {
    document.getElementById(`${campo}`).classList.remove('check');
    document.getElementById(`${campo}`).classList.add('wrong');
    document.querySelector('.error').classList.add('activo');
  }
};
/*
const validarIguales = (input, input2) => {
  const inputVer1 = document.getElementById(`${input}`);
  const inputVer2 = document.getElementById(`${input2}`);
  if (inputVer1.value === inputVer2.value) {
    document.getElementById(`${input2}`).classList.add('check');
    document.getElementById(`${input2}`).classList.remove('wrong');
    document.querySelector('.error').classList.remove('activo');
  } else {
    document.getElementById(`${input2}`).classList.remove('check');
    document.getElementById(`${input2}`).classList.add('wrong');
    document.querySelector('.error').classList.add('activo');
  }
};
*/
export const validar = (nombre, valor) => {
  switch (nombre) {
    case 'usuario':
      validarCampo(expresiones.usuario, valor, 'userInput');
      break;
    case 'correo1':
      validarCampo(expresiones.correo, valor, 'correoInput');
      break;
    case 'correo2':
      
      break;
    case 'contraseña1':
      validarCampo(expresiones.password, valor, 'contraseñaInput');
      //validarIguales('contraseñaInput', 'contraseñaInput2');
      break;
    case 'contraseña2':
      //validarIguales('contraseñaInput', 'contraseñaInput2');
      break;
  }
};
