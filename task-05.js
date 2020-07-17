  
const input = document.getElementById("name-input");

input.addEventListener("input", () => {
  span.textContent = input.value;
});

const span = document.getElementById("name-output");