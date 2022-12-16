/* eslint-disable indent */
// importamos la funcion que vamos a testear
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { Login } from '../src/Components/Login/loginIndex.js';
import { onNavigate } from '../__mocks__/main.js';

jest.mock('firebase/auth');
jest.mock('../__mocks__/main.js');

describe('test de login', () => {
   const element = Login();
   const password1 = element.querySelector('#passwordInput');
   const email = element.querySelector('#emailInput');
   const form = element.querySelector('#home');

  it('debería ser una función', () => {
    expect(typeof Login).toBe('function');
  });
  it('Existe el boton de iniciar sesion', () => {
    const buttonRegister = element.querySelector('#registerButton');
    expect(buttonRegister).not.toBeNull();
  });
  it('Existe el boton de iniciar sesion con Google', () => {
    const buttonGoogle = element.querySelector('#buttonGoogle');
    expect(buttonGoogle).not.toBeNull();
     buttonGoogle.click();
     expect(GoogleAuthProvider).toHaveBeenCalledWith();
     expect(signInWithPopup).toHaveBeenCalledWith(undefined, {});
    expect(typeof onNavigate()).toBe('undefined');
  });
  it('Existe el boton de Ojo para ver el password', () => {
    const imageEyeClose = element.querySelector('#imageEye');
    expect(imageEyeClose).not.toBeNull();
    expect(password1.type).toBe('password');
    imageEyeClose.click();
    expect(password1.type).toEqual('text');
  });
  it('Si el form es correcto', () => {
    email.value = 'example@correo.com';
    password1.value = '12345678';
    form.submit();
    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(undefined, 'example@correo.com', '12345678');
    });
  });
