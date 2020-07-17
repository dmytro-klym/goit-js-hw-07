  
const counterValue = document.querySelector("#value");
const addBtn = document.querySelector('[data-action="increment"]');
const remBtn = document.querySelector('[data-action="decrement"]');

let numb = Number(value.textContent);

addBtn.addEventListener("click", increment);
remBtn.addEventListener("click", decrement);

function increment(event) {
  numb += 1;
  value.textContent = numb;
}
function decrement(event) {
  if (numb > 0) {
    numb -= 1;
    value.textContent = numb;
  }
}