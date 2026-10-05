// DOM Elements (Selectors)
const btnDec = document.getElementById("btn-dec");
const btnInc = document.getElementById("btn-inc");
const btnReset = document.getElementById("btn-reset");
const btnAuto = document.getElementById("btn-auto");
const stepInput = document.getElementById("step-input");
const counterValue = document.getElementById("counter-value");

// Application State
const MIN_LIMIT = 0;
const MAX_LIMIT = 10;

let count = parseInt(localStorage.getItem("counter_value"), 10) || MIN_LIMIT;

let autoInterval = null;

// Helper Functions & UI Sync
function getStepValue() {
  return parseInt(stepInput.value, 10) || 1;
}

function updateUI() {
  counterValue.textContent = String(count).padStart(2, "0");

  localStorage.setItem("counter_value", count);

  const currentStep = getStepValue();
  btnDec.disabled = count - currentStep < MIN_LIMIT;
  btnInc.disabled = count + currentStep > MAX_LIMIT;
}

function stopAutoIncrement() {
  if (autoInterval) {
    clearInterval(autoInterval);
    autoInterval = null;
    btnAuto.textContent = "Auto Start";
  }
}

// Event Listeners
btnInc.addEventListener("click", () => {
  stopAutoIncrement();
  const step = getStepValue();
  if (count + step <= MAX_LIMIT) {
    count += step;
    updateUI();
  }
});

btnDec.addEventListener("click", () => {
  stopAutoIncrement();
  const step = getStepValue();
  if (count - step >= MIN_LIMIT) {
    count -= step;
    updateUI();
  }
});

btnReset.addEventListener("click", () => {
  stopAutoIncrement();
  count = MIN_LIMIT;
  updateUI();
});

btnAuto.addEventListener("click", () => {
  if (autoInterval) {
    stopAutoIncrement();
  } else {
    btnAuto.textContent = "Auto Stop";
    autoInterval = setInterval(() => {
      const step = getStepValue();

      if (count + step <= MAX_LIMIT) {
        count += step;
        updateUI();
      } else {
        stopAutoIncrement();
      }
    }, 1000);
  }
});

// Initial UI render
updateUI();
