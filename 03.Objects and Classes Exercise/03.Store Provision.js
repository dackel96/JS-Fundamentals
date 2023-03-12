function stocksStore(stock, order) {
  let combined = [...stock, ...order];

  let store = {};

  for (let i = 0; i < combined.length; i++) {
    let product = combined[i];

    if (i % 2 === 0) {
      if (!store.hasOwnProperty(product)) {
        store[product] = 0;
      }
    } else {
      let value = Number(product);

      let previous = combined[i - 1];

      store[previous] += value;
    }
  }
  for (const key in store) {
    console.log(`${key} -> ${store[key]}`);
  }
}

function secondSolve(stock, order) {
  let combined = [...stock, ...order];

  let store = combined.reduce((data, currValue, index) => {
    let product = currValue;

    if (i % 2 === 0) {
      if (!store.hasOwnProperty(product)) {
        store[product] = 0;
      }
    } else {
      let value = Number(product);

      let previous = combined[i - 1];

      store[previous] += value;
    }
    return data;
  }, {});

  for (const key in store) {
    console.log(`${key} -> ${store[key]}`);
  }
}
