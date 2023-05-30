function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnChange = document.querySelector('.change-color');
const widgetColor = document.querySelector('.color')

btnChange.addEventListener('click', () => {
  const colorStyle = getRandomHexColor();

  widgetColor.textContent = colorStyle;
  document.body.style.backgroundColor = colorStyle;
});