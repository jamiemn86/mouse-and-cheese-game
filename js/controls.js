function moveUp() {
  mouse.y -= 15;
  mouseCoordinates.mouseY = mouse.y;
  keepMouseInBoundary();
}

function moveDown() {
  mouse.y += 15;
  mouseCoordinates.mouseY = mouse.y;
  keepMouseInBoundary();
}

function moveRight() {
  mouse.x += 15;
  mouseCoordinates.mouseX = mouse.x;
  keepMouseInBoundary();
}

function moveLeft() {
  mouse.x -= 15;
  mouseCoordinates.mouseX = mouse.x;
  keepMouseInBoundary();
}

function keepMouseInBoundary() {
  if (mouse.x >= 465) {
    mouse.x = 465;
  } else if (mouse.x <= 5) {
    mouse.x = 5;
  }
  if (mouse.y >= 455) {
    mouse.y = 455;
  } else if (mouse.y <= 5) {
    mouse.y = 5;
  }
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
