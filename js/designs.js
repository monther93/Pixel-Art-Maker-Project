// Select color input
const inputColor = document.querySelector('#colorPicker');

// Select size input
const inputHeight = document.querySelector('#inputHeight');
const inputWidth = document.querySelector('#inputWidth');

// Select the canvas
const canvas = document.querySelector('#pixelCanvas');

// When size is submitted by the user, call makeGrid()
function makeGrid() {
    // Your code goes here!
    // Clear the colored cells after clicking submit
    canvas.innerHTML = '';

    for (let r = 1; r <= inputHeight.value; r++) {
        // Creating table row element
        const row = document.createElement('tr');

        for (let d = 1; d <= inputWidth.value; d++) {
            // Creating table data cell element and
            // add it to the table row element
            const dataCell = document.createElement('td');
            row.appendChild(dataCell);
        }

        // Color the cell in when it is clicked on
        row.addEventListener('click', function(event) {
            const color = inputColor.value;
            event.target.style.backgroundColor = color;
        })

        // Adding the cells and the event listeners to the main grid canvas
        canvas.appendChild(row);
    }
}

// Prevent the default action of the 'submit' button
const sizePicker = document.querySelector('#sizePicker');
sizePicker.addEventListener('submit', function(event){
    event.preventDefault();
    makeGrid();
})
