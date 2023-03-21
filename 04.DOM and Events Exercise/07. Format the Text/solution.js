function solve() {
  const notFormatText = document.querySelector('#input');

  const result = document.querySelector('#output');

  let sentences = notFormatText.value.split('.').filter((x) => x !== '');

  let output = [];

  for (const sentence of sentences) {
    output.push(sentence);
  }

  if (output.length <= 3) {
    const newParagraph = document.createElement('p');

    newParagraph.textContent = notFormatText.value;

    result.appendChild(newParagraph);
  } else {
    while (output.length > 0) {
      let paragraphSentence = output.splice(0, 3);

      const newParagraph = document.createElement('p');

      newParagraph.textContent = paragraphSentence.join('. ') + '.';
      result.appendChild(newParagraph);
    }
  }
}
