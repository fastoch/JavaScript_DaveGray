// Javascript Classes

// A class is a blueprint for creating objects
class Pizza {
  constructor(pizzaType, pizzaSize) {
    this.type = pizzaType;
    this.size = pizzaSize;
    this.crust = "original";
  }
  bake() {
    console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza...`);
  }
}

// Creating an object 
const myPizza = new Pizza("pepperoni", "large");
myPizza.bake();