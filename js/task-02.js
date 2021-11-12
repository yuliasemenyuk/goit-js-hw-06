
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const productListEl = document.querySelector('#ingredients');

const listItemEl = ingredients.map(productNameEl => {

  const productEl = document.createElement(`li`);
  productEl.textContent = productNameEl;
  productEl.classList.add(`item`);
  return productEl;
});

productListEl.append(...listItemEl);


