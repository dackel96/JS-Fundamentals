function solve() {
  //взимат се необходимите тектови полета едно за прочитане на входните данни и едно за изписване на обработените данни.
  const [generatorTextArea, outputTextArea] = Array.from(
    document.getElementsByTagName('textarea')
  );
  //взимат се бутоните придружаващи текстовите полета.
  const [generateButton, buyButton] = Array.from(
    document.getElementsByTagName('button')
  );
  //взима се тялото на таблицата в която ще попълваме входните данни.
  const tableBody = document.querySelector('.table > tbody');

  //Прочитане и обработка на входни данни.

  generateButton.addEventListener('click', generate);

  buyButton.addEventListener('click', output);

  function output() {
    const selectedFields = Array.from(
      document.querySelectorAll('tbody tr input:checked')
    );

    let furnitures = [];
    let totalPrice = 0;
    let factorResult = 0;

    for (const selected of selectedFields) {
      const currentSelection = selected.parentElement.parentElement;

      const [_img, name, price, factor, _mark] = Array.from(
        currentSelection.children
      );

      let furniture = name.children[0].textContent;
      furnitures.push(furniture);

      let currPrice = Number(price.children[0].textContent);
      totalPrice += currPrice;

      let currFactor = Number(factor.children[0].textContent);
      factorResult += currFactor;
    }

    outputTextArea.value = `Bought furniture: ${furnitures.join(
      ', '
    )}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${
      factorResult / selectedFields.length
    }`;
  }

  function generate() {
    const data = JSON.parse(generatorTextArea.value);

    for (const { img, name, price, decFactor } of data) {
      const tableRow = createElement('tr', '', tableBody);

      createElement('img', '', createElement('td', '', tableRow), '', '', {
        src: img,
      });

      createElement('p', name, createElement('td', '', tableRow));

      createElement('p', price, createElement('td', '', tableRow));

      createElement('p', decFactor, createElement('td', '', tableRow));

      createElement('input', '', createElement('td', '', tableRow), '', '', {
        type: 'checkbox',
      });
    }

    function createTd(parent) {
      const column = createElement('td', '', parent);
    }
  }

  function createElement(type, content, parentNode, id, classes, attributes) {
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

    return newElement;
  }
}
