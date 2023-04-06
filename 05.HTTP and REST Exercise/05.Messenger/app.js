function attachEvents() {
  const BASE_URL = 'http://localhost:3030/jsonstore/messenger';
  const authorInputElement = Array.from(
    document.querySelectorAll('#controls > div > input')
  )[0];

  const contentInputElement = Array.from(
    document.querySelectorAll('#controls > div > input')
  )[1];

  const submitBtn = document.getElementById('submit');

  const refreshBtn = document.getElementById('refresh');

  const resultContainer = document.getElementById('messages');

  submitBtn.addEventListener('click', submitForm);

  refreshBtn.addEventListener('click', refreshMessageBox);

  function submitForm() {
    let authorName = authorInputElement.value;

    let contentText = contentInputElement.value;

    const httpHeader = {
      method: 'POST',
      body: JSON.stringify({ author: authorName, content: contentText }),
    };

    fetch(BASE_URL, httpHeader);

    authorInputElement.value = '';

    contentInputElement.value = '';
  }

  function refreshMessageBox() {
    resultContainer.textContent = '';

    let result = '';

    fetch(BASE_URL)
      .then((x) => x.json())
      .then((data) => {
        for (const key in data) {
          result += `${data[key].author}: ${data[key].content}\n`;
        }
        resultContainer.textContent = result.trimEnd();
      });
  }
}

attachEvents();
