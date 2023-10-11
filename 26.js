// function traversal(tree) {
//   // ...обработка данных узла...
//   console.log(tree.data); // просто выводим в консоль
//
//   // если это лист, завершить функцию
//   if ( !tree.refs ) return;
//
//   // последовательно справа налево обходим ветви, ведущие из текущего узла
//   for (let i = tree.refs.length - 1; i >= 0; i--) {
//     traversal( tree.refs[i] ); // рекурсия
//   }
// }
//
// let tree = {
//   data: 1,
//   refs: [{
//     data: 5,
//     refs: [{ data: 10 }, {
//       data: 7,
//       refs: [{ data: 9 }, { data: 8 }]
//     }, { data: 6 }]
//   }, {
//     data: 2,
//     refs: [{ data: 4 }, { data: 3 }]
//   }]
// };
//



function enumChildNodes(node) {
  // если нам передали элемент
  if (node && 1 === node.nodeType) {
    // берем его первый дочерний узел
    let child = node.firstChild;
    // пока узлы не закончились
    while (child) {
      // если этот узел является элементом
      if (1 === child.nodeType) {
        // что-то делаем с найденным элементом
        console.log('элемент ' + child.tagName);
        // рекурсивно перечисляем дочерние узлы
        enumChildNodes(child);
      }
      // переходим к следующему узлу
      child = child.nextSibling;
    }
  }
}

// перечисляем содержимое body
enumChildNodes(document.body);

