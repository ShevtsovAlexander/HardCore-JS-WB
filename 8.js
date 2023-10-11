const compose = function (functions) {

  return function(x) {
    return functions.map(func => {
      return func(x)
    })
  }

};
const fn = compose([x => x + 1, x => 2 * x, x => x - 1])(4)

console.log(fn)
