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


function createElementsColuna(className) {
    for (let k = 0; k < 7; k++) {
        const celula = document.createElement('div');
        celula.id = `coluna${k + 1}`
        celula.className = className;
        jogo.appendChild(celula);
    } return;
}

// cada coluna terá 6 células;
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
initTabuleiro();

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

let coluna1 = document.getElementById("coluna1")
let coluna2 = document.getElementById("coluna2")
let coluna3 = document.getElementById("coluna3")
let coluna4 = document.getElementById("coluna4")
let coluna5 = document.getElementById("coluna5")
let coluna6 = document.getElementById("coluna6")
let coluna7 = document.getElementById("coluna7")

coluna1.addEventListener('click', (e) => {

    console.log(e.currentTarget);
    // let pai = e.currentTarget;

    // if (e.path[0].childElementCount === 0 && e.path[0].className == 'celula') {
    //     let jogadorAtual = criaDivJogador();
    //     pai.appendChild(jogadorAtual);
    //     console.log(pai)
    // }
})


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
