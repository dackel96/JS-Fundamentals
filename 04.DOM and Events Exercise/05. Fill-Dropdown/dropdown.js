function addItem() {
  const menu = document.querySelector('#menu');

  const textEl = document.querySelector('#newItemText');

  const valueEl = document.querySelector('#newItemValue');

  const newOption = document.createElement('option');

  newOption.textContent = textEl.value;

  newOption.value = valueEl.value;

  menu.appendChild(newOption);

  textEl.value = '';

  valueEl.value = '';
}
