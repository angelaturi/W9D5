const todos = [];
const ulTag = document.querySelector('.todos')
const addTodos = document.querySelector('.add-todo-form')

const addTodo = (e) => {
    let input = document.querySelector("input[name='add-todo']");
    let val = input.value;
    let todo = {
        val,
        done: false
    };

    todos.push(todo);
    e.currentTarget.reset();

}

function populateList (todos, ulTag) {
    todos.map((todo) => {
        return `
        <li>
            <label>${todo.val}</label>
            <input type="checkbox" ${todo.done} ? 'checked' : ''} />

        </li>`
    })
}

