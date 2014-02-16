var expect = require('chai').expect,
    Board = require('../../src/Board'),
    nextGeneration = require('../../src/nextGeneration');

describe('nextGeneration', function() {
  before(function() {
    this.board = new Board();
    this.nextGeneration = nextGeneration(this.board);
  });

  describe('constructor', function() {
    it('should return an object', function() {
      expect(typeof this.cell === 'object').to.be.true;
    });
  });

});
