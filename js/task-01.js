
const itemsCounter = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemsCounter.length}`);



itemsCounter.forEach(element => {
   const itemTitle = element.firstElementChild.textContent;
   const itemLength = element.lastElementChild.children.length;
    console.log(`Category: ${itemTitle} 
    Elements: ${itemLength}`)
});
