function attachEvents() {
  const BASE_URL = 'http://localhost:3030/jsonstore/blog/';

  const postEndpoint = 'posts';

  const commentsEndpoint = 'comments';

  const loadBtnElement = document.getElementById('btnLoadPosts');

  const viewBtnElement = document.getElementById('btnViewPost');

  const dropdownElement = document.getElementById('posts');

  const titleElement = document.getElementById('post-title');

  const bodyElement = document.getElementById('post-body');

  const commentsList = document.getElementById('post-comments');

  loadBtnElement.addEventListener('click', loadPostsFromServer);

  viewBtnElement.addEventListener('click', loadSelectedPost);

  let posts = {};

  function loadPostsFromServer(e) {
    fetch(`${BASE_URL}${postEndpoint}`)
      .then((x) => x.json())
      .then((data) => {
        posts = data;
        for (const key in data) {
          const newOptionElement = document.createElement('option');

          newOptionElement.value = key;

          newOptionElement.textContent = data[key].title;

          dropdownElement.appendChild(newOptionElement);
        }
      })
      .catch((error) => console.log(error));
  }

  function loadSelectedPost(e) {
    fetch(`${BASE_URL}${commentsEndpoint}`)
      .then((x) => x.json())
      .then((data) => {
        for (const key in data) {
          titleElement.textContent = posts[dropdownElement.value].title;

          bodyElement.textContent = posts[dropdownElement.value].body;

          if (data[key].postId === dropdownElement.value) {
            const newLi = document.createElement('li');

            newLi.textContent = data[key].text;

            commentsList.appendChild(newLi);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

attachEvents();
