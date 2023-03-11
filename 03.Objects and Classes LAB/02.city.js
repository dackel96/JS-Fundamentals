function cityParser(cityInfo) {
  let keyValuePairs = Object.entries(cityInfo);

  for (const [key, value] of keyValuePairs) {
    console.log(`${key} -> ${value}`);
  }
}

cityParser({
  name: 'Sofia',
  area: 492,
  population: 1238438,
  country: 'Bulgaria',
  postCode: '1000',
});
