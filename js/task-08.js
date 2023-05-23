const loginForm = document.querySelector('.login-form');
const { email, password } = loginForm.elements;


loginForm.addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault()
    console.log(event)
    console.log(email.value)
    console.log(password.value)
    if (email.value.trim() === "" || password.value.trim() === "") {
        alert("Please fill in all the fields!")
        alert("Please fill in all the fields!")
        }
        else {
        alert('Data send!')
           loginForm.reset()
        }
    }
 
