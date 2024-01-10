let contador = 1;

function alterarStatus (id){
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'alugar';
        alert('O jogo foi devolvido!');
        contador--;

    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'devolver';
        contador++;
    }
    let plural = contador > 1 ? 'jogos foram alugados' : 'jogo foi alugado';
    console.log(`${contador} ${plural}`);
}

