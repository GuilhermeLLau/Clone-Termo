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

const ArrayX = [
  'sagaz',
  'âmago',
  'negro',
  'êxito',
  'mexer',
  'termo',
  'nobre',
  'senso',
  'algoz',
  'afeto',
  'ética',
  'plena',
  'mútua',
  'tênue',
  'sutil',
  'fazer',
  'vigor',
  'aquém',
  'assim',
  'porém',
  'seção',
  'audaz',
  'sanar',
  'fosse',
  'cerne',
  'inato',
  'ideia',
  'poder',
  'moral',
  'desde',
  'justo',
  'muito',
  'torpe',
  'sobre',
  'honra',
  'quiçá',
  'fútil',
  'razão',
  'anexo',
  'etnia',
  'ícone',
  'sonho',
  'égide',
  'tange',
  'amigo',
  'lapso',
  'mútuo',
  'expor',
  'haver',
  'casal',
  'hábil',
  'dengo',
  'tempo',
  'seara',
  'então',
  'pesar',
  'ávido',
  'ardil',
  'boçal',
  'genro',
  'posse',
  'causa',
  'pária',
  'coser',
  'dizer',
  'corja',
  'prole',
  'dever',
  'saber',
  'brado',
  'óbice',
  'graça',
  'tenaz',
  'detém',
  'crivo',
  'ânimo',
  'ápice',
  'comum',
  'digno',
  'ânsia',
  'temor',
  'sendo',
  'ceder',
  'culto',
  'assaz',
  'atroz',
  'pauta',
  'gleba',
  'ainda',
  'mundo',
  'fugaz',
  'censo',
  'estar',
  'valha',
  'vício',
  'forte',
  'cozer',
  'vulgo',
  'neném',
  'denso',
  'revés',
  'pudor',
  'xibiu',
  'regra',
  'dogma',
  'louco',
  'criar',
  'banal',
  'saúde',
  'round',
  'jeito',
  'atrás',
  'clava',
  'impor',
  'ordem',
  'mercê',
  'pedir',
  'tenro',
  'apraz',
  'pífio',
  'desse',
  'feliz',
  'usura',
  'homem',
  'mesmo',
  'reaça',
  'servo',
  'sábio',
  'juízo',
  'prosa',
  'coisa',
  'viril',
  'presa',
  'ontem',
  'cunho',
  'forma',
  'manso',
  'falar',
  'limbo',
  'devir',
  'meiga',
  'posso',
  'fluir',
  'afago',
  'ébrio',
  'vendo',
  'platô',
  'sério',
  'mágoa',
  'guisa',
  'herói',
  'visar',
  'puder',
  'todos',
  'acaso',
  'valor',
  'certo',
  'temer',
  'pleno',
  'cisma',
  'ímpio',
  'lugar',
  'afins',
  'bruma',
  'óbvio',
  'gerar',
  'êxodo',
  'obter',
  'crise',
  'matiz',
  'falso',
  'abrir',
  'praxe',
  'garbo',
  'senil',
  'fluxo',
  'havia',
  'vênia',
  'enfim',
  'fácil',
  'tédio',
  'legal',
  'união',
  'ritmo',
  'álibi',
  'burro',
  'tomar',
  'visão',
  'pulha',
  'parvo',
  'valia',
  'bravo',
  'reter',
  'vital',
  'favor',
  'olhar',
  'gênio',
  'prumo',
  'grato',
  'levar',
  'parco',
  'vivaz',
  'laico',
  'casta',
  'reles',
  'morte',
  'possa',
  'ameno',
  'tecer',
  'óbito',
  'linda',
  'prime',
  'brega',
  'ranço',
  'noção',
  'sábia',
  'falta',
  'selar',
  'cabal',
  'façam',
  'fator',
  'anelo',
  'ajuda',
  'noite',
  'nicho',
  'achar',
  'farsa',
  'rogar',
  'ouvir',
  'viver',
  'coeso',
  'citar',
  'força',
  'épico',
  'fardo',
  'adiar',
  'cisão',
  'ativo',
  'sinto',
  'calma',
  'passo',
  'carma',
  'único',
  'tendo',
  'dúbio',
  'leigo',
  'gente',
  'sonso',
  'haste',
  'outro',
  'pobre',
  'exato',
  'sesta',
  'amplo',
  'rever',
  'cesta',
  'sulco',
  'revel',
  'deter',
  'humor',
  'imune',
  'lavra',
  'vemos',
  'labor',
  'tende',
  'árduo',
  'ciúme',
  'gesto',
  'atuar',
  'feixe',
  'velho',
  'claro',
  'igual',
  'ponto',
  'ideal',
  'ótica',
  'hiato',
  'débil',
  'sonsa',
  'toada',
  'terra',
  'vácuo',
  'terno',
  'ambos',
  'varão',
  'remir',
  'marco',
  'cauda',
  'fonte',
  'senão',
  'líder',
  'capaz',
  'jovem',
  'fusão',
  'inata',
  'probo',
  'ficar',
  'leito',
  'advém',
  'horda',
  'tenra',
  'xeque',
  'farão',
  'doido',
  'velar',
  'algum',
  'relva',
  'vazio',
  'coçar',
  'série',
  'apoio',
  'caçar',
  'tanto',
  'papel',
  'entre',
  'pouco',
  'vimos',
  'anuir',
  'sente',
  'frase',
  'raiva',
  'coesa',
  'torço',
  'rigor',
  'verso',
  'botar',
  'dorso',
  'signo',
  'cruel',
  'feito',
  'massa',
  'minha',
  'moção',
  'prece',
  'ímpar',
  'credo',
  'brisa',
  'preso',
  'fauna',
  'covil',
  'ambas',
  'casto',
  'nossa',
  'ciclo',
  'morar',
  'blasé',
  'lazer',
  'peste',
  'chata',
  'vírus',
  'furor',
  'faina',
  'trama',
  'dócil',
  'maior',
  'flora',
  'pegar',
  'árido',
  'vetor',
  'adeus',
  'houve',
  'chuva',
  'beata',
  'setor',
  'manha',
  'seita',
  'banzo',
  'meses',
  'aceso',
  'liame',
  'senda',
  'sorte',
  'livro',
  'vulto',
  'pecha',
  'ardor',
  'carro',
  'salvo',
  'breve',
  'visse',
  'vasto',
  'peixe',
  'birra',
  'comer',
  'plano',
  'morro',
  'antro',
  'saiba',
  'nunca',
  'ocaso',
  'prado',
  'reger',
  'aliás',
  'pajem',
  'rezar',
  'átomo',
  'segue',
  'avaro',
  'saída',
  'ótimo',
  'junto',
  'mudar',
  'áureo',
  'chulo',
  'sinal',
  'acima',
  'serão',
  'lenda',
  'opção',
  'grupo',
  'parar',
  'treta',
  'anciã',
  'fruir',
  'fugir',
  'jazia',
  'fitar',
  'andar',
  'nação',
  'brava',
  'campo',
  'leite',
  'parte',
  'puxar',
  'bando',
  'prazo',
  'rapaz',
  'gerir',
  'tosco',
  'tenso',
  'alude',
  'norma',
  'motim',
  'praia',
  'ídolo',
  'época',
  'risco',
  'exame',
  'agora',
  'anais',
  'sinhá',
  'vilão',
  'tirar',
  'malta',
  'arcar',
  'reino',
  'psico',
  'avião',
  'antes',
  'praga',
  'venal',
  'índio',
  'quota',
  'aonde',
  'soldo',
  'corpo',
  'preto',
  'traga',
  'logro',
  'texto',
  'quase',
  'cheio',
  'áurea',
  'voraz',
  'sumir',
  'filho',
  'certa',
  'fixar',
  'conta',
  'pompa',
  'turba',
  'prova',
  'virão',
  'verbo',
  'apego',
  'estão',
  'cópia',
  'oásis',
  'acesa',
  'nódoa',
  'ligar',
  'exijo',
  'alado',
  'solto',
  'caixa',
  'átrio',
  'festa',
  'coito',
  'messe',
  'nível',
  'oxalá',
  'turva',
  'perda',
  'manhã',
  'tocar',
  'lindo',
  'fatal',
  'verve',
  'grave',
  'fatos',
  'apelo',
  'fraco',
  'doído',
  'afora',
  'livre',
  'mente',
  'parca',
  'trupe',
  'parva',
  'dessa',
  'pardo',
  'opaco',
  'magia',
  'fenda',
  'tinha',
  'sabia',
  'elite',
  'alçar',
  'jirau',
  'lidar',
  'viria',
  'navio',
  'firme',
  'faixa',
  'astro',
  'glosa',
  'grata',
  'ficha',
  'autor',
  'ético',
  'supra',
  'bater',
  'salve',
  'retém',
  'longe',
  'verba',
  'cioso',
  'reses',
  'pique',
  'vezes',
  'calda',
  'junco',
  'deixa',
  'cousa',
  'macio',
  'irmão',
  'douto',
  'sarça',
  'atual',
  'privê',
  'pagão',
  'sexta',
  'bicho',
  'posto',
  'nosso',
  'porta',
  'molho',
  'cânon',
  'torso',
  'abriu',
  'supor',
  'light',
  'judeu',
  'curso',
  'extra',
  'besta',
  'locus',
  'caber',
  'asilo',
  'bioma',
  'abuso',
  'órfão',
  'ígneo',
  'turvo',
  'vídeo',
  'drops',
  'rádio',
  'vosso',
  'bônus',
  'desta',
  'combo',
  'zelar',
  'culpa',
  'rouca',
  'vinha',
  'menos',
  'pisar',
  'ruína',
  'júlia',
  'baixo',
  'calão',
  'agudo',
  'ereto',
  'paira',
  'advir',
  'finda',
  'gosto',
  'facho',
  'estio',
  'super',
  'sítio',
  'traço',
  'facto',
  'suave',
  'feudo',
  'meigo',
  'surja',
  'urgia',
  'cútis',
  'tetra',
  'amena',
  'turma',
  'pilar',
  'tento',
  'louça',
  'rumor',
  'autos',
  'chama',
  'ações',
  'museu',
  'clean',
  'cocho',
  'pódio',
  'mosto',
  'lápis',
  'acolá',
  'local',
  'hobby',
  'lasso',
  'geral',
  'boato',
  'optar',
  'chato',
  'páreo',
  'brabo',
  'refém',
  'peito',
  'medir',
  'aluno',
  'drama',
  'rubro',
  'piada',
  'folga',
  'mesma',
  'pacto',
  'ávida',
  'crime',
  'penta',
  'metiê',
  'poema',
  'ponha',
  'teste',
  'golpe',
  'móvel',
  'clima',
  'letal',
  'coral',
  'feroz',
  'cacho',
  'vigia',
  'passa',
  'aroma',
  'hoste',
  'monte',
  'pasmo',
  'vetar',
  'poeta',
  'açude',
  'cetro',
  'rival',
  'fazia',
  'riste',
  'daqui',
  'forem',
  'ecoar',
  'verde',
  'cover',
  'lição',
  'ateia',
  'troça',
  'tacha',
  'fórum',
  'finjo',
  'carta',
  'swing',
  'axila',
  'busca',
  'monge',
  'plebe',
  'calmo',
  'artur',
  'idoso',
  'súcia',
  'ébano',
  'aviso',
  'plumo',
  'falha',
  'briga',
  'tribo',
  'escol',
  'venha',
  'lesse',
  'conto',
  'roupa',
  'pedra',
  'tarde',
  'amiga',
  'macro',
  'chefe',
  'perco',
  'plaga',
  'cargo',
  'sarau',
  'fruto',
  'única',
  'civil',
  'átimo',
  'vento',
  'farta',
  'viram',
  'grama',
  'légua',
  'sósia',
  'virar',
  'berro',
  'manga',
  'bença',
  'saldo',
  'casar',
  'ornar',
  'catre',
  'arado',
  'seixo',
  'troca',
  'úteis',
  'fosso',
  'surto',
  'itens',
  'beijo',
  'traje',
  'magna',
  'corso',
  'bruta',
  'nuvem',
  'assar',
  'tiver',
  'estro',
  'mangá',
  'gíria',
  'deste',
  'vazão',
  'recém',
  'tição',
  'trato',
  'pinho',
  'porte',
  'jejum',
  'amado',
  'tutor',
  'vedar',
  'canso',
  'perto',
  'renda',
  'arfar',
  'silvo',
  'depor',
  'bazar',
  'bruto',
  'amada',
  'irado',
  'gabar',
  'mídia',
  'âmbar',
  'inter',
  'natal',
  'grota',
  'deram',
  'feita',
  'cifra',
  'areia',
  'rural',
  'órgão',
  'tchau',
  'nesse',
  'laudo',
  'pavor',
  'bucho',
  'stand',
  'fossa',
  'régio',
  'odiar',
  'pasma',
  'clero',
  'segar',
  'vadio',
  'minar',
  'guria',
  'vagar',
  'pomar',
  'close',
  'molde',
  'troco',
  'xucro',
  'aviar',
  'rocha',
  'negar',
  'jogar',
  'mamãe',
  'canto',
  'cenho',
  'lesão',
  'sótão',
  'visto',
  'densa',
  'proto',
  'bolsa',
  'chula',
  'cinto',
  'lesto',
  'largo',
  'morfo',
  'marca',
  'invés',
  'horto',
  'paiol',
  'volta',
  'ruído',
  'vista',
  'pugna',
  'penso',
  'ileso',
  'urdir',
  'podar',
  'vasta',
  'ufano',
  'tenha',
  'cheia',
  'velha',
  'logos',
  'mocho',
  'varoa',
  'ferpa',
  'santo',
  'úbere',
  'cível',
  'frota',
  'esgar',
  'nessa',
  'bulir',
  'nesta',
  'úmido',
  'piche',
  'ágape',
  'linha',
  'cerca',
  'etapa',
  'fundo',
  'apear',
  'resto',
  'verão',
  'narco',
  'peita',
  'pólis',
  'símio',
  'jazer',
  'final',
  'misto',
  'coroa',
  'manto',
  'ceita',
  'ardis',
  'trago',
  'letra',
  'preço',
  'monta',
  'todas',
  'demão',
  'troço',
  'canil',
  'salmo',
  'burra',
  'chaga',
  'álamo',
  'lábia',
  'matar',
  'banto',
  'campa',
  'barão',
  'cosmo',
  'redor',
  'gemer',
  'mover',
  'findo',
  'seiva',
  'álbum',
  'fazes',
  'venho',
  'áudio',
  'folia',
  'dança',
  'folha',
  'porca',
  'barro',
  'bolso',
  'retro',
  'axial',
  'punha',
  'neste',
  'sabor',
  'queda',
  'limpo',
  'louro',
  'calor',
  'rente',
  'lousa',
  'firma',
  'calvo',
  'farol',
  'zumbi',
  'salva',
  'mimar',
  'lutar',
  'arroz',
  'calça',
  'macho',
  'coevo',
  'sigla',
  'baixa',
  'torna',
  'enjoo',
  'justa',
  'míope',
  'veloz',
  'solta',
  'logia',
  'fugiu',
  'gueto',
  'ousar',
  'tumba',
  'chave',
  'nácar',
  'bedel',
  'longo',
  'reler',
  'vazia',
  'corar',
  'forro',
  'farto',
  'fátuo',
  'penca',
  'vário',
  'sexto',
  'lucro',
  'cacto',
  'obtém',
  'sofia',
  'mania',
  'subir',
  'repor',
  'urgir',
  'sugar',
  'custo',
  'quite',
  'valer',
  'passe',
  'louca',
  'puído',
  'ultra',
  'harém',
  'sadio',
  'staff',
  'nariz',
  'cardo',
  'versa',
  'dados',
  'usual',
  'outra',
  'lento',
  'modal',
  'refil',
  'corte',
  'hífen',
  'viger',
  'sócio',
  'choça',
  'rédea',
  'diabo',
  'ferir',
  'ceifa',
  'garra',
  'nesga',
  'falsa',
  'abade',
  'mouro',
  'aéreo',
  'voilà',
  'grife',
  'xampu',
  'pagar',
  'skate',
];

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
let ganhouD = false;
const palpites = [];
const palpitesD = [];
let termo = '';
const termoMapa = {};
let dueto = '';
const duetoMapa = {};

const PegaPalavra = () => {
  let aux = Math.ceil(Math.random() * ArrayX.length);
  let auxD = Math.ceil(Math.random() * ArrayX.length);
  termo = ArrayX[aux].toUpperCase();
  dueto = ArrayX[auxD].toUpperCase();
  termo = termo.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  dueto = dueto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};
PegaPalavra();

console.log(termo);
console.log(dueto);
console.log(termoMapa);
console.log(duetoMapa);

for (let index = 0; index < termo.length; index++) {
  termoMapa[index] = termo[index];
  duetoMapa[index] = dueto[index];
}

// for (let index = 0; index < termo.length; index++) {
//   termoMapa[termo[index]] = index;
//   duetoMapa[dueto[index]] = index;
// }
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
  if (ganhou === true) return;
  const palpite = palpites[linhaAtual].join('');
  if (palpite.length !== colunas) {
    return;
  }

  const tentativaAtual = document.querySelectorAll('.digitando');
  for (let index = 0; index < colunas; index++) {
    const letra = palpite[index];
    const Teste = tentativaAtual[index];
    if (termoMapa[index] === letra) {
      tentativaAtual[index].classList.add('correto');
    } else {
      for (let index = 0; index < palpite.length; index++) {
        if (letra === termoMapa[index]) {
          Teste.classList.add('posicaoErrada');
        } else {
          tentativaAtual[index].classList.add('errada');
        }
      }
    }
  }
  if (palpite === termo) {
    ganhou = true;
    if (ganhou === true && ganhouD === true) {
      console.log('taporra');
      resposta.textContent = `As palavras corretas são: ${termo}, ${dueto}   |`;
      replayBtn.textContent = 'Jogar Novamente';
    }
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
  if (ganhouD === true) return;
  const palpiteD = palpitesD[linhaAtualD].join('');
  if (palpiteD.length !== colunas) {
    return;
  }

  const tentativaAtualD = document.querySelectorAll('.digitandoD');
  for (let index = 0; index < colunas; index++) {
    const letra = palpiteD[index];
    const Teste = tentativaAtualD[index];
    if (duetoMapa[index] === letra) {
      tentativaAtualD[index].classList.add('correto');
    } else {
      for (let index = 0; index < palpiteD.length; index++) {
        if (letra === duetoMapa[index]) {
          Teste.classList.add('posicaoErrada');
        } else {
          tentativaAtualD[index].classList.add('errada');
        }
      }
    }
  }
  if (palpiteD === dueto) {
    ganhouD = true;
    if (ganhou === true && ganhouD === true) {
      console.log('taporra');
      resposta.textContent = `As palavras corretas são: ${termo}, ${dueto}   |`;
      replayBtn.textContent = 'Jogar Novamente';
    }
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
  if (colunaAtualD === 0) {
    return;
  }
  if (ganhouD === true) return;
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

replayBtn.addEventListener('click', () => {
  window.location.reload();
});
