const botao = document.getElementById('btn-fujao');
const container = botao.parentElement;

botao.addEventListener('mouseover', () => {
    // Obtém a posição atual do botão dentro do container
    const estilo = window.getComputedStyle(botao);
    let posicaoAtualX = parseInt(estilo.left) || 0;
    
    // Calcula os limites do container
    const limiteDireita = container.offsetWidth - botao.offsetWidth;
    const limiteEsquerda = 0;
    
    let novaPosicaoX;
    // Se está na esquerda, vai para direita
    if (posicaoAtualX < limiteDireita / 2) {
        novaPosicaoX = posicaoAtualX + 250;
    } 
    // Se está na direita, vai para esquerda
    else {
        novaPosicaoX = posicaoAtualX - 250;
    }
    
    // Garante que o botão não saia dos limites do container
    if (novaPosicaoX > limiteDireita) {
        novaPosicaoX = limiteDireita;
    } else if (novaPosicaoX < limiteEsquerda) {
        novaPosicaoX = limiteEsquerda;
    }
    
    // Aplica a nova posição
    botao.style.left = `${novaPosicaoX}px`;
});