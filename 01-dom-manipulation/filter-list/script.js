// DOM Elements (Selectors)
const searchInput = document.getElementById("search-input");
const itemList = document.getElementById("item-list");

// Application Data (Source of Truth)
const PRODUCTS = [
  "Apple iPhone",
  "Samsung Galaxy",
  "Google Pixel",
  "MacBook Pro",
  "Dell XPS Laptop",
  "iPad Air",
  "Nintendo Switch",
];

// Helper Functions & UI Sync
function renderList(filteredItems) {
  itemList.innerHTML = " ";

  filteredItems.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    itemList.appendChild(li);
  });
}

// Event Listeners
searchInput.addEventListener("input", (event) => {
  const query = event.target.value.toLowerCase();

  const filtered = PRODUCTS.filter((product) =>
    product.toLowerCase().includes(query),
  );

  renderList(filtered);
});

// Initial Render
renderList(PRODUCTS);
