
const categoriesAll = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesAll.length}`);


categoriesAll.forEach(element => {
    const list = element.lastElementChild;
    const listElements = list.children;

    const titleText = element.firstElementChild.textContent;

    console.log(`Category: ${titleText}`);
    console.log(`Elements: ${listElements.length}`);
})