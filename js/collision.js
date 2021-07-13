// Mouse cheese collision check

let mouseCoordinates = {
  mouseX: 0,
  mouseY: 0
};

function checkMouseCheeseCollision() {
  if (mouseCoordinates.mouseX > 380 && mouseCoordinates.mouseY < 85) {
    winMessage();
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

let catAudio = new Audio('/sound/catmew.wav');

function checkMouseCatCollision() {
  for (let i = 0; i < catsArray.length; i++) {
    if (catsArray[i].distance < catsArray[i].radius + mouse.radius) {
      catAudio.play();
      hitCatMessage();
    }
  }
}

// Mouse trap collision check

function checkMouseTrapCollision() {
  for (let i = 0; i < trapsArray.length; i++) {
    if (trapsArray[i].distance < trapsArray[i].radius + mouse.radius) {
      hitTrapMessage();
    }
  }
}

// Collision messages

function winMessage() {
  ctx.clearRect(0, 0, 500, 700);
  ctx.font = '20px Lucida Sans';
  ctx.textAlign = 'center';
  ctx.fillStyle = 'black';
  ctx.fillText('You got the cheese! Well done!', 250, 150);
  for (let i = 0; i < catsArray.length; i++) {
    catsArray[i].speed = 0;
  }
}

function hitCatMessage() {
  ctx.clearRect(0, 0, 500, 700);
  ctx.font = '20px Lucida Sans';
  ctx.textAlign = 'center';
  ctx.fillStyle = 'black';
  ctx.fillText('A cat ate you! Too bad!', 250, 150);
  for (let i = 0; i < catsArray.length; i++) {
    catsArray[i].speed = 0;
  }
}

function hitTrapMessage() {
  ctx.clearRect(0, 0, 500, 700);
  ctx.font = '20px Lucida Sans';
  ctx.textAlign = 'center';
  ctx.fillStyle = 'black';
  ctx.fillText('You got caught in a trap! Too bad!', 250, 150);
  for (let i = 0; i < catsArray.length; i++) {
    catsArray[i].speed = 0;
  }
}
