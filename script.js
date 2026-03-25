const addBtn = document.querySelector('#add-btn');
const input = document.querySelector('#todo-input');
const list = document.querySelector('#todo-list');

const API = "https://tinkr.tech/sdb/todos";

function loadTodos(){

fetch(API)
.then(response => response.json())
.then(data => {

list.innerHTML = "";

data.forEach(todo => {

const li = document.createElement("li");
li.textContent = todo.text;
list.appendChild(li);

});

});

}

function addTodo(){

const todo = {
text: input.value
};

return fetch(API,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(todo)
});

}

addBtn.addEventListener("click", function(){

addTodo()
.then(() => loadTodos());

input.value="";

});

loadTodos();
