var el = document.getElementById("display");

function display(input) {
    el.value += input;    
}

function clearDisplay() {
    el.value = "";
}

function calculate() {
    try {
        el.value = eval(el.value);
    } catch (error) {
        el.value = "Error";
    }
}
