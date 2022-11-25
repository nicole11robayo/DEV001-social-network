import { Register } from '../src/componentes/Registro/registroindex.js';

// describe('Componente de registro', () => {
//   it('should render correctly', () => {
//     const mainDiv = document.createElement('div');
//     mainDiv.textContent = 'hola';
//     mainDiv.id = 'root';
//     document.body.append(mainDiv);

//     expect(document.getElementById('root')).not.toBeNull();

//     // renderizar el componente
//     // asegurarse de que se vean los elementos del form correctamente
//     console.log(document.getElementById('root'));
//     console.log(document.getElementById('root2'));
//     console.log(document.body.innerHTML);
//   });
// });

describe('Input de usuario', () => {
  it('Input de nombre no se envíe vacío', () => {
    const Registro = Register;
    console.log(document.querySelector('userInput'));
  });
});
