class Alien {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.velocity = alienVelocity;
  }

  //Rendering circles
  render() {
    push();
    translate(this.pos.x, this.pos.y);
    image(alienImg, 0, 0, alienWidth, alienHeight);
    // fill(0, 0, 255);
    // ellipse(0, 0, alienWidth, alienHeight);
    pop();
  }

  //Moving Circles
  move() {
    this.pos.x += this.velocity;
  }

  //Calling the shift method
  shift() {
    this.pos.y += shiftDown;
    this.velocity *= -1;
  }
}
