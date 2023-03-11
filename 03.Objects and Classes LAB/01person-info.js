function personObject(firstNameInput, lastNameInput, ageInput) {
  let person = {};

  person.firstName = firstNameInput;
  person.lastName = lastNameInput;
  person.age = Number(ageInput);

  return person;
}

console.log(personObject('pesho', 'peshev', 15));
