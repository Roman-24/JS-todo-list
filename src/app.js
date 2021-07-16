// Selectors
const todoInput = document.querySelector(".todo-input")
const todoButton = document.querySelector(".todo-button")
const todoList = document.querySelector(".todo-list")


// Event Listeners
todoButton.addEventListener("click", addTodo)
todoList.addEventListener("click", deleteCheck)


// Functions
function addTodo(event){

    // Prevent form from submitting
    event.preventDefault()

    /*
    we need make this:
    <div class="todo">
        <li></li>
        <button></button>
        <button></button>
    </div>
    */

    // Todo DIV
    const todoDiv = document.createElement('div')
    todoDiv.classList.add("todo")

    // Creat LI
    const newTodo = document.createElement('li')
    newTodo.innerText = todoInput.value
    todoInput.value = ""
    newTodo.classList.add("todo-item")
    todoDiv.appendChild(newTodo)

    // chceck mark button
    const completedButton = document.createElement('button')
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add('complete-btn')
    todoDiv.appendChild(completedButton)

    // chceck trash button
    const trashButton = document.createElement('button')
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add('trash-btn')
    todoDiv.appendChild(trashButton)

    // append to list
    todoList.appendChild(todoDiv)
}

function deleteCheck(event){
    const item = event.target

    // delete todo
    if (item.classList[0] === "trash-btn"){
        const todo = item.parentElement
        todo.remove()
    }
}
