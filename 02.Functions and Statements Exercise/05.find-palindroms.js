function palindromes(numbers) {
  numbers.forEach((x) => {
    console.log(isPalindrome(x));
  });

  function isPalindrome(number) {
    let reversed = Number([...number.toString()].reverse().join(''));

    return number === reversed;
  }
}

//shorted
function palindromeFinder(numbers) {
  const isPalindrome = (x) =>
    Number([...x.toString()].reverse().join('')) === x;
  return numbers.map(isPalindrome).join('\n');
}
