function attachEvents() {
  const BASE_URL = 'http://localhost:3030/jsonstore/phonebook';

  let id;

  const createBtn = document.getElementById('btnCreate');

  const loadBtn = document.getElementById('btnLoad');

  const personInputElement = document.getElementById('person');

  const phoneInputElement = document.getElementById('phone');

  const resultContainer = document.getElementById('phonebook');

  createBtn.addEventListener('click', createNewData);

  loadBtn.addEventListener('click', loadFromServer);

  function createNewData() {
    let httpHeader = {
      method: 'POST',
      body: JSON.stringify({
        person: personInputElement.value,
        phone: phoneInputElement.value,
      }),
    };

    fetch(BASE_URL, httpHeader).then((x) => x.json());

    loadFromServer();

    personInputElement.value = '';
    phoneInputElement.value = '';
  }

  function loadFromServer() {
    fetch(BASE_URL)
      .then((x) => x.json())
      .then((data) => {
        resultContainer.innerHTML = '';
        for (const key in data) {
          const newLi = document.createElement('li');
          const deleteBtn = document.createElement('button');
          deleteBtn.textContent = 'Delete';

          deleteBtn.id = data[key]._id;

          newLi.textContent = `${data[key].person}: ${data[key].phone}`;

          newLi.appendChild(deleteBtn);
          resultContainer.appendChild(newLi);

          deleteBtn.addEventListener('click', deleteEntity);
        }
      });

    function deleteEntity() {
      const entityId = this.id;

      fetch(`${BASE_URL}/${entityId}`, { method: 'DELETE' })
        .then((x) => x.json())
        .then((data) => {
          loadFromServer();
        });
    }
  }
}
attachEvents();
