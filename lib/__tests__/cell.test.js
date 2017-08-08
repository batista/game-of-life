/* eslint no-unused-vars: [0, { "args": "all" }] */

const assert = require('assert');
const cell = require('../cell.js');

describe('Cell', function () {
  it('can be created', function () {
    let c1 = cell.create(1, 1);
    assert(c1.x, 1);
    assert(c1.y, 1);
  });
});
