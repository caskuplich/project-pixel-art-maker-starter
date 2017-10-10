// Select color input
const colorPicker = $('#colorPicker');

// Select size input
const inputHeight = $('#input_height');
const inputWidth = $('#input_width');

// Select the grid container
const canvas = $('#pixel_canvas');

// When size is submitted by the user, create the grid
$('#sizePicker').submit(function (evt) {
  evt.preventDefault();
  clearGrid();
  makeGrid();
});

// When a grid cell is clicked, paint the cell with the selected color
canvas.on('click', 'td', function (evt) {
  const color = colorPicker.val();
  $(this).css('background-color', color);
});

// Deletes all grid cells from the grid container
function clearGrid() {
  canvas.empty();
}

// Creates the grid with the size submitted by the user
function makeGrid() {
  const height = inputHeight.val();
  const width = inputWidth.val();

  for (let i = 0; i < height; i++) {
    const row = $('<tr></tr>');
    for (let j = 0; j < width; j++) {
      row.append('<td></td>');
    }
    canvas.append(row);
  }
}

makeGrid();
