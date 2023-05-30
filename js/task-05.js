const inputNameUser = document.querySelector('#name-input');
const greetingsUser = document.querySelector('#name-output');

inputNameUser.addEventListener('input', event => {
    event.preventDefault();

    const inputValue = inputNameUser.value;

    if (inputValue !== '') {
        greetingsUser.textContent = `${inputValue}`;
    } else {
        greetingsUser.textContent = 'Anonymous';
    }
});