import {
  newPostCollection, user, getPosts,
} from '../../firebase';

export const Wall = () => {
  const wallDiv = document.createElement('div');
  wallDiv.className = 'wallDiv';

  const logo = document.createElement('header');
  logo.setAttribute('id', 'logo');
  logo.innerText = '<LM>';

  const userPlace = document.createElement('div');
  userPlace.className = 'userPlace';
  const imageGreaterThan = document.createElement('img');
  imageGreaterThan.src = '../Image/mayorque.png';
  imageGreaterThan.className = 'imagenMayor';

  const nameUser = document.createElement('h3');
  nameUser.innerText = 'Usuario';

  const imageLessThan = document.createElement('img');
  imageLessThan.src = '../Image/menorque.png';
  imageLessThan.className = 'imagenMayor';

  const textStart = document.createElement('p');
  textStart.className = 'textStart';
  textStart.innerText = 'Comparte tu canción o gustos musicales favoritos acá abajo y recibe muchos likes:';

  const imageGif = document.createElement('img');
  imageGif.className = 'imageGif';
  imageGif.src = '../Image/celebrar.gif';

  const formWall = document.createElement('form');
  formWall.className = 'formWall';

  const createPost = document.createElement('p');
  createPost.innerText = 'Crea una publicación';

  const post = document.createElement('textarea');
  post.className = 'post';
  post.placeholder = 'Hola, la canción que escuché ayer...';

  const buttonSubmitPost = document.createElement('button');
  buttonSubmitPost.className = 'buttonSubmitPost';
  buttonSubmitPost.innerText = 'Subir';

  const allPublications = document.createElement('h1');
  allPublications.className = 'allPublications';
  allPublications.innerText = 'Todas las publicaciones';

  userPlace.appendChild(imageGreaterThan);
  userPlace.appendChild(nameUser);
  userPlace.appendChild(imageLessThan);

  formWall.appendChild(createPost);
  formWall.appendChild(post);
  formWall.appendChild(buttonSubmitPost);

  wallDiv.appendChild(logo);
  wallDiv.appendChild(userPlace);
  wallDiv.appendChild(textStart);
  wallDiv.appendChild(imageGif);
  wallDiv.appendChild(formWall);
  wallDiv.appendChild(allPublications);

  buttonSubmitPost.addEventListener('click', async (e) => {
    e.preventDefault();
    user();
    newPostCollection(post.value);
  });

  window.addEventListener('DOMContentLoaded', async () => {
    const querySnapshot = await getPosts();
    console.log(querySnapshot);
    querySnapshot.forEach((doc) => {
      const posts = doc.data();
      console.log(doc.data());

      const savePosts = document.createElement('div');
      savePosts.className = 'savePosts';
      const containerImageAndUserPosts = document.createElement('div');
      containerImageAndUserPosts.className = 'containerImageAndUserPosts';
      const containerUserPosts = document.createElement('div');
      containerUserPosts.className = 'containerUserPosts';
      const nameUserPosts = document.createElement('h3');
      nameUserPosts.innerText = 'Usuario';
      const containerImagePosts = document.createElement('div');
      containerImagePosts.className = 'containerImagePosts';
      const imageEditPosts = document.createElement('img');
      imageEditPosts.src = '../Image/editar.png';
      const imageDeletePosts = document.createElement('img');
      imageDeletePosts.src = '../Image/trash.png';
      const messagePosts = document.createElement('p');
      const imageLikePosts = document.createElement('img');
      imageLikePosts.className = 'imageLikePosts';
      imageLikePosts.src = '../Image/Ilike.png';
      messagePosts.innerText = posts.post;
      containerUserPosts.appendChild(nameUserPosts);
      containerImagePosts.appendChild(imageEditPosts);
      containerImagePosts.appendChild(imageDeletePosts);
      containerImageAndUserPosts.appendChild(containerUserPosts);
      containerImageAndUserPosts.appendChild(containerImagePosts);
      savePosts.appendChild(containerImageAndUserPosts);
      savePosts.appendChild(messagePosts);
      savePosts.appendChild(imageLikePosts);
      wallDiv.appendChild(savePosts);
    });
  });
  return wallDiv;
};
