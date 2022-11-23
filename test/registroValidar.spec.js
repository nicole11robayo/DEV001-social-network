import {
  validarCampo, validarIguales, validarprimeros, validar,
} from '../src/componentes/Registro/registroValidar';

describe('validarCampo', () => {
  it('debería ser una función', () => {
    expect(typeof validarCampo).toBe('function');
  });
});

describe('validarIguales', () => {
  it('debería ser una función', () => {
    expect(typeof validarIguales).toBe('function');
  });
});

describe('validarprimeros', () => {
  it('debería ser una función', () => {
    expect(typeof validarprimeros).toBe('function');
  });
});

describe('validar', () => {
  it('debería ser una función', () => {
    expect(typeof validar).toBe('function');
  });
});
