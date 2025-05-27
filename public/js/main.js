const deleteBtns = document.querySelectorAll('.todo__delete-button');
const todoItems = document.querySelectorAll(
  '.todo__item--not-completed'
);
const todoItemsCompleted = document.querySelectorAll(
  '.todo__item--completed'
);

Array.from(deleteBtns).forEach((element) => {
  element.addEventListener('click', deleteTodo);
});

Array.from(todoItems).forEach((element) => {
  element.addEventListener('click', markComplete);
});

Array.from(todoItemsCompleted).forEach((element) => {
  element.addEventListener('click', markIncomplete);
});

// Cannot access deleteTodo before intialization
// const deleteTodo = () => console.log('Todo deleted!');

async function deleteTodo() {
  const todoId = this.parentNode.dataset.id;

  try {
    const response = await fetch('/todos/deleteTodo', {
      method: 'delete',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        todoIdFromJSFile: todoId,
      }),
    });
    const data = response.json();
    console.log(data);
    location.reload();
  } catch (error) {
    console.log(error);
  }
}

async function markComplete() {
  const todoId = this.parentNode.dataset.id;
  try {
    const response = await fetch('/todos/markComplete', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        todoIdFromJSFile: todoId,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (error) {
    console.log(error);
  }
}

async function markIncomplete() {
  const todoId = this.parentNode.dataset.id;
  try {
    const response = await fetch('/todos/markIncomplete', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        todoIdFromJSFile: todoId,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (error) {
    console.log(error);
  }
}
