const jogo = document.getElementById("jogo");
const tabuleiro = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
]

// Definir variaveis globais:
let jogadorAtv = 1;
let gameOver = false;
let linha = 0;
let coluna = 0;
let cont = 0;

// classes do jogador no css:
const classJogadorUm = "jogador1";
const classJogadorDois = "jogador2";

// Função para inicializar o tabuleiro vazio:
function initTabuleiro() {
    createElementsColuna("coluna");
    createElementsCelula("celula");
}

// Criação das divs colunas, loop de criação de 7 colunas.
function createElementsColuna(className) {
    for (let k = 0; k < 7; k++) {
        const celula = document.createElement('div');
        celula.id = `coluna${k + 1}`
        celula.className = className;
        jogo.appendChild(celula);
    } return;
}

// Criação das divs celulas dentro das divs colunas criadas, 6 celulas cada coluna.
function createElementsCelula(className) {
    let arrayColunas = document.querySelectorAll('.coluna');
    for (let i = 0; i < arrayColunas.length; i++) {
        for (let c = 1; c < arrayColunas.length; c++) {
            const celula = document.createElement('div');
            celula.className = className;
            arrayColunas[i].appendChild(celula);
        }
    }
}
// Função para verificiar se ouve alguma vitória ou empate:
function condicaoVitoria() {
    if(cont === 42){
        mensagemEmpate();
    }
    // Encontrar se tem 4 iguais na HORIZONTAL:
    const bordaX = (tabuleiro[0].length) - 3;
    for (let l = 0; l < tabuleiro.length; l++) {
        for (let x = 0; x < bordaX; x++) {
            let celula = tabuleiro[l][x];
            if(celula !== 0){
                if(celula === tabuleiro[l][x+1] && celula === tabuleiro[l][x+2] && celula === tabuleiro[l][x+3]){
                    mensagemVitoria();
                }
            }
        }
    }
    // Encontrar se tem 4 iguais na VERTICAL:
    const bordaY = (tabuleiro.length) - 3;
    for (let l = 0; l < bordaY; l++) {
        for (let x = 0; x < tabuleiro[0].length; x++) {
            const celula = tabuleiro[l][x];
            if(celula !== 0){
                if(celula === tabuleiro[l+1][x] && celula === tabuleiro[l+2][x] && celula === tabuleiro[l+3][x]){
                    mensagemVitoria();
                }
            }
        }
    }
    // Encontrar se tem 4 iguais na Diagonal esquerda p/ direita:
    for (let l = 0; l < bordaY; l++) {
        for (let x = 0; x < bordaX; x++) {
            const celula = tabuleiro[l][x];
            if(celula !== 0){
                if(celula === tabuleiro[l+1][x+1] && celula === tabuleiro[l+2][x+2] && celula === tabuleiro[l+3][x+3]){
                    mensagemVitoria();
                }

            }
        }
    }
    // Encontrar se tem 4 iguais na Diagonal direita p/ esquerda:
    for (let l = 3; l < tabuleiro.length; l++) {
        for (let x = 0; x < bordaX; x++) {
            const celula = tabuleiro[l][x];
            if(celula !== 0){
                if(celula === tabuleiro[l-1][x+1] && celula === tabuleiro[l-2][x+2] && celula === tabuleiro[l-3][x+3]){
                    mensagemVitoria();
                }
            }
        }
    }

}

// Função para aparecer mensagem de vitória, botão reset e parar o jogo:
function mensagemVitoria(){
    gameOver = true;
    const divVitoria = document.getElementById('vencedor');
    const mensagemVitoria = document.getElementById('msgVitoria')
    divVitoria.style.visibility = "visible";
    if(jogadorAtv === 1){
        mensagemVitoria.textContent = "PARABÉNS O JOGADOR 2 GANHOU!!!";
    } else{
        mensagemVitoria.textContent = "PARABÉNS O JOGADOR 1 GANHOU!!!";
    }
}
// Função para aparecer mensagem de empate, botão reset e parar o jogo:
function mensagemEmpate(){
    gameOver = true;
    const divVitoria = document.getElementById('vencedor');
    const mensagemVitoria = document.getElementById('msgVitoria')
    divVitoria.style.visibility = "visible";
    mensagemVitoria.textContent = "EMPATE!";
}

// função que cria a div do jogador 1 ou 2:
const criaDivJogador = () => {
    if (jogadorAtv === 1) {
        let criaDiv = document.createElement('div')
        jogadorAtv = 2;
        criaDiv.className = classJogadorUm;
        return criaDiv;
    } else {
        let criaDiv = document.createElement('div')
        criaDiv.className = classJogadorDois;
        jogadorAtv = 1;
        criaDiv.className = classJogadorDois;
        return criaDiv;
    }
}

// Função de jogada, verifica se a bolinha do jogador pode ser inserida (main do programa):
function jogada(e) {
    if(gameOver !== true){
        let isCelula = e.target.classList.contains('celula');
        let isColuna = e.target.classList.contains('coluna');    
        let hasChild = e.target.childElementCount;
        let target = e.currentTarget;
    
        coluna = parseInt(e.target.parentNode.id.split('').pop()) - 1;
    
        if (isCelula === true && hasChild === 0) {
            for (let i = 5; i >= 0; i--) {
                let celula = target.childNodes[i]
                if (celula.childElementCount === 0) {
                    linha = i;
                    let jogadorAtual = criaDivJogador()
                    celula.appendChild(jogadorAtual)
                    if(jogadorAtv === 1){
                        tabuleiro[linha][coluna] = 2;
                        cont+= 1;
                        condicaoVitoria();
                    } else{
                        tabuleiro[linha][coluna] = 1;
                        cont+= 1;
                        condicaoVitoria();
                    }
                    break
                }
            }
        }
    }
}
// Inicializa a função do tabuleiro Inicial:
initTabuleiro();

// Verifica se aconteceu algum evento de clique nas colunas:
for (let a = 1; a <= 7; a++) {
    document.getElementById(`coluna${a}`).addEventListener('click', jogada)
}
