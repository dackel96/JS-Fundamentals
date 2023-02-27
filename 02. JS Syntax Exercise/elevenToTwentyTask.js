//////////////////////////////////////////////////////
/*11.Road Radar*/
//////////////////////////////////////////////////////
function speedRadar(speed, area) {
  const overTwenty = 'speeding';

  const overForty = 'excessive speeding';

  const overFortyOne = 'reckless driving';

  let motorway = {
    area: 'motorway',
    speedLimit: 130,
  };

  let interstate = {
    area: 'interstate',
    speedLimit: 90,
  };

  let city = {
    area: 'city',
    speedLimit: 50,
  };

  let residential = {
    area: 'residential',
    speedLimit: 20,
  };

  let difference = 0;
  let limit = 0;
  let status;
  let flag = true;
  switch (area) {
    case motorway.area:
      limit = motorway.speedLimit;

      if (speed > motorway.speedLimit) {
        flag = false;
        difference = speed - motorway.speedLimit;
        if (difference <= 20) {
          status = overTwenty;
        } else if (difference <= 40) {
          status = overForty;
        } else {
          status = overFortyOne;
        }
      }
      break;
    case interstate.area:
      limit = interstate.speedLimit;

      if (speed > interstate.speedLimit) {
        flag = false;
        difference = speed - interstate.speedLimit;
        if (difference <= 20) {
          status = overTwenty;
        } else if (difference <= 40) {
          status = overForty;
        } else {
          status = overFortyOne;
        }
      }
      break;
    case city.area:
      limit = city.speedLimit;

      if (speed > city.speedLimit) {
        flag = false;
        difference = speed - city.speedLimit;
        if (difference <= 20) {
          status = overTwenty;
        } else if (difference <= 40) {
          status = overForty;
        } else {
          status = overFortyOne;
        }
      }
      break;
    case residential.area:
      limit = residential.speedLimit;

      if (speed > residential.speedLimit) {
        flag = false;
        difference = speed - residential.speedLimit;
        if (difference <= 20) {
          status = overTwenty;
        } else if (difference <= 40) {
          status = overForty;
        } else {
          status = overFortyOne;
        }
      }
      break;
  }

  let result;

  if (!flag) {
    result = `The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`;
  } else {
    result = `Driving ${speed} km/h in a ${limit} zone`;
  }

  console.log(result);
}

speedRadar(21, 'residential');
