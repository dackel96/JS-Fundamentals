function solve() {
  const BASE_URL = 'http://localhost:3030/jsonstore/bus/schedule/';

  let id = 'depot';

  const infoContainer = document.querySelector('#info .info');

  const arriveBtn = document.getElementById('arrive');

  const departBtn = document.getElementById('depart');

  function depart() {
    fetch(`${BASE_URL}${id}`, { method: 'GET' })
      .then((x) => x.json())
      .then((data) => {
        const { name, next } = data;

        infoContainer.textContent = `Next stop ${name}`;

        departBtn.disabled = true;

        arriveBtn.disabled = false;
      });
  }

  async function arrive() {
    fetch(`${BASE_URL}${id}`, { method: 'GET' })
      .then((x) => x.json())
      .then((data) => {
        const { name, next } = data;

        infoContainer.textContent = `Arriving at ${name}`;

        arriveBtn.disabled = true;

        departBtn.disabled = false;

        id = next.toString();
      });
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
