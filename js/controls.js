function moveUp() {
  mouse.y -= 15;
}

function moveDown() {
  mouse.y += 15;
}

function moveRight() {
  mouse.x += 15;
}

function moveLeft() {
  mouse.x -= 15;
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
