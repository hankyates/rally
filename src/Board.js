function Board(rows){
  this.arr = [];

  for (var i = 0; i < rows; i++) {
    this.arr[i] = [];
    for (var j = 0; j < rows; j++) {
      this.arr[i][j] = Math.round(Math.random());
    }
  };

  return this;
};

module.exports = Board;
