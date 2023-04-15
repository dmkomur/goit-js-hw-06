const commonListRef = document.querySelector('#categories');
const commonListItemRef = commonListRef.querySelectorAll('.item');

console.log(`Number of categories: ${commonListRef.children.length}`);

commonListItemRef.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${ item.lastElementChild.children.length}`);
});