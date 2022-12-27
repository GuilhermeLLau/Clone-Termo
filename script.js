const gameBoard = document.getElementById('gameBoard');
const keyBoardRow1 = document.getElementById('keyBoardRow1');
const keyBoardRow2 = document.getElementById('keyBoardRow2');
const keyBoardRow3 = document.getElementById('keyBoardRow3');

const keysFirstRow = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
const keysSecondRow = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
const keysThirdRow = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];
let linhaAtual = 0;
let colunaAtual = 0;
const colunas = 5;
const linhas = 6;
let ganhou = false;
const palpites = [];
const termoMapa = {};
const termo = 'TERMO';
for (let index = 0; index < termo.length; index++) {
  termoMapa[termo[index]] = index;
}
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
  gameBoard.append(TileLinha);
}

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

const CreateKeyRow = (keys, keyRow) => {
  keys.forEach((key) => {
    const Teclado = document.createElement('div');
    Teclado.textContent = key;
    Teclado.setAttribute('id', key);
    Teclado.setAttribute('class', 'tecla');
    Teclado.addEventListener('click', () => {
      handleClick(key);
    });
    keyRow.append(Teclado);
  });
};

CreateKeyRow(keysFirstRow, keyBoardRow1);
CreateKeyRow(keysSecondRow, keyBoardRow2);
CreateKeyRow(keysThirdRow, keyBoardRow3);

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
    window.alert('Parabains');
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

const enterButton = document.createElement('button');
enterButton.addEventListener('click', ChecaPalpite);
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
  } else if (evt.key === 'Backspace') {
    HandleBackSpace();
  } else {
    handleClick(evt.key.toUpperCase());
  }
};
