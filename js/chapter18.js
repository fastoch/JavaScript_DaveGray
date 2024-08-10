// Javascript Classes

// A class is a blueprint for creating objects
class Pizza {
  constructor(pizzaType, pizzaSize) {
    this.type = pizzaType;
    this.size = pizzaSize;
    this.crust = "original";
    this.toppings = [];
  }

  getCrust() { return this.crust; }
  setCrust(newCrust) { this.crust = newCrust; }
  getToppings() { return this.toppings; }
  setToppings(newTopping) { this.toppings.push(newTopping); }
  
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
// we need to use getters and setters (line 12 to 15)
myPizza.setCrust("thin");
myPizza.bake();
console.log(myPizza.getCrust());

myPizza.setToppings("sausage");
myPizza.setToppings("olives");
console.log(myPizza.getToppings());