// DOM Elements (Selectors)
const usersGrid = document.getElementById("users-grid");
const loadingIndicator = document.getElementById("loading-indicator");
const errorMessage = document.getElementById("error-message");

const API_URL = "https://jsonplaceholder.typicode.com/users";

// Helper Functions & UI Sync
function renderUsers(users) {
  // Limpa o grid caso seja necessário repopular
  usersGrid.innerHTML = "";

  users.forEach((user) => {
    const card = document.createElement("div");
    card.className = "user-card";

    // Cria elementos internos usando caminhos de propriedades do objeto retornado
    card.innerHTML = `
        <h3>${user.name}</h3>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Company:</strong> ${user.company.name}</p>
        `;

    usersGrid.appendChild(card);
  });
}

// Main Asynchronous Logic
async function fetchUsers() {
  try {
    const response = await fetch(API_URL);

    // Validar manualmente usando a propriedade response.ok
    if (!response.ok) {
      throw new Error(`Erro de HTTP! Status: ${response.status}`);
    }

    const usersData = await response.json();
    renderUsers(usersData);
  } catch (error) {
    // Trata e renderiza a mensagem de erro na tela
    errorMessage.textContent = `Falha ao carregar o diretório de usuários: ${error.message}`;
    errorMessage.style.display = "block";
  } finally {
    loadingIndicator.style.display = "none";
  }
}

// Inicia a solicitação inicial à API
fetchUsers();
