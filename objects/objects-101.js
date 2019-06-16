let myBook = {
    title: '1984',
    author: {
        firstName: 'George',
        lastName: 'Orwell'
    },
    pageCount: 326
}

console.log(`${myBook.title} is written by ${myBook.author.firstName} ${myBook.author.lastName} and has ${myBook.pageCount} pages.`)

// Challenge area
let person = {
    firstName: 'Alex',
    lastName: 'Lievense',
    location: {
        city: 'Eindhoven',
        country: 'The Netherlands',
    },
    age: 25
}

console.log(`I am ${person.firstName} ${person.lastName}, I am ${person.age} years old and I reside in ${person.location.city}, ${person.location.country}`)

person.age = 24
console.log(`Sorry, my bad, my actual age is ${person.age}`)