/* eslint no-unused-vars: [0, { "args": "all" }] */

const assert = require('assert');
const Cell = require('../cell.js');

describe('Cell', function () {
  it('can be created', function () {
    let c1 = new Cell(1, 1, 1, 0);

    // TODO, use lodash to do deep comparison and get rid of multiple assertions
    assert.equal(c1.x, 1);
    assert.equal(c1.y, 1);
    assert.equal(c1.state, 1);
    assert.equal(c1.currentAliveNeighbours, 0);
  });

  it('Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.', function () {
    let c1 = new Cell(1, 1, 1, 1);
    assert.equal(c1.nextState().state, 0);
  });

  it('Any live with two or three live neighbours lives on to the next generation.', function () {
    let c1 = new Cell(1, 1, 1, 2);
    assert.equal(c1.nextState().state, 1);
  });

  it('Any live with more than three live neighbours dies, as if by overpopulation.', function () {
    let c1 = new Cell(1, 1, 1, 4);
    assert.equal(c1.nextState().state, 0);
  });

  it('Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.', function () {
    let c1 = new Cell(1, 1, 0, 3);
    assert.equal(c1.nextState().state, 1);
  });

  it('should not interact with a sibling cell', function () {
    let c1 = new Cell(1, 1, 1, 3);
    let c2 = new Cell(1, 1, 0, 3);
    assert.notEqual(c1.state, c2.state);
  });
});
