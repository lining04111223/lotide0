const input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
const result = input.map(({x, y}) => (Math.sqrt(x*x + y*y)));

//////////////////assert//////////////////
const assertEqual = require('../assertEqual');

// TEST CODE
assertEqual(result[0], 5);
assertEqual(result[1], 13);
assertEqual(result[2], 17);