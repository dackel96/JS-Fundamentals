function solve() {
  function createElement(type, content, id, parentNode, classes, attributes) {
    const newElement = document.createElement(type);

    if (content && type !== 'input') {
      newElement.textContent = content;
    }

    if (content && type === 'input') {
      newElement.value = content;
    }

    if (id) {
      newElement.id = id;
    }

    if (parentNode) {
      parentNode.appendChild(newElement);
    }

    if (classes) {
      newElement.classList.add(...classes);
    }

    if (attributes) {
      for (const key in attributes) {
        newElement.setAttribute(key, attributes[key]);
      }
    }
  }
}
