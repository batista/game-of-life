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

    it('throws an error if seed is not an array', function () {
      assert.throws(function () {
        gameOfLife.create({wrongType: 'of Object'});
      }, Error);
    });
  });
});
