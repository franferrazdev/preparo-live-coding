// DOM Elements (Selectors)
const usersGrid = document.getElementById("users-grid");
const loadingIndicator = document.getElementById("loading-indicator");
const errorMessage = document.getElementById("error-message");
const errorText = document.getElementById("error-text");
const btnRetry = document.getElementById("btn-retry");

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

// Core Async Logic with Performance & Resilience Enhancements
async function fetchUsers() {
  // Cria o AbortController para timeout de rede
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 3000); // Limite de 3s
  try {
    const response = await fetch(API_URL, { signal: controller.signal });

    // Validar manualmente usando a propriedade response.ok
    if (!response.ok) {
      throw new Error(`Erro de HTTP! Status: ${response.status}`);
    }

    const usersData = await response.json();
    renderUsers(usersData);

    // Slice de dados para limitar em apenas 3 resultados
    const limitedUsers = usersData.slice(0, 3);
    renderUsers(limitedUsers);
  } catch (error) {
    if (error.name === "AbortError") {
      errorText.textContent =
        "A solicitação expirou. O servidor demorou muito para responder.";
    } else {
      // Trata e renderiza a mensagem de erro na tela
      errorText.textContent = `Falha ao carregar o diretório de usuários: ${error.message}`;
    }
    errorMessage.style.display = "block";
    usersGrid.innerHTML = ""; // Limpa resultados antwriores caso haja falha
  } finally {
    clearTimeout(timeoutId); // Limpa o temporizador da memória
    loadingIndicator.style.display = "none";
  }
}

// Mecanismo de Retry
btnRetry.addEventListener("click", () => {
  errorMessage.style.display = "none";
  loadingIndicator.style.display = "block";
  fetchUsers();
});

// Inicia a solicitação inicial à API
fetchUsers();
