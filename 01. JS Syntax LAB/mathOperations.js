function calculate(leftNumber, rightNumber, operator) {
  let result = 0;

  switch (operator) {
    case "-":
      //   if (leftNumber > rightNumber) {
      //     result = leftNumber - rightNumber;
      //   } else {
      //     result = rightNumber - leftNumber;
      //   }
      result = leftNumber - rightNumber;
      break;

    case "/":
      if (leftNumber > rightNumber) {
        result = leftNumber / rightNumber;
      } else {
        result = rightNumber / leftNumber;
      }
      break;

    case "%":
      if (leftNumber > rightNumber) {
        result = leftNumber % rightNumber;
      } else {
        result = rightNumber % leftNumber;
      }
      break;

    case "+":
      result = leftNumber + rightNumber;
      break;
    case "*":
      result = leftNumber * rightNumber;
      break;
    case "**":
      result = leftNumber ** rightNumber;
      break;
  }

  console.log(result);
}

calculate(11, 2, "%");
