const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const todoForm =document.querySelector("#todo-form");
let savetodo = [];

const SAVETODO = "savetodo";

function handleToDosubmit (e){
    e.preventDefault();
    const todolist = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text: todolist,
        id: Date.now(),
      };
    savetodo.push(newTodoObj);
    painToDo(newTodoObj);
    saveTodo();
}
function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    savetodo = savetodo.filter((toDo) => toDo.id !== parseInt(li.id));
    saveTodo();

}

function saveTodo(){
    localStorage.setItem(SAVETODO,JSON.stringify(savetodo));

}

function painToDo(todo){
    const li = document.createElement("li");
    li.id = todo.id;
    const span = document.createElement("span");
    span.innerText = todo.text;
    const button =document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

todoForm.addEventListener("submit",handleToDosubmit);

const savedTodo = localStorage.getItem(SAVETODO);

if(savedTodo!==null){
    const parsedTodo = JSON.parse(savedTodo);
    savetodo = parsedTodo;
    parsedTodo.forEach(painToDo);
}