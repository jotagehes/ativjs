/*Funções criadas em JavaScript*/
alert("Oi");
confirm("Vamos acessar?");
var nome = prompt("Informe seu nome completo separado por espaços:");
let ligado = true;
nomes = nome.split(" ");
console.log(nomes);
var i = 0;


for (i < nomes.lenght; i++;) {
    console.log(nomes[i] + "<br>")
}

function deligarTudo() {
    if (ligado == true) {
        apagarLamp();
        ligado = false;
        alert("Você está sem energia!");
        document.getElementById("meuclick").textContent = "Reativar Energia";
    } else {
        alert("A energia será restaurada");
        ligado = true;
        ligarLamp();
        document.getElementById("meuclick").textContent = "Desativar Energia";
    }

}
function sayhi() {
    let nome = document.getElementById("in-nome").value;
    let sobrenome = document.getElementById("in-snome").value;
    alert("Olá " + nome + " " + sobrenome)
}
function calcmedia() {
    var notastt = document.getElementById("in-notas");
    var medias = notastt.value.split(",");
    console.log(medias);
    let resultado = 0;
    let divisor = medias.lenght;
    for (j = 0; j < medias.lenght; j++) {

        resultado = medias[j] + resultado;
        console.log(resultado);
        console.log("Socorro");
    }
    console.log(resultado);
    alert("A média das notas é: " + resultado / divisor);

}
function verificar() {

}
function ligarLamp() {
    if (ligado == true) {
        document.getElementById("imlamp").src = "https://i.stack.imgur.com/ybxlO.jpg";
    }

}
function apagarLamp() {
    document.getElementById("imlamp").src = "https://i.stack.imgur.com/b983w.jpg";


}