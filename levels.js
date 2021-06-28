const levels = { level1: [], level2: [], level3: [], level4: [], level5: [] };
let temp = 0;
levels.level1.push({ x: 320, y: 0, health: 0, type: "powerup" });
levels.level2.push({ x: 320, y: 50, health: 0, type: "powerup" });
levels.level3.push({ x: 320, y: 50, health: 0, type: "powerup" });
levels.level4.push({ x: 320, y: 50, health: 3, type: "powerup" });
levels.level5.push({ x: 320, y: 50, health: 2, type: "powerup" });
// for (let i = 0; i < 3; i += 1) {
//   for (let j = 0; j < 1024; j += Math.floor(1024 / 9)) {
//     levels.level1.push({ x: j, y: temp, health: 0, type: "brick" });
//   }

//   temp += 90;
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
