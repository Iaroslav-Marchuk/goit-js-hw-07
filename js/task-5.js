const btn = document.querySelector(".change-color");
const color = document.querySelector(".color");

btn.addEventListener('click', fn => {
  color.textContent = getRandomHexColor()
  document.body.style.backgroundColor = color.textContent;
});


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


