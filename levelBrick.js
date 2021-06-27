class levelBrick {
  constructor(x, y, width, height, color, health = 1, type = "smol") {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.img = new Image();
    this.type = type;
    this.health = health;
    this.img.src = images[this.type];
  }
  render(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
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
