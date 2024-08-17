// Javascript Classes

// A class is a blueprint for creating objects
class Pizza {
  constructor(pizzaType, pizzaSize) {
    this._type = pizzaType;
    this._size = pizzaSize;
    this._crust = "original";
    this._toppings = [];
  }

  getCrust() { return this._crust; }
  setCrust(newCrust) { this._crust = newCrust; }
  getToppings() { return this._toppings; }
  setToppings(newTopping) { this._toppings.push(newTopping); }
  
  bake() {
    console.log(`Baking a ${this._size} ${this._type} ${this._crust} crust pizza...`);
  }
}

// Creating an object with the constructor of Pizza
const myPizza = new Pizza("pepperoni", "large");
myPizza.bake(); // and calling the bake() method

console.log(myPizza._type); // pepperoni
myPizza._type = "supreme"; 
console.log(myPizza._type); // supreme
myPizza.bake(); 

// to prevent our object properties from being accessed directly through the dot notation, 
// we need to use getters and setters (line 12 to 15)
myPizza.setCrust("thin");
myPizza.bake();
console.log(myPizza.getCrust());

myPizza.setToppings("sausage");
myPizza.setToppings("olives");
console.log(myPizza.getToppings());