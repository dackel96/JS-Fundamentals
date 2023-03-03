function printSum(number, powNumber) {
  console.log(mathPow());
  function mathPow() {
    let result = Math.pow(number, powNumber);
    return result;
  }
}

printSum(2, 8);
