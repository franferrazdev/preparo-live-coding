// DOM Elements (Selectors)
const searchInput = document.getElementById("search-input");
const itemList = document.getElementById("item-list");

// Application Data (Source of Truth)
const PRODUCTS = [
  "Apple iPhone",
  "Sansung Galaxy",
  "Google Pixel",
  "MacBook Pro",
  "Dell XPS Laptop",
  "iPad Air",
  "Nintendo Switch",
];

let debounceTimer = null;

// Helper Functions & UI Sync
function renderList(filteredItems) {
  itemList.innerHTML = " ";

  if (filteredItems.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No products found.";
    li.style.color = "gray";
    li.style.listStyle = "none";
    itemList.appendChild(li);
    return;
  }

  filteredItems.forEach((item) => {
    const li = document.createElement("li");
    const query = searchInput.value.trim();

    if (query) {
      const escapedQuery = query.replace(/[.*+?^\${}()|[\]\\]/g, "\\$&");
      const regex = new RegExp(`(${escapedQuery})`, "gi");

      li.innerHTML = item.replace(regex, "<strong>\$1</strong>");
    } else {
      li.textContent = item;
    }

    itemList.appendChild(li);
  });
}

// Event Listeners
searchInput.addEventListener("input", (event) => {
  clearTimeout(debounceTimer);

  debounceTimer = setTimeout(() => {
    const query = event.target.value.toLowerCase().trim();

    const filtered = PRODUCTS.filter((product) =>
      product.toLowerCase().includes(query),
    );

    renderList(filtered);
  }, 300);
});

// Initial Render
renderList(PRODUCTS);
