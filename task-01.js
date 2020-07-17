const countCategories = document.getElementsByClassName("item");

const nameCategories = function (colection) {
  for (let elem of colection) {
    console.log(elem.children[0].textContent);
    console.log(elem.children[1].children.length);
  }
  return;
};
nameCategories(countCategories);