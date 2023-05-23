const textInput = document.querySelector(`#name-input`);
const textOutput = document.querySelector(`#name-output`);

const placeholder = event => {
textOutput.textContent = textInput.value !== `` ? event.currentTarget.value : `Anonymous`
}

textInput.addEventListener(`input`, placeholder);






