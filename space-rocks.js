const playModes = {
  comet: {
    kicker: 'COMET',
    name: '彗星常拖著尾巴',
    text: '彗星是在太空裡的冰塊和塵土天體，靠近太陽時常常會拖出長長的尾巴。',
    memory: '有尾巴、在太空，常常先想到彗星。',
    objectLeft: '150px',
    objectTop: '120px',
    objectWidth: '88px',
    objectHeight: '64px',
    objectRadius: '999px',
    objectBg: 'radial-gradient(circle at 35% 35%, #d7f3ff 0%, #90d5ff 52%, #4d91cb 100%)',
    tailOpacity: 1,
    streakOpacity: 0,
    groundOpacity: 0,
  },
  asteroid: {
    kicker: 'ASTEROID',
    name: '小行星是還在太空飛的石頭',
    text: '小行星還在太空裡時，通常就是石頭或金屬天體，這時候不叫流星也不叫隕石。',
    memory: '還在太空飛的石頭，常常是小行星。',
    objectLeft: '168px',
    objectTop: '144px',
    objectWidth: '108px',
    objectHeight: '80px',
    objectRadius: '40% 60% 55% 45% / 48% 42% 58% 52%',
    objectBg: 'linear-gradient(135deg, #8c7b6c, #54463b)',
    tailOpacity: 0,
    streakOpacity: 0,
    groundOpacity: 0,
  },
  meteor: {
    kicker: 'METEOR',
    name: '流星是在發亮的那一刻',
    text: '當小東西衝進地球大氣、開始發亮時，我們在天空看到的亮痕就叫流星。',
    memory: '發亮劃過天空時，叫流星。',
    objectLeft: '240px',
    objectTop: '236px',
    objectWidth: '34px',
    objectHeight: '34px',
    objectRadius: '999px',
    objectBg: 'radial-gradient(circle at 35% 35%, #ffd88f 0%, #ff9f4d 58%, #da5d1d 100%)',
    tailOpacity: 0,
    streakOpacity: 1,
    groundOpacity: 0,
  },
  meteorite: {
    kicker: 'METEORITE',
    name: '落到地上後，才叫隕石',
    text: '如果有一部分真的撐過大氣，最後掉到地上，那塊落地的石頭才叫隕石。',
    memory: '真的落地之後，名字變成隕石。',
    objectLeft: '274px',
    objectTop: '286px',
    objectWidth: '92px',
    objectHeight: '62px',
    objectRadius: '40% 60% 55% 45% / 48% 42% 58% 52%',
    objectBg: 'linear-gradient(135deg, #7e6e61, #473c34)',
    tailOpacity: 0,
    streakOpacity: 0.18,
    groundOpacity: 1,
  },
};

const journeyStages = {
  space: {
    kicker: 'SPACE',
    name: '還在太空時，不叫隕石',
    text: '一塊石頭還在太空飛時，通常會先被理解成小天體，不會先叫隕石。',
    tags: ['還在太空', '還沒落地'],
  },
  air: {
    kicker: 'AIR',
    name: '進大氣發亮時，叫流星',
    text: '當它衝進地球大氣、開始發亮時，我們常常會抬頭看到一條亮痕，這時叫流星。',
    tags: ['進入大氣', '發亮'],
  },
  ground: {
    kicker: 'GROUND',
    name: '真的落地後，才叫隕石',
    text: '如果有部分真的撐住、掉到地上，那塊最後留下來的石頭才叫隕石。',
    tags: ['落到地上', '留下石頭'],
  },
};

const quizQuestions = [
  {
    question: '拖著尾巴、常在太空被看到的，最常先想到哪一種？',
    options: ['彗星', '隕石', '流星'],
    answer: '彗星',
    feedback: '答對了，拖著尾巴時，常常先想到彗星。',
  },
  {
    question: '一顆石頭還在太空裡飛時，最可能叫什麼？',
    options: ['小行星', '流星', '隕石'],
    answer: '小行星',
    feedback: '對，還在太空時常常會先叫小行星。',
  },
  {
    question: '在天空中一閃而過、亮亮的那條，通常叫什麼？',
    options: ['流星', '彗星', '隕石'],
    answer: '流星',
    feedback: '沒錯，發亮劃過天空時，叫流星。',
  },
  {
    question: '真的落到地上後，最後留下來的石頭叫什麼？',
    options: ['隕石', '彗星', '流星'],
    answer: '隕石',
    feedback: '對，落地後留下來的才叫隕石。',
  },
  {
    question: '這堂課最重要的分法是什麼？',
    options: ['看它在哪裡、是不是發亮、是不是落地', '看它是不是紅色', '看它是不是很大顆'],
    answer: '看它在哪裡、是不是發亮、是不是落地',
    feedback: '答對了，這樣分最容易理解四個名字。',
  },
];

const playButtons = [...document.querySelectorAll('.play-button')];
const playKicker = document.getElementById('play-kicker');
const playName = document.getElementById('play-name');
const playText = document.getElementById('play-text');
const playMemory = document.getElementById('play-memory');
const sceneObject = document.getElementById('scene-object');
const sceneTail = document.getElementById('scene-tail');
const sceneStreak = document.getElementById('scene-streak');
const sceneGround = document.getElementById('scene-ground');
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
  sceneObject.style.left = data.objectLeft;
  sceneObject.style.top = data.objectTop;
  sceneObject.style.width = data.objectWidth;
  sceneObject.style.height = data.objectHeight;
  sceneObject.style.borderRadius = data.objectRadius;
  sceneObject.style.background = data.objectBg;
  sceneTail.style.opacity = data.tailOpacity;
  sceneStreak.style.opacity = data.streakOpacity;
  sceneGround.style.opacity = data.groundOpacity;
}

playButtons.forEach((button) => {
  button.addEventListener('click', () => renderPlay(button.dataset.mode));
});

const journeyStops = [...document.querySelectorAll('.journey-stop')];
const journeyKicker = document.getElementById('journey-kicker');
const journeyName = document.getElementById('journey-name');
const journeyText = document.getElementById('journey-text');
const journeyTags = document.getElementById('journey-tags');

function renderJourney(stage) {
  const data = journeyStages[stage];
  if (!data) return;
  journeyStops.forEach((button) => {
    button.classList.toggle('is-active', button.dataset.stage === stage);
  });
  journeyKicker.textContent = data.kicker;
  journeyName.textContent = data.name;
  journeyText.textContent = data.text;
  journeyTags.innerHTML = data.tags.map((tag) => `<span>${tag}</span>`).join('');
}

journeyStops.forEach((button) => {
  button.addEventListener('click', () => renderJourney(button.dataset.stage));
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

renderPlay('comet');
renderJourney('space');
renderQuiz();
