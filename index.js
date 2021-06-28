let score = 0;
let lives = 2;
let currentlevel = 1;
let activePowerups = [];
let isPowerActive = false;
let powerNames = Object.keys(allPowerups);
let engine = null;
let currentUsedPowerUpObject = null;
let muted = false;
// const background = new Image();
// background.src = images["bg"];
const gameOverSound = new Audio("assets/gameover.wav");
soundPoweredUp = new Audio("assets/powerup.wav");
const canvas = document.getElementById("main");
canvas.width = 640;
canvas.height = 480;

const canvasBoundRect = canvas.getBoundingClientRect();

pos = Math.floor(canvas.width / 2);
ctx = canvas.getContext("2d");
let ball = new Ball(Math.floor(canvas.width / 64), muted, "red");

ctx.font = "20px Georgia";
let paddle = new Paddle(Math.floor(canvas.width / 8), 10, ctx, canvas, "black");
let bricks = [];
function loadLevel() {
  levels["level" + currentlevel].forEach((level) => {
    let temp = new levelBrick(level.x, level.y, level.health, level.type);
    bricks.push(temp);
  });
}
function init() {
  paddle = new Paddle(Math.floor(canvas.width / 8), 10, ctx, canvas, "black");
  ball = new Ball(Math.floor(canvas.width / 64), muted, "red");
  activePowerups = [];
  isPowerActive = false;
}
// window.addEventListener("resize", () => {
//   canvas.width = window.innerWidth;

//   canvas.height = window.innerHeight;
//   ball = new Ball(Math.floor(canvas.width / 64), "red");
//   paddle = new Paddle(Math.floor(canvas.width / 8), 10, ctx, canvas, "black");
// });

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // ctx.fillStyle = "#111";
  // ctx.fillRect(0, 0, canvas.width, canvas.height);
  // ctx.fillStyle = "#fff";
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
        if (Math.round(Math.random())) {
          let tempPowerup = new Powerup(10, bricks[i]);
          activePowerups.push(tempPowerup);
        }
        bricks[i].health -= 1;
        score += 1;

        ball.xSpeed *= -1;
        ball.ySpeed *= -1;
      }
    } else {
      bricks.splice(i, 1);
      console.log(bricks.length);
    }
    if (0 === bricks.length) {
      clearInterval(engine);

      if (currentlevel >= 5) {
        currentlevel = "winner";
        start();
        return;
      }
      currentlevel += 1;
      start();
    }
  }
  if (ball.changeDirection(paddle, pos)) {
    lives -= 1;

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

    pos = Math.floor(canvas.width / 2);
  }
}

canvas.addEventListener("mousemove", (e) => {
  pos = e.offsetX - canvasBoundRect.x;
});
function start() {
  init();
  if (currentlevel > 0 && currentlevel <= 5 && currentlevel !== "gameOver") {
    loadLevel();
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.fillText(
      "Level " + currentlevel,
      Math.floor(canvas.width / 2) - 25,
      Math.floor(canvas.height / 2)
    );
    setTimeout(() => {
      engine = setInterval(() => {
        draw();
      }, 0);
    }, 1000);
  } else if (currentlevel === "gameOver") {
    gameOverSound.play();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#FFF";
    ctx.font = "36px Georgia";
    ctx.fillText(
      "Game Over!",
      Math.floor(canvas.width / 2) - 95,
      Math.floor(canvas.height / 2)
    );
  } else {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.fillText(
      "You Won",
      Math.floor(canvas.width / 2) - 40,
      Math.floor(canvas.height / 2)
    );
  }
}

function toggleMute() {
  muted = !muted;
  gameOverSound.muted = !(gameOverSound.muted);
  soundPoweredUp.muted = !(soundPoweredUp.muted);
  ball.ballSound.muted = !(ball.ballSound.muted);
  ball.isMuted = !(ball.isMuted);
}