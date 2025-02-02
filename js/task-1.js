const itemsList = document.querySelectorAll("li.item");
console.log(`Number of categories: ${itemsList.length}`);

itemsList.forEach((item) => {
    const itemTitle = item.querySelector("h2");
    const itemsQuant = item.querySelectorAll("ul li");
    console.log(`Category: ${itemTitle.textContent}`);
    console.log(`Elements: ${itemsQuant.length}`);
});