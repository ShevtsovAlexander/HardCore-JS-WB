
// в данной функции я воспользоволся методом split чтобы разбить строку на массив элементов reverse чтобы прочитать их наоборот join чтобы соединить в строку  replaceAll чтобы убрать все пробелы
// она она подходит только под конкретный случай где нет знаков препинания и заглавных букв
function isPalindrome(str) {
  return str.split('').reverse().join('').replaceAll(' ', '') === str.replaceAll(' ', '');
}



// сначала так же регулярным выражением затем спред преобразуем в массив элементов проходимся
//по нему и добавляем в новый массив далее преобразуем к строке развернув его
function isPalindrome(string) {
  string = string.replace(/[^(\w)|(а-я)0-9]/gi,'').toLowerCase();
  const stringArray = [...string];
  const newArray = [];
  stringArray.forEach(index => {
    newArray.unshift(index);
  });
  const reversedString = newArray.reverse().join('');
  return string == reversedString;

}

//replace возвращает новую строку c совпадениями и соединяет символы в строку без пробелов, регулярное выражение выводит только буквы или цифры используя глобальный и регистронезависимый поиск. и приводит их к одному регистру  а дальше методы  как в предыдущей функции
let isPalindrome = function(s) {
  let newStr = s.replace(/[^(a-z)|(а-я)0-9]/gi,"").toLowerCase();
  return newStr.split("").reverse().join("") === newStr ? true : false;
};



