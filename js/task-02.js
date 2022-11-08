const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");
ingredients.forEach (ingredient =>{const addNameIngredients = document.createElement('li');
  addNameIngredients.textContent = ingredient;
  addNameIngredients.class = "item"
  list.append(addNameIngredients);
})
