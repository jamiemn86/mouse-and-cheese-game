// Mouse

const mouseImg = new Image();

mouseImg.src = '/images/mouseplayer.png';

const mouse = {
  img: mouseImg,
  x: 50,
  y: 400,
  radius: 15
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
      // ctx.stroke();
    }
  };
  mouseOnScreen.draw();
  checkMouseCheeseCollision();
  checkMouseCatCollision();
  checkMouseTrapCollision();
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
    this.x = Math.random() * 350 + 150;
    this.y = 580;
    this.radius = 35;
    this.speed = Math.random() * 4 + 1;
    this.distance;
  }
  update() {
    this.y -= this.speed;
    const dx = this.x - mouse.x;
    const dy = this.y - mouse.y;
    this.distance = Math.sqrt(dx * dx + dy * dy);
  }
  draw() {
    if (this.y < 450) {
      ctx.drawImage(cat.img, this.x - 40, this.y - 40, 80, 80);
      ctx.strokeStyle = 'grey';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.closePath();
      // ctx.stroke();
    } else {
      return;
    }
  }
}

function handleCats() {
  if (gameFrame % 150 == 0) {
    catsArray.push(new Cat());
  }
  for (let i = 0; i < catsArray.length; i++) {
    catsArray[i].update();
    catsArray[i].draw();
    if (catsArray[i].y < 0) {
      catsArray.splice(i, 1);
    }
  }
}

// Mouse traps

const trapsArray = [];

const trapImg = new Image();

trapImg.src = '/images/mousetrap.png';

const trap = {
  img: trapImg
};

class Trap {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 12;
    const dx = this.x - mouse.x;
    const dy = this.y - mouse.y;
    this.distance = Math.sqrt(dx * dx + dy * dy);
  }
  draw() {
    ctx.drawImage(trap.img, this.x - 22, this.y - 22, 40, 40);
    ctx.strokeStyle = 'grey';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.closePath();
    // ctx.stroke();
  }
}

function loadTraps() {
  const trapOne = new Trap(200, 200);
  const trapTwo = new Trap(50, 200);
  const trapThree = new Trap(400, 200);
  const trapFour = new Trap(400, 400);
  const trapFive = new Trap(80, 300);
  const trapSix = new Trap(200, 50);
  const trapSeven = new Trap(300, 240);
  trapsArray.push(
    trapOne,
    trapTwo,
    trapThree,
    trapFour,
    trapFive,
    trapSix,
    trapSeven
  );
  trapOne.draw();
  trapTwo.draw();
  trapThree.draw();
  trapFour.draw();
  trapFive.draw();
  trapSix.draw();
  trapSeven.draw();
  requestAnimationFrame(loadTraps);
}
