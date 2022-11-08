function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const backGroundColor = document.querySelector("body");
const buttonChange = document.querySelector("button.change-color");
const spanColor = document.querySelector("span.color")
buttonChange.addEventListener("click", changeColorFn);

function changeColorFn() {
  spanColor.textContent = getRandomHexColor()
  backGroundColor.style.backgroundColor = spanColor.textContent
 

};