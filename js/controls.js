function moveUp() {
  mouse.y -= 15;
  mouseCoordinates.mouseY = mouse.y;
}

function moveDown() {
  mouse.y += 15;
  mouseCoordinates.mouseY = mouse.y;
}

function moveRight() {
  mouse.x += 15;
  mouseCoordinates.mouseX = mouse.x;
}

function moveLeft() {
  mouse.x -= 15;
  mouseCoordinates.mouseX = mouse.x;
}

function enableControls() {
  window.addEventListener('keydown', (event) => {
    const key = event.code;
    switch (key) {
      case 'ArrowUp':
        moveUp();
        break;
      case 'ArrowDown':
        moveDown();
        break;
      case 'ArrowRight':
        moveRight();
        break;
      case 'ArrowLeft':
        moveLeft();
        break;
    }
  });
}
