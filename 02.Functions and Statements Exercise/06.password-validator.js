// let text = 'Password must be between 6 and 10 characters Password must have at least 2 digits';
// let regexPath = /\d+/g;
// let execution = regexPath.exec(text);
// while (execution !=== null) {
//     let value = execution[0];
//     console.log(value);
//     execution = regexPath.exec(text);
// }

//console.log(regexPath.test(text)) returns true/false

// let text = 'Password must be between 6 and 10 characters Password must have at least 2 digits';
// let regexPath = /\d+/g;
// let execution = regexPath.exec(text);
// console.log([...text.matchAll(regexPath)][0]);

function passwordValidator(password) {
  const isValidLength = (x) => x.length >= 6 && x.length <= 10;
  const hasOnlyLettersAndDigits = (x) => /^[A-Za-z0-9]+$/g.test(x);
  const hasTwoDigits = (x) => [...x.matchAll(/\d/g)].length >= 2;

  let valid = true;

  if (!isValidLength(password)) {
    valid = false;
    console.log('Password must be between 6 and 10 characters');
  }

  if (!hasOnlyLettersAndDigits(password)) {
    valid = false;
    console.log('Password must consist only of letters and digits');
  }

  if (!hasTwoDigits(password)) {
    valid = false;
    console.log('Password must have at least 2 digits');
  }
  if (valid) {
    console.log('Password is valid');
  }
}

passwordValidator('vali$');
