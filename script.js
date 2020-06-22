let jogadorAtv = null;
const jogo = document.getElementById("jogo");
const tabuleiro = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
]

function initTabuleiro() {
    createElementsColuna("coluna");
    createElementsCelula("celula");
}


function createElementsColuna(className) {
    for(let k = 0; k < 7; k++){
        const celula = document.createElement('div');
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
