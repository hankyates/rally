var expect = require('chai').expect,
    sinon = require('sinon'),
    Cell = require('../../src/Cell'),
    Board = require('../../src/Board');

describe('Board', function() {
  beforeEach(function() {
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
      expect(this.board.get([1, 2])).to.equal(this.board.arr[2][1]);
    });
  });

  describe('noOfLivingNeighboors', function() {
    beforeEach(function() {
      this.board.arr = [
        [new Cell(0, 0, 1), new Cell(0, 1, 1), new Cell(0, 2, 1)],
        [new Cell(1, 0, 1), new Cell(1, 1, 1), new Cell(1, 2, 1)],
        [new Cell(2, 0, 1), new Cell(2, 1, 1), new Cell(2, 2, 1)]
      ]
      this.coordinates = [1, 1];
    });

    it('should return the number of living neighboors for a cell', function() {
      expect(this.board.noOfLivingNeighboors([1, 1])).to.equal(8);
    });

    it('should call get to get Cell passed in', function() {
      this.board.get = sinon.stub().returns(new Cell(1, 1, 1));
      this.board.noOfLivingNeighboors(this.coordinates);
      expect(this.board.get.calledWith(this.coordinates)).to.be.true;
    });

    it('should call get for each cell direction and once to get cell', function() {
      var coordinates = [1, 1]
      this.board.get = sinon.stub().returns(new Cell(1, 1, 1));
      this.board.noOfLivingNeighboors(this.coordinates);
      expect(this.board.get.callCount).to.equal(9);
    });
  });

  describe('nextGeneration', function() {
    beforeEach(function() {
      this.board.arr = [
        [new Cell(0, 0, 1), new Cell(0, 1, 0), new Cell(0, 2, 1)],
        [new Cell(1, 0, 0), new Cell(1, 1, 1), new Cell(1, 2, 1)],
        [new Cell(2, 0, 1), new Cell(2, 1, 1), new Cell(2, 2, 0)]
      ]
      this.board.nextGeneration();
    });

    it('should kill cells with less than two living neighboors', function() {
      expect(this.board.get([0, 0]).value).to.equal(0);
    });

    it('should kill cells with more than three living neighboors', function() {
      expect(this.board.get([1, 1]).value).to.equal(0);
    });

    it('should reanimate dead cells with three living neighboors', function() {
      expect(this.board.get([2, 2]).value).to.equal(1);
    });
  });

});
