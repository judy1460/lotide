const assertEqual = require('../assertEqual');
const tail = require('../tail');
//assertEqual(tail([5,6,7]),[6,7]);
//assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Lighthouse", "Labs");
const assert = require('chai').assert;
const head   = require('../tail');

describe("#tail", () => {
  
  it("return [6, 7]] for [5, 6, 7]," , () =>{
  assert.deepEqual(tail([5, 6, 7]), [6,7]);
  });
  it("return [Lighthouse, Labs] for [Hello, Lighthouse, Labs]", () =>{
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
});