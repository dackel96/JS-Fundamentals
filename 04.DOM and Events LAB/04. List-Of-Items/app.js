function addItem() {
  const input = document.getElementById('newItemText');

  const element = document.getElementById('items');

  const newElement = document.createElement('li');

  newElement.textContent = input.value;

  element.appendChild(newElement);

  input.value = '';
}
