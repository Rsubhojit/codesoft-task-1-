let displayValue = "0";

function clearDisplay() {
    displayValue = "0";
    updateDisplay();
}

function appendToDisplay(val) {
    if (displayValue === "0" && val !== ".") {
        displayValue = val;
    } else {
        displayValue += val;
    }
    updateDisplay();
}

function calculate() {
    try {
        displayValue = eval(displayValue).toString();
        updateDisplay();
    } catch (error) {
        displayValue = "Error";
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById("display").value = displayValue;
}