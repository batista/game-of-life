/* eslint no-unused-vars: [0, { "args": "all" }] */

const assert = require('assert');
const gameOfLife = require('../index.js');

describe('gameOfLife', function () {
  it('has a test', function () {
    const input = 'hello outfittery!';
    let gOL = gameOfLife.gameOfLife(input);
    assert(gOL, input);
  });
});
