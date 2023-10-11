

function newElem() {
  let elem = document.createElement("div");
  elem.innerHTML = 'Всем Привет'
  elem.classList.add('newElem')
  document.querySelector('body').append(elem)
}

newElem()