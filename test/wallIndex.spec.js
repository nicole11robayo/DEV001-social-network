import { Wall } from '../src/Components/Wall/wallIndex.js';

describe('test de registro', () => {
  const element = Wall();
  // const password1 = element.querySelector('#passwordInput');
  // const form = element.querySelector('.formWall');
  // const email = element.querySelector('#emailInput');
  // const elementOnNavigate = Register(onNavigate);

  it('debería ser una función', () => {
    expect(typeof Wall).toBe('function');
  });
  it('Existe el logo de la red social', () => {
    const sesionClose = element.querySelector('.closeSesion').innerText;
    expect(sesionClose).toBe('Cerrar Sesión');
  });
  it('Existe el texto de bienvenida', () => {
    const startText = element.querySelector('.textStart').innerText;
    expect(startText).toBe('Comparte tu canción o gustos musicales favoritos acá abajo y recibe muchos likes:');
  });
  it('Existe el texto de bienvenida', () => {
    const gifImage = element.querySelector('.imageGif').src;
    expect(gifImage).toBe('../Image/celebrar.gif');
  });
  it('Existe el botón para subir posts', () => {
    const buttonPost = element.querySelector('.buttonSubmitPost');
    expect(buttonPost).not.toBeNull();
  });
  it('Existen las imágenes para editar y eliminar los posts', () => {
    const imageEdit = element.querySelector('.imageEditPosts');
    expect(imageEdit).toBeNull();
    const imageDelete = element.querySelector('.imageDeletePosts');
    expect(imageDelete).toBeNull();
  });
});
