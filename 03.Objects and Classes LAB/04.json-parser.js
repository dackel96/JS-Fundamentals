function parser(jsonString) {
  let person = JSON.parse(jsonString);

  for (const key in person) {
    console.log(`${key}: ${person[key]}`);
  }
}

parser('{"name": "George", "age": 40, "town": "Sofia"}');
