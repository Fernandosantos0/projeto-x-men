'use strict';

const personagens = window.document.querySelectorAll('.personagem');

personagens.forEach(personagem => {
    personagem.addEventListener('mouseenter', event => {

        // Verificando a largura do dispositivo
        if(window.innerWidth < 450) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        const el = event.target;
        
        removerSelecaoDoPersonagem();

        el.classList.add('selecionado');

        // Alterando a imagem do personagem
        alterarImagemDoPersonagemSelecionado(personagem);

        // Alterando o nome do personagem
        alterarNomeDoPersonagemSelecionado(personagem);

        // Alterando a descrição do personagem
        alterarDescricaoDoPersonagemSelecionado(personagem);
    });
});

function alterarDescricaoDoPersonagemSelecionado(personagem) {
    const descricaoPersonagem = window.document.getElementById('descricao-personagem');
    descricaoPersonagem.textContent = personagem.getAttribute('data-description');
}

function alterarNomeDoPersonagemSelecionado(personagem) {
    const nomePersonagem = window.document.getElementById('nome-personagem');
    nomePersonagem.textContent = personagem.getAttribute('data-name');
}

function alterarImagemDoPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = window.document.querySelector('.personagem-grande');
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.setAttribute('src', `./src/imagens/card-${idPersonagem}.png`);
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = window.document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}