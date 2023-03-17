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

const ingredient1 = document.createElement('li');
ingredient1.textContent = 'Potatoes';
ingredient1.classList.add('item');

const ingredient2 = document.createElement('li');
ingredient2.textContent = 'Mushrooms';
ingredient2.classList.add('item');

const ingredient3 = document.createElement('li');
ingredient3.textContent = 'Garlic';
ingredient3.classList.add('item');

const ingredient4 = document.createElement('li');
ingredient4.textContent = 'Tomatos';
ingredient4.classList.add('item');

const ingredient5 = document.createElement('li');
ingredient5.textContent = 'Herbs';
ingredient5.classList.add('item');

const ingredient6 = document.createElement('li');
ingredient6.textContent = 'Condiments';
ingredient6.classList.add('item');

const ingredientsUl = document.querySelector('#ingredients');
ingredientsUl.append(
  ingredient1,
  ingredient2,
  ingredient3,
  ingredient4,
  ingredient5,
  ingredient6
);
