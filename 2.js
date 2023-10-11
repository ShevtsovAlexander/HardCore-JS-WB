const StrangeNumber = function (num) {
  let temp = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      temp += i;
    }
  }
  return temp === num && temp !== 0;
};


//прохожусь по всем числам до половины нашего числа включительно
//те числа которые делятся без остатка идут в сумму
//если сумма === половине num и !== 0 - это мое число