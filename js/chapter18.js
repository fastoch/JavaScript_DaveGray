// Javascript Classes

// A class is a blueprint for creating objects
class Pizza {
  constructor(pizzaType, pizzaSize) {
    this.type = pizzaType;
    this.size = pizzaSize;
    this.crust = "original";
  }
  get pizzaCrust() { return this.crust; }
  bake() {
    console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza...`);
  }
}

// Creating an object with the constructor of Pizza
const myPizza = new Pizza("pepperoni", "large");
myPizza.bake(); // and calling the bake() method

console.log(myPizza.type); // pepperoni
myPizza.type = "supreme"; 
console.log(myPizza.type); // supreme
myPizza.bake(); 

// to prevent our object properties from being accessed directly through the dot notation, 
// we need to use getters and setters
