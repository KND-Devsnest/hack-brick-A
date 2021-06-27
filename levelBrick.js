const colors = ["#fff", "#ff1", "#12f", "#45F", "#ff66ff", "#cc66ff"];
class levelBrick {
  constructor(
    x,
    y,

    health = 1,
    color = "red",
    type = "level1",
    width = Math.floor(canvas.width / 10),
    height = 40
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
    
    ctx.strokeStyle = "red";
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.stroke();
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
