
const book = {
  bookName: '1984',
  author: 'George Orwell',
  year: 1949,
  changeName: function (value)  {
    this.bookName = value
  },
  changeAuthor: function (value)  {
    this.author = value
  },
  changeYear: function (value)  {
    this.year = value
  },
  getProp: function (val)  {
    return this.year
  }
}

book.changeName('dfgfdg')
book.changeAuthor('dfgfdg')
book.changeYear('dfgfdg')
console.log(book.getProp('year'))

console.log(book)