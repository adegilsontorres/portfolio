const menuPerfil = document.querySelector('.perfil');
const checkBotaoRecolher = document.getElementById('check-botao-recolher');
const checkBotaoExpandir = document.getElementById('check-botao-expandir');
const botaoExpandir = document.querySelector('.botao-expandir');
const botaoRecolher = document.querySelector('.botao-recolher');

checkBotaoExpandir.addEventListener('change', function () {
    checkBotaoRecolher.checked = false;
    if (checkBotaoExpandir.checked == true){
        menuPerfil.style.animationDuration = "2s";
        menuPerfil.style.animationName = "aparecer";
        menuPerfil.style.left = "0px";
        checkBotaoExpandir.checked = false;
    }
} )

checkBotaoRecolher.addEventListener('change', function () {
    checkBotaoExpandir.checked = false;
    if (checkBotaoRecolher.checked == true){
        menuPerfil.style.animationDuration = "2s";
        menuPerfil.style.animationName = "sumir";
        menuPerfil.style.left = "-100vw";
        checkBotaoRecolher.checked = false;
    }
} )




