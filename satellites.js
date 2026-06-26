const playModes = {
  moon: {
    kicker: 'MOON',
    name: '月亮就是地球的天然衛星',
    text: '月亮一直繞著地球走，而且不是人造出來的，所以它是天然衛星。',
    memory: '月亮是天然衛星，不是人造衛星。',
    moonOpacity: 1,
    satelliteOpacity: 0.25,
  },
  natural: {
    kicker: 'NATURAL',
    name: '天然衛星是自己形成的',
    text: '天然衛星不是人做的，它們本來就在太空裡，後來成為某顆行星身邊的夥伴。',
    memory: '自己形成、繞著行星走，就是天然衛星。',
    moonOpacity: 1,
    satelliteOpacity: 0.15,
  },
  artificial: {
    kicker: 'ARTIFICIAL',
    name: '人造衛星是人類送上去的',
    text: '像天氣衛星、導航衛星這些，都是人類做好後，再送到太空中繞地球的。',
    memory: '人做的，才叫人造衛星。',
    moonOpacity: 0.35,
    satelliteOpacity: 1,
  },
  compare: {
    kicker: 'COMPARE',
    name: '兩邊一起看就不容易搞混',
    text: '月亮和人造衛星都會繞地球，但一個是天然形成，一個是人類送上去的。',
    memory: '都在繞，但來源不同。',
    moonOpacity: 1,
    satelliteOpacity: 1,
  },
};

const mapParts = {
  earth: {
    kicker: 'EARTH',
    name: '地球是被繞的那一邊',
    text: '在這堂課裡，地球是比較大的主角，月亮和一些人造衛星都會繞著它走。',
    memory: '先看誰在中間，再看誰在繞。',
  },
  moon: {
    kicker: 'MOON',
    name: '月亮是天然衛星',
    text: '月亮不是人造出來的，它本來就在太空裡，現在是地球最熟悉的天然衛星。',
    memory: '月亮 = 天然衛星。',
  },
  natural: {
    kicker: 'NATURAL',
    name: '天然衛星不是只有月亮',
    text: '很多行星都有自己的天然衛星，所以月亮只是我們最熟悉的例子。',
    memory: '天然衛星很多顆，不只月亮。',
  },
  artificial: {
    kicker: 'ARTIFICIAL',
    name: '人造衛星是人做的',
    text: '人造衛星是人類設計、製作，再送到太空中的設備，不是自然形成的月亮。',
    memory: '人送上去的，叫人造衛星。',
  },
  orbit: {
    kicker: 'ORBIT',
    name: '重點是環繞關係',
    text: '衛星這個詞最核心的概念，就是一直繞著比較大的天體走。',
    memory: '衛星重點：繞著誰走。',
  },
};

const quizQuestions = [
  {
    question: '月亮算哪一種？',
    options: ['天然衛星', '人造衛星', '流星'],
    answer: '天然衛星',
    feedback: '答對了，月亮是天然衛星。',
  },
  {
    question: '人造衛星最大的差別是什麼？',
    options: ['是人類做的', '會自己發光', '一定比月亮大'],
    answer: '是人類做的',
    feedback: '對，人造衛星是人類設計並送上去的。',
  },
  {
    question: '衛星最核心的概念是什麼？',
    options: ['繞著比較大的天體走', '一定很亮', '一定住在月球上'],
    answer: '繞著比較大的天體走',
    feedback: '沒錯，這是衛星最重要的概念。',
  },
  {
    question: '只有地球有天然衛星嗎？',
    options: ['不是，很多行星都有', '是，只有地球有', '只有太陽有'],
    answer: '不是，很多行星都有',
    feedback: '對，很多行星都有自己的天然衛星。',
  },
  {
    question: '哪一句最接近這堂課重點？',
    options: ['月亮是地球的天然衛星', '月亮是人造衛星', '衛星只有一種'],
    answer: '月亮是地球的天然衛星',
    feedback: '答對了，這是這堂課最重要的一句話。',
  },
];

const playButtons = [...document.querySelectorAll('.play-button')];
const playKicker = document.getElementById('play-kicker');
const playName = document.getElementById('play-name');
const playText = document.getElementById('play-text');
const playMemory = document.getElementById('play-memory');
const sceneMoon = document.getElementById('scene-moon');
const sceneSatellite = document.getElementById('scene-satellite');

function renderPlay(mode) {
  const data = playModes[mode];
  if (!data) return;
  playButtons.forEach((button) => {
    button.classList.toggle('is-active', button.dataset.mode === mode);
  });
  playKicker.textContent = data.kicker;
  playName.textContent = data.name;
  playText.textContent = data.text;
  playMemory.textContent = data.memory;
  sceneMoon.style.opacity = data.moonOpacity;
  sceneSatellite.style.opacity = data.satelliteOpacity;
}

playButtons.forEach((button) => {
  button.addEventListener('click', () => renderPlay(button.dataset.mode));
});

const hotspots = [...document.querySelectorAll('.map-hotspot')];
const mapKicker = document.getElementById('map-kicker');
const mapName = document.getElementById('map-name');
const mapText = document.getElementById('map-text');
const mapMemory = document.getElementById('map-memory');

function renderMap(part) {
  const data = mapParts[part];
  if (!data) return;
  hotspots.forEach((spot) => {
    spot.classList.toggle('is-active', spot.dataset.part === part);
  });
  mapKicker.textContent = data.kicker;
  mapName.textContent = data.name;
  mapText.textContent = data.text;
  mapMemory.textContent = data.memory;
}

hotspots.forEach((spot) => {
  spot.addEventListener('click', () => renderMap(spot.dataset.part));
});

const quizProgress = document.getElementById('quiz-progress');
const quizQuestion = document.getElementById('quiz-question');
const quizOptions = document.getElementById('quiz-options');
const quizFeedback = document.getElementById('quiz-feedback');
const quizNext = document.getElementById('quiz-next');
let quizIndex = 0;

function renderQuiz() {
  const current = quizQuestions[quizIndex];
  quizProgress.textContent = `第 ${quizIndex + 1} 題，共 ${quizQuestions.length} 題`;
  quizQuestion.textContent = current.question;
  quizFeedback.textContent = '';
  quizNext.hidden = true;
  quizOptions.innerHTML = '';

  current.options.forEach((option) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'quiz-option';
    button.textContent = option;
    button.addEventListener('click', () => checkAnswer(button, option, current));
    quizOptions.appendChild(button);
  });
}

function checkAnswer(button, option, current) {
  const buttons = [...quizOptions.querySelectorAll('.quiz-option')];
  buttons.forEach((item) => {
    item.disabled = true;
    if (item.textContent === current.answer) item.classList.add('correct');
  });
  if (option !== current.answer) {
    button.classList.add('wrong');
    quizFeedback.textContent = `再看一下，正確答案是「${current.answer}」。`;
  } else {
    quizFeedback.textContent = current.feedback;
  }
  quizNext.hidden = false;
  quizNext.textContent = quizIndex === quizQuestions.length - 1 ? '再玩一次 ↺' : '下一題 →';
}

quizNext.addEventListener('click', () => {
  quizIndex = quizIndex === quizQuestions.length - 1 ? 0 : quizIndex + 1;
  renderQuiz();
});

renderPlay('moon');
renderMap('earth');
renderQuiz();
