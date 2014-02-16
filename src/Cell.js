function Cell(x, y, value) {
  this.x = x;
  this.y = y;
  this.value = value;
};

Cell.prototype = {
  up: function() {
    return [this.x, this.y-1];
  }
}

module.exports = Cell;
