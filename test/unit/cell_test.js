var expect = require('chai').expect,
    Cell = require('../../src/Cell');

describe('Cell', function() {
  before(function() {
    this.x = 3;
    this.y = 2;
    this.value = Math.round(Math.random());
    this.cell = new Cell(this.x, this.y, this.value);
  });

  describe('constructor', function() {
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

  describe('set', function() {
    it('should set value to provided value', function() {
      var value = 'testValue';
      this.cell.set(value);
      expect(this.cell.value).to.equal(value);
    });
  });

  describe('up', function() {
    it('should return a an array with a y value decremented', function() {
      expect(this.cell.up()).to.deep.equal([this.x, this.y-1]);
    });
  });

  describe('up_right', function() {
    it('should return a an array with a x value incremented y value decremented', function() {
      expect(this.cell.up_right()).to.deep.equal([this.x+1, this.y-1]);
    });
  });

  describe('right', function() {
    it('should return a an array with a x value incremented', function() {
      expect(this.cell.right()).to.deep.equal([this.x+1, this.y]);
    });
  });

  describe('down_right', function() {
    it('should return a an array with a x value incremented and y value incremented', function() {
      expect(this.cell.down_right()).to.deep.equal([this.x+1, this.y+1]);
    });
  });

  describe('down', function() {
    it('should return a an array with a y value incremented', function() {
      expect(this.cell.down()).to.deep.equal([this.x, this.y+1]);
    });
  });

  describe('down_left', function() {
    it('should return a an array with a x value decremented and y value incremented', function() {
      expect(this.cell.down_left()).to.deep.equal([this.x-1, this.y+1]);
    });
  });

  describe('left', function() {
    it('should return a an array with a x value decremented', function() {
      expect(this.cell.left()).to.deep.equal([this.x-1, this.y]);
    });
  });

  describe('up_left', function() {
    it('should return a an array with a x value decremented and y value decremented', function() {
      expect(this.cell.up_left()).to.deep.equal([this.x-1, this.y-1]);
    });
  });

});
