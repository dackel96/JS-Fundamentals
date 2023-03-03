function signCheck(...numbers) {
  return numbers.filter((x) => x < 0).length % 2 === 0
    ? 'Positive'
    : 'Negative';
}
