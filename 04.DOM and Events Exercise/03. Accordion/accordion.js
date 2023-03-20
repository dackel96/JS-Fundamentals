function toggle() {
  const btn = document.querySelector('#accordion div.head span.button');

  const information = document.querySelector('#extra');

  if (btn.textContent === 'More') {
    information.style.display = 'block';

    btn.textContent = 'Less';
  } else {
    btn.textContent = 'More';

    information.style.display = 'none';
  }
}
