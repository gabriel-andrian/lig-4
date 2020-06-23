const jogo = document.getElementById("jogo");
const tabuleiro = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
]

// função que cria a tabela com 7 colunas e 6 linhas:
function initTabuleiro() {
    createElementsColuna("coluna");
    createElementsCelula("celula");
}


function createElementsColuna(className) {
    for(let k = 0; k < 7; k++){
        const celula = document.createElement('div');
        celula.id = `coluna${k+1}`
        celula.className = className;
        jogo.appendChild(celula);
    } return;
}

function createElementsCelula(className){
    let arrayColunas = document.querySelectorAll('.coluna');
    for(let i = 0; i < arrayColunas.length; i++){
        for(let c = 1; c < arrayColunas.length; c++){
            const celula = document.createElement('div');
            celula.className = className;
            arrayColunas[i].appendChild(celula);
        }
    }
}
initTabuleiro();


// classes do jogador no css:
const classJogadorUm = "celula jogador1";
const classJogadorDois = "celula jogador2"

// define o primeiro jogador (1/2);
let jogadorAtv = 1;
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
        return criaDiv
    } else {
        // cria a div correspondente à classe;
        let criaDiv = document.createElement('div')
        criaDiv.className = classJogadorDois;
        // altera para o próximo jogador;
        jogadorAtv = 1;
        criaDiv.className = classJogadorDois;
        return criaDiv
    }
}

// função que verifica a a posição de inserção da peça do player:
    // chama a função de criação do jogador;

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
