
let position = 1;
let offset = 0;
let count = 5;

let commits = [];

if(localStorage.getItem('items')) {
setTimeout(() => {
  let body = JSON.parse(localStorage.getItem('items'))
  commits = [...body]
  commits.forEach(appendPost)
  commits.forEach((item, idx) => {
    (async () => {
      let response = await fetch(item.attachments[0].photo.sizes[6].url)
      let blob = await response.blob();

      let img = document.querySelectorAll('.widget_data_img');

      img[idx].src = URL.createObjectURL(blob);

    })()
  })
}, 100)
} else {
  (async () => {
    const response = await fetch(`https://api.vk.com/method/wall.get?owner_id=-29534144&access_token=44d4725d44d4725d44d4725d0c47c1b8d1444d444d4725d21c2dd3bf6295540344ee57e&count=${count}&offset=${offset}&v=5.131`)
    let body = await response.json();
    commits = [...body.response.items]
    commits.forEach(appendPost)
    commits.forEach((item, idx) => {
      (async () => {
        let response = await fetch(item.attachments[0].photo.sizes[6].url)
        let blob = await response.blob();

        let img = document.querySelectorAll('.widget_data_img');

        img[idx].src = URL.createObjectURL(blob);

      })()
    })
    const getLocalStorageSize = function () {
      let total = 0;
      for (const x in localStorage) {
        // Value is multiplied by 2 due to data being stored in `utf-16` format, which requires twice the space.
        const amount = (localStorage[x].length * 2) / 1024 / 1024;
        if (!isNaN(amount) && localStorage.hasOwnProperty(x)) {
          // console.log(x, localStorage.getItem(x), amount);
          total += amount;
        }
      }
      console.log(`Current ${total.toFixed(2)} MB`)
    };
    try {
      localStorage.setItem('items', JSON.stringify(commits))
      console.log( `Max size ${localStorage.getItem('size')} KB`)
      getLocalStorageSize()
    } catch (e) {
      console.log('Не достаточно места в localStorage');
          localStorage.setItem('items', JSON.stringify(commits.slice(count)))
        getLocalStorageSize()
    }



  })()
}




window.addEventListener('scroll', async () => {
  let commit;
  if ((window.scrollY + window.innerHeight) + 1 >= (document.body.offsetHeight)) {
    position = position + 1;
    offset = position === 1 ? 0 : (position - 1) * count;
    const response = await fetch(`https://api.vk.com/method/wall.get?owner_id=-29534144&access_token=44d4725d44d4725d44d4725d0c47c1b8d1444d444d4725d21c2dd3bf6295540344ee57e&count=${count}&offset=${offset}&v=5.131`)
    let body = await response.json();
    commits = [...commits, ...body.response.items]
    commit = body.response.items
    commit.forEach(appendPost)
    const getLocalStorageSize = function () {
      let total = 0;
      for (const x in localStorage) {
        // Value is multiplied by 2 due to data being stored in `utf-16` format, which requires twice the space.
        const amount = (localStorage[x].length * 2) / 1024 / 1024;
        if (!isNaN(amount) && localStorage.hasOwnProperty(x)) {
          // console.log(x, localStorage.getItem(x), amount);
          total += amount;
        }
      }
      console.log(`Current ${total.toFixed(2)} MB`)
    };
    try {
      localStorage.setItem('items', JSON.stringify(commits))
      console.log( `Max size ${localStorage.getItem('size')} KB`)
      getLocalStorageSize()
    } catch (e) {
      console.log('Не достаточно места в localStorage');
      const localStorageSize = localStorage.length
      localStorage.setItem('items', JSON.stringify(commits.slice(count)))
        getLocalStorageSize()
    }

    commits.forEach((item, idx) => {
      (async () => {
        let response = await fetch(item.attachments[0].photo.sizes[6].url)
        let blob = await response.blob();

        let img = document.querySelectorAll('.widget_data_img');

        img[idx].src = URL.createObjectURL(blob);

      })()
    })
  }
})

function appendPost(postData) {
  // Если данных нет, ничего не делаем:
  if (!postData) return

  // Храним ссылку на элемент, внутрь которого
  // добавим новые элементы-свиты:
  const container = document.querySelector('.container')
  // Используем функцию composePost,
  // которую напишем чуть позже —
  // она превращает данные в HTML-элемент:
  const postNode = composePost(postData)

  // Добавляем созданный элемент в main:
  container.append(postNode)
}
function composePost(item) {
  // Если ничего не передано, ничего не возвращаем:
  if (!item) return

  // Обращаемся к шаблону, который создали ранее:
  const template = document.getElementById('post_template')

  // ...и вытаскиваем его содержимое.
  // Указываем, что нам необходимо его склонировать, а не использовать сам элемент,
  // иначе он изменится сам, и мы не сможем сделать несколько постов:
  const post = template.content.cloneNode(true);

    let date =  (new Date(item.date * 1000)).toLocaleString()
    // Добавляем соответствующие тексты и числа в нужные места в «скелете»:
      post.getElementById('like').innerHTML += item.likes.count
      post.getElementById('comments').innerHTML += item.comments.count
      post.getElementById('reposts').innerHTML += item.reposts.count
      post.getElementById('view').innerHTML += `Views: ${item.views.count}`
      post.getElementById('text').innerHTML += `${item.text}`
      post.getElementById('date').innerHTML += date
      // post.getElementById('img').src += item.attachments[0].photo.sizes[6].url

  // Возвращаем созданный элемент,
  // чтобы его можно было добавить на страницу:
 return  post
}


