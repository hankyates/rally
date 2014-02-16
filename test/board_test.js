var expect = require('chai').expect,
    Board = require('../src/Board');

describe('Board', function() {
  beforeEach(function() {
    this.size = 10;
    this.board = new Board(this.size);
  });

  describe(' constructor', function() {
    it('should return an object', function() {
      expect(typeof this.board === 'object').to.be.true;
    });

    it('should create an array with number or rows passed in', function() {
      expect(this.board.arr.length).to.equal(this.size);
    });
  });

});
