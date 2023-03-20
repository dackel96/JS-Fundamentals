function lockedProfile() {
  const btns = Array.from(document.querySelectorAll('button'));

  btns.forEach((x) => {
    x.addEventListener('click', toggle);
  });

  function toggle(event) {
    const btn = event.currentTarget;

    const profile = btn.parentElement;

    const children = Array.from(profile.children);

    let info;

    let radio;

    for (const el of children) {
      if (el.id.includes('HiddenFields')) {
        info = el;
      }
      if (el.type === 'radio' && el.value === 'unlock') {
        radio = el;
      }
    }

    if (radio.checked) {
      if (btn.textContent === 'Show more') {
        info.style.display = 'block';
        btn.textContent = 'Hide it';
      } else {
        info.style.display = 'none';
        btn.textContent = 'Show more';
      }
    }
  }
}
