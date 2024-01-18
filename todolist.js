


document.querySelector('.js-add-button').addEventListener('click', () => {
  arrAdd();
})


const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

renderTodoList()
function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach((todoObject, index) => {
     
    const { name,dueDate } = todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button class="delete-button js-delete-todo-button">Delete</button>`;
    todoListHTML += html
    
  });

  document.querySelector('.js-todoList').innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
      todoList.splice(index, 1);
      renderTodoList();
      saveToStorage();
    })
  });
  
}


function arrAdd() {
  const inpVal = document.querySelector('.todInp')
  const name = inpVal.value
  const dateInpElem = document.querySelector('.js-due-date-input');
  const dueDate = dateInpElem.value
  todoList.push({name, dueDate})
  inpVal.value = ''
  renderTodoList()
  saveToStorage()
}

function eventKeyHandle(event) {
  if (event.key === 'Enter')
  {
    arrAdd();
  }  
}

function saveToStorage() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}




