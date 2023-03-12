function withSet(input) {
  let plates = new Set();

  for (const line of input) {
    let [command, licensePlate] = line.split(', ');

    if (command === 'IN') {
      plates.add(licensePlate);
    } else if (command === 'OUT') {
      plates.delete(licensePlate);
    }
  }

  if (plates.length === 0) {
    console.log('Parking Lot is Empty');
  } else {
    let sorted = [...plates.keys()].sort((a, b) => a.localeCompare(b));

    sorted.forEach((x) => {
      console.log(x);
    });
  }
}

function piccolo(input) {
  let plates = [];

  for (const line of input) {
    let [command, licensePlate] = line.split(', ');

    if (command === 'IN' && !plates.includes(licensePlate)) {
      plates.push(licensePlate);
    } else if (command === 'OUT' && plates.includes(licensePlate)) {
      let index = plates.indexOf(licensePlate);

      plates.splice(index, 1);
    }
  }

  if (plates.length === 0) {
    console.log('Parking Lot is Empty');
  } else {
    let sorted = plates.sort((a, b) => a.localeCompare(b));

    sorted.forEach((x) => {
      console.log(x);
    });
  }
}

withSet([
  'IN, CA2844AA',
  'IN, CA1234TA',
  'OUT, CA2844AA',
  'IN, CA9999TT',
  'IN, CA2866HI',
  'OUT, CA1234TA',
  'IN, CA2844AA',
  'OUT, CA2866HI',
  'IN, CA9876HH',
  'IN, CA2822UU',
]);
