/* eslint no-unused-vars: [0, { "args": "all" }] */

const assert = require('assert');
const cell = require('../cell.js');

describe('Cell', function () {
  it('can be created', function () {
    let c1 = cell.create(1, 1, 1, 0);

    // TODO, use lodash to do deep comparison and get rid of multiple assertions
    assert.equal(c1.getX(), 1);
    assert.equal(c1.getY(), 1);
    assert.equal(c1.getState(), 1);
    assert.equal(c1.getCurrentAliveNeighbours(), 0);
  });

  it('Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.', function () {
    let c1 = cell.create(1, 1, 1, 1);
    assert.equal(c1.nextState().state, 0);
  });

  xit('Any live with two or three live neighbours lives on to the next generation.', function () {
    throw new Error('Not yet implemented');
  });

  xit('Any live with more than three live neighbours dies, as if by overpopulation.', function () {
    throw new Error('Not yet implemented');
  });

  xit('Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.', function () {
    throw new Error('Not yet implemented');
  });
});
