function calculations(first, second, third) {
  const sum = (a, b) => a + b;
  const subtract = (a, b) => a - b;

  return subtract(sum(first, second), third);
}

console.log(calculations(5, 5, 10));
