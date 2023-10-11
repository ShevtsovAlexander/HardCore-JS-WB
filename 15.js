
//Ключевое слово await заставит интерпретатор JavaScript ждать до тех пор, пока промис справа от await не выполнится

async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Выполнено!"), 1000)
  });

  // будет ждать, пока промис не выполнится
  let result = await promise;

  return result

}

f().then(r => console.log(r));