function oddEvenSum(number) {
  let oddNumbers = 0;
  let evenNumbers = 0;

  let arr = convertNumberToArray();

  for (const num of arr) {
    if (num % 2 === 0) {
      evenNumbers += num;
    } else {
      oddNumbers += num;
    }
  }

  let result = `Odd sum = ${oddNumbers}, Even sum = ${evenNumbers}`;

  console.log(result);

  function convertNumberToArray() {
    let numbers = [];

    while (number > 0) {
      let step = number % 10;
      numbers.push(step);
      number = Math.trunc(number / 10);
    }

    return numbers;
  }
}

oddEvenSum(3495892137259234);
