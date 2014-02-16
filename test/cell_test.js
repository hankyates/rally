var expect = require('chai').expect,
    Cell = require('../src/Cell');

describe('Cell', function() {
  before(function() {
    this.x = 3;
    this.y = 2;
    this.value = Math.round(Math.random());
    this.cell = new Cell(this.x, this.y, this.value);
  });

  describe(' constructor', function() {
    it('should return an object', function() {
      expect(typeof this.cell === 'object').to.be.true;
    });

    it('should assign an x value', function() {
      expect(this.cell.x).to.equal(this.x);
    });

    it('should assign an y value', function() {
      expect(this.cell.y).to.equal(this.y);
    });

    it('should assign an value', function() {
      expect(this.cell.value).to.equal(this.value);
    });
  });

});
