function progressBar(number) {
  let cycles = number / 10;

  let percent = '';

  for (let index = 1; index <= 10; index++) {
    if (index <= cycles) {
      percent += '%';
    } else {
      percent += '.';
    }
  }

  if (number != 100) {
    console.log(`${number}% [${percent}]\nStill loading...`);
  } else {
    console.log(`${number}% Complete!\n[${percent}]`);
  }
}

progressBar(100);
