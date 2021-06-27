class Ball {
  constructor(radius, colour, startPosX, startPosY) {
    this.radius = radius;
    this.colour = colour;
    this.x = startPosX;
    this.y = startPosY;
    this.xSpeed = 1;
    this.ySpeed = 2.8;
  }
  render(ctx) {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    ctx.beginPath();
    ctx.arc(this.x, this.y, 13, 0, 2 * Math.PI);
    ctx.fill();
  }
  changeDirection() {
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.xSpeed = this.xSpeed * -1;
    }
    if (this.y - this.radius < 0) {
      this.ySpeed = this.ySpeed * -1;
    }
    if (
      this.x + this.radius >= pos &&
      this.x - this.radius <= pos + 50 &&
      this.y + this.radius >= 450 &&
      this.y + this.radius <= 460
    ) {
      this.ySpeed = this.ySpeed * -1;
    }
  }
}
