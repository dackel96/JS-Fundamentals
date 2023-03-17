function deleteByEmail() {
  const result = document.getElementById('result');

  const inputElement = document.querySelector('label input');

  const inputContent = inputElement.value;

  const listOfMails = document.querySelectorAll(
    '#customers > tbody > tr > td:nth-child(even)'
  );

  const arrayParse = Array.from(listOfMails);

  let isFoundMatch = arrayParse.find((x) => x.textContent === inputContent);

  console.log(isFoundMatch);

  if (isFoundMatch) {
    isFoundMatch.parentElement.remove();

    result.textContent = 'Deleted.';
  } else {
    result.textContent = 'Not found.';
  }
}
