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
    var x, y;
    if (coordinates instanceof Cell){
      x = coordinates.x;
      y = coordinates.y;
    } else {
      x = coordinates[0];
      y = coordinates[1];
    }

    if (x > -1 && x < this.arr.length){
      if (y > -1 && y < this.arr.length){
        return this.arr[y][x];
      }
    }
    return false;
  },
  noOfLivingNeighboors: function(coordinates) {
    var livingNeighboors = 0,
        cell = this.get(coordinates),
        up = cell.up(),
        up_right = cell.up_right(),
        right = cell.right(),
        down_right = cell.down_right(),
        down = cell.down(),
        down_left = cell.down_left(),
        left = cell.left(),
        up_left = cell.up_left();

    if(up && this.get(up).value)
      livingNeighboors++;
    if(up_right && this.get(up_right).value)
      livingNeighboors++;
    if(right && this.get(right).value)
      livingNeighboors++;
    if(down_right && this.get(down_right).value)
      livingNeighboors++;
    if(down && this.get(down).value)
      livingNeighboors++;
    if(down_left && this.get(down_left).value)
      livingNeighboors++;
    if(left && this.get(left).value)
      livingNeighboors++;
    if(up_left && this.get(up_left).value)
      livingNeighboors++;

    return livingNeighboors;
  },
  nextGeneration: function() {
    var dyingCells = [],
        reanimatingCells = [];

    this.arr.forEach(function(row) {
      row.forEach(function(cell) {
        var livingNeighboors = this.noOfLivingNeighboors(cell);

        if (livingNeighboors < 2 || livingNeighboors > 3) {
          dyingCells.push(cell);
        } else if (cell.isDead() && livingNeighboors === 3) {
          reanimatingCells.push(cell);
        }

      }, this);
    }, this);

    dyingCells.forEach(function(cell) {cell.kill()});
    reanimatingCells.forEach(function(cell) {cell.reanimate()});
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
