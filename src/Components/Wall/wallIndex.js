import {
  newPostCollection, user, onGetPosts, onGetUsers, getUserLog, logOut,
} from '../../firebase';

export const Wall = (onNavigate) => {
  const wallDiv = document.createElement('div');
  wallDiv.className = 'wallDiv';

  const logo = document.createElement('header');
  logo.setAttribute('id', 'logo');
  logo.innerText = '<LM>';

  const closeSesion = document.createElement('p');
  closeSesion.className = 'closeSesion';
  closeSesion.innerText = 'Cerrar Sesión';

  const userPlace = document.createElement('div');
  userPlace.className = 'userPlace';
  const imageGreaterThan = document.createElement('img');
  imageGreaterThan.src = '../Image/mayorque.png';
  imageGreaterThan.className = 'imagenMayor';

  const nameUser = document.createElement('h3');

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

  const showPosts = document.createElement('div');
  showPosts.className = 'showPosts';

  logo.appendChild(closeSesion);

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
  wallDiv.appendChild(showPosts);

  user();
  const usersUid = localStorage.getItem('uidUsuario');
  console.log(usersUid);
  console.log(localStorage);
  onGetUsers((users) => {
    users.forEach((userss) => {
      if (userss.data().id === usersUid) {
        getUserLog(usersUid).then((user1) => {
          localStorage.setItem('userName', user1.data().user);
          nameUser.innerText = user1.data().user;
          console.log(user1.data());
          return user1.data();
        });
      }
    });
  });

  buttonSubmitPost.addEventListener('click', async (e) => {
    e.preventDefault();
    if (post.value !== '') {
      newPostCollection(post.value, localStorage.getItem('userName'));
    }
  });

  onGetPosts((querySnapshot) => {
    console.log(querySnapshot);
    post.value = '';
    showPosts.innerHTML = '';
    querySnapshot.forEach((doc) => {
      const posts = doc.data();
      const userName = doc.data().name;
      console.log(doc.data().post);
      console.log(doc.data().name);
      const savePosts = document.createElement('div');
      savePosts.className = 'savePosts';
      const containerImageAndUserPosts = document.createElement('div');
      containerImageAndUserPosts.className = 'containerImageAndUserPosts';
      const containerUserPosts = document.createElement('div');
      containerUserPosts.className = 'containerUserPosts';
      const nameUserPosts = document.createElement('h3');
      nameUserPosts.innerText = userName;
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
      showPosts.appendChild(savePosts);
    });
  });

 closeSesion.addEventListener('click', () => {
    logOut();
    localStorage.clear();
    onNavigate('/');
  });

  return wallDiv;
};
