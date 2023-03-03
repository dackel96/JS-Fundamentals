function calculator(leftNumber, rightNumber, operator) {
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const divide = (a, b) => a / b;
  const multiply = (a, b) => a * b;

  const operationMapper = {
    add: add,
    subtract: subtract,
    divide: divide,
    multiply: multiply,
  };

  return operationMapper[operator](leftNumber, rightNumber);
}
