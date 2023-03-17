function calc() {
  const firstInput = document.getElementById('num1');

  const secondInput = document.getElementById('num2');

  const result = document.getElementById('sum');

  let firstNum = Number(firstInput.value);

  let secondNum = Number(secondInput.value);

  let sum = firstNum + secondNum;

  result.value = sum;
}
