var Cell = require('./Cell');

function Board(rows){
  this.arr = [];

  for (var y = 0; y < rows; y++) {
    this.arr[y] = [];
    for (var x = 0; x < rows; x++) {
      this.arr[y][x] = new Cell(x, y, Math.round(Math.random()));
    }
  };

  return this;
};

Board.prototype = {
  get: function(x, y) {
    return this.arr[y][x];
  }
}

module.exports = Board;
