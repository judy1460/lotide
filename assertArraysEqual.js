const eqArrays = require('./eqArrays');
const assertArraysEqual = function(array1, array2) {
  if(eqArrays(array1, array2)) {
    console.log(`assertion passed👍🏽🙂 :  ${array1} === ${array2}`);
  } else
    console.log(`assertion failed😏😏 :  ${array1}  !==  ${array2}`);
};

module.exports = assertArraysEqual;
   