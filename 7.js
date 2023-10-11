//по условию задачи я понял что нужно вывести поочередно порядковый номер функции и значение для этого порядкого номера
//что я и сделал в виде ключ, значение

const funcArray = [x => x + 1, x => 2 * x, x => x - 1]

const functionsWithCount = (number) => {
  let resultNumber ;
  let result = []
  funcArray.forEach((func, idx) => {
    resultNumber = func(number)
    result.push([idx+1, resultNumber])
  })

  return result
}

console.log(functionsWithCount(5))