function wordTracker(input) {
  let searchedWords = input.shift().split(' ');

  let words = {};

  for (const word of searchedWords) {
    let count = input.filter((x) => x === word).length;

    words[word] = count;
  }

  let sortedOutput = Object.entries(words).sort((a, b) => {
    let [nameA, countA] = a;
    let [nameB, countB] = b;

    return countB - countA;
  });

  for (const [word, count] of sortedOutput) {
    console.log(`${word} - ${count}`);
  }
}
