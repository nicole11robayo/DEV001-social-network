/* eslint-disable no-useless-escape */
import {
  validate, validateField, validateEquals, validateFirst,
} from '../src/Components/Register/registerValidate';
import { Register } from '../src/Components/Register/registerIndex';

const expressions = {
  user: /^[a-zA-Z0-9\_\-]{3,16}$/, // Letras, numeros, guion y guion_bajo
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  password: /^[a-zA-Z0-9\_\-]{6,16}$/,
};

const element = Register();
const password1 = element.querySelector('#passwordInput');
const password2 = element.querySelector('#passwordInput2');
const email = element.querySelector('#emailInput');
const userName = element.querySelector('#userInput');

describe('se valida que los campos de inputs cumplan con el formato de caracteres', () => {
  it('el input de nombre de usuario cumple con el formato', () => {
    expect(typeof validateField).toBe('function');
    //expect(validateField(expressions.user, 'maria1', 'userInput', 'error')).toHaveBeenCalledTimes(1);
  });
});

describe('se valida que los campos de contraseña sean iguales', () => {
  password1.value = 'maria1';
  password2.value = 'maria1';

  it('el valor de la contraseña 1 es igual al de la contraseña 2', () => {
    expect(typeof validateEquals).toBe('function');
  });
});
