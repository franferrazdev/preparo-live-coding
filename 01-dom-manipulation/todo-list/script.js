// DOM Elements (Selectors)
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

// Helper Functions
function createTaskElement(taskText) {
  // Cria o container da linha (<li>)
  const li = document.createElement("li");

  // Cria um container de texto para a tarefa (<span>)
  const span = document.createElement("span");
  span.textContent = taskText;

  // Events
  span.addEventListener("click", () => {
    span.classList.toggle("completed");
  });

  // 1. Cria o botão de deletar tarefa
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Deletar";
  deleteBtn.ariaLabel = `Deletar tarefa: ${taskText}`;

  // 2. Clicar no botão remove o elemento inteiro do DOM
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  // Justa as peças dentro do <li>
  li.appendChild(span);
  li.appendChild(deleteBtn);

  return li;
}

// 3. Clicar no botão de submit envia o elemento formatado
todoForm.addEventListener("submit", (event) => {
  // Previne o comportamento padrão de recarregar a página
  event.preventDefault();

  // Remove espaços extras nas pontas do texto
  const taskText = todoInput.value.trim();

  // Validação: Impede strings vazias
  if (taskText === "") {
    return;
  }

  // Cria o novo item de lista
  const newTaskElement = createTaskElement(taskText);

  // Adiciona o item no final da lista visível
  todoList.appendChild(newTaskElement);

  // Limpa o input e devolve o foco para ele continuar digitando
  todoInput.value = "";
  todoInput.focus();
});
