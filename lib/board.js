'use strict';

function Board(board) {
  this.board = board;
}

// Board navigation methods
Board.prototype.getSumOfSiblingValues = function(cell) {
  let sum = 0;

  //HACK very ugly..need refactor
  sum +=
    (getNorthSibling(cell) &&
      this.board[getNorthSibling(cell).x][getNorthSibling(cell).y]) ||
    0;
  sum +=
    (getSouthSibling(cell) &&
      this.board[getSouthSibling(cell).x][getSouthSibling(cell).y]) ||
    0;
  sum +=
    (getEastSibling(cell) &&
      this.board[getEastSibling(cell).x][getEastSibling(cell).y]) ||
    0;
  sum +=
    (getWestSibling(cell) &&
      this.board[getWestSibling(cell).x][getWestSibling(cell).y]) ||
    0;
  sum +=
    (getNorthEastSibling(cell) &&
      this.board[getNorthEastSibling(cell).x][getNorthEastSibling(cell).y]) ||
    0;
  sum +=
    (getNorthWestSibling(cell) &&
      this.board[getNorthWestSibling(cell).x][getNorthWestSibling(cell).y]) ||
    0;
  sum +=
    (getSouthEastSibling(cell) &&
      this.board[getSouthEastSibling(cell).x][getSouthEastSibling(cell).y]) ||
    0;
  sum +=
    (getSouthWestSibling(cell) &&
      this.board[getSouthWestSibling(cell).x][getSouthWestSibling(cell).y]) ||
    0;

  return sum;
};

function getNorthSibling(cell) {
  if (!cell || cell.y === 0) {
    return;
  }
  return {
    x: cell.x,
    y: cell.y - 1
  };
}

function getSouthSibling(cell) {
  if (!cell || cell.y === board.lenght - 1) {
    return;
  }
  return {
    x: cell.x,
    y: cell.y + 1
  };
}

function getWestSibling(cell) {
  if (!cell || cell.x === 0) {
    return;
  }
  return {
    x: cell.x - 1,
    y: cell.y
  };
}

function getEastSibling(cell) {
  if (!cell || cell.x === board.lenght - 1) {
    return;
  }
  return {
    x: cell.x + 1,
    y: cell.y
  };
}

function getNorthWestSibling(cell) {
  return getWestSibling(getNorthSibling(cell));
}

function getNorthEastSibling(cell) {
  return getEastSibling(getNorthSibling(cell));
}

function getSouthWestSibling(cell) {
  return getWestSibling(getSouthSibling(cell));
}

function getSouthEastSibling(cell) {
  return getEastSibling(getSouthSibling(cell));
}

module.exports = Board;
