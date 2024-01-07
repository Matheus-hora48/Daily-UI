const display = document.querySelector(".display");
const buttons = document.querySelector(".button");

const calculate = (btnValue) => {

}

buttons.array.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
