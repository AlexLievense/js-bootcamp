const todos = [
    {
        text: 'Exercises',
        completed: false
    },
    {
        text: 'Programming',
        completed: true
    },
    {
        text: 'Tutorial on Node.js',
        completed: false
    }
]

filters = {
    searchText: '',
    hideCompleted: false
}

// You have x todos left (paragraph)
// Add a paragraph for each todo above (use textContent)
const uncompletedTodos = todos.filter(function(todo){
    return !todo.completed
})

const renderTodos = function(todos, filters){
    const filteredTodos = todos.filter(function(todo){
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompleted = !(filters.hideCompleted && todo.completed)

        return searchTextMatch && hideCompleted
    })

    document.querySelector('#todos').innerHTML = ''

    const incompleteTodos = filteredTodos.filter(function(todo){
        return !todo.completed
    })

    const statusParagraph = document.createElement('p')
    statusParagraph.textContent = `You have ${incompleteTodos.length} todos left!`
    document.querySelector('#todos').appendChild(statusParagraph)

    filteredTodos.forEach(function(todo){   
        const todoElement = document.createElement('p')
        todoElement.textContent = todo.text
        document.querySelector('#todos').appendChild(todoElement)
    })
}

renderTodos(todos, filters)

document.querySelector('#filter-todos').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault()
    const todoText = e.target.elements.todoText.value
    console.log(todoText)
    
    todos.push({
        text: todoText,
        completed: false
    })

    Object.values(e.target.elements).forEach(function(element){
        element.value = ''
    })

    renderTodos(todos, filters)
})

// Hide completed todos
document.querySelector('#hide-completed').addEventListener('change', function(e){
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})
