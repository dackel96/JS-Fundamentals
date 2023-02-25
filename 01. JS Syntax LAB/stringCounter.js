function stringCounter(sentence, word) {
  let counter = 0;
  while (
    sentence.includes(` ${word} `) ||
    sentence.includes(`${word} `) ||
    sentence.includes(` ${word}`)
  ) {
    sentence = sentence.replace(word, "*");
    counter++;
  }
  console.log(counter);
}

stringCounter("This is a word and it also is a sentence", "is");
