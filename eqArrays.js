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
     module.exports = eqArrays;
     