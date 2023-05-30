const input = document.querySelector('#validation-input');
const inputValue = input.value;


input.addEventListener('blur', () => {
    const inputValue = input.value.trim();
    const dataValue = input.dataset.length * 1;

    if (inputValue.length === dataValue) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else if (inputValue.length !== dataValue) {
        input.classList.remove('valid');
        input.classList.add('invalid');
    } 
});