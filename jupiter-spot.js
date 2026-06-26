const playModes = {
  place: {
    kicker: 'PLACE',
    name: '先找到它的位置',
    text: '大紅斑待在木星外面的雲帶區，看起來像木星身上一塊特別醒目的紅色橢圓。',
    memory: '先看到紅紅的那塊，再記住它是風暴。',
    windOpacity: 0.25,
    spotScale: 1,
  },
  storm: {
    kicker: 'STORM',
    name: '它是一個風暴',
    text: '大紅斑不是貼紙，也不是洞，而是一個很大的風暴區，就像木星上的超級氣旋。',
    memory: '紅斑其實是風暴。',
    windOpacity: 0.7,
    spotScale: 1.05,
  },
  swirl: {
    kicker: 'SWIRL',
    name: '它一直在轉',
    text: '這個風暴會一直旋轉，所以畫面上常常會用旋渦的感覺來幫助理解。',
    memory: '風暴會轉，看起來像大旋渦。',
    windOpacity: 1,
    spotScale: 1.08,
  },
  spot: {
    kicker: 'SPOT',
    name: '它為什麼很顯眼',
    text: '因為它顏色比較紅、形狀又明顯，所以很多人看木星時第一眼就會先看到它。',
    memory: '紅紅又大塊，所以很好認。',
    windOpacity: 0.45,
    spotScale: 1.18,
  },
};

const mapParts = {
  planet: {
    kicker: 'PLANET',
    name: '木星本體',
    text: '我們看到的木星外表不是岩石地面，而是厚厚的大氣和雲帶。',
    memory: '先記住：木星外面看到的是雲。',
  },
  bands: {
    kicker: 'BANDS',
    name: '一條一條的雲帶',
    text: '木星外面有很多顏色不同的雲帶，這也是木星看起來特別有層次的原因。',
    memory: '先找雲帶，再找紅斑。',
  },
  spot: {
    kicker: 'SPOT',
    name: '大紅斑本體',
    text: '那塊紅紅的橢圓就是大紅斑。它不是洞，而是木星大氣裡一大塊風暴區。',
    memory: '紅斑不是洞，是風暴。',
  },
  storm: {
    kicker: 'STORM',
    name: '風暴在轉動',
    text: '大紅斑像一個一直轉的大風暴，所以我們常用旋渦來幫忙想像它。',
    memory: '看到旋渦感，就想到風暴。',
  },
  eye: {
    kicker: 'EYE',
    name: '像一顆大眼睛',
    text: '很多小朋友會先把大紅斑想成木星的大眼睛，這其實是很好的記憶方式。',
    memory: '像眼睛，但其實是風暴。',
  },
};

const quizQuestions = [
  {
    question: '木星的大紅斑最接近下面哪一種？',
    options: ['大風暴', '大火山', '大洞洞'],
    answer: '大風暴',
    feedback: '答對了，大紅斑是一個超大的風暴。',
  },
  {
    question: '木星外面看到的一條一條主要是什麼？',
    options: ['雲帶和大氣', '森林和山', '海洋和陸地'],
    answer: '雲帶和大氣',
    feedback: '對，木星外面看到的是大氣和雲帶。',
  },
  {
    question: '大紅斑為什麼很容易被記住？',
    options: ['因為紅紅的又很明顯', '因為上面有房子', '因為它會發光'],
    answer: '因為紅紅的又很明顯',
    feedback: '沒錯，它顏色和形狀都很顯眼。',
  },
  {
    question: '哪一句最接近這堂課的重點？',
    options: ['大紅斑是木星上的大風暴', '大紅斑是木星的門', '大紅斑是月亮'],
    answer: '大紅斑是木星上的大風暴',
    feedback: '答對了，這就是整堂課最核心的句子。',
  },
  {
    question: '想像大紅斑時，用哪個感覺最合適？',
    options: ['旋渦在轉', '石頭不動', '樹在長高'],
    answer: '旋渦在轉',
    feedback: '對，把它想成大旋渦最容易理解。',
  },
];

const playButtons = [...document.querySelectorAll('.play-button')];
const playKicker = document.getElementById('play-kicker');
const playName = document.getElementById('play-name');
const playText = document.getElementById('play-text');
const playMemory = document.getElementById('play-memory');
const sceneRedSpot = document.getElementById('scene-red-spot');
const sceneWind = document.getElementById('scene-wind');
const playScene = document.getElementById('play-scene');

function renderPlay(mode) {
  const data = playModes[mode];
  if (!data) return;
  playButtons.forEach((button) => {
    button.classList.toggle('is-active', button.dataset.mode === mode);
  });
  playScene.dataset.mode = mode;
  playKicker.textContent = data.kicker;
  playName.textContent = data.name;
  playText.textContent = data.text;
  playMemory.textContent = data.memory;
  sceneWind.style.opacity = data.windOpacity;
  sceneRedSpot.style.transform = `scale(${data.spotScale})`;
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

renderPlay('place');
renderMap('planet');
renderQuiz();
