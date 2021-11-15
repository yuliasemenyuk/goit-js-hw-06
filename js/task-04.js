
const refs = {
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]'),
    counterValueNum: document.querySelector('#value'),
}

refs.decrementBtn.addEventListener('click', onDecreaseVal);
refs.incrementBtn.addEventListener('click', onIncreaseVal);

let counterValue = 0;

function onDecreaseVal () {
    counterValue -= 1;
    refs.counterValueNum.textContent = counterValue;
 }

function onIncreaseVal () {
    counterValue += 1;
    refs.counterValueNum.textContent = counterValue;
 }
