function matrix(rowCol) {
  let result = '';
  for (let row = 0; row < rowCol; row++) {
    for (let col = 0; col < rowCol; col++) {
      result += `${rowCol} `;
    }
    result += '\n';
  }
  return result;
}

console.log(matrix(2));

new Array(5)
  .fill(new Array(5).fill(5))
  .forEach((row) => console.log(row.join(' ')));
