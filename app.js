// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container =document.querySelector('#container')


const baseUrl =  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

for(let i=1;i<=100;i++){

const newDiv =document.createElement('div')
newDiv.classList.add('pokemon')
const span = document.createElement('span')
const newImg = document.createElement('img')
span.innerText=`${i}`
newImg.src =`${baseUrl}${i}.png`
container.append(newDiv)
newDiv.appendChild(newImg)
newDiv.appendChild(span)
}