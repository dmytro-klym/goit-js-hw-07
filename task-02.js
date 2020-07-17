const ingredients = [
   "Картопля",
   "Гриби",
   "Часник",
   "Помідори",
   "Зелень",
   "Приправи",
 ];
 
 const ingredientsList = document.querySelector("#ingredients");
 const generateItems = function (arr) {
   for (let elem of arr) {
     const item = document.createElement("li");
     item.textContent = elem;
     ingredientsList.appendChild(item);
   }
   return;
 };
 generateItems(ingredients);





































