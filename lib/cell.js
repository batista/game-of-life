'use strict';
/* eslint no-unused-vars: [0, { "args": "all" }] */
/* eslint no-lonely-if: 0 */

function Cell(x, y, state, currentAliveNeighbours = 0) {
  this.x = x;
  this.y = y;
  this.state = state;
  this.currentAliveNeighbours = currentAliveNeighbours;
}

Cell.prototype.nextState = function () {
  // - Any live cell...
  if (this.state === 1) {
    // ...with fewer than two live neighbours dies, as if caused by underpopulation.
    if (this.currentAliveNeighbours < 2) {
      this.state = 0;
    }
    // ...with two or three live neighbours lives on to the next generation.
    if (this.currentAliveNeighbours === 2 || this.currentAliveNeighbours === 3) {
      this.state = 1;
    }
    // ...with more than three live neighbours dies, as if by overpopulation.
    if (this.currentAliveNeighbours > 3) {
      this.state = 0;
    }
  } else {
    // Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
    if (this.currentAliveNeighbours === 3) {
      this.state = 1;
    }
  }

  return this;
};

Cell.prototype.setCurrentAliveNeighbours = function (currentAliveNeighbours) {
  this.currentAliveNeighbours = currentAliveNeighbours;
};

module.exports = Cell;
