function vendingMachine(product, quantity) {
  let coffee = {
    name: 'coffee',
    price: 1.5,
  };
  let water = {
    name: 'water',
    price: 1,
  };
  let coke = {
    name: 'coke',
    price: 1.4,
  };
  let snacks = {
    name: 'snacks',
    price: 2,
  };

  console.log(totalPrice());

  function totalPrice() {
    let total = 0;
    switch (product) {
      case water.name:
        for (let i = 0; i < quantity; i++) {
          total += water.price;
        }
        break;
      case coffee.name:
        for (let i = 0; i < quantity; i++) {
          total += coffee.price;
        }
        break;
      case coke.name:
        for (let i = 0; i < quantity; i++) {
          total += coke.price;
        }
        break;
      case snacks.name:
        for (let i = 0; i < quantity; i++) {
          total += snacks.price;
        }
        break;
    }
    return total.toFixed(2);
  }
}

vendingMachine('water', 5);
