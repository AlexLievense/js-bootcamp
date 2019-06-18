const notes = [
    {
        title: 'Note 3',
        body: 'Note body of note 1'
    },
    {
        title: 'Note 1',
        body: 'Note body of note 1'
    },
    {
        title: 'Note 2',
        body: 'Note body of note 1'
    },
    {
        title: 'Note 3',
        body: 'Note body of note 1'
    }
]

const sortNotes = function (notes) {
    notes.sort(function(a, b){
        if (a.title.toLowerCase() < b.title.toLowerCase()) return -1
        if (a.title.toLowerCase() > b.title.toLowerCase()) return 1
        return 0
    })
}

console.log(notes)
sortNotes(notes)
console.log(notes)

const findNoteByTitle = function (notes, noteTitle) {
    return notes.find(function (note) {
        return note.title.toLowerCase() === noteTitle.toLowerCase() 
    })
}

const findNotesBySearchTerm = function (notes, searchTerm) {
    return notes.filter(function (note, index ) {
        return note.title.includes(searchTerm) || note.body.includes(searchTerm) 
    })
}

console.log(findNoteByTitle(notes, 'Note 3'))
console.log(findNotesBySearchTerm(notes, 'note 1'))

// console.log(notes.length)

// console.log(notes.pop())
// notes.push( 'My latest note')
// console.log(notes)

// console.log(notes.shift())
// notes.unshift('My first note')
// console.log(notes)

// notes.splice(0,0, 'My real first note!', 'Another note')
// console.log(notes)

// notes.forEach(function(item, index) {
//     console.log(index, item)
// })

// // Counting... 1, 2, 3, ...
// for (let i=0; i<20; i++){
//     console.log(i)
// }

// for (let i=0; i<notes.length; i++){
//     console.log(notes[i])
// }

console.log(notes.findIndex(function (note, index){
    return note.title === 'Note 2'
} ))