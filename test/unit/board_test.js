var expect = require('chai').expect,
    Cell = require('../../src/Cell'),
    Board = require('../../src/Board');

describe('Board', function() { before(function() { this.size = 10; this.board = new Board(this.size); });

  describe('constructor', function() {
    it('should return an object', function() {
      expect(typeof this.board === 'object').to.be.true;
    });

    it('should create an array with number or rows passed in', function() {
      expect(this.board.arr.length).to.equal(this.size);
    });

    it('should create an array for each row with same number of columns', function() {
      this.board.arr.forEach(function(col) {
        expect(col.length).to.equal(this.size);
      }, this);
    });
  });

  describe('get', function() {
    it('should return the value of a cell', function() {
      expect(this.board.get([1, 2])).to.equal(this.board.arr[2][1]);
    });
  });

  describe('getLivingNeighboors', function() {
    before(function() {
      this.board.arr = [
        [new Cell(0, 0, 1), new Cell(0, 1, 1), new Cell(0, 2, 1)],
        [new Cell(1, 0, 1), new Cell(1, 1, 1), new Cell(1, 2, 1)],
        [new Cell(2, 0, 1), new Cell(2, 1, 1), new Cell(2, 2, 1)]
      ]
    });

    it('should return the number of living neighboors for a cell', function() {
      expect(this.board.getLivingNeighboors([1, 1])).to.equal(8);
    });
  });

});
