function parser(fName, lName, hair) {
  let person = {
    name: fName,
    lastName: lName,
    hairColor: hair,
  };

  console.log(JSON.stringify(person));
}

parser('George', 'Jones', 'Brown');
