const sizeData = {
  mercury: {
    kicker: 'SMALL',
    name: '水星最小',
    text: '水星是八大行星裡最小的，所以和木星相比時，會看起來差很多。',
    memory: '最小的是水星，最大的是木星。',
    rankKicker: 'RANK 1',
    rankName: '水星排最小',
    rankText: '水星雖然不小到看不見，但放到八大行星裡，它就是最小的那一顆。',
    tags: ['最小', '岩石行星'],
    size: '64px',
    color: 'radial-gradient(circle at 35% 30%, #e5d6bb, #bfa989 60%, #8c775a)',
    ring: false,
  },
  mars: {
    kicker: 'SMALL',
    name: '火星也不大',
    text: '火星比地球小一些，所以常常被當成中小型岩石行星來記。',
    memory: '火星比地球小。',
    rankKicker: 'RANK 2',
    rankName: '火星排第二小',
    rankText: '火星雖然比水星大，但還是明顯比地球和金星小一些。',
    tags: ['第二小', '紅色星球'],
    size: '72px',
    color: 'radial-gradient(circle at 35% 30%, #f2b18f 0%, #cf6543 58%, #893f27 100%)',
    ring: false,
  },
  venus: {
    kicker: 'MEDIUM',
    name: '金星和地球差不多',
    text: '金星和地球在大小上很接近，所以常常會一起被拿來比較。',
    memory: '金星和地球像一組鄰居。',
    rankKicker: 'RANK 3',
    rankName: '金星接近地球大小',
    rankText: '金星不是最大，但也不是小不點，它跟地球很接近。',
    tags: ['接近地球', '岩石行星'],
    size: '94px',
    color: 'radial-gradient(circle at 35% 30%, #f4ddb2 0%, #ddb071 58%, #a76d3d 100%)',
    ring: false,
  },
  earth: {
    kicker: 'MEDIUM',
    name: '地球是好用的參考尺',
    text: '地球不算小，但放進太陽系時，也不是最大的一群。',
    memory: '我們住的地球是中等大小。',
    rankKicker: 'RANK 4',
    rankName: '地球排在中間附近',
    rankText: '地球很適合當比較基準，因為孩子對它最熟悉。',
    tags: ['我們的家', '中等大小'],
    size: '100px',
    color: 'radial-gradient(circle at 35% 30%, #76d3ff, #2f8dee 40%, #2abf78 72%, #1c5ba5)',
    ring: false,
  },
  neptune: {
    kicker: 'GIANT',
    name: '海王星已經很大了',
    text: '海王星雖然不是最大，但和地球比起來，已經大很多。',
    memory: '外側的大行星通常很大。',
    rankKicker: 'RANK 5',
    rankName: '海王星開始進入大個子區',
    rankText: '海王星是外側行星，大小已經和前面的岩石行星差很明顯。',
    tags: ['冰巨行星', '外側行星'],
    size: '132px',
    color: 'radial-gradient(circle at 35% 30%, #8ad1ff, #3477ea 58%, #183f93)',
    ring: false,
  },
  uranus: {
    kicker: 'GIANT',
    name: '天王星也很大',
    text: '天王星和海王星都是大個子，遠看會覺得像一組兄弟。',
    memory: '天王星和海王星都屬於大個子。',
    rankKicker: 'RANK 6',
    rankName: '天王星比海王星再大一些',
    rankText: '天王星也是外側的大行星，尺寸比地球大很多。',
    tags: ['冰巨行星', '藍綠色'],
    size: '138px',
    color: 'radial-gradient(circle at 35% 30%, #d9f8ff 0%, #92dfe7 55%, #57a8b6 100%)',
    ring: false,
  },
  saturn: {
    kicker: 'GIANT',
    name: '土星很大，還戴著環',
    text: '土星本體已經很大，再加上著名的環，所以看起來更有存在感。',
    memory: '土星是超大的戴環行星。',
    rankKicker: 'RANK 7',
    rankName: '土星排第二大',
    rankText: '土星只比木星小一些，但已經比地球大非常多。',
    tags: ['第二大', '有環'],
    size: '170px',
    color: 'radial-gradient(circle at 35% 30%, #f1e0ba, #d6bf88 58%, #9f8553)',
    ring: true,
  },
  jupiter: {
    kicker: 'BIGGEST',
    name: '木星最大',
    text: '木星是八大行星裡最大的，所以它常常像太陽系裡的巨人。',
    memory: '看到超大顆，多半就是木星。',
    rankKicker: 'RANK 8',
    rankName: '木星排最大',
    rankText: '木星比其他行星大得很明顯，是這堂課一定要記住的關鍵。',
    tags: ['最大', '氣體巨行星'],
    size: '220px',
    color: 'linear-gradient(180deg, #ead8bf 0%, #ca9f74 28%, #e6c9aa 46%, #b26f46 72%, #e7d8c1 100%)',
    ring: false,
  },
};

const quizQuestions = [
  {
    question: '八大行星裡最大的是哪一顆？',
    options: ['木星', '地球', '火星'],
    answer: '木星',
    feedback: '答對了，木星最大。',
  },
  {
    question: '八大行星裡最小的是哪一顆？',
    options: ['水星', '金星', '土星'],
    answer: '水星',
    feedback: '對，最小的是水星。',
  },
  {
    question: '哪一顆行星最有名的是它的大環？',
    options: ['海王星', '土星', '水星'],
    answer: '土星',
    feedback: '沒錯，戴環代表就是土星。',
  },
  {
    question: '地球在八大行星裡比較像哪一種大小？',
    options: ['超大巨人', '中等大小', '最小一顆'],
    answer: '中等大小',
    feedback: '對，地球不是最大，也不是最小。',
  },
  {
    question: '通常哪一群行星會比較大？',
    options: ['後面的巨行星', '前面的岩石行星', '全部都差不多'],
    answer: '後面的巨行星',
    feedback: '答對了，後面的巨行星通常大很多。',
  },
];

const playButtons = [...document.querySelectorAll('.play-button')];
const rankRows = [...document.querySelectorAll('.rank-row')];
const focusPlanet = document.getElementById('focus-planet');
const focusRing = document.getElementById('focus-ring');

const playKicker = document.getElementById('play-kicker');
const playName = document.getElementById('play-name');
const playText = document.getElementById('play-text');
const playMemory = document.getElementById('play-memory');

const rankKicker = document.getElementById('rank-kicker');
const rankName = document.getElementById('rank-name');
const rankText = document.getElementById('rank-text');
const rankTags = document.getElementById('rank-tags');

function renderPlanet(id) {
  const data = sizeData[id];
  if (!data) return;

  playButtons.forEach((button) => {
    button.classList.toggle('is-active', button.dataset.planet === id);
  });
  rankRows.forEach((row) => {
    row.classList.toggle('is-active', row.dataset.planet === id);
  });

  focusPlanet.style.width = data.size;
  focusPlanet.style.height = data.size;
  focusPlanet.style.background = data.color;
  focusRing.hidden = !data.ring;

  playKicker.textContent = data.kicker;
  playName.textContent = data.name;
  playText.textContent = data.text;
  playMemory.textContent = data.memory;

  rankKicker.textContent = data.rankKicker;
  rankName.textContent = data.rankName;
  rankText.textContent = data.rankText;
  rankTags.innerHTML = data.tags.map((tag) => `<span>${tag}</span>`).join('');
}

playButtons.forEach((button) => {
  button.addEventListener('click', () => renderPlanet(button.dataset.planet));
});

rankRows.forEach((row) => {
  row.addEventListener('click', () => renderPlanet(row.dataset.planet));
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
    if (item.textContent === current.answer) {
      item.classList.add('correct');
    }
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

renderPlanet('mercury');
renderQuiz();
