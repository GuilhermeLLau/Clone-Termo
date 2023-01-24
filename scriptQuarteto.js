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
const resposta = document.getElementById('resposta');
const replayBtn = document.getElementById('replayBtn');
const tutorial = document.getElementById('tutorial');
const menuTutorial = document.getElementById('menuTutorial');

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
const linhas = 9;
let ganhou = false;
let ganhou2 = false;
let ganhou3 = false;
let ganhou4 = false;
const palpites = [];
const palpites2 = [];
const palpites3 = [];
const palpites4 = [];
let termo = '';
let termo2 = '';
let termo3 = '';
let termo4 = '';
const termoMapa = {};
const termoMapa2 = {};
const termoMapa3 = {};
const termoMapa4 = {};

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

const PegaPalavra = () => {
  let aux = Math.ceil(Math.random() * ArrayX.length);
  let aux2 = Math.ceil(Math.random() * ArrayX.length);
  let aux3 = Math.ceil(Math.random() * ArrayX.length);
  let aux4 = Math.ceil(Math.random() * ArrayX.length);
  termo = ArrayX[aux].toUpperCase();
  termo2 = ArrayX[aux2].toUpperCase();
  termo3 = ArrayX[aux3].toUpperCase();
  termo4 = ArrayX[aux4].toUpperCase();
  termo = termo.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  termo2 = termo2.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  termo3 = termo3.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  termo4 = termo4.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};
PegaPalavra();

console.log(termo);
console.log(termo2);
console.log(termo3);
console.log(termo4);

// MAPA
for (let index = 0; index < termo.length; index++) {
  termoMapa[index] = termo[index];
  termoMapa2[index] = termo2[index];
  termoMapa3[index] = termo3[index];
  termoMapa4[index] = termo4[index];
}

console.log(termoMapa);
console.log(termoMapa2);
console.log(termoMapa3);
console.log(termoMapa4);

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
    const Teste = tentativaAtual2[index];
    if (termoMapa2[index] === letra2) {
      tentativaAtual2[index].classList.add('correto');
    } else {
      for (let index = 0; index < palpite2.length; index++) {
        if (letra2 === termoMapa2[index]) {
          Teste.classList.add('posicaoErrada');
        } else {
          tentativaAtual2[index].classList.add('errada');
        }
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
    const Teste = tentativaAtual3[index];
    if (termoMapa3[index] === letra3) {
      tentativaAtual3[index].classList.add('correto');
    } else {
      for (let index = 0; index < palpite3.length; index++) {
        if (letra3 === termoMapa3[index]) {
          Teste.classList.add('posicaoErrada');
        } else {
          tentativaAtual3[index].classList.add('errada');
        }
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
    const Teste = tentativaAtual4[index];
    if (termoMapa4[index] === letra4) {
      tentativaAtual4[index].classList.add('correto');
    } else {
      for (let index = 0; index < palpite4.length; index++) {
        if (letra4 === termoMapa4[index]) {
          Teste.classList.add('posicaoErrada');
        } else {
          tentativaAtual4[index].classList.add('errada');
        }
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

const Ganhaste = () => {
  if (
    ganhou === true &&
    ganhou2 === true &&
    ganhou3 === true &&
    ganhou4 === true
  ) {
    resposta.textContent = `As palavras corretas são: ${termo}, ${termo2}, ${termo3}, ${termo4}   |`;
    replayBtn.textContent = 'Jogar Novamente';
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
enterButton.addEventListener('click', Ganhaste);
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
    Ganhaste();
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

menuTutorial.addEventListener('click', () => {
  tutorial.classList.add('TutorialAtivo');
  appContainer.classList.add('overflowHidden');
});

tutorial.addEventListener('click', () => {
  tutorial.classList.remove('TutorialAtivo');
  appContainer.classList.remove('overflowHidden');
});

replayBtn.addEventListener('click', () => {
  window.location.reload();
});
