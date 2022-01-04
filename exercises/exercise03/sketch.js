let myArrow, vy, vx, c;
let angle = 0;

function setup() {
  createCanvas(710, 400);
  myArrow = new ArrowUpdated(width / 2, height / 2, 2);
  angle = atan2(vx / vy);
  angleMode(RADIANS);
}

function draw() {
  background(152, 251, 152);

  rotate(angle);
  angle += 0.05;
  myArrow.drawArrow();
  myArrow.moveArrow();
}
