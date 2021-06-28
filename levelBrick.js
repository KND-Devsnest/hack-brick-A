const colors = ["rgba(188, 74, 60, 0.1)", "rgba(188, 74, 60, 0.4)", "rgba(188, 74, 60, 0.6)", "rgba(188, 74, 60, 0.6)", "rgba(188, 74, 60, 1)", "rgba(188, 74, 60, 1)"];
class levelBrick {
  constructor(
    x,
    y,

    health = 1,
    type = "level1",
    width = Math.floor(canvas.width / 10),
    height = 40
  ) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.img = new Image();
    this.type = type;
    this.health = health;
    this.img.src = images[this.type];
  }
  render(ctx) {
    if (this.type === "powerup") {
      this.img.src = images["powerup"];
      ctx.drawImage(this.img, this.x, this.y, this.height, this.height);
    } else {
      ctx.fillStyle = colors[this.health];

      ctx.strokeStyle = "#8C7572";
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.fillRect(this.x, this.y, this.width, this.height);
      ctx.stroke();
    }
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
