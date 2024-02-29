const cardEl = document.querySelector('.card')
const formEl = document.querySelector('.form');
const inputEl = document.querySelector('.input');
const formBtnEl = document.querySelector('.form__btn');
const errorMsgEl = document.querySelector('.error-msg');
const successMsgEl = document.querySelector('.success-msg');
const dismissBtnEl = document.querySelector('.dismiss-btn');
const emailAddressEl = document.querySelector('.email-address');

// check email
const isEmail = (input) => {
    const email =/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return email.test(input);
} 

// validate email
const validateEmail = () => {
    const inputValue = inputEl.value.trim();
    
    if (inputValue == '' || !isEmail(inputValue)) {
        inputEl.classList.add('error');
        errorMsgEl.classList.add('error');
    } else {
        cardEl.classList.add('success')
        successMsgEl.classList.add('success')
        // set given email in success msg
        emailAddressEl.textContent = inputValue
    }
}

// dismiss success msg
const dismissMsg = () => {
    cardEl.classList.remove('success')
    successMsgEl.classList.remove('success')
    inputEl.classList.remove('error')
    errorMsgEl.classList.remove('error')
    inputEl.value = ''
}

formBtnEl.addEventListener('click', (event) => {
    event.preventDefault();
    validateEmail()
})

dismissBtnEl.addEventListener('click', (event) => {
    event.preventDefault();
    dismissMsg()
})