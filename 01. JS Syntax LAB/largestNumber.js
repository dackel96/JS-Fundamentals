function findLargestNumber(numberOne, numberTwo, numberThree) {
  let result = 0;

  if (numberOne > numberTwo && numberOne > numberThree) {
    result = numberOne;
  } else if (numberTwo > numberOne && numberTwo > numberThree) {
    result = numberTwo;
  } else {
    result = numberThree;
  }
  console.log(`The largest number is ${result}.`);
}

findLargestNumber(1.577, 0.177, 0.777);
