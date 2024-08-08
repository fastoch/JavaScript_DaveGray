// Javascript Classes
class Pizza {
  constructor() {
    this.size = "medium";
    this.crust = "original";
  }
  bake() {
    console.log(`Baking a ${this.size} ${this.crust} crust pizza...`);
  }
}