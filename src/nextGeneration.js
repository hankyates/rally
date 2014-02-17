function nextGeneration(board) {
  this.liveNeighboors = 0;
  this.board = board;
  return this;
};

nextGeneration.prototype = {
}

module.exports = nextGeneration;
