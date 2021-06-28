class Paddle {
  constructor(width, height, ctx, colour = "black") {
    this.width = width;
    this.height = height;
    this.ctx = ctx;
    this.canvas = canvas;

    this.x = Math.floor(canvas.width / 2);
    this.y = canvas.height - 50;

    this.colour = colour;
  }

  render(pos, ctx) {
    // move paddle on mouse change -> access pos variable
    // this.x = pos - Math.floor(this.width/2);;
    // if (pos < 0) {
    //   pos = 0;
    //   this.x = pos;
    // } else if (pos > canvas.width - this.width) {
    //   pos = canvas.width - this.width;
    //   this.x = pos - Math.floor(this.width/2);
    // }
    let paddleXPos = pos - Math.floor(this.width / 2);
    if (paddleXPos < 0) this.x = 0;
    else if (paddleXPos + this.width > canvas.width) {
      this.x = canvas.width - this.width;
    } else {
      this.x = paddleXPos;
    }
    ctx.fillStyle = "#FFF";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
