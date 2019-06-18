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

const deleteTodo = function(todos, todoText) {
    const index = todos.findIndex(function(todo){
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })

    if (index !== -1) {
        todos.splice(index, 1)
    }
    else {
        console.log('The requested todo was not found')
    }
}

const filterUncompletedTodos = function(todos) {
    return todos.filter(function(todo) {
        return !todo.completed
    })
}

const sortByCompletion = function(todos) {
    todos.sort(function (a, b) {
        if (a.completed && !b.completed) return -1
        if (!a.completed && b.completed) return 1
        return 0
    })
}

// deleteTodo(todos, 'Programming')
sortByCompletion(todos)
console.log(todos)
console.log(filterUncompletedTodos(todos))
