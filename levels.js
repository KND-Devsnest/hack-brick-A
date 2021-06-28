const levels = { level1: [], level2: [], level3: [], level4: [], level5: [] };
let temp = 0;

for (let i = 0; i < 3; i += 1) {
  for (let j = 10; j < 640; j += Math.floor(640 / 8)) {
    levels.level1.push({
      x: j,
      y: temp,
      health: 0,
      type: "brick",
    });
  }

  temp += 50;
}
temp = 0;

for (let i = 0; i < 3; i += 1) {
  for (let j = 10; j < 640; j += Math.floor(640 / 4)) {
    levels.level2.push({
      x: temp + j,
      y: temp,
      health: Math.round(Math.random() * 1),
      type: "brick",
    });
  }

  temp += 50;
}
temp = 0;

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
