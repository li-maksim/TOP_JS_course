const formValidation = (() => {

    const form = document.querySelector('form')
    const email = document.querySelector('#email')
    const country = document.querySelector('#country')
    const zip = document.querySelector('#zip')
    const password = document.querySelector('#password')
    const confPassword = document.querySelector('#conf_password')
    const btn = document.querySelector('#submit')
    const spans = document.querySelectorAll('span')

    const inputs = [email, country, zip, password, confPassword]

    const checkInputs = function() {
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].checkValidity() == false) {
                inputs[i].setAttribute('class', 'red')
            } else {
                inputs[i].classList.remove('red')
            }
        } 
    }

    const check = function() {
        checkInputs()
        if (!email.checkValidity()) {
            // email.setCustomValidity('Enter correct email')
            spans[0].textContent = email.validationMessage
        } else {
            email.setCustomValidity('')
            email.classList.remove('red')
            spans[0].textContent = ''
        }

        if (!zip.checkValidity()) {
            // zip.setCustomValidity('Enter correct ZIP-code')
            spans[1].textContent = zip.validationMessage
        } else {
            console.log('123123')
            zip.setCustomValidity('')
            zip.classList.remove('red')
            spans[1].textContent = ''
        }

        if (!password.checkValidity()) {
            // password.setCustomValidity('Passwords should be at least 8 characters long and contain letters and numbers')
            spans[2].textContent = password.validationMessage
        } else {
            spans[2].textContent = ''
        }

        if (confPassword.value != password.value) {
            // confPassword.setCustomValidity('Passwords should match')
            spans[3].textContent = confPassword.validationMessage
            confPassword.setAttribute('class', 'red')
        } else {
            spans[3].textContent = ''
            confPassword.classList.remove('red')
        }

    }

    btn.addEventListener('click', function(event) {
        event.preventDefault()
        check()
    })

})()