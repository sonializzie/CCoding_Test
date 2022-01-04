//Screen Variable
let screenWidth = 500;
let screenHeight = 500;

//Alien Variables
let aliens = [];
let alienWidth = 20;
let alienHeight = 20;
let alienVelocity = 0.5;
let numCols = 12;
let numRows = 7;
let hSpace = 30;
let vSpace = 30;
let xOffset = (screenWidth - (numCols - 1) * hSpace) / 2;
let yOffset = 20;
let shiftDown = 40;
let alienImg;

//Shooter Variables
let shooterWidth = 100;
let shooterHeight = 20;
let shooter;

//Bullet Variables
let bullets = [];
let bulletWidth = 10;
let bulletHeight = 10;
let bulletVelocity = 5;

//Preloading Images
function preload() {
  alienImg = loadImage("assets/spaceInvaders.png");
}

function setup() {
  populateAliens();
  shooter = new Shooter(screenWidth / 2, screenHeight - shooterHeight / 2);
  createCanvas(screenWidth, screenHeight);
  background(255);
}

function draw() {
  background(0);
  shooter.render();
  shooter.move();
  let shift = false;

  aliens.forEach((alien) => {
    alien.move();
    alien.render();
    alien.pos.x >= screenWidth ? (shift = true) : null;
    alien.pos.x <= 0 ? (shift = true) : null;
  });

  //Shift Condition
  if (shift) {
    aliens.forEach((alien) => {
      alien.shift();
    });
  }

  for (let i = bullets.length - 1; i >= 0; i--) {
    bullets[i].move();
    bullets[i].render();
    for (let j = aliens.length - 1; j >= 0; j--) {
      if (bullets[i].hits(aliens[j])) {
        aliens.splice(j, 1);
        bullets.splice(i, 1);
        break;
      }
    }
  }
}

//Listener Functions
function keyPressed() {
  if (keyCode === 32) {
    bullets.push(new Bullet(shooter.pos.x, screenHeight - shooterHeight));
  }

  if (keyCode === RIGHT_ARROW) {
    shooter.setDirection(1);
  } else if (keyCode === LEFT_ARROW) {
    shooter.setDirection(-1);
  }
}

//Calling populateAliens()
function populateAliens() {
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      aliens.push(new Alien(col * hSpace + xOffset, row * vSpace + yOffset));
    }
  }
}
