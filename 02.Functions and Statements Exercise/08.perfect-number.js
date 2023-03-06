function isPerfect(number) {
  let divisors = [];
  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      divisors.push(i);
    }
  }
  let sum = divisors.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  }, 0);
  if (number === sum) {
    console.log('We have a perfect number!');
  } else {
    console.log("It's not so perfect.");
  }
}
