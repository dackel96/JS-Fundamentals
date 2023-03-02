//////////////////////////////////////////////////////
/*01.Ages*/
//////////////////////////////////////////////////////
function personDefinition(age) {
  let result;

  if (age >= 0 && age <= 2) {
    result = 'baby';
  } else if (age >= 3 && age <= 13) {
    result = 'child';
  } else if (age >= 14 && age <= 19) {
    result = 'teenager';
  } else if (age >= 20 && age <= 65) {
    result = 'adult';
  } else if (age >= 66) {
    result = 'elder';
  } else {
    result = 'out of bounds';
  }

  console.log(result);
}
//////////////////////////////////////////////////////
/*02.Vacation*/
//////////////////////////////////////////////////////
function vacationPriceCalculator(groupOfPeople, groupType, dayOfWeek) {
  let totalPrice;
  const wrongParams = 'Wrong Parameters!';
  switch (groupType) {
    case 'Students':
      if (dayOfWeek === 'Friday') {
        totalPrice = groupOfPeople * 8.45;
      } else if (dayOfWeek === 'Saturday') {
        totalPrice = groupOfPeople * 9.8;
      } else if (dayOfWeek === 'Sunday') {
        totalPrice = groupOfPeople * 10.46;
      }
      if (groupOfPeople >= 30) {
        totalPrice -= totalPrice * 0.15;
      }
      break;
    case 'Business':
      if (groupOfPeople >= 100) {
        groupOfPeople -= 10;
      }
      if (dayOfWeek === 'Friday') {
        totalPrice = groupOfPeople * 10.9;
      } else if (dayOfWeek === 'Saturday') {
        totalPrice = groupOfPeople * 15.6;
      } else if (dayOfWeek === 'Sunday') {
        totalPrice = groupOfPeople * 16;
      }
      break;
    case 'Regular':
      if (dayOfWeek === 'Friday') {
        totalPrice = groupOfPeople * 15;
      } else if (dayOfWeek === 'Saturday') {
        totalPrice = groupOfPeople * 20;
      } else if (dayOfWeek === 'Sunday') {
        totalPrice = groupOfPeople * 22.5;
      }
      if (groupOfPeople >= 10 && groupOfPeople <= 20) {
        totalPrice -= totalPrice * 0.05;
      }
      break;
  }
  if (totalPrice >= 0) {
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
  } else {
    console.log(wrongParams);
  }
}
//////////////////////////////////////////////////////
/*03.Leap Year*/
//////////////////////////////////////////////////////
function leapYearCheck(year) {
  let result = 'no';

  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 == 0)) {
    result = 'yes';
  }

  console.log(result);
}
//////////////////////////////////////////////////////
/*04.Print and Sum*/
//////////////////////////////////////////////////////
function arraySum(from, to) {
  let array = [];

  if (to < from) {
    let dribbler = to;
    to = from;
    from = dribbler;
  }
  let sum = 0;
  for (let i = from; i <= to; i++) {
    sum += i;
    array.push(i);
  }

  let result = `${array.join(' ')}\nSum: ${sum}`;

  console.log(result);
}
//////////////////////////////////////////////////////
/*05.Multiplication Table*/
//////////////////////////////////////////////////////
function multiplication(number) {
  if (number <= 0 || number > 100) {
    console.log('Error!');
  }

  let result;

  for (let i = 1; i <= 10; i++) {
    console.log(`${number} X ${i} = ${number * i}`);
  }
}
//////////////////////////////////////////////////////
/*06.Sum Digits*/
//////////////////////////////////////////////////////
function digitsSum(number) {
  let sum = 0;

  while (number > 0) {
    let step = number % 10;
    sum += step;
    number = Math.trunc(number / 10);
  }

  console.log(sum);
}
//////////////////////////////////////////////////////
/*07.Chars to String*/
//////////////////////////////////////////////////////
function makeWordFromChars(letterOne, letterTwo, letterThree) {
  let word = `${letterOne}${letterTwo}${letterThree}`;
  console.log(word);
}
//////////////////////////////////////////////////////
/*08.Reversed Chars*/
//////////////////////////////////////////////////////
function reverseWord(letterOne, letterTwo, letterThree) {
  let word = [letterOne, letterTwo, letterThree];
  let result = word.reverse();
  console.log(result.join(' '));
}
//////////////////////////////////////////////////////
/*09.Fruit*/
//////////////////////////////////////////////////////
function billCalculator(fruit, grams, pricePerKilo) {
  let kilos = grams / 1000;

  let totalPrice = kilos * pricePerKilo;

  let result = `I need \$${totalPrice.toFixed(2)} to buy ${kilos.toFixed(
    2
  )} kilograms ${fruit}.`;

  console.log(result);
}
//////////////////////////////////////////////////////
/*10.Same Numbers*/
//////////////////////////////////////////////////////
function valueChecker(number) {
  let sum = 0;

  let firstDigit = number % 10;

  let checker = true;

  while (number > 0) {
    let step = number % 10;
    sum += step;
    number = Math.trunc(number / 10);
    if (step !== firstDigit) {
      checker = false;
    }
  }

  console.log(`${checker}\n${sum}`);
}
