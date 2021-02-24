const tiempoHTML = document.querySelector('#tiempo');
const puntosHTML = document.querySelector('#puntos');
const pelota = document.querySelector('#pelota');
const btnRestar = document.querySelector('#restarJuego');
const btnIniciar = document.querySelector('#iniciarJuego');
//RESULTADO
const resultado = document.querySelector('#resultado');

let puntos =  0;
let tiempo = 30;
//Eventos
btnIniciar.addEventListener('click',iniciarJuego);
//Iniciando Juego
function iniciarJuego(){    
    pelota.addEventListener('click',pelotaClick);
    btnRestar.addEventListener('click',reiniciarJuego);
    setInterval(restarTiempo,1000);
    setTimeout(()=>{
        btnIniciar.disabled = true;
        btnIniciar.style.opacity = '0.5';
        btnIniciar.style.cursor = 'not-allowed';
    },50)
}
//Pelota Click Sumar tiempo e imprimir
function pelotaClick(){
    //Puntos
    const posicion1 = Math.round(Math.random()*450);
    const posicion2 = Math.round(Math.random()*450);
    //Sumar Puntos
    if(puntos === 30){
        resultado.textContent = 'GANASTE';
        if(resultado.classList.contains('perdio')){
            resultado.classList.remove('perdio')
            resultado.classList.add('gano');
        }else{
            resultado.classList.add('gano');
        }
    }else if(tiempo === 0){

    }else{
        puntos += 1;
        puntosHTML.textContent = `${puntos}/ 30 Puntos`;
        pelota.style.marginLeft = `${posicion1}px`;
        pelota.style.marginTop = `${posicion2}px`;
    }
    
}
//Restar Tiempo
function restarTiempo(){
    if(tiempo > 0 && puntos < 30){
        tiempo--;
        tiempoHTML.textContent = `${tiempo} / 30 Tiempo(seg)`;
    };
    if(tiempo === 0){
        resultado.textContent = 'PERDISTE';
        if(resultado.classList.contains('gano')){
            resultado.classList.remove('gano')
            resultado.classList.add('perdio');
        }else{
            resultado.classList.add('perdio');
        }
    };
}
//Reiniciar Juego
function reiniciarJuego(){
    puntos = 0;
    puntosHTML.textContent = `${puntos}/ 30 Puntos`;
    tiempo = 30;
    resultado.textContent = '';
    resultado.classList.remove('gano');
    resultado.classList.remove('perdio');
}