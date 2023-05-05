const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientList = document.querySelector(`ul#ingredients`);
const ingredientItem = ingredients.map(el => {
  const itemElem = document.createElement(`li`);
  itemElem.classList.add(`item`);
  itemElem.textContent = el;
  return itemElem;
}) 
ingredientList.append(...ingredientItem)