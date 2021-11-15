
const input = document.querySelector('#validation-input');
const inputValLength = input.getAttribute('data-length');

input.addEventListener('blur', inputValidator);

function inputValidator() { 
    if (input.value.length == inputValLength) {
    input.classList.remove('invalid');
    input.classList.add('valid')
} else { 
    input.classList.remove('valid');
    input.classList.add('invalid')
}
}
