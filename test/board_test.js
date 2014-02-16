var expect = require('chai').expect,
    Board = require('../src/Board');

describe('Board', function() {
  beforeEach(function() {
    this.board = new Board();
  });

  describe(' constructor', function() {
    it('should be an object', function() {
      expect(typeof this.board === 'object').to.be.true;
    });
  });

});
