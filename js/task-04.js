const decBtn = document.querySelector('#counter button[data-action="decrement"]');
const incBtn = document.querySelector('#counter button[data-action="increment"]');
const resSpan = document.querySelector('#value');
let counterValue = 0;
decBtn.addEventListener('click', () => {--counterValue });
incBtn.addEventListener('click', () => {++counterValue});
console.log(counterValue);

resSpan.textContent = counterValue