function moveUp() {
  mouse.y -= 5;
}

function moveDown() {
  mouse.y += 5;
}

function moveRight() {
  mouse.x += 5;
}

function moveLeft() {
  mouse.x -= 5;
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
