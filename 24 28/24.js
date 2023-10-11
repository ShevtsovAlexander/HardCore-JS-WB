
async function getData() {
  const response = await fetch("http://www.filltext.com/?rows=1000&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true");
  const data = await response.json();
  return data;
}
const result = await getData();
let postsData;
postsData = [...result]



async function tableData(res) {
  let currentPage = 1;
  let rows = 50;


   function sortFname() {
    postsData.sort(function (a, b) {
      if (a.fname < b.fname) {
        return -1;
      }
      if (a.fname > b.fname) {
        return 1;
      }
      return 0
    });
     displayList(postsData, rows, currentPage);
  }
  function sortFnameDown() {
    postsData.sort(function (a, b) {
      if (a.fname < b.fname) {
        return 1;
      }
      if (a.fname > b.fname) {
        return -1;
      }
      return 0
    });
    displayList(postsData, rows, currentPage);
  }
  function sortlname() {
    postsData.sort(function (a, b) {
      if (a.lname < b.lname) {
        return -1;
      }
      if (a.lname > b.lname) {
        return 1;
      }
      return 0
    });
     displayList(postsData, rows, currentPage);
  }
  function sortlnameDown() {
    postsData.sort(function (a, b) {
      if (a.lname < b.lname) {
        return 1;
      }
      if (a.lname > b.lname) {
        return -1;
      }
      return 0
    });
     displayList(postsData, rows, currentPage);
  }
  function sorttel() {
    postsData.sort(function (a, b) {
      if (a.tel < b.tel) {
        return -1;
      }
      if (a.tel > b.tel) {
        return 1;
      }
      return 0
    });
     displayList(postsData, rows, currentPage);
  }
  function sorttelDown() {
    postsData.sort(function (a, b) {
      if (a.tel < b.tel) {
        return 1;
      }
      if (a.tel > b.tel) {
        return -1;
      }
      return 0
    });
     displayList(postsData, rows, currentPage);
  }
  function sortAddress() {
    postsData.sort(function (a, b) {
      if (a.address < b.address) {
        return -1;
      }
      if (a.address > b.address) {
        return 1;
      }
      return 0
    });
     displayList(postsData, rows, currentPage);
  }
  function sortAddressDown() {
    postsData.sort(function (a, b) {
      if (a.address < b.address) {
        return 1;
      }
      if (a.address > b.address) {
        return -1;
      }
      return 0
    });
     displayList(postsData, rows, currentPage);
  }
  function sortcity() {
    postsData.sort(function (a, b) {
      if (a.city < b.city) {
        return -1;
      }
      if (a.city > b.city) {
        return 1;
      }
      return 0
    });
     displayList(postsData, rows, currentPage);
  }
  function sortcityDown() {
    postsData.sort(function (a, b) {
      if (a.city < b.city) {
        return 1;
      }
      if (a.city > b.city) {
        return -1;
      }
      return 0
    });
     displayList(postsData, rows, currentPage);
  }
  function sortState() {
    postsData.sort(function (a, b) {
      if (a.state < b.state) {
        return -1;
      }
      if (a.state > b.state) {
        return 1;
      }
      return 0
    });
     displayList(postsData, rows, currentPage);
  }
  function sortStateDown() {
    postsData.sort(function (a, b) {
      if (a.state < b.state) {
        return 1;
      }
      if (a.state > b.state) {
        return -1;
      }
      return 0
    });
     displayList(postsData, rows, currentPage);
  }
  function sortzip() {
    postsData.sort(function (a, b) {
      if (a.zip < b.zip) {
        return -1;
      }
      if (a.zip > b.zip) {
        return 1;
      }
      return 0
    });
     displayList(postsData, rows, currentPage);
  }
  function sortzipDown() {
    postsData.sort(function (a, b) {
      if (a.zip < b.zip) {
        return 1;
      }
      if (a.zip > b.zip) {
        return -1;
      }
      return 0
    });
     displayList(postsData, rows, currentPage);
  }

  document.querySelector('.fname').addEventListener('click', sortFname)
  document.querySelector('.fname').addEventListener('dblclick', sortFnameDown)
  document.querySelector('.lname').addEventListener('click', sortlname)
  document.querySelector('.lname').addEventListener('dblclick', sortlnameDown)
  document.querySelector('.tel').addEventListener('click', sorttel)
  document.querySelector('.tel').addEventListener('dblclick', sorttelDown)
  document.querySelector('.address').addEventListener('click', sortAddress)
  document.querySelector('.address').addEventListener('dblclick', sortAddressDown)
  document.querySelector('.city').addEventListener('click', sortcity)
  document.querySelector('.city').addEventListener('dblclick', sortcityDown)
  document.querySelector('.state').addEventListener('click', sortState)
  document.querySelector('.state').addEventListener('dblclick', sortStateDown)
  document.querySelector('.zip').addEventListener('click', sortzip)
  document.querySelector('.zip').addEventListener('dblclick', sortzipDown)

  function displayList(arrData, rowPerPage, page) {
    let tr = document.querySelectorAll('tbody > tr')
    tr.forEach((items) => {
      items.remove()
    })
    page--;

    const start = rowPerPage * page;
    const end = start + rowPerPage;
    const paginatedData = arrData.slice(start, end);
    paginatedData.forEach(appendTable)
  }
  function displayPagination(arrData, rowPerPage) {
    const paginationEl = document.querySelector('.pagination');
    const pagesCount = Math.ceil(arrData.length / rowPerPage);
    const ulEl = document.createElement("ul");
    ulEl.classList.add('pagination__list');

    for (let i = 0; i < pagesCount; i++) {
      const liEl = displayPaginationBtn(i + 1);
      ulEl.appendChild(liEl)
    }
    paginationEl.appendChild(ulEl)
  }
  function displayPaginationBtn(page) {
    const liEl = document.createElement("li");
    liEl.classList.add('pagination__item')
    liEl.innerText = page
    if (currentPage === page) liEl.classList.add('pagination__item--active');

    liEl.addEventListener('click', () => {
      currentPage = page

      displayList(postsData, rows, currentPage)

      let currentItemLi = document.querySelector('li.pagination__item--active');
      currentItemLi.classList.remove('pagination__item--active');

      liEl.classList.add('pagination__item--active');
    })

    return liEl;
  }

  displayList(postsData, rows, currentPage);
  displayPagination(postsData, rows);

}

function appendTable(table) {
  let tbody = document.getElementById('tbody')

  const postNode = composePost(table)
  tbody.append(postNode)

}


function composePost(item) {
  if (!item) return
  // Обращаемся к шаблону, который создали ранее:
  const template = document.getElementById('table_template')
  const table = template.content.cloneNode(true);
  // Добавляем соответствующие тексты и числа в нужные места в «скелете»:
  table.getElementById('fname').innerHTML += item.fname
  table.getElementById('lname').innerHTML += item.lname
  table.getElementById('tel').innerHTML += item.tel
  table.getElementById('address').innerHTML += item.address
  table.getElementById('city').innerHTML += item.city
  table.getElementById('state').innerHTML += item.state
  table.getElementById('zip').innerHTML += item.zip

  return  table
}

tableData()

