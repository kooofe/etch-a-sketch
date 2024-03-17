const size_change_btn = document.querySelector(".grid-size-btn");
const main_container = document.querySelector('.main-container');

size_change_btn.addEventListener('click', function () {
    main_container.innerHTML = ''
    let grid_size = prompt("Enter grid size",16);
    if (grid_size >= 100) grid_size = prompt("Please enter number less than 100")
    create_grid(grid_size)
});



function create_grid(grid_length) {
    const cellSize = 800 / grid_length;
    for (let i = 0; i < grid_length; i++) {
        const item_row = document.createElement("div");

        for (let i = 0; i < grid_length; i++) {
            const grid_item = document.createElement("div");
            grid_item.classList.add("item");
            grid_item.style.width = cellSize + 'px';
            grid_item.style.height = cellSize + 'px';
            item_row.appendChild(grid_item);
        }
        item_row.classList.add("item_row");
        main_container.appendChild(item_row);
    }
    // hover
    const grid_pixels = document.querySelectorAll(".item");
    grid_pixels.forEach((pixel) => {
        pixel.addEventListener('mouseover', () => {
            pixel.classList.add("color");
        });
    });
}

create_grid(16)