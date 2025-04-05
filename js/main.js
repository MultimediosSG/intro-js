
const saludar = function(){
    alert('Hola')
    console.log("variable")
}

//const boton = document.getElementById('btnSaludar')
const boton = document.querySelector('#btnSaludar')
boton.addEventListener('click', saludar)

const tituloh1 = document.querySelector('h1')
tituloh1.innerHTML = "<span>Hola</span> Mundo"

// function saludar(){
//     alert('Hola')
//     console.log("variable")
// }

const txtnombre = document.querySelector('#nombre')
txtnombre.addEventListener('keyup', escribirSaludo)

function escribirSaludo(evento){
 let nombre = txtnombre.value
 console.log(nombre)
 mensajep = document.querySelector('#mensaje')
 mensajep.innerHTML = `Hola ${nombre}`
}


const btnEncender = document.querySelector('#btnEncender')
const btnApagar = document.querySelector('#btnApagar')

btnEncender.addEventListener('click', encender)
 btnApagar.addEventListener('click', apagar)

function encender(){
    document.querySelector('body').classList.remove('fondoApagado')
    document.querySelector('body').classList.add('fondoEncendido')
     document.querySelector("#lampara").src = "img/lampara_on.png"
}

function apagar(){
    document.querySelector('body').classList.remove('fondoEncendido')
    document.querySelector('body').classList.add('fondoApagado')
    document.querySelector("#lampara").src = "img/lampara_off.png"
}
