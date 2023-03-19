const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredientLi = [];

for (const elem of ingredients) {
  const ingredient = document.createElement('li');
  ingredient.textContent = elem;
  ingredient.classList.add('item');
  ingredientLi.push(ingredient);
}

const ingredientsEl = document.querySelector('#ingredients');
ingredientsEl.append(...ingredientLi);
