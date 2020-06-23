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

// Captura o ID das colunas para implementar a função de imprimir o disco do jogador:
let coluna1 = document.getElementById("coluna1");
let coluna2 = document.getElementById("coluna2");
let coluna3 = document.getElementById("coluna3");
let coluna4 = document.getElementById("coluna4");
let coluna5 = document.getElementById("coluna5");
let coluna6 = document.getElementById("coluna6");
let coluna7 = document.getElementById("coluna7");


// Função que imprime o disco do jogador >>>>>>>>>> funcionando apenas quando o clique é na célula onde quer colocar o disco; <<<<<<<<<<
//// O parâmetro é correspondente ao evento de clique;
const imprimeJogador = (evento) => {
    let isCelula = evento.target.classList.contains('celula');
    let isColuna = evento.target.classList.contains('coluna');
    let hasChild = evento.target.childElementCount;
    let target = evento.target;
    
    
    if (isCelula === true && hasChild === 0) {
        let jogadorAtual = criaDivJogador();
        target.appendChild(jogadorAtual);
    }
    
    console.log(evento);
    console.log(`É célula? R: ${isCelula}`);
    console.log(`É coluna? R: ${isColuna}`);
    console.log(`O elemento clicado tem ${hasChild} elementos filhos`);
}


// Eventos de clique com a função de imprimir o disco do jogador:
coluna1.addEventListener('click', imprimeJogador)
coluna2.addEventListener('click', imprimeJogador)
coluna3.addEventListener('click', imprimeJogador)
coluna4.addEventListener('click', imprimeJogador)
coluna5.addEventListener('click', imprimeJogador)
coluna6.addEventListener('click', imprimeJogador)
coluna7.addEventListener('click', imprimeJogador)


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
