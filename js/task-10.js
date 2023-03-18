function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
//   после чего рендерится коллекция.
//   При нажатии на кнопку Очистить, коллекция элементов очищается.
// Создай функцию createBoxes(amount), которая принимает один параметр - число.
// Функция создает столько < div >, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.Используй готовую функцию getRandomHexColor для получения цвета.

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

const input = document.querySelector('input');
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const divBoxes = document.querySelector('#boxes');

buttonCreate.addEventListener('click', getAmount);

function getAmount() {
  const amount = input.value;
  createBoxes(amount);
}

buttonDestroy.addEventListener('click', destroyBoxes);
function destroyBoxes() {
  divBoxes.innerHTML = '';
}

const createBoxes = (amount) => {
  const elements = [];
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    div.style.width = 30 + 10 * i + 'px';
    div.style.height = 30 + 10 * i + 'px';
    div.style.backgroundColor = getRandomHexColor();
    elements.push(div);
  }
  divBoxes.append(...elements);
};
