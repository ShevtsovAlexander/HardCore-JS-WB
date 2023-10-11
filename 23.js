//Пароль считается надежным, если он удовлетворяет следующим критериям:
//
// Он содержит хотя бы один строчный английский символ.
// Он содержит как минимум один английский символ в верхнем регистре.
// Он содержит как минимум один специальный символ. Специальные символы: !@#$%^&*()-+ и тд..
// Его длина не менее 8.
// Он содержит хотя бы одну цифру.



// Javascript program for the above approach

function printStrongNess(input_string) {
  const n = input_string.length;
  // Checking lower alphabet in string
  let hasLower = false;
  let hasUpper = false;
  let hasDigit = false;
  let specialChar = false;
  const normalChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890 ";

  for (let i = 0; i < n; i++) {
    if (input_string[i] >= "a" && input_string[i] <= "z") {
      hasLower = true;
    }
    if (input_string[i] >= "A" && input_string[i] <= "Z") {
      hasUpper = true;
    }
    if (input_string[i] >= "0" && input_string[i] <= "9") {
      hasDigit = true;
    }
    if (!normalChars.includes(input_string[i])) {
      specialChar = true;
    }
  }

  let strength = "Некорректный пин";
  if (hasLower && hasUpper && hasDigit && specialChar && n >= 8) {
    strength = "Сильный!";
  }else if (hasLower && hasUpper && hasDigit && specialChar && n >= 6) {
    strength = "Средний,увеличьте количество символов!";
  }else if ((hasLower && hasUpper ) && specialChar && n >= 6) {
    strength = "Средний,пароль должен содержать число!";
  }else if ((hasLower && hasUpper ) && hasDigit && n >= 6) {
    strength = "Средний,пароль должен содержать спецсимвол!";
  }else if ((hasLower  || hasDigit)  && hasDigit && n >= 6) {
    strength = "Средний,пароль должен содержать прописные и заглавные буквы!";
    }else if ((hasLower  && hasDigit)  && n >= 6) {
      strength = "Средний,добавьте заглавные буквы!";
    }else if ((hasUpper  && hasDigit) && n >= 6) {
      strength = "Средний,добавьте прописные буквы!";
    }else if ((!hasDigit) && n >= 6) {
      strength = "Пароль должен содержать число!";
    }else if (!hasUpper && n >= 6) {
      strength = "Пароль должен содержать заглавные буквы!";
    }else if (!hasLower && n >= 6) {
      strength = "Пароль должен содержать прописные буквы!";
  }
  if ( n < 6 && n >= 1) {
    strength = "Пароль должен быть длиннее!";
  }
  console.log(` ${strength}`);
}

const input_string = "xxxxxa1!";
printStrongNess(input_string)

