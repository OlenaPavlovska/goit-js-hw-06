const elementsList = document.querySelector(`#categories`);
const categoriesLength = elementsList.children.length;
console.log(`Number of categories: ${categoriesLength}`);


const itemsCategories = elementsList.querySelectorAll(`li.item`);
itemsCategories.forEach(category => {
    console.log("Category: ", category.firstElementChild.textContent);
  console.log("Elements: ", category.lastElementChild.children.length);
})



