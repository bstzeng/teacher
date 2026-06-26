const playModes = {
  orbit: {
    kicker: 'ORBIT',
    name: '第一關：它有繞太陽',
    text: '冥王星有繞太陽，所以這一關它是過關的。',
    memory: '它不是亂飛，它真的在繞太陽。',
    neighborsOpacity: 0,
    checkText: '✓',
    checkBg: 'rgba(67, 95, 192, 0.45)',
  },
  round: {
    kicker: 'ROUND',
    name: '第二關：它自己夠圓',
    text: '冥王星也夠圓，所以這一點它也有做到。',
    memory: '它不是碎碎的小石頭，而是一顆圓圓的世界。',
    neighborsOpacity: 0.1,
    checkText: '✓',
    checkBg: 'rgba(67, 95, 192, 0.45)',
  },
  clear: {
    kicker: 'CLEAR',
    name: '第三關：這裡卡住了',
    text: '冥王星附近還有不少別的天體，所以這一關沒有像八大行星那樣清得很乾淨。',
    memory: '前兩關有過，第三關卡住。',
    neighborsOpacity: 1,
    checkText: '!',
    checkBg: 'rgba(255, 153, 85, 0.45)',
  },
  dwarf: {
    kicker: 'DWARF',
    name: '所以它叫矮行星',
    text: '因為前兩關過了、第三關沒有完全符合，所以冥王星被分到矮行星。',
    memory: '不是沒資格存在，而是放到另一欄。',
    neighborsOpacity: 0.8,
    checkText: '矮',
    checkBg: 'rgba(255, 153, 85, 0.45)',
  },
};

const rulesData = {
  orbit: {
    kicker: 'RULE 1',
    name: '先看有沒有繞太陽',
    text: '冥王星這一點是有做到的，所以它不是隨便亂飛的小東西。',
    tags: ['有做到', '第一關過'],
  },
  round: {
    kicker: 'RULE 2',
    name: '再看自己有沒有夠圓',
    text: '冥王星夠大、也夠圓，所以這一關它也有通過。',
    tags: ['夠圓', '第二關過'],
  },
  clear: {
    kicker: 'RULE 3',
    name: '最後看附近有沒有清乾淨',
    text: '這裡就是關鍵：它附近還有不少其他天體，所以和八大行星的情況不太一樣。',
    tags: ['關鍵差別', '這裡卡住'],
  },
};

const quizQuestions = [
  {
    question: '冥王星是不是消失了？',
    options: ['不是，它還在太陽系裡', '是，它不見了', '是，它飛走了'],
    answer: '不是，它還在太陽系裡',
    feedback: '答對了，冥王星沒有消失。',
  },
  {
    question: '冥王星後來比較常被分到哪一類？',
    options: ['矮行星', '恆星', '流星'],
    answer: '矮行星',
    feedback: '對，它被分到矮行星。',
  },
  {
    question: '冥王星有沒有繞太陽？',
    options: ['有', '沒有', '只有晚上有'],
    answer: '有',
    feedback: '沒錯，它有繞太陽。',
  },
  {
    question: '這堂課最重要的關鍵差別是哪一關？',
    options: ['附近空間有沒有清乾淨', '它是不是紅色', '它有沒有尾巴'],
    answer: '附近空間有沒有清乾淨',
    feedback: '答對了，這是最關鍵的差別。',
  },
  {
    question: '哪一句最接近這堂課重點？',
    options: ['冥王星被分到不同類別', '冥王星不重要', '冥王星不是太陽系成員'],
    answer: '冥王星被分到不同類別',
    feedback: '對，重點是分類，不是消失。',
  },
];

const playButtons = [...document.querySelectorAll('.play-button')];
const playKicker = document.getElementById('play-kicker');
const playName = document.getElementById('play-name');
const playText = document.getElementById('play-text');
const playMemory = document.getElementById('play-memory');
const sceneNeighbors = document.getElementById('scene-neighbors');
const sceneCheck = document.getElementById('scene-check');

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
  sceneNeighbors.style.opacity = data.neighborsOpacity;
  sceneCheck.textContent = data.checkText;
  sceneCheck.style.background = data.checkBg;
}

playButtons.forEach((button) => {
  button.addEventListener('click', () => renderPlay(button.dataset.mode));
});

const ruleCards = [...document.querySelectorAll('.rule-card')];
const rulesKicker = document.getElementById('rules-kicker');
const rulesName = document.getElementById('rules-name');
const rulesText = document.getElementById('rules-text');
const rulesTags = document.getElementById('rules-tags');

function renderRule(mode) {
  const data = rulesData[mode];
  if (!data) return;
  ruleCards.forEach((button) => {
    button.classList.toggle('is-active', button.dataset.mode === mode);
  });
  rulesKicker.textContent = data.kicker;
  rulesName.textContent = data.name;
  rulesText.textContent = data.text;
  rulesTags.innerHTML = data.tags.map((tag) => `<span>${tag}</span>`).join('');
}

ruleCards.forEach((button) => {
  button.addEventListener('click', () => renderRule(button.dataset.mode));
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

renderPlay('orbit');
renderRule('orbit');
renderQuiz();
