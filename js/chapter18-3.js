class Pizza {
  crust = "original";   // public field
  #sauce = "napolitan";    // private field

  constructor(pizzaSize) {
    this.size = pizzaSize;
  }
  getCrust() {
    return this.crust;
  }
  setCrust(pizzaCrust) {
    this.crust = pizzaCrust;
  }
}