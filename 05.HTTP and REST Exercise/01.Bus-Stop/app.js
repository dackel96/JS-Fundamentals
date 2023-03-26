function getInfo() {
  const BASE_URL = 'http://localhost:3030/jsonstore/bus/businfo/';

  const input = document.getElementById('stopId');

  const fullLink = `${BASE_URL}${input.value}`;

  const stopName = document.getElementById('stopName');

  const resultContainer = document.getElementById('buses');

  resultContainer.innerHTML = '';

  fetch(fullLink)
    .then((x) => x.json())
    .then((data) => {
      const { name, buses } = data;

      stopName.textContent = name;

      for (const bus in buses) {
        const newLi = document.createElement('li');

        newLi.textContent = `Bus ${bus} arrives in ${buses[bus]} minutes`;

        resultContainer.appendChild(newLi);
      }
    })
    .catch((err) => {
      stopName.textContent = 'Error';
    });
}
