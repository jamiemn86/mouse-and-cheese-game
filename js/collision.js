// Mouse cheese collision check

let mouseCoordinates = {
  mouseX: 0,
  mouseY: 0
};

function checkMouseCheeseCollision() {
  if (mouseCoordinates.mouseX > 380 && mouseCoordinates.mouseY < 85) {
    alert('You got the cheese! Well done!');
  }
}

// Mouse click function for checking exact co-ordinates on the canvas in the console

const mouseClick = {
  x: null,
  y: null
};

canvas.addEventListener('click', function (event) {
  mouseClick.x = event.x;
  mouseClick.y = event.y;
  console.log(event);
});

// Mouse cat collision check

function checkMouseCatCollision() {
  for (let i = 0; i < catsArray.length; i++) {
    if (catsArray[i].distance < catsArray[i].radius + mouse.radius) {
      alert('You were eaten by a cat, you lose!');
    }
  }
}

// Mouse trap collision check

function checkMouseTrapCollision() {
  for (let i = 0; i < trapsArray.length; i++) {
    if (trapsArray[i].distance < trapsArray[i].radius + mouse.radius) {
      alert('You were caught in a trap, you lose!');
    }
  }
}
