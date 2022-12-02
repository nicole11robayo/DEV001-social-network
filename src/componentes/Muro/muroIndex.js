import { newPostCollection } from '../../firebase';

export const Wall = () => {
  const wallDiv = document.createElement('div');

  const post = document.createElement('input');

  const buttonSubmitPost = document.createElement('button');
  buttonSubmitPost.innerText = 'subir';

  wallDiv.appendChild(post);
  wallDiv.appendChild(buttonSubmitPost);

  buttonSubmitPost.addEventListener('click', (e) => {
    e.preventDefault();

    newPostCollection(post.value);
  });

  return wallDiv;
};
