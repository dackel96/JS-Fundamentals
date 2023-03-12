function occurrences(input) {
  let splitInput = input.toLowerCase().split(' ');

  let result = [];
  for (const piece of splitInput) {
    let count = splitInput.filter((x) => x === piece).length;

    if (count % 2 !== 0 && !result.includes(piece)) {
      result.push(piece);
    }
  }

  console.log(result.join(' '));
}

occurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
