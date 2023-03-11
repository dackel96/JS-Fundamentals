function sorting(input) {
  let addressBook = {};

  for (const line of input) {
    let [name, address] = line.split(':');
    addressBook[name] = address;
  }

  let sortNames = Object.keys(addressBook).sort((nameA, nameB) =>
    nameA.localeCompare(nameB)
  );

  let sorted = Object.entries(addressBook);
  sorted.sort((a, b) => a[0].localeCompare(b[0]));

  for (const name of sortNames) {
    console.log(`${name} -> ${addressBook[name]}`);
  }
}

sorting([
  'Tim:Doe Crossing',
  'Bill:Nelson Place',
  'Peter:Carlyle Ave',
  'Bill:Ornery Rd',
]);
