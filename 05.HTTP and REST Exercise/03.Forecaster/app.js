function attachEvents() {
  const symbols = {
    Sunny: '&#x2600',
    'Partly sunny': '&#x26C5',
    Overcast: '&#x2601',
    Rain: '&#x2614',
    Degrees: '&#176',
  };

  const BASE_URL = 'http://localhost:3030/jsonstore/forecaster/';

  const btn = document.getElementById('submit');

  const input = document.getElementById('location');

  const result = document.getElementById('forecast');

  const currentConditions = document.getElementById('current');

  const upcomingConditions = document.getElementById('upcoming');

  const upcomingDiv = document.createElement('div');

  btn.addEventListener('click', submit);

  function submit() {
    let location = input.value;

    fetch(`${BASE_URL}locations`, { method: 'GET' })
      .then((x) => x.json())
      .then((data) => {
        result.style.display = 'block';

        let searchedLocation = data.find((x) => x.name === location);

        fetch(`${BASE_URL}today/${searchedLocation.code}`, { method: 'GET' })
          .then((x) => x.json())
          .then((today) => {
            const { name, forecast } = today;

            if (name && forecast) {
              const { condition, high, low } = forecast;
              currentConditions.innerHTML = `<div class="label">Current conditions</div>
              <div class="forecasts">
                  <span class = "condition symbol">${symbols[condition]}</span>
                  <span class="condition">
                      <span class = "forecast-data">${name}</span>
                      <span class = "forecast-data">${low}${symbols['Degrees']}/${high}${symbols['Degrees']}</span>
                      <span class = "forecast-data">${condition}</span>
                  </span>                     
              </div>`;
            }
          });

        fetch(`${BASE_URL}upcoming/${searchedLocation.code}`, { method: 'GET' })
          .then((x) => x.json())
          .then((upcoming) => {
            const { forecast, name } = upcoming;
            upcomingDiv.innerHTML = '';
            if (forecast && name) {
              upcomingDiv.classList.add('forecast-info');
              for (const { low, high, condition } of forecast) {
                upcomingDiv.innerHTML += `<span class = "upcoming">
                    <span class = "symbol">${symbols[condition]}</span>
                    <span class = "forecast-data">${low}${symbols['Degrees']}/${high}${symbols['Degrees']}</span>
                    <span class = "forecast-data">${condition}</span>
                </span>`;
              }
              upcomingConditions.appendChild(upcomingDiv);
            }
          });
      })
      .catch((err) => {});
  }
}

attachEvents();
