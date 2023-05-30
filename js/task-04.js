let counterValue = 0;

const plusBtn = document.querySelector('[data-action="increment"]');
const minusBtn = document.querySelector('[data-action="decrement"]');
const showResult = document.querySelector('#value');

const decrementValue = () => {
    counterValue -= 1;
    showResult.textContent = `${counterValue}`;
};

const incrementValue = () => {
    counterValue += 1;
    showResult.textContent = `${counterValue}`;
};

minusBtn.addEventListener('click', decrementValue);
plusBtn.addEventListener('click', incrementValue);
