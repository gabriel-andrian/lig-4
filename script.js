// define a estrutura 7x6;

// função que cria a tabela com 7 colunas e 6 linhas:
    // cada coluna terá 6 células;
    // cada liniha precisa receber a classe correspondente no css;
    // cada célula precisa receber a classe correspondente no css;

// define o primeiro jogador (1/2);
let jogadorAtual = 1;
const classJogadorUm = "celula jogador1";
const classJogadorDois = "celula jogador2"

// função que cria a div do jogador 1 ou 2:
    // o primeiro parâmetro tem que ser sempre o jogadorAtual, e o "lugar" é a div onde precisa fazer o appendChild
    
// inicia com o jogador atual;
    // cria a div correspondente à classe;
    // altera para o próximo jogador;
const criaDivJogador = (jogador, lugar) => {

    let criaDiv = document.createElement('div')

    if (jogador === 1) {
        criaDiv.className = classJogadorUm;
        lugar.appendChild(criaDiv)
        jogadorAtual = 2;
    } else {
        criaDiv.className = classJogadorDois;
        lugar.appendChild(criaDiv);
        jogadorAtual = 1;
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