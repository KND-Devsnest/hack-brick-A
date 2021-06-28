pointerToCurrentTimeout = null;
const images = {
  level1: "assets/1stlevelbrick.png",
  level2: "assets/2ndlevelbrick.png",
  level3: "assets/3rdlevelbrick.png",
  level4: "assets/4thlevelbrick.png",
  powerup: "assets/powerup.png",
};

const allPowerups = {
  doubleSize: function () {
    temp = paddle.width;
    pointerToCurrentTimeout = setTimeout(() => {
      paddle.width = temp;
      isPowerActive = false;
      console.log("executed error");
    }, 15000);
    paddle.width *= 2;
    isPowerActive = true;
  },
  growBall: function () {
    temp = ball.radius;
    pointerToCurrentTimeout = setTimeout(() => {
      ball.radius = temp;
      isPowerActive = false;
      console.log("executed error");
    }, 15000);

    ball.radius *= 2;
    isPowerActive = true;
  },
  slowTime: function () {
    pointerToCurrentTimeout = setTimeout(() => {
      ball.ySpeed *= 2;
      isPowerActive = false;
      console.log("executed error");
    }, 15000);

    ball.ySpeed *= 0.5;
    isPowerActive = true;
  },
  extraLives: function () {
    pointerToCurrentTimeout = setTimeout(() => {
      ball.ySpeed *= 2;
      isPowerActive = false;
      console.log("executed error");
    }, 15000);

    ball.ySpeed *= 0.5;
    isPowerActive = true;
  },
};
