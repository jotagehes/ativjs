/*Funções criadas em JavaScript*/
alert("Oi");
confirm("Vamos acessar?");
prompt("Qual o seu nome?");
let ligado = true;

function deligarTudo() {
    if (ligado == true) {
        apagarLamp();
        ligado = false
        alert("Você está sem energia!");
        document.getElementById("meuclick").textContent="Reativar Energia";
    } else {
        alert("A energia será restaurada");
        ligado = true;
        ligarLamp();
        document.getElementById("meuclick").textContent="Desativar Energia";
    }

}
function verificar() {

}
function ligarLamp() {
    if (ligado == true) {
        document.getElementById("imlamp").src="https://i.stack.imgur.com/ybxlO.jpg";
    }

}
function apagarLamp() {
    document.getElementById("imlamp").src="https://i.stack.imgur.com/b983w.jpg";


}