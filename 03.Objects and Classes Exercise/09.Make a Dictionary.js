function dictionary(input) {
  let result = {};

  for (const article of input) {
    let articleObject = JSON.parse(article);

    let articleArr = Object.entries(articleObject);

    for (const [term, definition] of articleArr) {
      result[term] = definition;
    }
  }

  let resultArray = Object.entries(result);

  let sortResult = resultArray.sort((a, b) => a[0].localeCompare(b[0]));

  for (const [term, definition] of sortResult) {
    console.log(`Term: ${term} => Definition: ${definition}`);
  }
}

dictionary([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);
