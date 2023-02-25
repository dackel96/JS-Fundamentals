function printSumOfArrayNumbers(numbers) {
  let firstElement = numbers[0];

  let lastElement = numbers[numbers.length - 1];

  let result = firstElement + lastElement;

  console.log(result);
}

printSumOfArrayNumbers([20, 30, 40]);
