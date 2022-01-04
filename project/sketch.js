//Screen Variable
let screenWidth = 500;
let screenHeight = 500;

//Circle Variable
let circleX = 210; //location of circleX
let circleY = 30; //location of circleY

function setup() {
  createCanvas(screenWidth, screenHeight); //From the screen variable
}

function draw() {
  background(76, 127, 127); //background color for the maze
  fill(255); //fill for the circle(ball)
  ellipse(circleX, circleY, 20, 20); //size of the circle and location

  //Keybuttons for Up & Down
  //Conditions if and else if
  //Strictly Equality Operators ===
  // 38 is Up Arrow Key
  // 40 is Down Arrow Key
  if (keyIsPressed && keyCode === 40) {
    circleY = circleY + 2;
  } else if (keyIsPressed && keyCode === 38) {
    circleY = circleY - 2;
  }

  //direction of the circle(ball) when it goes up & down
  if (circleY > 450) {
    circleY = 450;
  } else if (circleY < 0) {
    circleY = 0;
  }

  //Keybuttons for Right & Left
  //Conditions if and else if
  //Strictly Equality Operators ===
  // 39 is Right Arrow Key
  // 37 is Left Arrow Key
  if (keyIsPressed && keyCode === 39) {
    circleX = circleX + 2;
  } else if (keyIsPressed && keyCode === 37) {
    circleX = circleX - 2;
  }

  //direction of the circle(ball) when it goes left & right
  if (circleX > 450) {
    circleX = 450;
  } else if (circleX < 0) {
    circleX = 0;
  }

  //Design of the Maze using line
  stroke(255);
  strokeWeight(6);
  //Top left line corner
  line(50, 50, 190, 50);
  line(190, 50, 190, 130);
  line(90, 90, 150, 90);
  line(150, 90, 150, 170);
  line(50, 50, 50, 130);
  line(50, 130, 110, 130);
  line(83, 130, 83, 170);
  line(120, 170, 230, 170);
  line(230, 50, 230, 80);
  line(230, 120, 230, 250);
  line(270, 50, 270, 170);
  line(50, 210, 190, 210);
  line(270, 250, 160, 250);
  line(120, 210, 120, 290);
  line(160, 330, 80, 330);
  line(80, 330, 80, 250);
  line(160, 330, 160, 290);
  line(160, 290, 230, 290);
  line(270, 250, 270, 330);
  line(270, 330, 200, 330);
  line(200, 410, 200, 290);
  line(50, 130, 50, 450);
  line(50, 370, 100, 370);
  line(140, 370, 200, 370);
  line(160, 410, 80, 410);
  line(80, 410, 80, 450);
  line(200, 410, 240, 410);
  line(270, 290, 350, 290);
  line(350, 290, 350, 210);
  line(350, 210, 270, 210);
  line(310, 210, 310, 250);
  line(270, 170, 310, 170);
  line(240, 370, 310, 370);
  line(275, 370, 275, 450);
  line(310, 370, 310, 330);
  line(350, 330, 415, 330);
  line(350, 330, 350, 370);
  line(310, 410, 310, 450);
  line(310, 410, 350, 410);
  line(390, 410, 390, 370);
  line(390, 370, 450, 370);
  line(390, 410, 420, 410);
  line(390, 290, 450, 290);
  line(350, 170, 385, 170);
  line(350, 210, 420, 210);
  line(390, 250, 390, 330);
  line(420, 210, 420, 250);
  line(385, 210, 385, 90);
  line(420, 170, 450, 170);
  line(310, 90, 310, 130);
  line(350, 90, 350, 50);
  line(310, 130, 385, 130);
  line(385, 90, 420, 90);
  line(420, 130, 420, 170);
  line(230, 50, 450, 50);
  line(450, 50, 450, 290);
  line(450, 330, 450, 450);
  //bottom line
  line(50, 450, 450, 450);
  noStroke();
}
