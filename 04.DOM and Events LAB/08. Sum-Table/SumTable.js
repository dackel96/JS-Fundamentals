function sumTable() {
  const tableElements = document.querySelectorAll('table tbody tr td');

  const productsList = Array.from(tableElements);

  const sumColumn = document.querySelector('#sum');

  let sum = 0;

  for (let index = 1; index < productsList.length - 2; index += 2) {
    sum += Number(productsList[index].textContent);
  }

  sumColumn.textContent = sum.toFixed(2).toString();
}
