function arrayReverse(number, numbers) {
  let array = [];

  for (let i = 0; i < number; i++) {
    array.push(numbers[i]);
  }

  array.reverse();

  console.log(array.join(" "));
}

arrayReverse(3, [10, 20, 30, 40, 50]);
