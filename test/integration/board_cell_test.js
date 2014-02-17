var expect = require('chai').expect,
    Board = require('../../src/Board'),
    Cell = require('../../src/Cell');

describe('Board', function() {
  before(function() {
    this.size = 5;
    this.board = new Board(this.size);
  });

  describe('constructor', function() {
    it('should assign Cells to array members', function() {
      this.board.arr.forEach(function(row) {
        row.forEach(function(cell) {
          expect(cell instanceof Cell).to.be.true;
        }, this);
      }, this);
    });
  });

  describe('get', function() {
    it('should return a cell', function() {
      expect(this.board.get([2, 3]) instanceof Cell).to.be.true;
    });
  });

});
