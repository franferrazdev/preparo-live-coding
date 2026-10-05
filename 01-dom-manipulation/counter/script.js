// DOM Elements (Selectors)
const btnDec = document.getElementById("btn-dec");
const btnInc = document.getElementById("btn-inc");
const btnReset = document.getElementById("btn-reset");
const stepInput = document.getElementById("step-input");
const counterValue = document.getElementById("counter-value");

// Application State
let count = 0;
const MIN_LIMIT = 0;
const MAX_LIMIT = 10;

// Helper Functions & UI Sync
function getStepValue() {
  return parseInt(stepInput.value, 10) || 1;
}

function updateUI() {
  counterValue.textContent = count;

  const currentStep = getStepValue();
  btnDec.disabled = count - currentStep < MIN_LIMIT;
  btnInc.disabled = count + currentStep > MAX_LIMIT;
}

// Event Listeners
stepInput.addEventListener("input", () => {
  updateUI();
});

btnInc.addEventListener("click", () => {
  const step = getStepValue();
  if (count + step <= MAX_LIMIT) {
    count += step;
    updateUI();
  }
});

btnDec.addEventListener("click", () => {
  const step = getStepValue();
  if (count - step >= MIN_LIMIT) {
    count -= step;
    updateUI();
  }
});

btnReset.addEventListener("click", () => {
  count = 0;
  updateUI();
});

// Initial UI render
updateUI();
