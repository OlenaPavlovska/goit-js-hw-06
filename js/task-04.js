let counterValue = 0
const valueRef = document.querySelector(`#value`)
const decrementBtn = document.querySelector(`[data-action="decrement"]`);
const incrementBtn = document.querySelector(`[data-action="increment"]`);

const clickDecrementBtn = event => {
    counterValue -= 1;
    valueRef.textContent = counterValue
}
const clickIncrementBtn = event => {
    counterValue += 1;
    valueRef.textContent = counterValue
}
decrementBtn.addEventListener(`click`, clickDecrementBtn)
incrementBtn.addEventListener(`click`, clickIncrementBtn)