'use strict';
/* eslint no-unused-vars: [0, { "args": "all" }] */
/* eslint no-lonely-if: 0 */

let x = 0;
let y = 0;
let state = 0;
let currentAliveNeighbours = 0;

function create(x, y, state, currentAliveNeighbours) {
  this.x = x;
  this.y = y;
  this.state = state;
  this.currentAliveNeighbours = currentAliveNeighbours;

  return this;
}

function nextState() {
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
}

// ////// Getters

function getX() {
  return this.x;
}

function getY() {
  return this.y;
}

function getState() {
  return this.state;
}

function getCurrentAliveNeighbours() {
  return this.currentAliveNeighbours;
}

// ////// Setters

function setCurrentAliveNeighbours(currentAliveNeighbours) {
  this.currentAliveNeighbours = currentAliveNeighbours;

  return this;
}

// //////

module.exports = {
  create: create,
  nextState: nextState,
  getX: getX,
  getY: getY,
  getState: getState,
  getCurrentAliveNeighbours: getCurrentAliveNeighbours
};
