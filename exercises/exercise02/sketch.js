let myBall1, myBall2, vy, vx;

function setup() {
  createCanvas(500, 500);
  background(0);
  myBall1 = new Ball(0, 0, 2, 3, 15, 255);
  myBall2 = new Ball(250, 0, 2, 3, 15, 255);

  myBall1.vx = 3 * cos(45);
  myBall1.vy = 2 * sin(45);

  myBall2.vx = 3 * cos(22.5);
  myBall2.vy = 2 * sin(22.5);
  angleMode(DEGREES);
}

function draw() {
  background(0);

  //myBall1 Code
  if (myBall1.x > 500 / 2) {
    myBall1.vx = -myBall1.vx;
  }

  if (myBall1.x < 0) {
    myBall1.vx = -myBall1.vx;
  }

  if (myBall1.y > 500 / 2) {
    myBall1.vy = -myBall1.vy;
  }

  if (myBall1.y < 0) {
    myBall1.vy = -myBall1.vy;
  }

  myBall1.moveBall();
  myBall1.drawBall();

  //myBall2 Code
  if (myBall2.x > 500 / 2 || myBall2.x > 500 * 2) {
    myBall2.vx = -myBall2.vx;
  }

  if (myBall2.x < 0 || myBall2.x < 0) {
    myBall2.vx = -myBall2.vx;
  }

  if (myBall2.y > 500 / 2 || myBall2.y > 500 * 2) {
    myBall2.vy = -myBall2.vy;
  }

  if (myBall2.y < 0 || myBall2.y < 0) {
    myBall2.vy = -myBall2.vy;
  }

  myBall2.moveBall();
  myBall2.drawBall();
}
