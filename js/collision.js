let mouseCoordinates = {
  mouseX: 0,
  mouseY: 0
};

function checkMouseCheeseCollision() {
  if (mouseCoordinates.mouseX > 380 && mouseCoordinates.mouseY < 85) {
    alert('You got the cheese! Well done!');
  }
}

const mouseClick = {
  x: null,
  y: null
};

canvas.addEventListener('click', function (event) {
  mouseClick.x = event.x;
  mouseClick.y = event.y;
  console.log(event);
});