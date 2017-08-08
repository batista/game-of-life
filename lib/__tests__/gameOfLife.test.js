/* eslint no-unused-vars: [0, { "args": "all" }] */

const assert = require('assert');
const gameOfLife = require('../index.js');

describe('gameOfLife', function () {
  describe('create', function () {
    it('throws an error if no seed is passed', function () {
      assert.throws(function () {
        gameOfLife.create();
      }, Error);
    });

    it('has a test', function () {
      const input = 'hello outfittery!';
      let gOL = gameOfLife.create(input);
      assert(gOL, input);
    });
  });
});
