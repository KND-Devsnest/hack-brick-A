let score = 0;
let lives = 3;
const background = new Image();
background.src = images["bg"];
const canvas = document.getElementById("main");
pos = Math.floor(canvas.width / 2);
ctx = canvas.getContext("2d");
let ball = new Ball(10, "red");
ctx.font = "20px Georgia";
let paddle = new Paddle(60, 10, ctx, canvas);
let bricks = [];
for (let i = 0; i < 100; i += 10) {
  let temp = new levelBrick(200, 100 + i, 10, 10, "red");
  bricks.push(temp);
}

function draw() {
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(background, 0, 0, 500, 500);
  paddle.render(pos);
  ball.render(ctx);
  ctx.fillText(`Score: ${score}`, canvas.width - 100, canvas.height - 20);
  ctx.fillText(`Lives: ${lives}`, 0 + 20, canvas.height - 20);
  for (let i = 0; i < bricks.length; i++) {
    if (bricks[i] !== 0) {
      bricks[i].render(ctx);
      if (bricks[i].collisions(ball)) {
        bricks[i] = 0;
        score += 1;

        ball.xSpeed *= -1;
        ball.ySpeed *= -1;
      }
    }
  }
  if (ball.changeDirection(paddle, pos)) {
    lives -= 1;
    if (lives == -1) {
      clearInterval(engine);
      return 0;
    }

    ball = new Ball(10, "red");
    new Paddle(60, 10, ctx, canvas);
    pos = Math.floor(canvas.width / 2);
  }
  console.log(lives);
}
var engine = setInterval(() => {
  draw();
}, 1);

document.addEventListener("mousemove", (e) => {
  pos = e.clientX;
});
