const btnLanzar = document.querySelector("#btnLanzar");


function lanzarDados(){

    let dado1 = Math.floor(Math.random() * 6) + 1;
    let dado2 = Math.floor(Math.random() * 6) + 1;
    console.log(dado1, dado2);
    document.querySelector("#dado1").src = `img/dado${dado1}.png`;
    document.querySelector("#dado2").src = `img/dado${dado2}.png`;
    let resultado = dado1 + dado2;

    if(resultado === 8){
       document.querySelector("#resultado").innerHTML = "Ganaste!";	
       document.querySelector("#resultado").classList.add("animate__lightSpeedInRight");
    }

}

btnLanzar.addEventListener("click", lanzarDados);