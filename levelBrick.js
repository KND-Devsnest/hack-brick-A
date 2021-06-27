class levelBrick {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }
  render(ctx) {
    ctx.rect(x, y, width, height);
    ctx.fill()
  }
}
