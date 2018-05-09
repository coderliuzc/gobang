var c = require("../js/vcx.js");
var assert = require('assert');
var board = require("../js/board.js");

describe('test checkmate', function() {

  it(`一步取胜`, function() {
    // 一步取胜 [1,5]
    b = [
      [0, 0, 0, 0, 0, 0],
      [2, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
    ];
    board.init(b);
    var p = c.vcf(1, 8);
    console.log(p)
    assert.ok(p);
  });

  it(`冲四 活三`, function() {
    // 冲四，活三，胜
    b = [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 2, 2, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 2, 0],
      [0, 0, 1, 2, 2, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0]
    ];
    board.init(b);
    var p = c.vct(1, 10);
    console.log(p)
    assert.ok(p);
    //vcf 就不行
    p = c.vcf(1, 10);
    console.log(p)
    assert.ok(!p);
  });

  it(`vcf`, function() {
    //vcf
    b = [
      [ 0, 0, 2, 2, 1, 0, 0, 0, 0],
      [ 0, 2, 1, 1, 2, 0, 0, 0, 0],
      [ 0, 2, 1, 1, 2, 0, 0, 0, 0],
      [ 0, 2, 1, 1, 0, 0, 0, 0, 0],
      [ 0, 1, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 2, 2, 0],
      [ 0, 0, 0, 0, 0, 1, 1, 1, 2],
      [ 0, 0, 0, 0, 1, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    board.init(b);
    var p = c.vct(1, 6);
    console.log(p)
    assert.ok(p);
  });


  it(`双三获胜`, function() {
    var s = new Date();
    b = [
      [ 0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [ 0, 0, 1, 2, 1, 1, 0, 0, 0, 0],
      [ 0, 0, 1, 2, 1, 2, 2, 0, 0, 0],
      [ 0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    board.init(b);
    var p = c.vct(1);
    console.log(p)
    assert.ok(p);
  });

  it(`不受无意义的冲四影响`, function() {
    var s = new Date();
    b = [
      [ 0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [ 0, 0, 1, 2, 1, 1, 0, 0, 0, 0],
      [ 0, 0, 1, 2, 1, 2, 2, 0, 0, 0],
      [ 0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 2, 2, 2, 1, 0, 0, 0, 0],
    ];
    board.init(b);
    var p = c.vct(1, 8);
    console.log(p)
    assert.ok(p);
  });


  it(`自己双三，但是对面冲四活三，无法取胜`, function() {
    var s = new Date();
    b = [
      [ 0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [ 0, 0, 1, 2, 1, 1, 0, 0, 0, 0],
      [ 0, 0, 1, 2, 1, 2, 2, 0, 0, 0],
      [ 0, 0, 0, 0, 2, 0, 2, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    board.init(b);
    var p = c.vct(1);
    console.log(p)
    assert.ok(!p);
  });
      


  it(`对面防守形成活四，无法取胜`, function() {
    // 这种情况赢不了
    var s = new Date();
    b = [
      [ 0, 1, 1, 0, 0, 0, 0],
      [ 0, 2, 2, 2, 0, 0, 0],
      [ 0, 0, 0, 0, 1, 0, 0],
      [ 0, 0, 0, 0, 1, 0, 0],
      [ 0, 0, 0, 0, 1, 0, 0],
      [ 0, 0, 0, 0, 2, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0],
    ];
    board.init(b);
    var p = c.vct(1);
    console.log(p)
    assert.ok(!p);
  });

  it(`自己双三，但是对面冲四活三，无法取胜 2`, function() {
    var s = new Date();
    b = [
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 1, 1, 2, 0, 0, 0, 1, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 1, 0, 2, 0, 1, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 2, 2, 2, 1, 2, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    board.init(b);
    var p = c.vct(1);
    console.log(p)
    assert.ok(!p);
  });

});
