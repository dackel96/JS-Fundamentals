function heroLog(input) {
  let heroesDb = [];

  for (const line of input) {
    let [nameInput, levelInput, itemsInput] = line.split(' / ');

    let hero = {
      name: nameInput,
      level: levelInput,
      inventory: itemsInput,
    };

    heroesDb.push(hero);
  }

  let sortData = heroesDb.sort((a, b) => a.level - b.level);

  for (const { name, level, inventory } of sortData) {
    console.log(`Hero: ${name}\nlevel => ${level}\nitems => ${inventory}`);
  }
}

heroLog([
  'Isacc / 25 / Apple, GravityGun',
  'Derek / 12 / BarrelVest, DestructionSword',
  'Hes / 1 / Desolator, Sentinel, Antara',
]);
