class Powerup {
  constructor(radius, brick, colour = "blue", xSpeed = 0, ySpeed = 1) {
    this.radius = radius;
    this.colour = colour;
    this.x = brick.x;
    this.y = brick.y;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.soundPoweredUp = new Audio("assets/powerup.wav");
  }
  render(ctx) {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    ctx.beginPath();
    ctx.fillStyle = this.colour;
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fill();
  }
  powerCollision(paddle, pos) {
    if (
      this.y < paddle.y &&
      this.y > paddle.y - this.radius &&
      this.x > paddle.x - this.radius &&
      this.x < paddle.x + paddle.width + this.radius &&
      this.ySpeed > 0
    ) {
      return true;
    }
  }
}
