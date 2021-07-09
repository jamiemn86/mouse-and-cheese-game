const mouseImg = new Image();

mouseImg.src = '/images/mouseplayer.png';

const mouse = {
  img: mouseImg,
  x: 50,
  y: 400
};

function drawMouse() {
  const mouseOnScreen = {
    draw: function () {
      ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
      loadBackground();
      ctx.drawImage(mouse.img, mouse.x, mouse.y, 40, 70);
    }
  };
  mouseOnScreen.draw();
  checkMouseCheeseCollision();
  requestAnimationFrame(drawMouse);
}

const cheeseImg = new Image();

cheeseImg.src = '/images/cheese.png';

const cheese = {
  img: cheeseImg,
  x: 415,
  y: 50
};

function drawCheese() {
  const cheeseOnScreen = {
    draw: function () {
      ctx.drawImage(cheese.img, cheese.x, cheese.y, 50, 50);
    }
  };
  cheeseOnScreen.draw();
  requestAnimationFrame(drawCheese);
}
