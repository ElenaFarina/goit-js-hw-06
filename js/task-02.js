const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listIngredients = document.querySelector('#ingredients');
const itemArray = [];

ingredients.forEach(ingredient => {

  const itemIngredients = document.createElement('li');
  itemIngredients.classList.add('item');
  itemIngredients.textContent = `${ingredient}`;

  itemArray.push(itemIngredients);
});

listIngredients.append(...itemArray);