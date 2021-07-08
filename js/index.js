const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
    drawMouse();
    drawCheese();
    enableControls();
    startCountdown();
  };
};

function startGame() {
  loadBackground();
}

function loadBackground() {
  const img = new Image();
  img.src = '/images/stonetilesbackground.png';
  const backgroundImage = {
    img: img,
    x: 0,
    draw: function () {
      ctx.drawImage(this.img, this.x, 0);
    }
  };
  backgroundImage.draw();
  requestAnimationFrame(loadBackground);
}
