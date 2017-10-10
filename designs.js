// Select color input

// Select size input
const inputHeight = $('#input_height');
const inputWidth = $('#input_width');

// Select the grid container
const canvas = $('#pixel_canvas');

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (evt) {
  evt.preventDefault();
  clearGrid();
  makeGrid();
});

function clearGrid() {
  canvas.empty();
}

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
