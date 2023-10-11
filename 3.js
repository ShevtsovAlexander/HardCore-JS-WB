let MathX = () => {
  function fib(n) {
    // a = fib(0),по умолчанию равно 0
    if (n === 0) {
      return 0
    }
    // a = fib(1), b = fib(2), эти значения по  равны 1
    let a = 1;
    let b = 1;
    // а представляет первый член,
    // b представляет второй член
    // c представляет собой сумму а и b.
    for (let i = 3; i <= n; i++) {
      // На каждом шаге нам нужно помнить только значения двух предыдущих чисел последовательности
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
  }

  function fibElements(num) {

    // а представляет первый член,
    // b представляет второй член
    // c представляет собой сумму а и b.
    const answer = [];
    let a = 0;
    let b = 1;
    let c;

    // Поскольку первые два элемента фиксированы.
    // Сохраняем первые два термина.
    answer.push(a);
    answer.push(b);

    let i = 2;
    while (i < num) {
      c = a + b;
      a = b;
      b = c;

      // Сохраняем текущий элемент
      answer.push(c);
      i = i + 1;
    }
    return answer;
  }
  function isPrimeNum(num) {
    for (let i = 2; i < num; i++) {
      //делим число на все числа от 2 до num и возвращаем false, если число делится на какое-то из них без остатка
      if (num % i === 0) return false;
    }
    //число которое не делится на ни одно из этих чисел - простое
    return num !== 1;
  }

  function printPrimesNum(num) {
    let sum = [];
    for (let i = 2; i <= num; i++) {
      //перебираем все числа от 2 до max и вызываем функцию isPrimeNum для каждого из них
      if (isPrimeNum(i)) {
        //Если число является простым, то оно пушится в массив
         sum.push(i);
      }
    }
    return sum
  }

  return {fib, isPrimeNum, printPrimesNum, fibElements}
}
const mathX= MathX()
console.log(mathX.fib(1 ))
console.log(mathX.isPrimeNum(1 ))
console.log(mathX.printPrimesNum(30 ))
console.log(mathX.fibElements(8 ))



