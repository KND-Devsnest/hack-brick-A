const levels = [];
let temp = 0;
for (let i = 0; i < 400; i += 40) {
  // printing spaces
  for (let j = 0; j < i; j += 80) {
    levels.push({ x: j, y: i, health: Math.ceil(Math.random() * 4) });
  }
}
for (let i = 0; i < 400; i += 40) {}
console.log(levels);
