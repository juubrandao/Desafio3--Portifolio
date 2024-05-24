/* Efeito de Digitação*/
document.addEventListener("DOMContentLoaded", function(){
    var texto = "OLÁ, SOU: JU BRANDÃO";
    var atraso = 200;
    var textoElemento = document.querySelector(".titulo-principal");
    
    var contadorDeLetras = 0;
    function escreverTexto() {
        if (contadorDeLetras < texto.length) {
            textoElemento.textContent += texto.charAt(contadorDeLetras);
            contadorDeLetras++;
            setTimeout(escreverTexto, atraso);
        }
    }

    escreverTexto();

});


let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById ('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})









