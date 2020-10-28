const assertArraysEqual = function(array1, array2) {
  if(eqArrays(array1, array2)) {
    console.log(`assertion passed👍🏽🙂 :  ${array1} === ${array2}`);
  } else
    console.log(`assertion failed😏😏 :  ${array1}  !==  ${array2}`);
};

const eqArrays = function(arr1, arr2) {
  let equal = true;
   if(arr1.length !== arr2.length) {
     return !equal;
   } else
   for(let i = 0; i < arr1.length; i++){
      if(arr1[i] === arr2[i]) {
        equal = true;
   } else {
      equal = false;
      break;
   }
  }
   return equal;
     };

  const middle = function(arrayA){
   let result = [];
   let mid = Math.round((arrayA.length -1) /2);
    if (arrayA.length === 1 || arrayA.length === 2){
     return result;
    }else if (arrayA.length % 2 === 0){
  console.log((arrayA[mid -1]), arrayA[mid]);
    
    }else if ( arrayA.length % 2 !== 0){
console.log(arrayA[mid]);
  }
  return result;
    };
   middle([1, 2, 3, 4]);
   middle([1, 2, 3, 4, 5]);