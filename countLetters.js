const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`assertion passed👍🏽🙂 :  ${actual} === ${expected}`);
  } else
    console.log(`assertion failed😏😏 :  ${actual}  !==  ${expected}`);
};
const countLetters = function(string) {
  const results = {}
  for (const letter of string) {
   if ( string !== " ") { 
      if (results[letter]) {
        results[letter] ++;
      } else {
        results[letter] = 1;
      }
    }
  }

return results
};
module.exports = countLetters;
/*const str = countLetters("my name is mina");
assertEqual(str["m"], 3);
assertEqual(str["y"], 1);
assertEqual(str["r"], 0);
assertEqual(str["a"], 3);*/