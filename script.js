const container = document.getElementById("container");
const colorArray = [`red`,`blue`,`green`,`yellow`,`white`,`purple`,`pink`,`beige`,`orange`]
const noOfSquares = 500;

for (let i = 0; i < noOfSquares; i++){
    const square = document.createElement(`div`)
    square.classList.add('square')

    square.addEventListener(`mouseover`, () => setColor(square))
    square.addEventListener(`mouseout`, () => removeColor(square))

    square.addEventListener('touchstart', () => setColor(square));
    square.addEventListener('touchend', () => removeColor(square));


    function setColor(element){
        const color = getRandomColor()
        element.style.background = color
        element.style.boxShadow = `0 0 2px ${color} 0 0 10px ${color}`
    }

    function removeColor(element){
        element.style.background = `#1d1d1d`
        element.style.boxShadow = `black`
    }
 

    container.appendChild(square)

    function getRandomColor(){
        return colorArray[Math.floor(Math.random()*colorArray.length)]
    }
}