let inputAction = document.querySelector('input');
let spanOutput = document.querySelector('span'); 

inputAction.addEventListener("input", (event) => {
    spanOutput.textContent = event.currentTarget.value;
    if (event.currentTarget.value === ''){spanOutput.textContent = "Anonymous" }
});

