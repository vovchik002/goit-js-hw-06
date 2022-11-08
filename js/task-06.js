const textInput = document.querySelector('input');
const lenghtInput = Number(textInput.dataset.length);
textInput.addEventListener("blur", onBlur );

console.log(lenghtInput)
function onBlur(event) {
  if (textInput.value.length === lenghtInput) {
    textInput.classList.add("valid")
    textInput.classList.remove("invalid")
  } else {
    textInput.classList.remove("valid");
    textInput.classList.add("invalid")
  }
  
  console.log(textInput.value.length)
}
