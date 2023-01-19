const gameBoard1 = document.getElementById('gameBoard1');
const gameBoard2 = document.getElementById('gameBoard2');
const gameBoard3 = document.getElementById('gameBoard3');
const gameBoard4 = document.getElementById('gameBoard4');
const keyBoardRow1 = document.getElementById('keyBoardRow1');
const keyBoardRow2 = document.getElementById('keyBoardRow2');
const keyBoardRow3 = document.getElementById('keyBoardRow3');
const menuDinamico = document.getElementById('menuDinamico');
const menu = document.getElementById('Menu');
const appContainer = document.getElementById('app-container');

const keysFirstRow = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
const keysSecondRow = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
const keysThirdRow = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];
const alphabeto = 'abcdefghijklmnopqrstuvwxyz';
let linhaAtual = 0;
let colunaAtual = 0;
let linhaAtual2 = 0;
let colunaAtual2 = 0;
let linhaAtual3 = 0;
let colunaAtual3 = 0;
let linhaAtual4 = 0;
let colunaAtual4 = 0;
const colunas = 5;
const linhas = 7;
let ganhou = false;
let ganhou2 = false;
let ganhou3 = false;
let ganhou4 = false;
const palpites = [];
const palpites2 = [];
const palpites3 = [];
const palpites4 = [];
const termo = 'TERMO';
const termo2 = 'PINHA';
const termo3 = 'VASCO';
const termo4 = 'CLERO';
const termoMapa = {};
const termoMapa2 = {};
const termoMapa3 = {};
const termoMapa4 = {};

// MAPA
for (let index = 0; index < termo.length; index++) {
  termoMapa[termo[index]] = index;
  termoMapa2[termo2[index]] = index;
  termoMapa3[termo3[index]] = index;
  termoMapa4[termo4[index]] = index;
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
  palpites2[indexLinha] = new Array(colunas);
  const TileLinha = document.createElement('div');
  TileLinha.setAttribute('id', `${indexLinha}linha2`);
  TileLinha.setAttribute('class', `linha`);
  for (let indexColuna = 0; indexColuna < colunas; indexColuna++) {
    const TileColuna = document.createElement('div');
    TileColuna.setAttribute(
      'id',
      `${indexLinha}linha2` + `${indexColuna}coluna2`,
    );
    TileColuna.setAttribute(
      'class',
      indexLinha === 0 ? 'coluna2 digitando2' : 'coluna2 desativada2',
    );
    TileLinha.append(TileColuna);
    palpites2[indexLinha][indexColuna] = '';
  }
  gameBoard2.append(TileLinha);
}
// TERCEIRO TABULEIRO
for (let indexLinha = 0; indexLinha < linhas; indexLinha++) {
  palpites3[indexLinha] = new Array(colunas);
  const TileLinha = document.createElement('div');
  TileLinha.setAttribute('id', `${indexLinha}linha3`);
  TileLinha.setAttribute('class', `linha`);
  for (let indexColuna = 0; indexColuna < colunas; indexColuna++) {
    const TileColuna = document.createElement('div');
    TileColuna.setAttribute(
      'id',
      `${indexLinha}linha3` + `${indexColuna}coluna3`,
    );
    TileColuna.setAttribute(
      'class',
      indexLinha === 0 ? 'coluna3 digitando3' : 'coluna3 desativada3',
    );
    TileLinha.append(TileColuna);
    palpites3[indexLinha][indexColuna] = '';
  }
  gameBoard3.append(TileLinha);
}
// QUARTO TABULEIRO
for (let indexLinha = 0; indexLinha < linhas; indexLinha++) {
  palpites4[indexLinha] = new Array(colunas);
  const TileLinha = document.createElement('div');
  TileLinha.setAttribute('id', `${indexLinha}linha4`);
  TileLinha.setAttribute('class', `linha`);
  for (let indexColuna = 0; indexColuna < colunas; indexColuna++) {
    const TileColuna = document.createElement('div');
    TileColuna.setAttribute(
      'id',
      `${indexLinha}linha4` + `${indexColuna}coluna4`,
    );
    TileColuna.setAttribute(
      'class',
      indexLinha === 0 ? 'coluna4 digitando4' : 'coluna4 desativada4',
    );
    TileLinha.append(TileColuna);
    palpites4[indexLinha][indexColuna] = '';
  }
  gameBoard4.append(TileLinha);
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

const handleClick2 = (key) => {
  if (colunaAtual2 === colunas) {
    return;
  }
  const letraAtual2 = document.getElementById(
    `${linhaAtual2}linha2` + `${colunaAtual2}coluna2`,
  );
  letraAtual2.textContent = key;
  palpites2[linhaAtual2][colunaAtual2] = key;
  colunaAtual2++;
};
const handleClick3 = (key) => {
  if (colunaAtual3 === colunas) {
    return;
  }
  const letraAtual3 = document.getElementById(
    `${linhaAtual3}linha3` + `${colunaAtual3}coluna3`,
  );
  letraAtual3.textContent = key;
  palpites3[linhaAtual3][colunaAtual3] = key;
  colunaAtual3++;
};
const handleClick4 = (key) => {
  if (colunaAtual4 === colunas) {
    return;
  }
  const letraAtual4 = document.getElementById(
    `${linhaAtual4}linha4` + `${colunaAtual4}coluna4`,
  );
  letraAtual4.textContent = key;
  palpites4[linhaAtual4][colunaAtual4] = key;
  colunaAtual4++;
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
      handleClick2(key);
      handleClick3(key);
      handleClick4(key);
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
  } else {
    if (linhaAtual === linhas - 1) {
      window.alert('Errou');
    } else {
      ProximaLinha();
    }
  }
};
const ChecaPalpite2 = () => {
  const palpite2 = palpites2[linhaAtual2].join('');
  if (palpite2.length !== colunas) {
    return;
  }
  const tentativaAtual2 = document.querySelectorAll('.digitando2');
  for (let index = 0; index < colunas; index++) {
    const letra2 = palpite2[index];
    if (termoMapa2[letra2] === undefined) {
      tentativaAtual2[index].classList.add('errado');
    } else {
      if (termoMapa2[letra2] === index) {
        tentativaAtual2[index].classList.add('correto');
      } else {
        tentativaAtual2[index].classList.add('posicaoErrada');
      }
    }
  }
  if (palpite2 === termo2) {
    ganhou2 = true;
    return;
  } else {
    if (linhaAtual2 === linhas - 1) {
      window.alert('Errou');
    } else {
      ProximaLinha2();
    }
  }
};
const ChecaPalpite3 = () => {
  const palpite3 = palpites3[linhaAtual3].join('');
  if (palpite3.length !== colunas) {
    return;
  }
  const tentativaAtual3 = document.querySelectorAll('.digitando3');
  for (let index = 0; index < colunas; index++) {
    const letra3 = palpite3[index];
    if (termoMapa3[letra3] === undefined) {
      tentativaAtual3[index].classList.add('errado');
    } else {
      if (termoMapa3[letra3] === index) {
        tentativaAtual3[index].classList.add('correto');
      } else {
        tentativaAtual3[index].classList.add('posicaoErrada');
      }
    }
  }
  if (palpite3 === termo3) {
    ganhou3 = true;
    return;
  } else {
    if (linhaAtual3 === linhas - 1) {
      window.alert('Errou');
    } else {
      ProximaLinha3();
    }
  }
};
const ChecaPalpite4 = () => {
  const palpite4 = palpites4[linhaAtual4].join('');
  if (palpite4.length !== colunas) {
    return;
  }
  const tentativaAtual4 = document.querySelectorAll('.digitando4');
  for (let index = 0; index < colunas; index++) {
    const letra4 = palpite4[index];
    if (termoMapa4[letra4] === undefined) {
      tentativaAtual4[index].classList.add('errado');
    } else {
      if (termoMapa4[letra4] === index) {
        tentativaAtual4[index].classList.add('correto');
      } else {
        tentativaAtual4[index].classList.add('posicaoErrada');
      }
    }
  }
  if (palpite4 === termo4) {
    ganhou4 = true;
    return;
  } else {
    if (linhaAtual4 === linhas - 1) {
      window.alert('Errou');
    } else {
      ProximaLinha4();
    }
  }
};

// BOTÂO ENTER SEGUNDO TABULEIRO

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

const ProximaLinha2 = () => {
  const palpiteAtual2 = document.querySelectorAll('.digitando2');
  for (let index = 0; index < palpiteAtual2.length; index++) {
    palpiteAtual2[index].classList.remove('digitando2');
    palpiteAtual2[index].classList.add('desativada2');
  }
  linhaAtual2++;
  colunaAtual2 = 0;
  const proximoPalpite2 = document.getElementById(`${linhaAtual2}linha2`);
  const proximoPalpiteColunas2 = proximoPalpite2.querySelectorAll('.coluna2');
  for (let index = 0; index < palpiteAtual2.length; index++) {
    proximoPalpiteColunas2[index].classList.remove('desativada2');
    proximoPalpiteColunas2[index].classList.add('digitando2');
  }
};
const ProximaLinha3 = () => {
  const palpiteAtual3 = document.querySelectorAll('.digitando3');
  for (let index = 0; index < palpiteAtual3.length; index++) {
    palpiteAtual3[index].classList.remove('digitando3');
    palpiteAtual3[index].classList.add('desativada3');
  }
  linhaAtual3++;
  colunaAtual3 = 0;
  const proximoPalpite3 = document.getElementById(`${linhaAtual3}linha3`);
  const proximoPalpiteColunas3 = proximoPalpite3.querySelectorAll('.coluna3');
  for (let index = 0; index < palpiteAtual3.length; index++) {
    proximoPalpiteColunas3[index].classList.remove('desativada3');
    proximoPalpiteColunas3[index].classList.add('digitando3');
  }
};
const ProximaLinha4 = () => {
  const palpiteAtual4 = document.querySelectorAll('.digitando4');
  for (let index = 0; index < palpiteAtual4.length; index++) {
    palpiteAtual4[index].classList.remove('digitando4');
    palpiteAtual4[index].classList.add('desativada4');
  }
  linhaAtual4++;
  colunaAtual4 = 0;
  const proximoPalpite4 = document.getElementById(`${linhaAtual4}linha4`);
  const proximoPalpiteColunas4 = proximoPalpite4.querySelectorAll('.coluna4');
  for (let index = 0; index < palpiteAtual4.length; index++) {
    proximoPalpiteColunas4[index].classList.remove('desativada4');
    proximoPalpiteColunas4[index].classList.add('digitando4');
  }
};

// APAGAR  TABULEIRO

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
const HandleBackSpace2 = () => {
  if (colunaAtual2 === 0) {
    return;
  }
  if (ganhou2 === true) {
    return;
  }
  colunaAtual2--;
  palpites2[linhaAtual2][colunaAtual2] = '';
  const letraAtual = document.getElementById(
    `${linhaAtual2}linha2` + `${colunaAtual2}coluna2`,
  );
  letraAtual.textContent = '';
};
const HandleBackSpace3 = () => {
  if (colunaAtual3 === 0) {
    return;
  }
  if (ganhou3 === true) {
    return;
  }
  colunaAtual3--;
  palpites3[linhaAtual3][colunaAtual3] = '';
  const letraAtual = document.getElementById(
    `${linhaAtual3}linha3` + `${colunaAtual3}coluna3`,
  );
  letraAtual.textContent = '';
};
const HandleBackSpace4 = () => {
  if (colunaAtual4 === 0) {
    return;
  }
  if (ganhou4 === true) {
    return;
  }
  colunaAtual4--;
  palpites4[linhaAtual4][colunaAtual4] = '';
  const letraAtual = document.getElementById(
    `${linhaAtual4}linha4` + `${colunaAtual4}coluna4`,
  );
  letraAtual.textContent = '';
};

const enterButton = document.createElement('button');
enterButton.addEventListener('click', ChecaPalpite);
enterButton.addEventListener('click', ChecaPalpite2);
enterButton.addEventListener('click', ChecaPalpite3);
enterButton.addEventListener('click', ChecaPalpite4);
enterButton.setAttribute('class', 'enter');
enterButton.textContent = '✔';
keyBoardRow3.append(enterButton);

const backSpaceButton = document.createElement('button');
backSpaceButton.addEventListener('click', HandleBackSpace);
backSpaceButton.setAttribute('class', 'backspace');
backSpaceButton.textContent = '↩';
keyBoardRow2.append(backSpaceButton);

document.onkeydown = function (evt) {
  evt = evt || window.evt;
  if (evt.key === 'Enter') {
    ChecaPalpite();
    ChecaPalpite2();
    ChecaPalpite3();
    ChecaPalpite4();
  } else if (evt.key === 'Backspace') {
    HandleBackSpace();
    HandleBackSpace2();
    HandleBackSpace3();
    HandleBackSpace4();
  } else {
    if (alphabeto.includes(evt.key)) {
      handleClick(evt.key.toUpperCase());
      handleClick2(evt.key.toUpperCase());
      handleClick3(evt.key.toUpperCase());
      handleClick4(evt.key.toUpperCase());
    }
  }
};

menuDinamico.addEventListener('click', () => {
  menu.classList.toggle('menuAtivo');
  menuDinamico.classList.toggle('navAtiva');
  appContainer.classList.toggle('containerAtivo');
});
