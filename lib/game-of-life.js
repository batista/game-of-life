'use strict';
/* eslint no-unused-vars: [0, { "args": "all" }] */
/* eslint no-new: 0 */

const _ = require('lodash');
const Cell = require('./cell.js');
const Board = require('./board.js');

function GameOfLife(seed) {
  if (!seed) {
    throw new Error('Need seed to start');
  }

  if (!Array.isArray(seed)) {
    throw new Error('Seed needs to be an Array');
  }

  let board = parseSeedToBoardCells(seed);
  console.log('board', board);
  this.board = new Board(board);

  return this;
}

function parseSeedToBoardCells(seed) {
  let board = [];

  // Maps seedMatrix to board of Cells
  seed.forEach(function (row, rowIndex, array) {
    board.push(new Array());
    row.forEach(function (cellState, columnIndex) {
      board[rowIndex].push(new Cell(rowIndex, columnIndex, cellState));
    });
  });

  return board;
}

GameOfLife.prototype.recalculateAliveNeighbours = function () {
  // Go over each cell, and get sibling status
  this.board.board.forEach(function (row, rowIndex) {
    row.forEach(function (cell, columnIndex) {
      let aliveNeighbours = Board.getSumOfSiblingValues(cell);
      console.log(aliveNeighbours);
      cell.setCurrentAliveNeighbours(aliveNeighbours);
    });
  });
};

GameOfLife.prototype.tick = function () {
  if (this.board.lenght === 0) {
    throw new Error('Need board to calculate tick');
  }

  // Iterate once to perform nextState on each cell
  this.board.board.forEach(function (row, rowIndex) {
    row.forEach(function (cell, columnIndex) {
      cell.nextState();
    });
  });

  // Iterate another to update aliveNeighbours
  // not the best, but its due to the chosen architecture
  this.recalculateAliveNeighbours();
};

GameOfLife.prototype.run = function (iterations = 1) {
  for (var i = 0; i < iterations; i++) {
    this.tick();
    console.log(i + ':', this.board);
  }
};

module.exports = GameOfLife;
