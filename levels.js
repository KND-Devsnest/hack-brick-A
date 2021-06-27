const levels = { level1: [], level2: [], level3: [], level4: [], level5: [] };
temp = 0;
for (let i = 0; i < 5; i += 1) {
  for (
    let j = 0;
    j < window.innerWidth;
    j += Math.floor(window.innerWidth / 9)
  ) {
    if (i === 2 && j == 0) {
      levels.level1.push({ x: j, y: temp, health: 0, type: "powerup" });
    } else {
      levels.level1.push({ x: j, y: temp, health: 0, type: "brick" });
    }
  }
  temp += 45;
}
console.log(levels["level1"]);
// Helper for pushing into a level array
//levels.push({ x: j, y: i, health: Math.ceil(Math.random() * 4) });
// x and y are coordinates of brick health : = no. of hits + colour
