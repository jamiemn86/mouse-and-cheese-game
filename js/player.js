// Mouse

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

// Cheese

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

// Cats

let gameFrame = 0;

function animateCat() {
  handleCats();
  gameFrame++;
  requestAnimationFrame(animateCat);
}

const catsArray = [];

class Cat {
  constructor() {
    this.x = Math.random() * 500;
    this.y = 450;
    this.radius = 50;
    this.speed = Math.random() * 5 + 1;
    this.distance;
  }
  update() {
    this.y -= this.speed;
  }
  draw() {
    ctx.fillStyle = 'blue';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
    ctx.stroke();
  }
}

function handleCats() {
  if (gameFrame % 100 == 0) {
    catsArray.push(new Cat());
  }
  for (let i = 0; i < catsArray.length; i++) {
    catsArray[i].update();
    catsArray[i].draw();
  }
}
