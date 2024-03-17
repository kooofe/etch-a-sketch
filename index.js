// 16x16 grid using flex
const main_container = document.querySelector('.main-container');

for (let i = 0; i < 16; i++) {
    const item_row = document.createElement("div");

    for (let i = 0; i < 16; i++) {
        const grid_item = document.createElement("div");
        grid_item.classList.add("item");
        item_row.appendChild(grid_item);
    }
    item_row.classList.add("item_row");
    main_container.appendChild(item_row);
}

const grid_pixels = document.querySelectorAll(".item");

grid_pixels.forEach((pixel) => {
    pixel.addEventListener('mouseover',() => {
       pixel.classList.add("color");
    });
});