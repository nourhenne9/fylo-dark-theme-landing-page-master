const paragraph = document.querySelector("p");
paragraph.innerHTML = "ahla w sahla";
const gridChildren = document.querySelectorAll(".grid-child");
console.log(gridChildren);
gridChildren[2].innerHTML = "hello yellow!";
gridChildren[2].style.backgroundColor = "red";

gridChildren[2].addEventListener("click", function () {
  gridChildren[2].style.cursor = "pointer";
  gridChildren[1].classList.toggle("party");
});