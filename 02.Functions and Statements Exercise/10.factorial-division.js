function factorialDivision(firstNumber, secondNumber) {
  return (getFactorial(firstNumber) / getFactorial(secondNumber)).toFixed(2);

  function getFactorial(number) {
    if (number === 1) {
      return number;
    }
    return number * getFactorial(number - 1);
  }
}
