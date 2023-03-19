function subtract() {
  const firstNum = Number(document.querySelector('#firstNumber').value);

  console.log(firstNum);

  const secondNum = Number(document.querySelector('#secondNumber').value);

  console.log(secondNum);

  const result = document.querySelector('#result');

  result.textContent = Number(firstNum - secondNum);

  console.log(result.textContent);
}
