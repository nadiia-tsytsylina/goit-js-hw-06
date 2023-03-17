const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);

categories.forEach((elem) => {
  const title = elem.querySelector('h2');
  const numberOfElem = elem.querySelectorAll('li').length;
  console.log(`Category: ${title.textContent}, Elements: ${numberOfElem}`);
});
