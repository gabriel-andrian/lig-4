const jogo = document.getElementById("jogo");
const tabuleiro = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
]

// define o primeiro jogador (1/2);
let jogadorAtv = 1;
let gameOver = false;
// classes do jogador no css:
const classJogadorUm = "jogador1";
const classJogadorDois = "jogador2";

// função que cria a tabela com 7 colunas e 6 linhas:
    // cada liniha precisa receber a classe correspondente no css;
    // cada célula precisa receber a classe correspondente no css;
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

function condicaoVitoria(){
    // Encontrar se tem 4 iguais na HORIZONTAL:
    const bordaX = (tabuleiro[0].length) - 3;
    // loop nas linhas do tabuleiro:
    for(let l = 0; l < tabuleiro.length; l++){
        // linha em cada celula da linha:
        for(let x = 0; x < bordaX; x++){
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
    for(let l = 0; l < bordaY; l++){
        for(let x = 0; x < tabuleiro[0].length; x++){
            const celula = tabuleiro[l][x];
            if(celula !== 0){
                if(celula === tabuleiro[l+1][x] && celula === tabuleiro[l+2][x] && celula === tabuleiro[l+3][x]){
                    mensagemVitoria();
                }
            }
        }
    }
    // Encontrar se tem 4 iguais na Diagonal esquerda p/ direita:
    for(let l = 0; l < bordaY; l++){
        for(let x = 0; x < bordaX; x++){
            const celula = tabuleiro[l][x];
            if(celula !== 0){
                if(celula === tabuleiro[l+1][x+1] && celula === tabuleiro[l+2][x+2] && celula === tabuleiro[l+3][x+3]){
                    mensagemVitoria();
                }

            }
        }
    }
    // Encontrar se tem 4 iguais na Diagonal direita p/ esquerda:
    for(let l = 3; l < tabuleiro.length; l++){
        for(let x = 0; x < bordaX; x++){
            const celula = tabuleiro[l][x];
            if(celula !== 0){
                if(celula === tabuleiro[l-1][x+1] && celula === tabuleiro[l-2][x+2] && celula === tabuleiro[l-3][x+3]){
                    mensagemVitoria();
                }

            }
        }
    }

} 

// função que cria a div do jogador 1 ou 2:
//// o primeiro parâmetro tem que ser sempre o jogadorAtual, e o "lugar" é a div onde precisa fazer o appendChild
const criaDivJogador = () => {

    // inicia com o jogador atual;
    if (jogadorAtv === 1) {
        // cria a div correspondente à classe;
        let criaDiv = document.createElement('div')
        // altera para o próximo jogador;
        jogadorAtv = 2;
        criaDiv.className = classJogadorUm;
        return criaDiv;
    } else {
        // cria a div correspondente à classe;
        let criaDiv = document.createElement('div')
        criaDiv.className = classJogadorDois;
        // altera para o próximo jogador;
        jogadorAtv = 1;
        criaDiv.className = classJogadorDois;
        return criaDiv;
    }
}

function jogada(e) {
    if(gameOver !== true){
        // Retorna true ou false
        let isCelula = e.target.classList.contains('celula');
        let isColuna = e.target.classList.contains('coluna');
        
        // Retorna a quantidade de filhos da célula clicada
        let hasChild = e.target.childElementCount;
        
        // Captura a célula clicada
        let target = e.target;
        console.log(target);
        
        if (isCelula === true && hasChild === 0) {
            let jogadorAtual = criaDivJogador()
            target.appendChild(jogadorAtual)
        // } else {
            // alert('Joagada errada, tente outro campo!')
        }
        
        // console.log(e);
        // console.log(`É célula? R: ${isCelula}`);
        // console.log(`É coluna? R: ${isColuna}`);
        // console.log(`O elemento clicado tem ${hasChild} elementos filhos`);
    }    
}

function mensagemVitoria(){
    gameOver = true;
    const divVitoria = document.getElementById('vencedor');
    const mensagemVitoria = document.getElementById('msgVitoria')
    divVitoria.style.visibility = "visible";
    mensagemVitoria.textContent = "PARABÉNS O JOGADOR "+jogadorAtv+" GANHOU!!!";
}

initTabuleiro();
// condicaoVitoria();
    document.getElementById("coluna1").addEventListener('click', jogada)
    document.getElementById("coluna2").addEventListener('click', jogada)
    document.getElementById("coluna3").addEventListener('click', jogada)
    document.getElementById("coluna4").addEventListener('click', jogada)
    document.getElementById("coluna5").addEventListener('click', jogada)
    document.getElementById("coluna6").addEventListener('click', jogada)
    document.getElementById("coluna7").addEventListener('click', jogada)


// função que verifica a condição de vitória/empate:
    // 4 peças lado a lado na horizontal;
    // 4 peças lado a lado na vertical;
    // 4 peças lado a lado na diagona da esquerda-acima para direita-abaixo;
    // 4 peças lado a lado na diagona da direita-acima para a esquerda-abaixo;

// função que imprime o resultado:
    // se houver vitória:
        // cria a div do resultado;
        // atribui a classe correspondente;
        // apensa a div no lugar dela no html;

    // se houver empate:
        // cria div do resultado;
        // atribui a classe correspondente;
        // apensa a div no lugar dela no html

//evento de clique inserido na coluna:
    // pega o id da linha e o último filho;
    // chama a função que verifica a posição de inserção;
    // chama função que verifica condição de vitória;
        // se houver vitória/empate:
            // chama função que imprime o resultado;
        // senão chama o jogador seguinte
