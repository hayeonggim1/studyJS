// const sum = function(x, y){
//   return x + y;
// }

// const currySum = _.curry(sum);

console.log(sum(10, 20));
console.log(currySum(30)(40));

function sum(a, b, c){
  return a+b+c;
}
console.log(sum(10, 20, 30));

const currySum = _.curry(sum);
console.log(currySum(30)(40));

const sum100 = _.partial(sum, 200);
console.log(sum100(10));
console.log(sum100(0));
