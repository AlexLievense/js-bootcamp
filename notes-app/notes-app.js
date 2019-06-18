// DOM: Document Object Model
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

const filters = {
    searchText: ''
}

const renderNotes = function(notes, filters) {
    const filteredNotes = notes.filter(function(note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function(note){
        const noteElement = document.createElement('p')
        noteElement.className = 'note'
        noteElement.textContent = note.title
        document.querySelector('#notes').appendChild(noteElement)
    })
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function(e){
    console.log(e)
    e.target.textContent = 'The button was clicked!'
})

document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#sort-by').addEventListener('change', function(e){
    console.log(e.target.value)
})

