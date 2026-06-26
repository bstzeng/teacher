const playData = {
  surface: {
    kicker: 'SURFACE',
    name: '表面亮光',
    text: '我們平常看到的太陽，最直接的感覺就是很亮，像一個會自己發光的大火球。',
    memory: '太陽最先送到地球的，就是光。',
    patternOpacity: 1,
    loopsOpacity: 0.15,
    flareOpacity: 0.1
  },
  heat: {
    kicker: 'HEAT',
    name: '很熱很熱',
    text: '太陽不只亮，還非常熱。這些熱最後會幫地球帶來溫暖，也讓很多生命可以活下去。',
    memory: '光和熱，通常會一起來。',
    patternOpacity: 0.35,
    loopsOpacity: 0.1,
    flareOpacity: 0.15
  },
  loops: {
    kicker: 'LOOPS',
    name: '磁力拱圈',
    text: '太陽表面上方常常會出現大大的拱圈，看起來像在空中畫出亮亮的弧線。',
    memory: '太陽表面，不是完全平靜的。',
    patternOpacity: 0.4,
    loopsOpacity: 1,
    flareOpacity: 0.2
  },
  flare: {
    kicker: 'FLARE',
    name: '太陽噴發',
    text: '有時太陽會出現更明顯的噴發活動，像突然伸出一道很亮的火光。',
    memory: '太陽有時會很安靜，有時會很熱鬧。',
    patternOpacity: 0.45,
    loopsOpacity: 0.45,
    flareOpacity: 1
  }
};

const mapData = {
  core: {
    kicker: 'CORE',
    name: '太陽中心',
    text: '太陽裡面非常非常熱，這些能量最後會變成光和熱，慢慢往外送。',
    memory: '太陽裡面先有能量，外面才會亮。'
  },
  surface: {
    kicker: 'SURFACE',
    name: '太陽表面',
    text: '我們看到的太陽圓圓亮亮的外觀，就是它最容易辨認的樣子。',
    memory: '我們平常看到的，是太陽外面的亮面。'
  },
  light: {
    kicker: 'LIGHT',
    name: '光線',
    text: '太陽發出的光會一路到地球，讓地球有明亮的白天。',
    memory: '地球的白天，跟太陽光有關。'
  },
  earth: {
    kicker: 'EARTH',
    name: '地球',
    text: '地球雖然離太陽很遠，但還是能收到它送來的光和熱。',
    memory: '太陽很遠，但影響很大。'
  },
  activity: {
    kicker: 'ACTIVITY',
    name: '太陽活動',
    text: '太陽表面有時會出現拱圈、亮斑或噴發，表示它其實很有變化。',
    memory: '太陽不是靜止的圓，它很活躍。'
  }
};

const quizData = [
  {
    question: '太陽最像下面哪一種？',
    options: ['一顆會自己發光的星星', '一盞吊在天空的燈', '一塊黃色石頭'],
    answer: 0,
    explanation: '答對了，太陽是一顆真正的恆星。'
  },
  {
    question: '地球上的白天和溫暖，跟什麼很有關？',
    options: ['太陽的光和熱', '月亮的影子', '風自己跑來'],
    answer: 0,
    explanation: '沒錯，太陽帶來光和熱，所以地球才有明亮的白天。'
  },
  {
    question: '太陽表面是不是完全安靜不動？',
    options: ['是', '不是，會有活動和變化', '只有晚上才會動'],
    answer: 1,
    explanation: '對，太陽表面其實很活躍。'
  },
  {
    question: '太陽會不會自己發光？',
    options: ['會', '不會，要靠地球照它', '只有夏天才會'],
    answer: 0,
    explanation: '對，太陽本來就會自己發光。'
  },
  {
    question: '這堂課最重要的一句話是什麼？',
    options: ['太陽是一顆會發光發熱的恆星', '太陽是一顆冷冰冰的球', '太陽每天都換一顆'],
    answer: 0,
    explanation: '完全正確，這就是這堂課最想記住的事。'
  }
];

const playButtons = document.querySelectorAll('.play-button');
const playKicker = document.getElementById('play-kicker');
const playName = document.getElementById('play-name');
const playText = document.getElementById('play-text');
const playMemory = document.getElementById('play-memory');
const scenePattern = document.getElementById('scene-pattern');
const sceneFlare = document.getElementById('scene-flare');
const sceneLoops = document.querySelectorAll('.scene-loop');

function setPlayMode(modeKey) {
  const mode = playData[modeKey];
  if (!mode) return;

  playButtons.forEach((button) => {
    button.classList.toggle('is-active', button.dataset.mode === modeKey);
  });

  playKicker.textContent = mode.kicker;
  playName.textContent = mode.name;
  playText.textContent = mode.text;
  playMemory.textContent = mode.memory;
  scenePattern.style.opacity = mode.patternOpacity;
  sceneFlare.style.opacity = mode.flareOpacity;
  sceneLoops.forEach((loop) => {
    loop.style.opacity = mode.loopsOpacity;
  });
}

playButtons.forEach((button) => {
  button.addEventListener('click', () => setPlayMode(button.dataset.mode));
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
    quizQuestion.textContent = '你已經完成這堂太陽小挑戰！';
    quizOptions.innerHTML = '';
    quizFeedback.textContent = '很棒，你已經知道太陽是一顆會發光發熱的星星。';
    quizNext.hidden = true;
    return;
  }
  renderQuiz();
});

setPlayMode('surface');
renderQuiz();
