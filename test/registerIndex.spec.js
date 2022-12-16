import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Register } from '../src/Components/Register/registerIndex';
import { validate } from '../src/Components/Register/registerValidate';
// import { onNavigate } from '../__mocks__/main.js';

window.alert = jest.fn();
jest.mock('firebase/auth');

describe('test de registro', () => {
  const element = Register();
  const password1 = element.querySelector('#passwordInput');
  const form = element.querySelector('#home');

  it('debería ser una función', () => {
    expect(typeof Register).toBe('function');
  });
  it('Existe el boton de iniciar sesion', () => {
    const buttonRegister = element.querySelector('#registerButton');
    expect(buttonRegister).not.toBeNull();
  });
  it('Existe el boton de iniciar sesion con Google', () => {
    const buttonGoogle = element.querySelector('#buttonGoogle');
    expect(buttonGoogle).not.toBeNull();
  });
  it('Existe el boton de Ojo para ver el password', () => {
    const imageEyeClose = element.querySelector('#imageEye');
    expect(imageEyeClose).not.toBeNull();
    expect(password1.type).toBe('password');
    imageEyeClose.click();
    expect(password1.type).toBe('text');
  });

  it('Si validate es una function', () => {
    password1.addEventListener('keyUp', () => {
      expect(typeof validate).toBe('function');
      expect(validate).toHaveBeenCalledWith('name', 'example@gmail.com', 'messageError');
    });
    password1.addEventListener('blur', () => {
      expect(typeof validate).toBe('function');
      expect(validate).toHaveBeenCalledWith('name', 'example@gmail.com', 'messageError');
    });
  });

  it('Si el usario se registra correctamente', () => {
    password1.value = '12345678';
    form.submit();
    expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(undefined, 'example@correo.com', '12345678');
  });
});
