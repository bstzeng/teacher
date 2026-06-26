const distanceData = {
  mercury: {
    kicker: 'NEAR',
    name: '水星站很前面',
    text: '水星離太陽最近，所以如果把太陽系排成隊伍，它就像站在第一排最前面。',
    memory: '最靠近太陽的是水星。',
    mapKicker: 'ORDER 1',
    mapName: '水星最近',
    mapText: '只要記住水星、金星、地球、火星在前面，後面的木星到海王星就比較遠。',
    tags: ['最近', '第一顆'],
    left: '138px',
    size: '40px',
    color: 'radial-gradient(circle at 35% 30%, #e5d6bb, #bfa989 60%, #8c775a)',
  },
  venus: {
    kicker: 'NEAR',
    name: '金星也很前面',
    text: '金星在水星後面一點，但還是屬於靠近太陽的前排行星。',
    memory: '金星是第二顆，還算近。',
    mapKicker: 'ORDER 2',
    mapName: '金星排第二',
    mapText: '金星還在前半段，所以和水星、地球常常一起被放在內側來看。',
    tags: ['第二顆', '前半段'],
    left: '204px',
    size: '48px',
    color: 'radial-gradient(circle at 35% 30%, #f4ddb2 0%, #ddb071 58%, #a76d3d 100%)',
  },
  earth: {
    kicker: 'MIDDLE',
    name: '地球在中間附近',
    text: '地球不是最靠近太陽，也不是很遠，它比較像在前段和中段交界的位置。',
    memory: '地球排第三，屬於中間附近。',
    mapKicker: 'ORDER 3',
    mapName: '地球排第三',
    mapText: '地球在第三個位置，所以很適合當成太陽系距離感的參考點。',
    tags: ['第三顆', '中間附近'],
    left: '282px',
    size: '50px',
    color: 'radial-gradient(circle at 35% 30%, #76d3ff, #2f8dee 40%, #2abf78 72%, #1c5ba5)',
  },
  mars: {
    kicker: 'MIDDLE',
    name: '火星再往外一點',
    text: '火星已經比地球更外面，所以會開始讓孩子感覺到「慢慢站遠了」。',
    memory: '火星比地球再外面一些。',
    mapKicker: 'ORDER 4',
    mapName: '火星排第四',
    mapText: '火星是前面四顆裡最外面的一顆，也像是進入遠一點區域的門口。',
    tags: ['第四顆', '前四顆最後一位'],
    left: '356px',
    size: '44px',
    color: 'radial-gradient(circle at 35% 30%, #f2b18f 0%, #cf6543 58%, #893f27 100%)',
  },
  jupiter: {
    kicker: 'FAR',
    name: '木星已經很遠了',
    text: '木星一跳出去就比前面幾顆遠很多，所以常常讓孩子第一次感受到外側行星真的比較遠。',
    memory: '木星開始進入很遠區。',
    mapKicker: 'ORDER 5',
    mapName: '木星排第五',
    mapText: '木星是巨行星區的開始，也代表距離感開始明顯拉開。',
    tags: ['第五顆', '巨行星開始'],
    left: '472px',
    size: '64px',
    color: 'linear-gradient(180deg, #ead8bf 0%, #ca9f74 28%, #e6c9aa 46%, #b26f46 72%, #e7d8c1 100%)',
  },
  saturn: {
    kicker: 'FAR',
    name: '土星站得更後面',
    text: '土星在木星後面，已經是很外面的成員，所以可以記成後段大個子。',
    memory: '土星在很外側。',
    mapKicker: 'ORDER 6',
    mapName: '土星排第六',
    mapText: '土星不只大，也站得很後面，所以同時有大又遠的印象。',
    tags: ['第六顆', '很外側'],
    left: '586px',
    size: '56px',
    color: 'radial-gradient(circle at 35% 30%, #f1e0ba, #d6bf88 58%, #9f8553)',
  },
  uranus: {
    kicker: 'FAR',
    name: '天王星是後排行星',
    text: '天王星比土星更外面，已經屬於超遠區域，不是前面容易看懂的近鄰。',
    memory: '天王星已經站很後排。',
    mapKicker: 'ORDER 7',
    mapName: '天王星排第七',
    mapText: '天王星和海王星都在外層，所以孩子只要記住它們在後面就很夠用。',
    tags: ['第七顆', '後排行星'],
    left: '674px',
    size: '54px',
    color: 'radial-gradient(circle at 35% 30%, #d9f8ff 0%, #92dfe7 55%, #57a8b6 100%)',
  },
  neptune: {
    kicker: 'FAR',
    name: '海王星站最遠',
    text: '海王星離太陽最遠，所以它很適合當成這堂課的最後一站。',
    memory: '最遠的是海王星。',
    mapKicker: 'ORDER 8',
    mapName: '海王星最遠',
    mapText: '只要記住海王星是第八顆，也是最外面的行星，距離故事就抓到了。',
    tags: ['最遠', '第八顆'],
    left: '760px',
    size: '52px',
    color: 'radial-gradient(circle at 35% 30%, #8ad1ff, #3477ea 58%, #183f93)',
  },
};

const quizQuestions = [
  {
    question: '離太陽最近的行星是哪一顆？',
    options: ['水星', '地球', '木星'],
    answer: '水星',
    feedback: '答對了，最近的是水星。',
  },
  {
    question: '離太陽最遠的八大行星是哪一顆？',
    options: ['海王星', '火星', '金星'],
    answer: '海王星',
    feedback: '對，最遠的是海王星。',
  },
  {
    question: '地球在第幾個位置？',
    options: ['第 1 顆', '第 3 顆', '第 8 顆'],
    answer: '第 3 顆',
    feedback: '沒錯，地球排第三。',
  },
  {
    question: '前面四顆行星裡，最外面的是哪一顆？',
    options: ['火星', '金星', '水星'],
    answer: '火星',
    feedback: '對，火星是前面四顆裡最外面的一顆。',
  },
  {
    question: '越往外的行星，通常離太陽會怎樣？',
    options: ['越近', '差不多', '越遠'],
    answer: '越遠',
    feedback: '答對了，越往外通常離太陽越遠。',
  },
];

const journeyButtons = [...document.querySelectorAll('.journey-button')];
const mapStops = [...document.querySelectorAll('.map-stop')];
const lane = document.getElementById('distance-lane');
const laneMarker = document.getElementById('lane-marker');

const journeyKicker = document.getElementById('journey-kicker');
const journeyName = document.getElementById('journey-name');
const journeyText = document.getElementById('journey-text');
const journeyMemory = document.getElementById('journey-memory');

const mapKicker = document.getElementById('map-kicker');
const mapName = document.getElementById('map-name');
const mapText = document.getElementById('map-text');
const mapTags = document.getElementById('map-tags');

function renderPlanet(id) {
  const data = distanceData[id];
  if (!data) return;

  journeyButtons.forEach((button) => {
    button.classList.toggle('is-active', button.dataset.planet === id);
  });
  mapStops.forEach((button) => {
    button.classList.toggle('is-active', button.dataset.planet === id);
  });

  lane.dataset.planet = id;
  laneMarker.style.left = data.left;
  laneMarker.style.width = data.size;
  laneMarker.style.height = data.size;
  laneMarker.style.background = data.color;

  journeyKicker.textContent = data.kicker;
  journeyName.textContent = data.name;
  journeyText.textContent = data.text;
  journeyMemory.textContent = data.memory;

  mapKicker.textContent = data.mapKicker;
  mapName.textContent = data.mapName;
  mapText.textContent = data.mapText;
  mapTags.innerHTML = data.tags.map((tag) => `<span>${tag}</span>`).join('');
}

journeyButtons.forEach((button) => {
  button.addEventListener('click', () => renderPlanet(button.dataset.planet));
});

mapStops.forEach((button) => {
  button.addEventListener('click', () => renderPlanet(button.dataset.planet));
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

renderPlanet('mercury');
renderQuiz();
