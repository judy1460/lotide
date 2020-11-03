

  const middle = function(arrayA){
   let result = [];
   let mid = Math.round((arrayA.length -1) /2);
    if (arrayA.length === 1 || arrayA.length === 2){
     return result;
    }else if (arrayA.length % 2 === 0){
  result.push(arrayA[mid -1]);
  result.push(arrayA[mid]);
    
    }else if ( arrayA.length % 2 !== 0){
result.push(arrayA[mid]);
  }
  console.log(result);
  return result;
    };

    module.exports = middle;
   