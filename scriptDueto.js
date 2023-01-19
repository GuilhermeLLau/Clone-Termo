const gameBoard1 = document.getElementById('gameBoard1');
const gameBoard2 = document.getElementById('gameBoard2');
const keyBoardRow1 = document.getElementById('keyBoardRow1');
const keyBoardRow2 = document.getElementById('keyBoardRow2');
const keyBoardRow3 = document.getElementById('keyBoardRow3');
const menuDinamico = document.getElementById('menuDinamico');
const appContainer = document.getElementById('app-container');
const menu = document.getElementById('Menu');
const resposta = document.getElementById('resposta');
const replayBtn = document.getElementById('replayBtn');

const keysFirstRow = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
const keysSecondRow = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
const keysThirdRow = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];
const alphabeto = 'abcdefghijklmnopqrstuvwxyz';
let linhaAtual = 0;
let colunaAtual = 0;
let linhaAtualD = 0;
let colunaAtualD = 0;
const colunas = 5;
const linhas = 7;
let ganhou = false;
const palpites = [];
const palpitesD = [];
let termo = '';
const termoMapa = {};
let dueto = '';
const duetoMapa = {};

console.log(termoo);
console.log(dueto);

const PegaPalavra = () => {
  let aux = Math.ceil(Math.random() * ArrayX.length);
  let auxD = Math.ceil(Math.random() * ArrayX.length);
  termoo = ArrayX[aux];
  dueto = ArrayX[auxD];
  termoo = termoo.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  dueto = dueto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};
PegaPalavra();

for (let index = 0; index < termo.length; index++) {
  termoMapa[termo[index]] = index;
  duetoMapa[dueto[index]] = index;
}
// PRIMEIRO TABULEIRO
for (let indexLinha = 0; indexLinha < linhas; indexLinha++) {
  palpites[indexLinha] = new Array(colunas);
  const TileLinha = document.createElement('div');
  TileLinha.setAttribute('id', `${indexLinha}linha`);
  TileLinha.setAttribute('class', `linha`);
  for (let indexColuna = 0; indexColuna < colunas; indexColuna++) {
    const TileColuna = document.createElement('div');
    TileColuna.setAttribute(
      'id',
      `${indexLinha}linha` + `${indexColuna}coluna`,
    );
    TileColuna.setAttribute(
      'class',
      indexLinha === 0 ? 'coluna digitando' : 'coluna desativada',
    );
    TileLinha.append(TileColuna);
    palpites[indexLinha][indexColuna] = '';
  }
  gameBoard1.append(TileLinha);
}
// SEGUNDO TABULEIRO
for (let indexLinha = 0; indexLinha < linhas; indexLinha++) {
  palpitesD[indexLinha] = new Array(colunas);
  const TileLinha = document.createElement('div');
  TileLinha.setAttribute('id', `${indexLinha}linhaD`);
  TileLinha.setAttribute('class', `linha`);
  for (let indexColuna = 0; indexColuna < colunas; indexColuna++) {
    const TileColuna = document.createElement('div');
    TileColuna.setAttribute(
      'id',
      `${indexLinha}linhaD` + `${indexColuna}colunaD`,
    );
    TileColuna.setAttribute(
      'class',
      indexLinha === 0 ? 'colunaD digitandoD' : 'colunaD desativadaD',
    );
    TileLinha.append(TileColuna);
    palpitesD[indexLinha][indexColuna] = '';
  }
  gameBoard2.append(TileLinha);
}

// CLIQUE DE TECLA PRIMEIRO TABULEIRO

const handleClick = (key) => {
  if (colunaAtual === colunas) {
    return;
  }
  const letraAtual = document.getElementById(
    `${linhaAtual}linha` + `${colunaAtual}coluna`,
  );
  letraAtual.textContent = key;
  palpites[linhaAtual][colunaAtual] = key;
  colunaAtual++;
};

// CLIQUE DE TECLA SEGUNDO TABULEIRO

const handleClickD = (key) => {
  if (colunaAtualD === colunas) {
    return;
  }
  const letraAtualD = document.getElementById(
    `${linhaAtualD}linhaD` + `${colunaAtualD}colunaD`,
  );
  letraAtualD.textContent = key;
  palpitesD[linhaAtualD][colunaAtualD] = key;
  colunaAtualD++;
};

// TECLADO

const CreateKeyRow = (keys, keyRow) => {
  keys.forEach((key) => {
    const Teclado = document.createElement('div');
    Teclado.textContent = key;
    Teclado.setAttribute('id', key);
    Teclado.setAttribute('class', 'tecla');
    Teclado.addEventListener('click', () => {
      handleClick(key);
      handleClickD(key);
    });
    keyRow.append(Teclado);
  });
};

CreateKeyRow(keysFirstRow, keyBoardRow1);
CreateKeyRow(keysSecondRow, keyBoardRow2);
CreateKeyRow(keysThirdRow, keyBoardRow3);

// BOTÂO ENTER PRIMEIRO TABULEIRO

const ChecaPalpite = () => {
  const palpite = palpites[linhaAtual].join('');
  if (palpite.length !== colunas) {
    return;
  }

  const tentativaAtual = document.querySelectorAll('.digitando');
  for (let index = 0; index < colunas; index++) {
    const letra = palpite[index];
    if (termoMapa[letra] === undefined) {
      tentativaAtual[index].classList.add('errado');
    } else {
      if (termoMapa[letra] === index) {
        tentativaAtual[index].classList.add('correto');
      } else {
        tentativaAtual[index].classList.add('posicaoErrada');
      }
    }
  }
  if (palpite === termo) {
    ganhou = true;
    return;
  }
  {
    if (linhaAtual === linhas - 1) {
      window.alert('Errou');
    } else {
      ProximaLinha();
    }
  }
};

// BOTÂO ENTER SEGUNDO TABULEIRO
const ChecaPalpiteD = () => {
  const palpiteD = palpitesD[linhaAtualD].join('');
  if (palpiteD.length !== colunas) {
    return;
  }

  const tentativaAtualD = document.querySelectorAll('.digitandoD');
  for (let index = 0; index < colunas; index++) {
    const letra = palpiteD[index];
    if (duetoMapa[letra] === undefined) {
      tentativaAtualD[index].classList.add('errado');
    } else {
      if (duetoMapa[letra] === index) {
        tentativaAtualD[index].classList.add('correto');
      } else {
        tentativaAtualD[index].classList.add('posicaoErrada');
      }
    }
  }
  if (palpiteD === dueto) {
    ganhou = true;
    return;
  }
  {
    if (linhaAtualD === linhas - 1) {
    } else {
      ProximaLinhaD();
    }
  }
};

// PROXIMA LINHA PRIMEIRO TABULEIRO

const ProximaLinha = () => {
  const palpiteAtual = document.querySelectorAll('.digitando');
  for (let index = 0; index < palpiteAtual.length; index++) {
    palpiteAtual[index].classList.remove('digitando');
    palpiteAtual[index].classList.add('desativada');
  }
  linhaAtual++;
  colunaAtual = 0;
  const proximoPalpite = document.getElementById(`${linhaAtual}linha`);
  const proximoPalpiteColunas = proximoPalpite.querySelectorAll('.coluna');
  for (let index = 0; index < palpiteAtual.length; index++) {
    proximoPalpiteColunas[index].classList.remove('desativada');
    proximoPalpiteColunas[index].classList.add('digitando');
  }
};

// PROXIMA LINHA SEGUNDO TABULEIRO

const ProximaLinhaD = () => {
  const palpiteAtual = document.querySelectorAll('.digitandoD');
  for (let index = 0; index < palpiteAtual.length; index++) {
    palpiteAtual[index].classList.remove('digitandoD');
    palpiteAtual[index].classList.add('desativadaD');
  }
  linhaAtualD++;
  colunaAtualD = 0;
  const proximoPalpite = document.getElementById(`${linhaAtualD}linhaD`);
  const proximoPalpiteColunas = proximoPalpite.querySelectorAll('.colunaD');
  for (let index = 0; index < palpiteAtual.length; index++) {
    proximoPalpiteColunas[index].classList.remove('desativadaD');
    proximoPalpiteColunas[index].classList.add('digitandoD');
  }
};

// APAGAR PRIMEIRO TABULEIRO

const HandleBackSpace = () => {
  if (colunaAtual === 0) {
    return;
  }
  if (ganhou === true) {
    return;
  }
  colunaAtual--;
  palpites[linhaAtual][colunaAtual] = '';
  const letraAtual = document.getElementById(
    `${linhaAtual}linha` + `${colunaAtual}coluna`,
  );
  letraAtual.textContent = '';
};
const HandleBackSpaceD = () => {
  console.log('oi');
  if (colunaAtualD === 0) {
    return;
  }
  colunaAtualD--;
  palpitesD[linhaAtualD][colunaAtualD] = '';
  const letraAtualD = document.getElementById(
    `${linhaAtualD}linhaD` + `${colunaAtualD}colunaD`,
  );
  letraAtualD.textContent = '';
};

// APAGAR SEGUNDO TABULEIRO

const enterButton = document.createElement('button');
enterButton.addEventListener('click', ChecaPalpite);
enterButton.addEventListener('click', ChecaPalpiteD);
enterButton.setAttribute('class', 'enter');
enterButton.textContent = '✔';
keyBoardRow3.append(enterButton);

const backSpaceButton = document.createElement('button');
backSpaceButton.addEventListener('click', HandleBackSpace);
backSpaceButton.addEventListener('click', HandleBackSpaceD);
backSpaceButton.setAttribute('class', 'backspace');
backSpaceButton.textContent = '↩';
keyBoardRow2.append(backSpaceButton);

document.onkeydown = function (evt) {
  evt = evt || window.evt;
  if (evt.key === 'Enter') {
    ChecaPalpite();
    ChecaPalpiteD();
  } else if (evt.key === 'Backspace') {
    HandleBackSpace();
    HandleBackSpaceD();
  } else {
    if (alphabeto.includes(evt.key)) {
      handleClick(evt.key.toUpperCase());
      handleClickD(evt.key.toUpperCase());
    }
  }
};

menuDinamico.addEventListener('click', () => {
  menu.classList.toggle('menuAtivo');
  menuDinamico.classList.toggle('navAtiva');
  appContainer.classList.toggle('containerAtivo');
});

estatisticas.addEventListener('click', () => {
  data.classList.toggle('ativado');
});

replayBtn.addEventListener('click', () => {
  window.location.reload();
});
