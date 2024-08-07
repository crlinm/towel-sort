
// You should implement your task here.

module.exports = function towelSort (matrix) {
  const res = [];
  if (arguments.length == 0 || matrix.length == 0) {
    return res;
  }
  for (let i = 0; i < matrix.length; i++){
    const m = matrix[i].length;
    for (let j = 0; j < m; j++){
      if (i % 2 == 0){
        res.push(matrix[i][j]);
      }
      else {
        res.push(matrix[i][m-j-1]);
      }
    }
  }
  return res;
}
