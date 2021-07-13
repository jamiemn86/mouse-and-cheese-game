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

function winMessage() {
  ctx.clearRect(0, 0, 500, 700);
  ctx.font = '20px Lucida Sans';
  ctx.textAlign = 'center';
  ctx.fillStyle = 'black';
  ctx.fillText('You got the cheese! Well done!', 250, 150);
}

function hitCatMessage() {
  ctx.clearRect(0, 0, 500, 700);
  ctx.font = '20px Lucida Sans';
  ctx.textAlign = 'center';
  ctx.fillStyle = 'black';
  ctx.fillText('A cat ate you! Too bad!', 250, 150);
}

function hitTrapMessage() {
  ctx.clearRect(0, 0, 500, 700);
  ctx.font = '20px Lucida Sans';
  ctx.textAlign = 'center';
  ctx.fillStyle = 'black';
  ctx.fillText('You got caught in a trap! Too bad!', 250, 150);
}

function runOutofTime() {
  ctx.clearRect(0, 0, 500, 700);
  ctx.font = '20px Lucida Sans';
  ctx.textAlign = 'center';
  ctx.fillStyle = 'black';
  ctx.fillText('Sorry, you ran out of time!', 250, 150);
}
