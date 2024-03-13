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

submitBtn.addEventListener("click", function verifyPasswordMatching() {
    let firstInput = passwordInput.value;
    let secondInput = passwordConfirmation.value;
    if (firstInput === secondInput) {
        confirmationField.style.borderColor = "#c0c0c0)";
    } else {
        confirmationField.style.borderColor = 'red'
    }
});

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