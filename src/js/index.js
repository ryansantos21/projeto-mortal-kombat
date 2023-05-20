const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imagemBotaoTrocaDoTema = document.querySelector(".logo");

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("modo escuro");


body.classList.toggle("modo-escuro");

if (modoEscuroEstaAtivo) {

imagemBotaoTrocaDoTema.setAttribute("src", "./src/imagens/logo.png");
} else {
imagemBotaoTrocaDoTema.setAttribute("src", "./src/imagens/logodois.png");
}

});