function addItem() {
  const inputElement = document.querySelector('#newItemText');

  const ulElement = document.querySelector('#items');

  const createNewLi = document.createElement('li');

  const newAnchor = document.createElement('a');

  newAnchor.setAttribute('href', '#');

  createNewLi.textContent = inputElement.value;

  newAnchor.textContent = '[Delete]';

  newAnchor.addEventListener('click', deleteFunction);

  createNewLi.appendChild(newAnchor);

  ulElement.appendChild(createNewLi);

  inputElement.value = '';

  function deleteFunction(e) {
    const anchor = e.currentTarget.parentElement;

    anchor.remove();
  }
}
