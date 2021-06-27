class Paddle {
  constructor(width, height, ctx, canvas) {
    this.width = width;
    this.height = height;
    this.ctx = ctx;
    this.canvas = canvas;

    this.x = Math.floor(canvas.width / 2);
    this.y = canvas.height - 10;

    ctx.fillStyle = "black";
  }

  render(pos) {
    // move paddle on mouse change -> access pos variable
    this.x = pos;
    if (pos < 0) {
      pos = 0;
      this.x = pos;
    } else if (pos > canvas.width - this.width) {
      pos = canvas.width - this.width;
      this.x = pos;
    }
    this.ctx.fillRect(this.x, this.y, this.width, this.height); // create rectangle
    this.ctx.fill();
  }
}
