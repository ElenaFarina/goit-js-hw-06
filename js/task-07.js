const inputRangeSize = document.querySelector('#font-size-control');
const textResult = document.querySelector('#text');

inputRangeSize.addEventListener('input', changeFontSize);

function changeFontSize () {
    textResult.style.fontSize = this.value + 'px';
};