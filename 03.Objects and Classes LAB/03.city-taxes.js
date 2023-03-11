function cityTaxesCalculator(name, population, treasury) {
  let city = {
    name,
    population,
    treasury,
    taxRate: 10,
    collectTaxes() {
      this.treasury = Math.ceil(this.treasury + this.population * this.taxRate);
    },
    applyGrowth(percent) {
      this.population = Math.ceil(
        this.population + this.population * (percent / 100)
      );
    },
    applyRecession(percent) {
      this.treasury = this.treasury - this.treasury * (percent / 100);
    },
  };
  return city;
}
