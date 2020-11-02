const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays')

assertArraysEqual([1, 2, 3], [1, 2, 3]);
    assertArraysEqual([2, 3, 4], [1, 2, "3"]);
     assertArraysEqual([1, 2, 3], [1, 2, 4]);
 