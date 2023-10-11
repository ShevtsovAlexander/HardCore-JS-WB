
//насколько понял задание нам нужно реализовать JSON.stringify который принимает какой-либо
//тип и делает из него строку

const JSONStringify = (obj) => {

  const isArray = (value) => {
    return Array.isArray(value) && typeof value === 'object';
  };

  const isObject = (value) => {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
  };

  const isString = (value) => {
    return typeof value === 'string';
  };

  const isBoolean = (value) => {
    return typeof value === 'boolean';
  };

  const isNumber = (value) => {
    return typeof value === 'number';
  };

  // Общая проверка числа, строки и логического значения
  const restOfDataTypes = (value) => {
    return isNumber(value) || isString(value) || isBoolean(value);
  };

  // Boolean и Number ведут себя одинаково, а String нам нужно добавить дополнительные кавычки
  if (restOfDataTypes(obj)) {
    const passQuotes = isString(obj) ? `"` : '';
    return `${passQuotes}${obj}${passQuotes}`;
  }

// Эта функция будет использоваться для удаления лишних запятых из массивов и объектов
    const removeComma = (str) => {
    const tempArr = str.split('');
    tempArr.pop();
    return tempArr.join('');
  };

  // Рекурсивный вызов функции Arrays для обработки вложенных массивов.
  if (isArray(obj)) {
    let arrStr = '';
    obj.forEach((eachValue) => {
      arrStr += JSONStringify(eachValue);
      arrStr += ','
    });

    return  `[` + removeComma(arrStr) + `]`;
  }

  // Рекурсивный вызов функции для объекта для обработки вложенного объекта
  if (isObject(obj)) {

    let objStr = '';

    const objKeys = Object.keys(obj);

    objKeys.forEach((eachKey) => {
      const eachValue = obj[eachKey];
      objStr += `"${eachKey}":${JSONStringify(eachValue)},`;
    });
    return `{` + removeComma(objStr) + `}`;
  }
};

const sampleObj = {
  name: 'Sid',
  age: 29,
  engineer: true,
  expertise: ['html', 'css', 'react'],
  address: {
    city: 'New york',
    state: 'NY'
  }
};


console.log(JSONStringify(sampleObj));
