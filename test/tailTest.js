const assertEqual = require('../assertEqual');
const tail = require('../tail');

// TEST CODE
const words = ["Hello", "Lighthouse", "Labs"];
const result = tail(words);
assertEqual(words.length, 3); // ensure original array should still have 3 elements!
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
