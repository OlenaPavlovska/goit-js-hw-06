const inputRef = document.querySelector("#validation-input");
inputRef.addEventListener('blur',() => {
  const inputLength = parseInt(inputRef.getAttribute('data-length'))
  const actualLength = inputRef.value.length;
  if (actualLength === inputLength) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  }
  else {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid')
  }

})





