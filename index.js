let score = 0;
let lives = 1;
let currentlevel = 1;
let activePowerups = [];
let isPowerActive = false;
let powerNames = Object.keys(allPowerups);
let engine = null;
let currentUsedPowerUpObject = null;
// const background = new Image();
// background.src = images["bg"];
const gameOverSound = new Audio("assets/gameover.wav");
soundPoweredUp = new Audio("assets/powerup.wav");
const canvas = document.getElementById("main");
canvas.width = 640;
canvas.height = 480;

pos = Math.floor(canvas.width / 2);
ctx = canvas.getContext("2d");
let ball = new Ball(Math.floor(canvas.width / 64), "red");

ctx.font = "20px Georgia";
let paddle = new Paddle(Math.floor(canvas.width / 8), 10, ctx, canvas, "black");
let bricks = [];
function loadLevel() {
  levels["level" + currentlevel].forEach((level) => {
    console.log(level.type);
    let temp = new levelBrick(level.x, level.y, level.health, level.type);
    bricks.push(temp);
  });
}
function init() {
  paddle = new Paddle(Math.floor(canvas.width / 8), 10, ctx, canvas, "black");
  ball = new Ball(Math.floor(canvas.width / 64), "red");
}
// window.addEventListener("resize", () => {
//   canvas.width = window.innerWidth;

//   canvas.height = window.innerHeight;
//   ball = new Ball(Math.floor(canvas.width / 64), "red");
//   paddle = new Paddle(Math.floor(canvas.width / 8), 10, ctx, canvas, "black");
// });
start();
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
        if (!isPowerActive) {
          temp = Math.floor(Math.random() * powerNames.length);
          allPowerups[powerNames[temp]]();
          soundPoweredUp.play();
        }

        delete activePowerups[i];
      }
    }
  });
  for (let i = 0; i < bricks.length; i++) {
    let temp = 0;
    if (bricks[i].health >= 0) {
      bricks[i].render(ctx);
      if (bricks[i].collisions(ball)) {
        if (bricks[i].type === "powerup") {
          let tempPowerup = new Powerup(10, bricks[i]);
          activePowerups.push(tempPowerup);
        }
        bricks[i].health -= 1;
        score += 1;

        ball.xSpeed *= -1;
        ball.ySpeed *= -1;
      }
    } else {
      temp += 1;
    }
    if (temp === bricks.length) {
      clearInterval(engine);
      currentlevel += 1;
      console.log("loading Level");
      start();
    }
  }
  if (ball.changeDirection(paddle, pos)) {
    lives -= 1;
    console.log(currentUsedPowerUpObject);

    console.log("try");
    clearTimeout(pointerToCurrentTimeout);
    currentUsedPowerUpObject = null;
    init();
    isPowerActive = false;

    if (lives == -1) {
      clearInterval(engine);
      currentlevel = "gameOver";
      start();
      return 0;
    }

    ball = new Ball(10, "red");
    new Paddle(60, 10, ctx, canvas);
    pos = Math.floor(canvas.width / 2);
  }
}

document.addEventListener("mousemove", (e) => {
  pos = e.clientX;
});
function start() {
  if (currentlevel != "gameOver") {
    loadLevel();
    engine = setInterval(() => {
      draw();
    }, 0);
  } else {
    gameOverSound.play();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#111";
    ctx.fillText(
      "Game Over",
      Math.floor(canvas.width / 2),
      Math.floor(canvas.height / 2)
    );
  }
}
