function focused() {
  const inputField = Array.from(document.querySelectorAll('input'));

  for (const line of inputField) {
    line.addEventListener('focus', handleFocus);
    line.addEventListener('blur', handleFocus);
  }

  function handleFocus(event) {
    const currInput = event.target;

    const parent = currInput.parentElement;

    if (event.type === 'focus' && !parent.classList.contains('focused')) {
      parent.classList.add('focused');
    }

    if (event.type === 'blur' && parent.classList.contains('focused')) {
      parent.classList.remove('focused');
    }
  }
}
