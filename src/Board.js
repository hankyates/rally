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
  get: function(coordinates) {
    if (coordinates instanceof Cell){
      return this.arr[coordinates.y][coordinates.x];
    }

    return this.arr[coordinates[1]][coordinates[0]];
  },
  noOfLivingNeighboors: function(coordinates) {
    var livingNeightboors = 0,
        cell = this.get(coordinates);

    if(this.get(cell.up()).value)
      livingNeightboors++;
    if(this.get(cell.up_right()).value)
      livingNeightboors++;
    if(this.get(cell.right()).value)
      livingNeightboors++;
    if(this.get(cell.down_right()).value)
      livingNeightboors++;
    if(this.get(cell.down()).value)
      livingNeightboors++;
    if(this.get(cell.down_left()).value)
      livingNeightboors++;
    if(this.get(cell.left()).value)
      livingNeightboors++;
    if(this.get(cell.up_left()).value)
      livingNeightboors++;

    return livingNeightboors;
  },
  print: function() {
    for (var y = 0; y < this.arr.length; y++) {
      for (var x = 0; x < this.arr.length; x++) {
        process.stdout.write(this.arr[y][x].value + ' ');
      };
      process.stdout.write('\n');
    };
  }
}

module.exports = Board;
