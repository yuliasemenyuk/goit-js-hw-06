
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const colorName = document.querySelector('.color');

changeColorBtn.addEventListener('click', colorChanger);

function colorChanger() {
  document.body.style.backgroundColor = getRandomHexColor();
  colorName.textContent = getRandomHexColor();
}