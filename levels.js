const levels = {
  level1: [
    { x: 10, y: 0, health: 0, type: "brick" },
    { x: 90, y: 0, health: 0, type: "brick" },
    { x: 170, y: 0, health: 0, type: "brick" },
    { x: 250, y: 0, health: 0, type: "brick" },
    { x: 330, y: 0, health: 0, type: "brick" },
    { x: 410, y: 0, health: 0, type: "brick" },
    { x: 490, y: 0, health: 0, type: "brick" },
    { x: 10, y: 50, health: 0, type: "brick" },
    { x: 90, y: 50, health: 0, type: "brick" },
    { x: 170, y: 50, health: 0, type: "brick" },
    { x: 250, y: 50, health: 0, type: "brick" },
    { x: 330, y: 50, health: 0, type: "brick" },
    { x: 410, y: 50, health: 0, type: "brick" },
    { x: 490, y: 50, health: 0, type: "brick" },

    { x: 10, y: 100, health: 0, type: "brick" },
    { x: 90, y: 100, health: 0, type: "brick" },
    { x: 170, y: 100, health: 0, type: "brick" },
    { x: 250, y: 100, health: 0, type: "brick" },
    { x: 330, y: 100, health: 0, type: "brick" },
    { x: 410, y: 100, health: 0, type: "brick" },
    { x: 490, y: 100, health: 0, type: "brick" },
    { x: 570, y: 100, health: 0, type: "brick" },
  ],
  level2: [
    { x: 10, y: 0, health: 1, type: "brick" },
    { x: 170, y: 0, health: 1, type: "brick" },
    { x: 330, y: 0, health: 1, type: "brick" },
    { x: 490, y: 0, health: 0, type: "brick" },
    { x: 60, y: 50, health: 1, type: "brick" },
    { x: 220, y: 50, health: 0, type: "brick" },
    { x: 380, y: 50, health: 1, type: "brick" },
    { x: 540, y: 50, health: 0, type: "brick" },
    { x: 110, y: 100, health: 0, type: "brick" },
    { x: 270, y: 100, health: 1, type: "brick" },
    { x: 430, y: 100, health: 1, type: "brick" },
    { x: 580, y: 100, health: 1, type: "brick" },
  ],
  level3: [
    { x: 10, y: 0, health: 1, type: "brick" },
    { x: 10, y: 50, health: 1, type: "brick" },
    { x: 10, y: 100, health: 1, type: "brick" },
    { x: 10, y: 150, health: 0, type: "brick" },
    { x: 10, y: 200, health: 1, type: "brick" },
    { x: 80, y: 0, health: 0, type: "brick" },
    { x: 160, y: 0, health: 0, type: "brick" },
    { x: 240, y: 0, health: 0, type: "brick" },
    { x: 320, y: 0, health: 0, type: "brick" },
    { x: 400, y: 0, health: 0, type: "brick" },
    { x: 480, y: 0, health: 0, type: "brick" },
    { x: 560, y: 0, health: 0, type: "brick" },
    { x: 560, y: 50, health: 0, type: "brick" },
    { x: 560, y: 100, health: 0, type: "brick" },
    { x: 560, y: 150, health: 0, type: "brick" },
    { x: 560, y: 200, health: 0, type: "brick" },
    { x: 480, y: 150, health: 0, type: "brick" },
    { x: 360, y: 100, health: 0, type: "brick" },
    { x: 280, y: 50, health: 0, type: "brick" },
    { x: 80, y: 150, health: 1, type: "brick" },
    { x: 160, y: 100, health: 1, type: "brick" },
    { x: 80, y: 250, health: 2, type: "brick" },
    { x: 160, y: 250, health: 2, type: "brick" },
    { x: 240, y: 250, health: 2, type: "brick" },
    { x: 320, y: 250, health: 2, type: "brick" },
    { x: 400, y: 250, health: 2, type: "brick" },
    { x: 480, y: 250, health: 2, type: "brick" },
  ],
  level4: [
    { x: 170, y: 0, health: 0, type: "brick" },
    { x: 250, y: 0, health: 0, type: "brick" },
    { x: 330, y: 0, health: 0, type: "brick" },

    { x: 90, y: 50, health: 1, type: "brick" },
    { x: 170, y: 50, health: 1, type: "brick" },
    { x: 250, y: 50, health: 1, type: "brick" },
    { x: 330, y: 50, health: 1, type: "brick" },
    { x: 410, y: 50, health: 1, type: "brick" },

    { x: 0, y: 100, health: 2, type: "brick" },
    { x: 80, y: 100, health: 2, type: "brick" },
    { x: 160, y: 100, health: 2, type: "brick" },

    { x: 310, y: 100, health: 2, type: "brick" },

    { x: 470, y: 100, health: 2, type: "brick" },
    { x: 550, y: 100, health: 2, type: "brick" },
    { x: 240, y: 150, health: 3, type: "brick" },
    { x: 390, y: 150, health: 3, type: "brick" },
    { x: 310, y: 200, health: 3, type: "brick" },
    { x: 470, y: 200, health: 3, type: "brick" },
  ],
  level5: [
    { x: 0, y: 0, health: 2, type: "brick" },
    { x: 0, y: 50, health: 2, type: "brick" },
    { x: 0, y: 100, health: 2, type: "brick" },
    { x: 0, y: 150, health: 2, type: "brick" },
    { x: 0, y: 200, health: 2, type: "brick" },
    { x: 0, y: 250, health: 2, type: "brick" },
    { x: 0, y: 300, health: 2, type: "brick" },
    { x: 160, y: 200, health: 3, type: "brick" },
    { x: 80, y: 250, health: 3, type: "brick" },
    { x: 80, y: 50, health: 3, type: "brick" },
    { x: 160, y: 100, health: 3, type: "brick" },
    { x: 240, y: 150, health: 3, type: "brick" },

    { x: 560, y: 0, health: 2, type: "brick" },
    { x: 560, y: 50, health: 2, type: "brick" },
    { x: 560, y: 100, health: 2, type: "brick" },
    { x: 560, y: 150, health: 2, type: "brick" },
    { x: 560, y: 200, health: 2, type: "brick" },
    { x: 560, y: 250, health: 2, type: "brick" },
    { x: 560, y: 300, health: 2, type: "brick" },
    { x: 480, y: 250, health: 3, type: "brick" },
    { x: 400, y: 200, health: 3, type: "brick" },
    { x: 320, y: 150, health: 3, type: "brick" },

    { x: 480, y: 50, health: 3, type: "brick" },
    { x: 400, y: 100, health: 3, type: "brick" },
    { x: 320, y: 150, health: 3, type: "brick" },
  ],
};
let temp = 0;

// for (let i = 0; i < 3; i += 1) {
//   for (let j = 10; j < 640; j += Math.floor(640 / 8)) {
//     levels.level1.push({
//       x: j,
//       y: temp,
//       health: 0,
//       type: "brick",
//     });
//   }

//   temp += 50;
// }
// temp = 0;

// for (let i = 0; i < 3; i += 1) {
//   for (let j = 10; j < 640; j += Math.floor(640 / 4)) {
//     levels.level2.push({
//       x: temp + j,
//       y: temp,
//       health: Math.round(Math.random() * 1),
//       type: "brick",
//     });
//   }

//   temp += 50;
// }
// temp = 0;
// console.log(levels["level1"]);
// for (let i = 0; i < 3; i += 1) {
//   for (let j = 10; j < 640; j += Math.floor(640 / 4)) {
//     levels.level1.push({
//       x: temp + j,
//       y: temp,
//       health: Math.round(Math.random() * 1),
//       type: "brick",
//     });
//   }

//   temp += 50;
// }
// temp = 0;
// for (let i = 0; i < 3; i += 1) {
//   for (
//     let j = 0;
//     j < window.innerWidth;
//     j += Math.floor(window.innerWidth / 9)
//   ) {
//     levels.level2.push({ x: temp, y: j, health: 0, type: "brick" });
//   }

//   temp += 90;
// }

// Helper for pushing into a level array
//levels.push({ x: j, y: i, health: Math.ceil(Math.random() * 4) });
// x and y are coordinates of brick health : = no. of hits + colour
