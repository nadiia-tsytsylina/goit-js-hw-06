// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

let counterValue = 0;
const counterEl = document.querySelector('#value');

const buttonDecr = document.querySelector('button[data-action="decrement"]');
const buttonIncr = document.querySelector('button[data-action="increment"]');

const handlebuttonDecrClick = () => {
  counterValue -= 1;
  counterEl.textContent = counterValue;
};

const handlebuttonIncrClick = () => {
  counterValue += 1;
  counterEl.textContent = counterValue;
};

buttonDecr.addEventListener('click', handlebuttonDecrClick);
buttonIncr.addEventListener('click', handlebuttonIncrClick);
