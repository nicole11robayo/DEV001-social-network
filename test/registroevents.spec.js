/* eslint-disable indent */
// importamos la funcion que vamos a testear
import { registerClick, googleClick } from '../src/componentes/Registro/registroevents';

describe('registerClick', () => {
  it('debería ser una función', () => {
    expect(typeof registerClick).toBe('function');
  });
  it('debería retornar un email', () => {
  return registerClick('dino@gmail.com', 'dino234').then((user) => {
    expect(user.email).toBe('dino@gmail.com');
  });
});
});

describe('googleClick', () => {
  it('debería ser una función', () => {
    expect(typeof googleClick).toBe('function');
  });
});