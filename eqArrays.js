const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`assertion passed👍🏽🙂 :  ${actual} === ${expected}`);
  } else
    console.log(`assertion failed😏😏 :  ${actual}  !==  ${expected}`);
};

const eqArrays = function ( arr1, arr2 ){
  let equal = true;
   if (arr1.length !== arr2.length ){
     return !equal;
   }else {
   for( let i = 0; i < arr1.length; i++){
      if (arr1[i] === arr2[i]) {
        equal = true;
   } else {
      equal = false;
      break;
   }
   }
  }
   return equal;

     };

     assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
     assertEqual(eqArrays([2, 3, 4], [1, 2, "3"]), false);
     assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), false);
 