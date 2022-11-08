const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

const createLi = ingredient => {
  const addNameIngredients = document.createElement('li');
  addNameIngredients.textContent = ingredient;
  addNameIngredients.class = "item"
return addNameIngredients
}

const lis = ingredients.map((ing) => createLi(ing))

list.append(...lis);