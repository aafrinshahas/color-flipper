const color = ['Green', 'Purple', 'Red', 'Blue', 'Yellow', 'Brown', 'Orange', 'Pink', 'Gray', 'Cyan', 'White', 'Navy Blue', 'Tan', 'Indigo'];

const container = document.querySelector('.container');

const generateColorBtn = document.querySelector('.generate-color-btn');
const selectedColor = document.querySelector('.selected-color');
const colorContainer = document.querySelector('.color-container')

function generateRandomNumber(){
    return Math.floor(Math.random() * color.length)
}

generateColorBtn.addEventListener('click', ()=>{
    const setColor = color[generateRandomNumber()];
    container.style.backgroundColor = setColor;
    selectedColor.textContent = setColor
})

