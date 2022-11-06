const textInput = document.querySelector('input');
const lenghtInput = Number(textInput.dataset.length);
textInput.addEventListener("blur", onBlur );

console.log(lenghtInput)
function onBlur(event) {
  if (textInput.value.length === lenghtInput) {
    textInput.classList.add("valid")
  } else { textInput.classList.add("invalid") }
  
  console.log(textInput.value.length)
}
