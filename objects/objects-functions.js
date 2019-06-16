let myBook = {
    title: '1984',
    author: {
        firstName: 'George',
        lastName: 'Orwell'
    },
    pageCount: 326
}

let myOtherBook = {
    title: 'A Peoples History',
    author: {
        firstName: 'Howard',
        lastName: 'Zinn'
    },
    pageCount: 723
}

let createBook = function (title, author, pageCount) {
    return {
        title: title,
        author: author,
        pageCount, pageCount
    }
}

let getBookInfo = function (book) {
    return `${book.title} is written by ${book.author.firstName} ${book.author.lastName} and has ${book.pageCount} pages.`
}

let author1 = {
    firstName: 'George',
    lastName: 'Orwell'
}

let author2 = {
    firstName: 'Howard',
    lastName: 'Zinn'
}

let book1 = createBook('1984', author1, 326)
let book2 = createBook('A Peoples History', author2, 723)

console.log(getBookInfo(book1))
console.log(getBookInfo(book2))