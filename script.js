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
const submitBtn = document.querySelector(".btn-submit")
const confirmationField = document.querySelector(".confirmation-field")

//*first check if they match use log to see
//*yes then not thing happens
//*not match then border will turn red

submitBtn.addEventListener("click", function verifyPasswordMatching() {
    let firstInput = passwordInput.value;
    let secondInput = passwordConfirmation.value;
    if (firstInput === secondInput) {
    } else {
        confirmationField.style.borderColor = 'red'
    }
});

