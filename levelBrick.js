const colors = ["#fff", "#ff1", "#12f", "#45F", "#ff66ff"];
class levelBrick {
  constructor(
    x,
    y,

    health = 1,
    color = "red",
    type = "level1",
    width = 40,
    height = 10
  ) {
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
    ctx.fillStyle = colors[this.health];
    ctx.fillRect(this.x, this.y, this.width, this.height);
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
