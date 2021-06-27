const level1 = [];
temp = 0;
for (let i = 0; i < 5; i += 1) {
  for (
    let j = 0;
    j < window.innerWidth;
    j += Math.floor(window.innerWidth / 10)
  ) {
    level1.push({ x: j, y: temp, health: Math.ceil(Math.random() * 4) });
  }
  temp += 41;
}

// Helper for pushing into a level array
//levels.push({ x: j, y: i, health: Math.ceil(Math.random() * 4) });
// x and y are coordinates of brick health : = no. of hits + colour
