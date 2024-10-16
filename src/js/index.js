const listaSelecaoNmixxs = document.querySelectorAll(".nmixx");

listaSelecaoNmixxs.forEach(nmixx => {
    nmixx.addEventListener("click", () => {
        esconderCartaoNmixx();

        const idNmixxSelecionado = mostrarCartaoNmixxSelecionado(nmixx);

        desativarNmixxNaListagem();
        ativarNmixxSelecionadoNaListagem(idNmixxSelecionado);

    })
})

function ativarNmixxSelecionadoNaListagem(idNmixxSelecionado) {
    const NmixxSelecionadoNaListagem = document.getElementById(idNmixxSelecionado);
    NmixxSelecionadoNaListagem.classList.add("ativo");
}

function desativarNmixxNaListagem() {
    const nmixxAtivoNaListagem = document.querySelector(".ativo");
    nmixxAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoNmixxSelecionado(nmixx) {
    const idNmixxSelecionado = nmixx.attributes.id.value;
    const idDoCartaoNmixxParaAbrir = "cartao-" + idNmixxSelecionado;
    const cartaoNmixxParaAbrir = document.getElementById(idDoCartaoNmixxParaAbrir);
    cartaoNmixxParaAbrir.classList.add("aberto");
    return idNmixxSelecionado;
}

function esconderCartaoNmixx() {
    const cartaoNmixxAberto = document.querySelector(".aberto");
    cartaoNmixxAberto.classList.remove("aberto");
}