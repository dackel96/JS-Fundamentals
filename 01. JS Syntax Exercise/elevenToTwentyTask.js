//////////////////////////////////////////////////////
/*11.Road Radar*/
//////////////////////////////////////////////////////
function speedRadar(speed, area) {
  const overTwenty = 'speeding';

  const overForty = 'excessive speeding';

  const overFortyOne = 'reckless driving';

  let motorway = {
    area: 'motorway',
    speedLimit: 130,
  };

  let interstate = {
    area: 'interstate',
    speedLimit: 90,
  };

  let city = {
    area: 'city',
    speedLimit: 50,
  };

  let residential = {
    area: 'residential',
    speedLimit: 20,
  };

  let difference = 0;
  let limit = 0;
  let status;
  let flag = true;
  switch (area) {
    case motorway.area:
      limit = motorway.speedLimit;

      if (speed > motorway.speedLimit) {
        flag = false;
        difference = speed - motorway.speedLimit;
        if (difference <= 20) {
          status = overTwenty;
        } else if (difference <= 40) {
          status = overForty;
        } else {
          status = overFortyOne;
        }
      }
      break;
    case interstate.area:
      limit = interstate.speedLimit;

      if (speed > interstate.speedLimit) {
        flag = false;
        difference = speed - interstate.speedLimit;
        if (difference <= 20) {
          status = overTwenty;
        } else if (difference <= 40) {
          status = overForty;
        } else {
          status = overFortyOne;
        }
      }
      break;
    case city.area:
      limit = city.speedLimit;

      if (speed > city.speedLimit) {
        flag = false;
        difference = speed - city.speedLimit;
        if (difference <= 20) {
          status = overTwenty;
        } else if (difference <= 40) {
          status = overForty;
        } else {
          status = overFortyOne;
        }
      }
      break;
    case residential.area:
      limit = residential.speedLimit;

      if (speed > residential.speedLimit) {
        flag = false;
        difference = speed - residential.speedLimit;
        if (difference <= 20) {
          status = overTwenty;
        } else if (difference <= 40) {
          status = overForty;
        } else {
          status = overFortyOne;
        }
      }
      break;
  }

  let result;

  if (!flag) {
    result = `The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`;
  } else {
    result = `Driving ${speed} km/h in a ${limit} zone`;
  }

  console.log(result);
}
//////////////////////////////////////////////////////
/*12.Cooking by Numbers*/
//////////////////////////////////////////////////////
function cookNumbers(numberAsString, ...operations) {
  let number = Number(numberAsString);

  operations.forEach((operation) => {
    switch (operation) {
      case 'chop':
        number /= 2;
        break;
      case 'dice':
        number = Math.sqrt(number);
        break;
      case 'spice':
        number++;
        break;
      case 'bake':
        number *= 3;
        break;
      case 'fillet':
        number -= number * 0.2;
        break;
    }
    console.log(number);
  });
}
//////////////////////////////////////////////////////
/*13.Array Rotation*/
//////////////////////////////////////////////////////
function arrayRotator(numbers, cycles) {
  cycles %= numbers.length;

  for (let i = 0; i < cycles; i++) {
    let firstNumber = numbers.shift();
    numbers.push(firstNumber);
  }

  let result = numbers.join(' ');

  console.log(result);
}
//////////////////////////////////////////////////////
/*14.Print Every N-th Element from an Array*/
//////////////////////////////////////////////////////
function printNthElement(array, step) {
  let newArray = [];

  for (let i = 0; i < array.length; i += step) {
    newArray.push(array[i]);
  }

  return newArray;
}
//////////////////////////////////////////////////////
/*15.List of Names*/
//////////////////////////////////////////////////////
function namesInOrder(names) {
  let sortStringAsc = [...names].sort((a, b) => {
    let result = a.localeCompare(b);
    return result;
  });
  let counter = 1;
  sortStringAsc.forEach((name) => {
    console.log(`${counter}.${name}`);
    counter++;
  });
}
//////////////////////////////////////////////////////
/*16.Sorting Numbers*/
//////////////////////////////////////////////////////
function sortNumbers(numbers) {
  let sortArray = [...numbers.sort((a, b) => a - b)];

  let resultArray = [];

  let dribbler = true;

  for (let i of numbers) {
    let temp = dribbler ? sortArray.shift() : sortArray.pop();

    resultArray.push(temp);

    dribbler = !dribbler;
  }
  return resultArray;
}
//////////////////////////////////////////////////////
/*17.Reveal Words*/
//////////////////////////////////////////////////////
function wordsReveal(words, sentence) {
  for (const word of words.split(', ')) {
    for (const missing of sentence.split(' ')) {
      if (
        missing === '*'.repeat(missing.length) &&
        word.length === missing.length
      ) {
        sentence = sentence.replace(missing, word);
      }
    }
  }
  console.log(sentence);
}
//////////////////////////////////////////////////////
/*18.Modern Times of #(HashTag)*/
//////////////////////////////////////////////////////
function wordFinder(sentence) {
  let resultArray = [];

  for (let word of sentence.split(' ')) {
    if (word.startsWith('#') && word.length > 1) {
      word = word.substring(1);

      if (/^[a-zA-Z]+$/.test(word)) {
        resultArray.push(word);
      }
    }
  }

  let result = resultArray.join('\n');

  console.log(result);
}
//////////////////////////////////////////////////////
/*19.String Substring*/
//////////////////////////////////////////////////////
function wordMatcher(word, sentence) {
  for (const sentenceWord of sentence.split(' ')) {
    if (sentenceWord.toLowerCase() === word.toLowerCase()) {
      console.log(word);
      return;
    }
  }
  console.log(`${word} not found!`);
}
//////////////////////////////////////////////////////
/*20.Pascal-Case Splitter*/
//////////////////////////////////////////////////////
function stringSplitter(sentence) {
  let result = '';

  for (const character of sentence) {
    let characterCode = character.charCodeAt(character);
    if (characterCode >= 65 && characterCode <= 90) {
      if (result.length > 0) {
        result += ', ';
      }
      result += character;
    } else {
      result += character;
    }
  }
  console.log(result);
}
