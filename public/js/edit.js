const confirmBtn = document.querySelector('.todo__edit-btn--confirm');

confirmBtn.addEventListener('click', changeContent);

async function changeContent() {
  const todoId = this.parentNode.dataset.id;
  // const newTodoText = this.parentNode.childNodes[1].value;
  const newTodoText = this.parentNode.querySelector('input').value;

  try {
    const response = await fetch(`/edit/${todoId}`, {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        idFromJSFile: todoId,
        textFromJSFile: newTodoText,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.assign('/todos');
  } catch (error) {
    console.log(error);
  }
}
