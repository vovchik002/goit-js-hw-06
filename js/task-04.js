const refs = {
    decrementBtn: document.querySelector('button[data-action="decrement"]'),
    incrementBtn: document.querySelector('button[data-action="increment"]'),
    valueSpan: document.querySelector('#value')
};

const clickFunctions = {
    value: 0,
    incMetod(){
        this.value -= 1;
        return refs.valueSpan.textContent = this.value
    },
    decMetod(){
        this.value += 1;
        return refs.valueSpan.textContent = this.value
    }
};




refs.decrementBtn.addEventListener('click', clickFunctions.incMetod.bind(clickFunctions));
refs.incrementBtn.addEventListener('click', clickFunctions.decMetod.bind(clickFunctions));
