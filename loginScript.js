//*FUCNTION TO VIEW PASSWORD
const passwordInputToView = document.querySelector("#login-password")
const checkBoxToViewPassword = document.querySelector("#checkbox-login")

//using arrow fucntion to start getting use to it
checkBoxToViewPassword.addEventListener('click', () => {
    if (passwordInputToView.type === 'password') {
        passwordInputToView.type = 'text'
    } else {
        passwordInputToView.type = 'password'
    }
})

//*FUCNTION CLEAR INPUTS 
const emailInput = document.querySelector("#login-email")
const btnSubmit = document.querySelector(".btn-submit-login")

btnSubmit.addEventListener('click', (e) =>{
    if (!emailInput.value.includes('@')) {
        e.preventDefault()
        alert('Please enter a valid email address')
        passwordInputToView.value = passwordInputToView.value
    } else {
        emailInput.value = ""
        passwordInputToView.value = ""
    }
})

