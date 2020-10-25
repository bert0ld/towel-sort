
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = []; // initialization..
  let counter = 1;

  if (matrix === undefined) return []; // for no params
  for (let element of matrix) {
    if (counter % 2 == 0) element.reverse();
    for (let i = 0; i < element.length; i++) {
      result.push(element[i]);
    }
    counter++;
  }
  return result;
}
