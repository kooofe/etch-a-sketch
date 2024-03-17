const main_container = document.querySelector('.main-container');
const size_change_btn = document.querySelector('.grid-size-btn');
const color_randomize_btn = document.querySelector('.color-randomize-btn');
const clear_canvas_btn = document.querySelector('.clear-canvas');

let randomize = false

function randomColor() {
    return Math.floor(Math.random() * 255)
}

size_change_btn.addEventListener('click', function () {
    main_container.innerHTML = ''
    let grid_size = prompt("Enter grid size", 16);
    if (grid_size >= 100) grid_size = prompt("Please enter number less than 100");
    create_grid(grid_size)
});

color_randomize_btn.addEventListener('click', function () {
    randomize = !randomize;
});

clear_canvas_btn.addEventListener('click', function (){
    const pixels = document.querySelectorAll(".item");
    pixels.forEach((pixel) => {
        pixel.style.background = 'white'
    });
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
            if (randomize === true) {
                pixel.style.background = `rgb(${randomColor()},${randomColor()},${randomColor()})`;
            } else {
                pixel.style.background = 'blue';
            }
        });
    });
}

// initial canvas
create_grid(16)