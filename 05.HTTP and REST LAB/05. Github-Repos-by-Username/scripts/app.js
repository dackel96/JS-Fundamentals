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

        input.value = '';
      });
    });

  function inputClear() {
    listResult.remove();
  }
}
