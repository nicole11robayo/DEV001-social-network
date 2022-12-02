import { newPostCollection } from '../../firebase';

export const Wall = () => {
  const wallDiv = document.createElement('div');

  const logo = document.createElement('header');
  logo.setAttribute('id', 'logo');
  logo.innerText = '<LM>';

  const userPlace = document.createElement('div');
  const imageGreaterThan = document.createElement('img');
  imageGreaterThan.src = '../Image/mayorque.png';
  imageGreaterThan.className = 'imagenMayor';

  const nameUser = document.createElement('h3');
  nameUser.innerText = 'Usuario';

  const imageLessThan = document.createElement('img');
  imageLessThan.src = '../Image/menorque.png';
  imageLessThan.className = 'imagenMayor';

  const textStart = document.createElement('p');
  textStart.innerText = 'Comparte tu canción o gustos musicales favoritos acá abajo y recibe muchos likes:';

  const imageGif = document.createElement('img');
  imageGif.src = '../Image/celebrar.gif';

  const formWall = document.createElement('form');

  const creaPost = document.createElement('p');
  creaPost.innerText = 'Crea una publicación';

  const post = document.createElement('input');
  post.placeholder = 'Hola, la canción que escuché ayer...';

  const buttonSubmitPost = document.createElement('button');
  buttonSubmitPost.innerText = 'Subir';

  userPlace.appendChild(imageGreaterThan);
  userPlace.appendChild(nameUser);
  userPlace.appendChild(imageLessThan);

  formWall.appendChild(creaPost);
  formWall.appendChild(post);
  formWall.appendChild(buttonSubmitPost);

  wallDiv.appendChild(logo);
  wallDiv.appendChild(userPlace);
  wallDiv.appendChild(textStart);
  wallDiv.appendChild(imageGif);
  wallDiv.appendChild(formWall);

  buttonSubmitPost.addEventListener('click', (e) => {
    e.preventDefault();

    newPostCollection(post.value);
  });

  return wallDiv;
};
