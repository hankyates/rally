function Cell(x, y, value) {
  this.x = x;
  this.y = y;
  this.value = value;
};

Cell.prototype = {
  set: function(value) {
    this.value = value;
  },
  up: function() {
    return [this.x, this.y-1];
  },
  up_right: function() {
    return [this.x+1, this.y-1];
  },
  right: function() {
    return [this.x+1, this.y];
  },
  down_right: function() {
    return [this.x+1, this.y+1];
  },
  down: function() {
    return [this.x, this.y+1];
  },
  down_left: function() {
    return [this.x-1, this.y+1];
  },
  left: function() {
    return [this.x-1, this.y];
  },
  up_left: function() {
    return [this.x-1, this.y-1];
  }
}

module.exports = Cell;
