const typeModes = {
  rocky: {
    kicker: 'ROCKY',
    name: '岩石行星比較像硬球',
    text: '岩石行星通常比較小，而且比較容易想像成有硬硬外表的世界。',
    memory: '前四顆多半是岩石行星。',
    groupKicker: 'GROUP A',
    groupName: '前四顆先放一起看',
    groupText: '水星到火星排在前面，也比較容易先被歸成岩石行星家族。',
    tags: ['比較小', '比較硬'],
    scene: {
      rockySize: '110px',
      giantSize: '150px',
      rockyBg: 'radial-gradient(circle at 35% 30%, #e5d6bb, #bfa989 60%, #8c775a)',
      giantBg: 'linear-gradient(180deg, #c7d7ff 0%, #90aee8 100%)',
      showRing: false,
    },
  },
  giant: {
    kicker: 'GIANT',
    name: '氣體巨行星比較像超大厚球',
    text: '氣體巨行星通常很大，外面看到的常常是厚厚的大氣和雲，不像地球那樣是熟悉的地表。',
    memory: '木星和土星是最經典的大巨人。',
    groupKicker: 'GROUP B',
    groupName: '木星和土星是大巨人組',
    groupText: '這兩顆都很大，也常常是孩子最容易記住的巨行星代表。',
    tags: ['很大', '厚厚大氣'],
    scene: {
      rockySize: '88px',
      giantSize: '220px',
      rockyBg: 'radial-gradient(circle at 35% 30%, #e5d6bb, #bfa989 60%, #8c775a)',
      giantBg: 'linear-gradient(180deg, #ead8bf 0%, #ca9f74 28%, #e6c9aa 46%, #b26f46 72%, #e7d8c1 100%)',
      showRing: false,
    },
  },
  ice: {
    kicker: 'ICE GIANT',
    name: '冰巨行星也是巨人，只是顏色更冷',
    text: '天王星和海王星也很大，只是看起來比較藍、比較冷，所以常被分成冰巨行星。',
    memory: '外側藍藍的大行星，就是冰巨行星代表。',
    groupKicker: 'GROUP C',
    groupName: '天王星和海王星站在最外側',
    groupText: '它們是巨行星家族的一部分，也常常讓孩子用顏色記住：藍藍又很遠。',
    tags: ['藍色系', '很外側'],
    scene: {
      rockySize: '88px',
      giantSize: '184px',
      rockyBg: 'radial-gradient(circle at 35% 30%, #e5d6bb, #bfa989 60%, #8c775a)',
      giantBg: 'radial-gradient(circle at 35% 30%, #8ad1ff, #3477ea 58%, #183f93)',
      showRing: true,
    },
  },
};

const quizQuestions = [
  {
    question: '哪幾顆比較常被放進岩石行星家族？',
    options: ['水星、金星、地球、火星', '木星、土星、天王星、海王星', '只有地球'],
    answer: '水星、金星、地球、火星',
    feedback: '答對了，前四顆通常先歸成岩石行星。',
  },
  {
    question: '哪一類行星通常比較大？',
    options: ['巨行星', '岩石行星', '都一樣大'],
    answer: '巨行星',
    feedback: '對，巨行星通常大很多。',
  },
  {
    question: '木星和土星比較接近哪一類？',
    options: ['岩石行星', '氣體巨行星', '完全不是行星'],
    answer: '氣體巨行星',
    feedback: '沒錯，木星和土星是經典的大巨人。',
  },
  {
    question: '天王星和海王星常常被怎麼記？',
    options: ['冰巨行星', '白天月亮', '小岩石球'],
    answer: '冰巨行星',
    feedback: '對，它們常被記成冰巨行星。',
  },
  {
    question: '哪一句最接近這堂課的重點？',
    options: ['前四顆偏岩石，後四顆偏巨行星', '每顆都一樣', '只有地球最特別所以不用分'],
    answer: '前四顆偏岩石，後四顆偏巨行星',
    feedback: '答對了，這就是這堂課的主軸。',
  },
];

const compareButtons = [...document.querySelectorAll('.compare-button')];
const groupCards = [...document.querySelectorAll('.group-card')];
const compareScene = document.getElementById('compare-scene');
const sceneRockBall = document.querySelector('.scene-rock-ball');
const sceneCloudBall = document.querySelector('.scene-cloud-ball');
const sceneRing = document.getElementById('scene-ring');

const compareKicker = document.getElementById('compare-kicker');
const compareName = document.getElementById('compare-name');
const compareText = document.getElementById('compare-text');
const compareMemory = document.getElementById('compare-memory');

const groupKicker = document.getElementById('group-kicker');
const groupName = document.getElementById('group-name');
const groupText = document.getElementById('group-text');
const groupTags = document.getElementById('group-tags');

function renderMode(mode) {
  const data = typeModes[mode];
  if (!data) return;

  compareButtons.forEach((button) => {
    button.classList.toggle('is-active', button.dataset.mode === mode);
  });
  groupCards.forEach((button) => {
    button.classList.toggle('is-active', button.dataset.mode === mode);
  });

  compareScene.dataset.mode = mode;
  sceneRockBall.style.width = data.scene.rockySize;
  sceneRockBall.style.height = data.scene.rockySize;
  sceneRockBall.style.background = data.scene.rockyBg;
  sceneCloudBall.style.width = data.scene.giantSize;
  sceneCloudBall.style.height = data.scene.giantSize;
  sceneCloudBall.style.background = data.scene.giantBg;
  sceneRing.hidden = !data.scene.showRing;

  compareKicker.textContent = data.kicker;
  compareName.textContent = data.name;
  compareText.textContent = data.text;
  compareMemory.textContent = data.memory;

  groupKicker.textContent = data.groupKicker;
  groupName.textContent = data.groupName;
  groupText.textContent = data.groupText;
  groupTags.innerHTML = data.tags.map((tag) => `<span>${tag}</span>`).join('');
}

compareButtons.forEach((button) => {
  button.addEventListener('click', () => renderMode(button.dataset.mode));
});

groupCards.forEach((button) => {
  button.addEventListener('click', () => renderMode(button.dataset.mode));
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

renderMode('rocky');
renderQuiz();
