let nombres = []; 
btnAdd = document.querySelector('#btn-add');
btnReset = document.querySelector('#btn-reset');
btnRemove = document.querySelector('#btn-remove');
btnSorteo = document.querySelector('#btn-sorteo');
btnAdd.addEventListener('click', agregar);
btnReset.addEventListener('click', reset);
btnRemove.addEventListener('click', borrarUltimo);
btnSorteo.addEventListener('click', sortear);

function agregar() {
 let nombre = document.querySelector('#nombre').value;
 nombres.push(nombre);
 document.querySelector('#nombre').value = ""; //limpio el input
 mostrar();
}

function reset() {
 nombres = [];
 mostrar();

}
function sortear() {
    let pos = Math.floor(
       Math.random()*nombres.length);
    let g = document.querySelector("#ganador");
    g.innerHTML = nombres[pos];
  }
 
function borrarUltimo() {
    nombres.pop();
    mostrar();
   }
   

function mostrar() {
 let lista = document.querySelector("#listado");
 lista.innerHTML = ""; //borro todo lo que haya
 for(let n of nombres){
   lista.innerHTML += `<li>${n}</li>`;
   //lista.innerHTML = lista.innerHTML + "<li>" + n + "</li>";
 }
} //...los event listener

let i = 10; // contador
function cuentaRegre(){
    let intervalo = setInterval(function() {
        if (i === 0) {
            clearInterval(intervalo); // limpio intervalo
            alert('BOOOOOM!!');
        }
        else {
            i--;
            console.log(i); // muestro el contador
            // alert(i);
        }
    }, 1000);
}
// cuentaRegre(); // llamo a la funcion
