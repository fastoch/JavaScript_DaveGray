// Factory function (used as a factory for object creation)
function pizzaFactory(pizzaSize) {
  const crust = "original";   // private property
  const size = pizzaSize;     // private property
  // our factory function returns a bake function  
  return {
    bake: () => console.log(`Baking a ${size} ${crust} crust pizza.`)
  };
}

// The bake() method has access to the private properties
const myPizza = pizzaFactory('medium');
myPizza.bake(); 
// but, outside of the factory function, the properties themselves are not accessible via the dot notation