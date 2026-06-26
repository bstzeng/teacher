const seasonData = {
  spring: {
    kicker: 'SPRING',
    name: '春天',
    text: '春分附近時，南北半球收到的陽光比較接近，白天和晚上也差不多長。',
    memory: '春秋像在中間，南北半球比較平均。',
    north: '春天',
    south: '秋天',
    activeClass: 'mini-right'
  },
  summer: {
    kicker: 'SUMMER',
    name: '夏天',
    text: '北半球比較朝向太陽時，陽光通常比較直、白天也比較長，所以常常更熱。',
    memory: '北半球朝向太陽，就容易像夏天。',
    north: '夏天',
    south: '冬天',
    activeClass: 'mini-top'
  },
  autumn: {
    kicker: 'AUTUMN',
    name: '秋天',
    text: '秋分附近又回到比較平均的狀態，所以白天和晚上再次接近。',
    memory: '秋天像春天的另一邊，又回到比較平均。',
    north: '秋天',
    south: '春天',
    activeClass: 'mini-left'
  },
  winter: {
    kicker: 'WINTER',
    name: '冬天',
    text: '北半球比較背向太陽時，陽光比較斜、白天也比較短，所以常常更冷。',
    memory: '北半球背向太陽，就容易像冬天。',
    north: '冬天',
    south: '夏天',
    activeClass: 'mini-bottom'
  }
};

const mapData = {
  sun: {
    kicker: 'SUN',
    name: '太陽',
    text: '太陽一直都在照，真正改變的是地球斜斜地轉到哪個位置。',
    memory: '先找太陽，再看哪一半比較朝向它。'
  },
  orbit: {
    kicker: 'ORBIT',
    name: '公轉路線',
    text: '地球一年會沿著這條路線繞太陽跑，所以季節會慢慢輪流改變。',
    memory: '會有四季，是因為地球會跑到不同位置。'
  },
  tilt: {
    kicker: 'TILT',
    name: '傾斜的地軸',
    text: '地球不是直直站著，所以哪個半球比較朝向太陽，會隨著公轉改變。',
    memory: '四季最關鍵的一句話：地球是斜的。'
  },
  north: {
    kicker: 'NORTH',
    name: '北半球',
    text: '如果北半球比較朝向太陽，通常白天比較長、陽光比較直，就比較像夏天。',
    memory: '北半球朝向太陽時，常常比較熱。'
  },
  south: {
    kicker: 'SOUTH',
    name: '南半球',
    text: '南半球常常和北半球相反，所以我們是夏天時，南半球可能是冬天。',
    memory: '南北半球常常在過不同季節。'
  }
};

const quizData = [
  {
    question: '四季最主要是因為什麼？',
    options: ['地球傾斜又繞著太陽轉', '太陽有時候心情比較熱', '月亮每天幫地球吹風'],
    answer: 0,
    explanation: '答對了，四季主要和地球傾斜、公轉、陽光角度改變有關。'
  },
  {
    question: '北半球比較朝向太陽時，通常比較像哪個季節？',
    options: ['冬天', '夏天', '都一樣'],
    answer: 1,
    explanation: '對，北半球比較朝向太陽時，通常白天更長、陽光更直，比較像夏天。'
  },
  {
    question: '春分和秋分附近，白天和晚上通常怎麼樣？',
    options: ['差不多長', '完全沒有晚上', '完全沒有白天'],
    answer: 0,
    explanation: '沒錯，春分和秋分附近，白天和晚上通常比較接近。'
  },
  {
    question: '北半球是冬天時，南半球常常是？',
    options: ['也是冬天', '夏天', '都沒有季節'],
    answer: 1,
    explanation: '答對了，因為南北半球常常一邊朝向太陽、一邊背向太陽。'
  },
  {
    question: '哪一句最適合記住四季？',
    options: ['地球斜斜地繞著太陽轉', '太陽每天都換一顆', '雲朵在推地球'],
    answer: 0,
    explanation: '太好了，這就是這堂課最重要的一句話。'
  }
];

const playButtons = document.querySelectorAll('.play-button');
const orbitScene = document.getElementById('orbit-scene');
const playKicker = document.getElementById('play-kicker');
const playName = document.getElementById('play-name');
const playText = document.getElementById('play-text');
const playMemory = document.getElementById('play-memory');
const northSeason = document.getElementById('north-season');
const southSeason = document.getElementById('south-season');

function setSeason(seasonKey) {
  const season = seasonData[seasonKey];
  if (!season) return;

  playButtons.forEach((button) => {
    button.classList.toggle('is-active', button.dataset.season === seasonKey);
  });

  orbitScene.dataset.season = seasonKey;
  orbitScene.querySelectorAll('.mini-earth').forEach((earth) => {
    earth.classList.toggle('is-active', earth.classList.contains(season.activeClass));
  });

  playKicker.textContent = season.kicker;
  playName.textContent = season.name;
  playText.textContent = season.text;
  playMemory.textContent = season.memory;
  northSeason.textContent = season.north;
  southSeason.textContent = season.south;
}

playButtons.forEach((button) => {
  button.addEventListener('click', () => setSeason(button.dataset.season));
});

const mapHotspots = document.querySelectorAll('.map-hotspot');
const mapKicker = document.getElementById('map-kicker');
const mapName = document.getElementById('map-name');
const mapText = document.getElementById('map-text');
const mapMemory = document.getElementById('map-memory');

mapHotspots.forEach((hotspot) => {
  hotspot.addEventListener('click', () => {
    const part = mapData[hotspot.dataset.part];
    if (!part) return;

    mapHotspots.forEach((item) => item.classList.remove('is-active'));
    hotspot.classList.add('is-active');
    mapKicker.textContent = part.kicker;
    mapName.textContent = part.name;
    mapText.textContent = part.text;
    mapMemory.textContent = part.memory;
  });
});

const quizProgress = document.getElementById('quiz-progress');
const quizQuestion = document.getElementById('quiz-question');
const quizOptions = document.getElementById('quiz-options');
const quizFeedback = document.getElementById('quiz-feedback');
const quizNext = document.getElementById('quiz-next');

let quizIndex = 0;

function renderQuiz() {
  const current = quizData[quizIndex];
  quizProgress.textContent = `第 ${quizIndex + 1} 題，共 ${quizData.length} 題`;
  quizQuestion.textContent = current.question;
  quizFeedback.textContent = '';
  quizNext.hidden = true;
  quizOptions.innerHTML = '';

  current.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = option;
    button.addEventListener('click', () => handleAnswer(index));
    quizOptions.appendChild(button);
  });
}

function handleAnswer(selectedIndex) {
  const current = quizData[quizIndex];
  const buttons = quizOptions.querySelectorAll('button');

  buttons.forEach((button, index) => {
    button.disabled = true;
    if (index === current.answer) button.classList.add('correct');
    if (index === selectedIndex && index !== current.answer) button.classList.add('wrong');
  });

  quizFeedback.textContent = current.explanation;
  quizNext.hidden = false;
}

quizNext?.addEventListener('click', () => {
  quizIndex += 1;
  if (quizIndex >= quizData.length) {
    quizProgress.textContent = '全部完成';
    quizQuestion.textContent = '你已經完成這堂四季小挑戰！';
    quizOptions.innerHTML = '';
    quizFeedback.textContent = '很棒，你已經知道四季和地球傾斜、公轉有關。';
    quizNext.hidden = true;
    return;
  }
  renderQuiz();
});

renderQuiz();
setSeason('spring');
