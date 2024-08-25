// Factory function
function pizzaFactory(pizzaSize) {
  const crust = "original";
  const size = pizzaSize;
  // returning a bake function from our factory function
  return {
    bake: () => console.log(`Baking a ${size} ${crust} crust pizza.`)
  };
}

const myPizza = pizzaFactory('medium');
myPizza.bake();