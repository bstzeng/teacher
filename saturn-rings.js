const playModes = {
  shape: {
    kicker: 'SHAPE',
    name: '先看外型',
    text: '土星最容易記住的地方，就是它外面有一大圈很明顯的環。',
    memory: '土星環看起來像帽子邊。',
    particles: 0.25,
    shine: 0.35,
  },
  pieces: {
    kicker: 'PIECES',
    name: '很多很多碎片',
    text: '土星環不是整塊塑膠圈，而是許多冰塊、小石頭和碎片一起排成的。',
    memory: '很多小東西，排成大圈圈。',
    particles: 0.95,
    shine: 0.25,
  },
  light: {
    kicker: 'LIGHT',
    name: '為什麼看起來亮亮的',
    text: '因為裡面有很多會反光的冰，所以土星環常常看起來亮亮的、很吸引人。',
    memory: '冰會反光，所以環很亮。',
    particles: 0.55,
    shine: 0.9,
  },
  gap: {
    kicker: 'GAPS',
    name: '不只一圈，還有分帶',
    text: '土星環不是只有一個圈，裡面其實有不同環帶，看起來像一圈一圈分開。',
    memory: '環帶不是一條，是好多圈。',
    particles: 0.45,
    shine: 0.45,
  },
};

const mapParts = {
  planet: {
    kicker: 'PLANET',
    name: '土星本體',
    text: '中間那顆大大的球是土星，外面那幾圈才是我們說的土星環。',
    memory: '球是土星，圈圈是環。',
  },
  ring: {
    kicker: 'RING',
    name: '外面的環帶',
    text: '土星環包在土星周圍，所以看起來像替土星戴上一頂超寬的帽子。',
    memory: '最外面那幾圈，就是環。',
  },
  pieces: {
    kicker: 'PIECES',
    name: '裡面有很多小碎片',
    text: '如果放大看，會知道環裡不是空空的，而是有很多冰塊、塵埃和小碎石。',
    memory: '小碎片很多很多。',
  },
  shine: {
    kicker: 'SHINE',
    name: '亮亮的地方',
    text: '一些冰和表面角度會讓土星環反光，所以照片裡常常能看到亮亮的部分。',
    memory: '亮，常和冰和反光有關。',
  },
  gaps: {
    kicker: 'GAPS',
    name: '環帶之間有分開',
    text: '土星環不是完全黏在一起，有些地方會看起來比較空，像是圈圈中間有間隔。',
    memory: '不是只有一條，是好多帶。',
  },
};

const quizQuestions = [
  {
    question: '土星環是一整塊硬硬的圓盤嗎？',
    options: ['不是，是很多碎片排成的', '是，一整塊金屬圈', '是，像餅乾一樣'],
    answer: '不是，是很多碎片排成的',
    feedback: '答對了，土星環是很多碎片一起形成的。',
  },
  {
    question: '土星環裡常常有什麼？',
    options: ['冰和小碎石', '樹木和草地', '房子和道路'],
    answer: '冰和小碎石',
    feedback: '對，冰和小碎石是很重要的成員。',
  },
  {
    question: '為什麼土星那麼容易被記住？',
    options: ['因為有大大的環', '因為它住在地球旁邊', '因為它最小'],
    answer: '因為有大大的環',
    feedback: '沒錯，大環就是土星的招牌。',
  },
  {
    question: '土星環看起來亮亮的，常和什麼有關？',
    options: ['冰和反光', '下雨', '樹葉'],
    answer: '冰和反光',
    feedback: '對，反光是重要原因之一。',
  },
  {
    question: '哪一句最接近這堂課的重點？',
    options: ['土星環是很多碎片排成的大圈圈', '土星環是畫上去的', '土星沒有環'],
    answer: '土星環是很多碎片排成的大圈圈',
    feedback: '答對了，這就是整堂課的重點。',
  },
];

const playButtons = [...document.querySelectorAll('.play-button')];
const playKicker = document.getElementById('play-kicker');
const playName = document.getElementById('play-name');
const playText = document.getElementById('play-text');
const playMemory = document.getElementById('play-memory');
const sceneParticles = document.getElementById('scene-particles');
const sceneShine = document.getElementById('scene-shine');
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
  sceneParticles.style.opacity = data.particles;
  sceneShine.style.opacity = data.shine;
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

renderPlay('shape');
renderMap('planet');
renderQuiz();
