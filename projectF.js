const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', function () {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  // Marquer comme complétée
  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Bouton de suppression
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '🗑️';
  deleteBtn.addEventListener('click', () => {
    li.remove();
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
  taskInput.value = '';
});