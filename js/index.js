const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    gameExplanation();
    setTimeout(startGame, 4000);
  };
};

function startGame() {
  loadBackground();
  drawMouse();
  drawCheese();
  enableControls();
  startCountdown();
  animateCat();
  loadTraps();
}

function gameExplanation() {
  ctx.font = '20px Lucida Sans';
  ctx.textAlign = 'center';
  ctx.fillStyle = 'black';
  ctx.fillText('Use your keyboard to navigate. Get Ready!', 250, 150);
}

function loadBackground() {
  const img = new Image();
  img.src = '/images/stonetilesbackground.png';
  ctx.globalAlpha = 0.2;
  const backgroundImage = {
    img: img,
    x: 0,
    draw: function () {
      ctx.drawImage(this.img, this.x, 0);
    }
  };
  backgroundImage.draw();
  requestAnimationFrame(loadBackground);
  ctx.globalAlpha = 1;
}
