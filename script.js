let Email = document.getElementById("email")
let ErrorEmail = document.getElementById("error-email")
let Form = document.querySelector("form")

Form.addEventListener('submit', (e) =>{
    if (Email.value == '' ) {
        ErrorEmail.textContent = 'Please use a valid email'
    }
})

Email.addEventListener('keyup', () =>{
    if (ValidationEmail(Email.value) !== true) {
        ErrorEmail.textContent = 'Please use a valid email'
    } else {
        ErrorEmail.textContent = ''
    }
})

function ValidationEmail (Email) {
    let EmailPattern =  /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return EmailPattern.test(Email)
}