const mouseImg = new Image();

mouseImg.src = '/images/mouseplayer.png';

const mouse = {
  img: mouseImg,
  x: 115,
  y: 320
};

function drawMouse() {
  const mouseOnScreen = {
    draw: function () {
      ctx.drawImage(mouse.img, mouse.x, mouse.y, 50, 90);
    }
  };
  mouseOnScreen.draw();
  requestAnimationFrame(drawMouse);
}