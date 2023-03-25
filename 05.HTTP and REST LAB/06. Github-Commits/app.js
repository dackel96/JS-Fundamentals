function loadCommits() {
  const BASE_URL = 'https://api.github.com/repos/';

  const userInput = document.getElementById('username');

  const repoInput = document.getElementById('repo');

  const body = document.getElementById('bdy');

  let listResult = document.getElementById('commits');

  const username = userInput.value;

  const repo = repoInput.value;

  const fullLink = `${BASE_URL}${username}/${repo}/commits`;

  repoInput.addEventListener('focus', clearList);
  userInput.addEventListener('focus', clearList);

  fetch(fullLink, { method: 'GET' })
    .then((x) => x.json())
    .then((data) => {
      data.forEach(({ commit }) => {
        if (listResult === null) {
          listResult = document.createElement('ul');
          body.appendChild(listResult);
        }
        const newLi = document.createElement('li');

        newLi.textContent = `${commit.author.name}: ${commit.message}`;

        listResult.appendChild(newLi);

        repoInput.value = '';
      });
    })
    .catch((err) => {
      console.log(err);
    });

  function clearList() {
    listResult.remove();
  }
}

function loadRepos() {
  const BASE_URL = 'https://api.github.com/users/';

  const input = document.getElementById('username');

  const username = input.value;

  const fullUrl = `${BASE_URL}${username}/repos`;

  const body = document.getElementById('bdy');

  let listResult = document.getElementById('repos');

  input.addEventListener('focus', inputClear);

  fetch(fullUrl, { method: 'GET' })
    .then((result) => result.json())
    .then((data) => {
      data.forEach((element) => {
        if (listResult === null) {
          listResult = document.createElement('ul');
          body.appendChild(listResult);
        }
        let newLi = document.createElement('li');

        let newA = document.createElement('a');

        newA.textContent = element.full_name;

        const link = element.html_url.toString();

        newA.setAttribute('href', link);

        newLi.appendChild(newA);

        listResult.appendChild(newLi);
      });
    });

  function inputClear() {
    listResult.remove();
  }
}
