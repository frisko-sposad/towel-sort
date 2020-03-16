
// You should implement your task here.

module.exports = function towelSort (matrix) {

  

  let result = [];

  if (!Array.isArray(matrix))
  return result;

	for (let i = 0; i < matrix.length; i++) {
   if (i % 2 === 0) {
   
   matrix[i].reduce(function(sum, current) {
   return sum + current;
   });
   result.push(matrix[i]);
   } else {
   
   matrix[i].reverse().reduce(function(sum, current) {
   return sum + current;
   });
   result.push(matrix[i]);
   }   
  }
  result = [].concat(...result);
   return result;
}
