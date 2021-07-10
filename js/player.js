// Mouse

const mouseImg = new Image();

mouseImg.src = '/images/mouseplayer.png';

const mouse = {
  img: mouseImg,
  x: 50,
  y: 400,
  radius: 28
};

function drawMouse() {
  const mouseOnScreen = {
    draw: function () {
      ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
      loadBackground();
      ctx.drawImage(mouse.img, mouse.x, mouse.y, 40, 70);
      // grey circle around mouse for collision detection
      ctx.strokeStyle = 'grey';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(mouse.x + 20, mouse.y + 25, mouse.radius, 0, Math.PI * 2);
      ctx.closePath();
      ctx.stroke();
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

const catImg = new Image();

catImg.src = '/images/cat.png';

const cat = {
  img: catImg
};

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
    this.radius = 40;
    this.speed = Math.random() * 4 + 1;
    this.distance;
  }
  update() {
    this.y -= this.speed;
  }
  draw() {
    ctx.drawImage(cat.img, this.x - 40, this.y - 40, 80, 80);
    ctx.strokeStyle = 'grey';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.stroke();
  }
}

function handleCats() {
  if (gameFrame % 150 == 0) {
    catsArray.push(new Cat());
  }
  for (let i = 0; i < catsArray.length; i++) {
    catsArray[i].update();
    catsArray[i].draw();
  }
}
