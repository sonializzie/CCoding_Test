let myArrow, dy, dx;

function setup() {
  createCanvas(710, 400);
  myArrow = new Arrow(width / 2, height / 2, 0);
}

function draw() {
  background(152, 251, 152);
  myArrow.updateValues();
  myArrow.drawArrow();
}
