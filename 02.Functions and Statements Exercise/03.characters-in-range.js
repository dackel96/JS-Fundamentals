function printCharacters(firstChar, secondChar) {
  const getAsciiCode = (x) => x.charCodeAt(0);
  let firstCharAscii = getAsciiCode(firstChar);
  let secondCharAscii = getAsciiCode(secondChar);

  let minAscii = Math.min(firstCharAscii, secondCharAscii);
  let maxAscii = Math.max(firstCharAscii, secondCharAscii);

  let chars = [];

  for (let i = minAscii + 1; i < maxAscii; i++) {
    chars.push(String.fromCharCode(i));
  }

  return chars.join(' ');
}
