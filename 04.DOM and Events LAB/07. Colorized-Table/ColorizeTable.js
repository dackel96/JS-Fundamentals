function colorize() {
  const tableElements = Array.from(
    document.querySelectorAll('table tr:nth-child(even)')
  );

  for (const row of tableElements) {
    row.style.backgroundColor = 'Teal';
  }
}
