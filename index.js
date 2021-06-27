let x = 100;
let y = 100;
let xspeed = 1;
let yspeed = 2.8;
let pos = 20;
const ball = new Ball(10, "red", 100, 100);
const canvas = document.getElementById("main");
const paddle = new Paddle()
let bricks = [];
for (let i = 0; i < 100; i += 10) {
  let temp = new levelBrick(200 + i, 100, 10, 10, "red");
  bricks.push(temp);
}
ctx = canvas.getContext("2d");
function draw(evt) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ball.render(ctx);
  for (let i = 0; i < bricks.length; i++) {
    if (bricks[i] !== 0) {
      bricks[i].render(ctx);
      if (bricks[i].collisions(ball)) {
        bricks[i] = 0;
        ball.xSpeed *= -1;
        ball.ySpeed *= -1;
      }
    }
  }
  ball.changeDirection();
  ctx.beginPath();
  ctx.rect(pos, 450, 50, 10);
  ctx.stroke();
}
setInterval(() => {
  draw();
}, 20);

canvas.addEventListener("mousemove", (e) => {
  pos = e.clientX;
});
function drawBoard() {
  for (let i of level1) {
    ctx.beginPath();
    ctx.rect(i, 30, 50, 10);
    ctx.stroke();
  }
}

function checkCollision() {}
