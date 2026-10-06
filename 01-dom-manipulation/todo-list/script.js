// DOM Elements (Selectors)
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const counterStatus = document.getElementById("counter-status");

// Application State (Array of Objects)
// Carrega as tarefas salvas ou inicia um array vazio se não houver dados
let todos = JSON.parse(localStorage.getItem("todos_list")) || [];

// Helper Functions & UI Sync
function saveToLocalStorage() {
  localStorage.setItem("todos_list", JSON.stringify(todos));
}

function updateCounters() {
  const totalTasks = todos.length;
  const completedTasks = todos.filter((todo) => todo.completed).length;

  counterStatus.textContent = `Completed: ${completedTasks} / ${totalTasks}`;
}

function renderUI() {
  // Limpa a lista existente para renderizar do zero baseado no estado atual
  todoList.innerHTML = "";

  todos.forEach((todo) => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = todo.text;

    // Aplica a classe caso a tarefa já esteja concluída no estado inicial
    if (todo.completed) {
      span.classList.add("completed");
    }

    // Evento 1: Alternar para Concluído
    span.addEventListener("click", () => {
      todo.completed = !todo.completed; // Altera o estado na memória
      span.classList.toggle("completed");
      saveToLocalStorage();
      updateCounters();
    });

    // Evento 2: Cria o botão de deletar tarefa
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Deletar";
    deleteBtn.ariaLabel = `Deletar tarefa: ${todo.text}`;

    deleteBtn.addEventListener("click", () => {
      // Filtra o array removendo o item atual baseado no ID único
      todos = todos.filter((t) => t.id !== todo.id);
      saveToLocalStorage();
      renderUI(); // Redesenha a lista atualizada
    });

    // Justa as peças dentro do <li>
    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  });

  updateCounters();
}

// Event Listeners
todoForm.addEventListener("submit", (event) => {
  // Previne o comportamento padrão de recarregar a página
  event.preventDefault();

  // Remove espaços extras nas pontas do texto
  const taskText = todoInput.value.trim();

  // Validação: Impede strings vazias
  if (taskText === "") return;

  // Cria um objeto de tarefa com id único baseado em data/timestamp
  const newTodo = {
    id: Date.now(),
    text: taskText,
    completed: false,
  };

  todos.push(newTodo); // Adiciona ao array do estado
  saveToLocalStorage();
  renderUI(); // Redesenha a tela

  // Limpa o input e devolve o foco para ele continuar digitando
  todoInput.value = "";
  todoInput.focus();
});

// Initial Render (Carrega os dados e monta a tela logo ao abrir a página)
renderUI();
