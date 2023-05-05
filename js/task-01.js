const elementsList = document.querySelector(`#Categories`);
const itemsCategories = elementsList.querySelectorAll(`.item`);
console.log(`Number of categories:${temsCategories.length}`);

itemsCategories.forEach(item => {
    console.log(`Category:${item.querySelector(`h2`).textContent}`);
    console.log(`Elements:${item.querySelectorAll(`li`).length}`)
})

