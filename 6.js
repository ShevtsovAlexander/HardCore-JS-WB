const data = [
  {"name": "John", "age": 36},
  {"name": "Alex", "age": 18},
  {"name": "Alex", "age": 28},
  {"name": "Mari", "age": 18},
  {"name": "John", "age": 19},
  {"name": "Jane", "age": 25},
];

data.sort(function(a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  if (a.name = b.name) {
    if (a.age < b.age) {
      return -1;
    }
    if (a.age > b.age) {
      return 1;
    }
  }
  return 0
});

console.log(data)

//Доработан метод sort до необходимых нам условий
//если name первого объекта меньше name второго,
// то первый объект должен идти раньше.
// Если name первого объекта больше,
// то он должен идти позже. Если имена равны, то порядок осуществляется по возрасту