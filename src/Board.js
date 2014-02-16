function Board(rows){
  this.arr = [];

  for (var i = 0; i < rows; i++) {
    this.arr.push(Math.round(Math.random()));
  };

  return this;
};

module.exports = Board;
