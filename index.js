let x = 100;
let y = 100;
let xspeed = 1;
let yspeed = 2.8;
let pos = 20;
const ball = new Ball(10, "red", 100, 100);
const canvas = document.getElementById("main");
const level1 = ["100", "110", "120", "130", "140", "150", "160", "170"];
ctx = canvas.getContext("2d");
function draw(evt) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBoard();

  ball.render(ctx);
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
