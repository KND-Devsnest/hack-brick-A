class Ball {
  constructor(
    radius,
    colour,
    startPosX = Math.floor(canvas.width / 2 + 10),
    startPosY = canvas.height - 50,
    xSpeed = 1,
    ySpeed = 2.8
  ) {
    this.radius = radius;
    this.colour = colour;
    this.x = startPosX;
    this.y = startPosY;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
  }
  render(ctx) {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    ctx.beginPath();
    ctx.arc(this.x, this.y, 13, 0, 2 * Math.PI);
    ctx.fill();
  }
  changeDirection(paddle, pos) {
    if (
      this.x + this.radius > canvas.width - this.radius ||
      this.x - this.radius < 0 + this.radius
    ) {
      this.xSpeed = this.xSpeed * -1;
    }
    if (this.y - this.radius < 0 + this.radius) {
      this.ySpeed = this.ySpeed * -1;
    }
    if (
      this.x + this.radius >= pos &&
      this.x - this.radius <= pos + paddle.width &&
      this.y + this.radius >= paddle.y &&
      this.y + this.radius <= paddle.y + 10
    ) {
      this.ySpeed = this.ySpeed * -1;
    }
    if (this.y > canvas.width + this.radius) {
      return 1;
    }
    return 0;
  }
}
