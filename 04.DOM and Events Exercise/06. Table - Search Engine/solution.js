function solve() {
  const search = document.querySelector('#searchField');

  search.addEventListener('click', clear);

  document.querySelector('#searchBtn').addEventListener('click', onClick);

  const tableRows = Array.from(document.querySelectorAll('tbody tr'));

  function onClick() {
    const word = search.value;

    for (const row of tableRows) {
      let trim = row.textContent.trim();

      row.classList.remove('select');

      if (trim.includes(word)) {
        row.classList.add('select');
      }
    }

    search.value = '';
  }

  function clear(e) {
    for (const row of tableRows) {
      row.classList.remove('select');
    }
  }
}
