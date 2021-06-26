let x = 100;
let y = 100;
let xspeed = 1;
let yspeed = 3.5;
let pos = 20;
const canvas = document.getElementById("main");

ctx = canvas.getContext("2d");
function draw(evt) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  x += xspeed;
  y += yspeed;
  ctx.beginPath();
  ctx.arc(x, y, 13, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.rect(pos, 450, 50, 10);
  ctx.stroke();

  if (x > canvas.width || x < 0) {
    xspeed = xspeed * -1;
  }
  if (y < 0) {
    yspeed = yspeed * -1;
  }
  if (x >= pos && x <= pos + 45 && y >= 450 && y <= 460) {
    yspeed = yspeed * -1;
  }
}
setInterval(() => {
  draw();
}, 20);

canvas.addEventListener("mousemove", (e) => {
  pos = e.clientX;
});
