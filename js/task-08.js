const loginForm = document.querySelector('.login-form');
const { email, password } = loginForm.elements;


loginForm.addEventListener('submit', onSubmit);
const profile = {};

function onSubmit(event) {
    event.preventDefault()
  
const email = event.currentTarget.elements.email;
const password = event.currentTarget.elements.password;

    if (email.value === "" || password.value === "") {
        alert("Please fill in all the fields!")
        }
    else {
        profile.email = email.value;
    profile.password = password.value;
        alert('Data send!')
        console.log(profile)
           
    }
     event.currentTarget.reset();
    }
 
