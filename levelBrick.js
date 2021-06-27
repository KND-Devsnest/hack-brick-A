class levelBrick {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }
  render(ctx) {
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fill();
  }
  collisions(ball) {
    if (
      ball.y - ball.radius <= this.y + this.height &&
      ball.y + ball.radius >= this.y &&
      ball.x + ball.radius >= this.x &&
      ball.x - ball.radius <= this.x + this.width
    ) {
      return true;
    }
  }
}
