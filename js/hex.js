const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const container = document.querySelector('.container');

const generateColorBtn = document.querySelector('.generate-color-btn');
const selectedColor = document.querySelector('.selected-color');
const colorContainer = document.querySelector('.color-container')


function generateRandomNumber(){
return Math.floor(Math.random() * hex.length)
}


generateColorBtn.addEventListener('click', ()=>{
var hexColor = '#'
for (i = 0; i < 6; i++){
const setColor = hex[generateRandomNumber()];
hexColor += setColor
}

container.style.backgroundColor = hexColor;
selectedColor.textContent = hexColor
})