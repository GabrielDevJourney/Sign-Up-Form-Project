//*FUNCTION TO ONLY ALLOW NUMBERS IN INPUT PHONE NUMBER
let inputPhoneNumber = document.getElementById('phone-number')

inputPhoneNumber.addEventListener("keypress", function (event) {

    let keyPressed = event.key
    if (isNaN(keyPressed) || keyPressed === " ") { 
    event.preventDefault();
    }
})



//*FUCNTION TO CHECK IF PASSAWORDS ARE MATCHING IF NOT BORDER WILL TURN RED
const passwordInput = document.querySelector('#password-input')
const passwordConfirmation = document.querySelector('#password-confirmation')
const confirmationField = document.querySelector(".confirmation-field")

function verifyPasswordMatching() {
    let password = passwordInput.value;
    let confirmationPassword = passwordConfirmation.value;
    if (password !== confirmationPassword) {
        confirmationField.style.borderColor = "red";
    } else {
        confirmationField.style.borderColor = "#c0c0c0";
    }
}
passwordInput.addEventListener("input", verifyPasswordMatching);
passwordConfirmation.addEventListener("input", verifyPasswordMatching);


//*FUNCTION FOR CHECKING IF INPUTS ARE FILLED
const allInputs = document.querySelectorAll('input')

function areAllInputsFilled() {
    let inputsFilled = true;
    allInputs.forEach((input) => {
    if (!input.value.trim()) {
        inputsFilled = false;
        return;
    }
    });
    return inputsFilled;
}


//*SUBMIT BUTTON EVENT 
const form = document.querySelector(".form-sign-up")
const messageRegistration = document.querySelector(".modal-container")
const submitBtn = document.querySelector('.btn-submit')

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()


        if (areAllInputsFilled() === true ) {
            messageRegistration.style.display = 'inline-block'
            form.style.display = "none";

        } else {
            alert('Please fill all fields')
        }
})




//*FUNCTION TO ENABLE VIEWING PASSWORD
const checkBoxViewPassword = document.querySelector("#check-password")

checkBoxViewPassword.addEventListener('click', function(){
    let passwordViewing = passwordInput
    if (passwordViewing.type === 'password') {
        passwordViewing.type = 'text'
    } else {
        passwordViewing.type = 'password'
    }
})

