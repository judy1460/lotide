

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

    module.exports = middle;
   