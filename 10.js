function parseJSON(input) {

// если ввод пуст или начинается с недопустимого символа, выдаем ошибку
  if (input === "" || input[0] === "'") {
    throw Error();
  }

  // // проверяем, является ли ввод null, пустым объектом, пустым массивом или логическим значением, и возвращаем значение из ввода
  if (input === "null") {
    return null;
  }
  if (input === "{}") {
    return {};
  }
  if (input === "[]") {
    return [];
  }
  if (input === "true") {
    return true;
  }
  if (input === "false") {
    return false;
  }


//если ввод начинается с кавычки, возвращаем значение из кавычек
  if (input[0] === '"' ) {
    return input.slice(1, -1);
  }
  if (input[0] === ' ') {
    return input.slice(1)
  }



// если оно начинается со скобки, выполняем синтаксический анализ содержимого в скобках
if (input[0] === "{") {
    return input
      .slice(1)
      .split(",")
      .reduce((acc, item) => {
// получаем ключ и значение свойства JSON, разделив строку на символ двоеточия
  const index = item.indexOf(":");
        const key = item.slice(0, index);
        const value = item.slice(index + 1);
        acc[parseJSON(key)] = parseJSON(value);
        return acc;
      }, {});
  }
// если входные данные представляют собой массив, возвращаем значение из массива
if (input[0] === "[") {
    return input
      .slice(1, -1)
      .split(";")
      .map((x) => parseJSON(x));
  }
}


console.log(parseJSON('{"name":"Sid","age": 12,"engineer":true,"expertise":["html";"css";"react"],"address":{"city":"New york","state":"NY"}}'))