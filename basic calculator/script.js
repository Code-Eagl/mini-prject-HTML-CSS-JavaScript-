const buttonEl = document.querySelectorAll("button");
const inputEl = document.getElementById("reasult");
//console.log(buttonEl);
for (let i = 0; i < buttonEl.length; i++) {
  buttonEl[i].addEventListener("click", () => {
    const buttonvalue = buttonEl[i].textContent;
    if (buttonvalue === "clear") {
      clearResult();
    } else if (buttonvalue === "=") {
      calculateReasult();
    } else if (buttonvalue === "<=") {
      clearlastvalue(buttonvalue);
    } else {
      appendvalue(buttonvalue);
    }
  });
}
function clearResult() {
  inputEl.value = "";
}
function calculateReasult() {
  inputEl.value = eval(inputEl.value);
}
function appendvalue(buttonvalue) {
  inputEl.value += buttonvalue;
  console.log(buttonvalue);
}
function clearlastvalue(buttonvalue) {
  inputEl.value -= buttonvalue;
  console.log(buttonvalue);
}
