function create(words) {
  const content = document.querySelector('#content');

  for (const word of words) {
    const createDiv = document.createElement('div');

    const createParagraph = document.createElement('p');

    createParagraph.style.display = 'none';

    createDiv.addEventListener('click', () => {
      if (createParagraph.style.display === 'none') {
        createParagraph.style.display = 'block';
      } else {
        createParagraph.style.display = 'none';
      }
    });

    createParagraph.textContent = word;

    createDiv.appendChild(createParagraph);
    content.appendChild(createDiv);
  }
}
