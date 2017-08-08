/* eslint no-unused-vars: [1, { "args": "all" }] */
/* eslint no-new: 0 */

const assert = require('assert');
const GameOfLife = require('../game-of-life.js');

describe('gameOfLife', function () {
  describe('create', function () {
    it('throws an error if no seed is passed', function () {
      assert.throws(function () {
        new GameOfLife();
      }, Error);
    });

    it('throws an error if seed is not an array', function () {
      assert.throws(function () {
        new GameOfLife({wrongType: 'of Object'});
      }, Error);
    });
  });
});
