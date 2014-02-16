var expect = require('chai').expect,
    Board = require('../../src/Board');

describe('Board', function() {
  before(function() {
    this.size = 10;
    this.board = new Board(this.size);
  });

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
      expect(this.board.get(1, 2)).to.equal(this.board.arr[2][1]);
    });
  });

});
