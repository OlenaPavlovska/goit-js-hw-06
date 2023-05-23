const elementsList = document.querySelector(`#categories`);
const itemsCategories = elementsList.querySelectorAll(`li.item`);
console.log(`Number of categories: ${itemsCategories.length}`);

itemsCategories.forEach(category => {
    const titleCategory = category.querySelector(`h2`).textContent;
    const elCategory = category.querySelectorAll(`li`).length;
    console.log(`Category: ${titleCategory},Elements: ${elCategory}`)
})