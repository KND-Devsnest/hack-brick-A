let score = 0;
let lives = 3;
let currentlevel = "level1";
let activePowerups = [];
// const background = new Image();
// background.src = images["bg"];
const canvas = document.getElementById("main");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
pos = Math.floor(canvas.width / 2);
ctx = canvas.getContext("2d");
let ball = new Ball(Math.floor(canvas.width / 64), "red");

ctx.font = "20px Georgia";
let paddle = new Paddle(Math.floor(canvas.width / 8), 10, ctx, canvas, "black");
let bricks = [];
function loadLevel() {
  levels[currentlevel].forEach((level) => {
    let temp = new levelBrick(level.x, level.y, level.health);
    bricks.push(temp);
  });
}
loadLevel();
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;

  canvas.height = window.innerHeight;
  ball = new Ball(Math.floor(canvas.width / 64), "red");
  paddle = new Paddle(Math.floor(canvas.width / 8), 10, ctx, canvas, "black");
});
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#111";

  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#fff";
  // ctx.drawImage(background, 0, 0, 500, 500);
  paddle.render(pos, ctx);
  ball.render(ctx);
  ctx.fillStyle = "#fff";
  ctx.fillText(`Score: ${score}`, canvas.width - 100, canvas.height - 20);
  ctx.fillText(`Lives: ${lives}`, 0 + 20, canvas.height - 20);
  activePowerups.forEach((powerup, i) => {
    if (powerup) {
      powerup.render(ctx);
      if (powerup.powerCollision(paddle, pos)) {
        ball.radius *= 2;
        // let temp2 = ball.ySpeed;
        // ball.ySpeed *= 0.5;
        // setTimeout(() => {
        //   ball.ySpeed = temp2;
        // }, 15000);

        delete activePowerups[i];
      }
    }
  });
  for (let i = 0; i < bricks.length; i++) {
    if (bricks[i].health >= 0) {
      bricks[i].render(ctx);
      if (bricks[i].collisions(ball)) {
        if (bricks[i].health === 4) {
          let tempPowerup = new Powerup(10, bricks[i]);
          activePowerups.push(tempPowerup);
        }
        bricks[i].health -= 1;
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
      gameOver();
      return 0;
    }

    ball = new Ball(10, "red");
    new Paddle(60, 10, ctx, canvas);
    pos = Math.floor(canvas.width / 2);
  }
}
let engine = setInterval(() => {
  draw();
}, 1);

document.addEventListener("mousemove", (e) => {
  pos = e.clientX;
});
function gameOver() {}
