const deleteBtns = document.querySelectorAll('.todo__delete-button');

Array.from(deleteBtns).forEach((element) => {
  element.addEventListener('click', deleteTodo);
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
