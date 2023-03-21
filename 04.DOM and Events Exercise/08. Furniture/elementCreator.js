//Фабрика за елементи чрез подаване на необходими параметри създава абстрактно [html element] проверките се изпълнява само с подаване на пропъртито понеже ако е празно ще подаде Falsy стойност.

function createElement(type, content, id, parentNode, classes, attributes) {
  //създаваме елемента с подадения [type]
  const newElement = document.createElement(type);
  //проверяваме дали [type] е [input] или е различен елемент понеже при инпут задването на информацията в него трябва да бъде през пропърти [value].
  if (content && type !== 'input') {
    newElement.textContent = content;
  }

  if (content && type === 'input') {
    newElement.value = content;
  }
  //при наличие на [id] го закачаме.
  if (id) {
    newElement.id = id;
  }
  //при наличие на [Parent Node] новия елемент се закача като [child] към него.
  if (parentNode) {
    parentNode.appendChild(newElement);
  }
  //при наличие на масив от класове (може да бъде и само един) се закачат към новия елемент.
  if (classes) {
    newElement.classList.add(...classes);
  }
  //при наличието на атрибути се закачат към новия елемент като те идват под формата на обект понеже знаем че атрибутите на [html element] са добре познатите ни ключ и стойност.
  if (attributes) {
    for (const key in attributes) {
      newElement.setAttribute(key, attributes[key]);
    }
  }
}
