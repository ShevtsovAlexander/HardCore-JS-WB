
//здесь мы создаем функцию, которая принимает стандартные для связанного списка параметры(значение и след элемент)
//если значение не задано === 0,иначе это значение записывается в список вместе с next который ихначально null,
// так как мы начинаем с конца, а у последнего элемента next всегда null
// и так далее двигаясь наверх к первому элементу
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

//json представлен в виде массива обьектов
let input = [
  {
    "name": "Molecule Man",
    "age": 29,
    "secretIdentity": "Dan Jukes",
    "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
  },
  {
    "name": "Madame Uppercut",
    "age": 39,
    "secretIdentity": "Jane Wilson",

  },
  {
    "name": "Eternal Flame",
    "age": 1000000,
    "secretIdentity": "Unknown",
  }
  ]

//при помощи reduce обходим каждый элемент с конца присваивая val next как параметры функции ListNode
let head = input.reverse().reduce((acc, curr) => {
  console.log(acc)
  console.log(curr)
  if (acc == null) {
    acc = new ListNode(curr);

  } else {
    acc = new ListNode(curr, acc);
  }
  return acc;
}, null);

console.log(head);