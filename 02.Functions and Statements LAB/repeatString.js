function stringRepeater(word, cycles) {
  console.log(repeater());

  function repeater() {
    let result = word;

    for (let i = 1; i < cycles; i++) {
      result += word;
    }

    return result;
  }
}
