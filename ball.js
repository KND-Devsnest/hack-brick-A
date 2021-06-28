class Ball {
  constructor(
    radius,
    isMuted = false,
    colour = "white",
    startPosX = Math.floor(canvas.width / 2 + 10),
    startPosY = canvas.height - 50,
    xSpeed = -0.5,
    ySpeed = -1,
  ) {
    this.radius = radius;
    this.colour = colour;
    this.x = startPosX;
    this.y = startPosY;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.ballSound = new Audio("assets/ballhitpaddle.wav");
    this.isMuted = isMuted;
  }
  render(ctx) {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    // ctx.fillText("😂", this.x, this.y);
    ctx.beginPath();
    ctx.fillStyle = this.colour;
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fill();
    // ctx.fillStyle = "black";
  }
  changeDirection(paddle, pos) {
    if (
      this.x + this.radius > canvas.width - this.radius ||
      this.x - this.radius < 0 + this.radius
    ) {
      this.xSpeed = this.xSpeed * -1;
      this.ballSound.currentTime = 0;
      if(!(this.isMuted)) this.ballSound.play();
    }
    if (this.y - this.radius < 0 + this.radius) {
      this.ySpeed = this.ySpeed * -1;
      this.ballSound.currentTime = 0;
      if(!(this.isMuted)) this.ballSound.play();
    }
    if (
      this.y < paddle.y &&
      this.y > paddle.y - this.radius &&
      this.x > paddle.x - this.radius &&
      this.x < paddle.x + paddle.width + this.radius &&
      this.ySpeed > 0
    ) {
      this.ySpeed = this.ySpeed * -1;
      this.ballSound.currentTime = 0;
      if(!(this.isMuted)) this.ballSound.play();
    }
    if (this.y > canvas.width + this.radius) {
      return 1;
    }
    return 0;
  }
}
