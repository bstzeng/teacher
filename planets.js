const planetData = {
  mercury: {
    kicker: 'PLANET 01',
    name: '水星 Mercury',
    text: '水星最靠近太陽，看起來小小的，表面很像佈滿坑洞的大石頭球。',
    order: '第 1 顆',
    family: '岩石行星',
    memory: '離太陽最近的小行星。',
    orderKicker: 'INNER PLANET',
    orderName: '水星在最前面',
    orderText: '水星是離太陽最近的行星，所以一年也過得比較快。',
    tags: ['離太陽最近', '岩石行星'],
    color: 'radial-gradient(circle at 35% 30%, #e6d7bc 0%, #c6b79e 56%, #8a7b63 100%)',
    size: '74px',
    ring: false,
  },
  venus: {
    kicker: 'PLANET 02',
    name: '金星 Venus',
    text: '金星常常很亮，所以有時候清晨或傍晚很容易被看到。',
    order: '第 2 顆',
    family: '岩石行星',
    memory: '很亮、很熱的鄰居。',
    orderKicker: 'INNER PLANET',
    orderName: '金星就在水星後面',
    orderText: '金星和地球大小有點像，但它被厚厚的大氣包住，非常炎熱。',
    tags: ['很亮', '岩石行星'],
    color: 'radial-gradient(circle at 35% 30%, #f4ddb2 0%, #ddb071 58%, #a76d3d 100%)',
    size: '96px',
    ring: false,
  },
  earth: {
    kicker: 'PLANET 03',
    name: '地球 Earth',
    text: '地球是我們住的地方，上面有海洋、陸地和空氣，也目前是我們知道有生命的家。',
    order: '第 3 顆',
    family: '岩石行星',
    memory: '我們的家就在這裡。',
    orderKicker: 'HOME PLANET',
    orderName: '地球排第三',
    orderText: '地球不遠不近，剛好適合液態水存在，所以變成很特別的生命家園。',
    tags: ['我們住這裡', '有海洋'],
    color: 'radial-gradient(circle at 35% 30%, #74d0ff 0%, #2d8af0 42%, #2abf78 70%, #1f5ca8 100%)',
    size: '102px',
    ring: false,
  },
  mars: {
    kicker: 'PLANET 04',
    name: '火星 Mars',
    text: '火星常被叫做紅色星球，因為它看起來帶著紅紅橘橘的顏色。',
    order: '第 4 顆',
    family: '岩石行星',
    memory: '紅紅的火星很好認。',
    orderKicker: 'INNER PLANET',
    orderName: '火星是前面四顆的最後一顆',
    orderText: '火星比地球更外面一些，也比較冷，很多探測車都去看過它。',
    tags: ['紅色星球', '岩石行星'],
    color: 'radial-gradient(circle at 35% 30%, #f2b18f 0%, #cf6543 58%, #893f27 100%)',
    size: '86px',
    ring: false,
  },
  jupiter: {
    kicker: 'PLANET 05',
    name: '木星 Jupiter',
    text: '木星是太陽系最大的行星，外面看到的是厚厚的雲和大氣，不是堅硬地面。',
    order: '第 5 顆',
    family: '氣體巨行星',
    memory: '最大顆的就是木星。',
    orderKicker: 'GIANT PLANET',
    orderName: '木星開始進入大行星區',
    orderText: '木星大到可以把很多地球裝進去，而且旁邊還帶著好多衛星。',
    tags: ['最大顆', '氣體巨行星'],
    color: 'linear-gradient(180deg, #e7d2b6 0%, #c99b6f 30%, #e2c3a2 50%, #b77248 72%, #e8d7be 100%)',
    size: '148px',
    ring: false,
  },
  saturn: {
    kicker: 'PLANET 06',
    name: '土星 Saturn',
    text: '土星最有名的就是它的大環，所以很多小朋友第一眼就能認出它。',
    order: '第 6 顆',
    family: '氣體巨行星',
    memory: '有環的那顆就是土星。',
    orderKicker: 'GIANT PLANET',
    orderName: '土星是最會戴帽子的行星',
    orderText: '土星也是一顆很大的氣體巨行星，只是它的環特別明顯，所以超好記。',
    tags: ['有漂亮的環', '氣體巨行星'],
    color: 'radial-gradient(circle at 35% 30%, #f0dfb7 0%, #d8c08a 60%, #ab8f59 100%)',
    size: '124px',
    ring: true,
  },
  uranus: {
    kicker: 'PLANET 07',
    name: '天王星 Uranus',
    text: '天王星看起來藍綠藍綠的，屬於很外面、很冷的巨大行星。',
    order: '第 7 顆',
    family: '冰巨行星',
    memory: '藍綠色的大行星。',
    orderKicker: 'ICE GIANT',
    orderName: '天王星已經很外面了',
    orderText: '天王星離太陽很遠，所以那裡非常冷，也不像前面幾顆那麼容易看見。',
    tags: ['藍綠色', '冰巨行星'],
    color: 'radial-gradient(circle at 35% 30%, #d9f8ff 0%, #92dfe7 55%, #57a8b6 100%)',
    size: '116px',
    ring: false,
  },
  neptune: {
    kicker: 'PLANET 08',
    name: '海王星 Neptune',
    text: '海王星排在最外面，看起來深藍深藍的，是離太陽很遠的冰巨行星。',
    order: '第 8 顆',
    family: '冰巨行星',
    memory: '最外面的深藍行星。',
    orderKicker: 'ICE GIANT',
    orderName: '海王星站在最後面',
    orderText: '海王星離太陽最遠，非常遙遠又寒冷，是太陽系外側的重要成員。',
    tags: ['最外面', '冰巨行星'],
    color: 'radial-gradient(circle at 35% 30%, #7fc3ff 0%, #306fe3 58%, #183c91 100%)',
    size: '112px',
    ring: false,
  },
};

const quizQuestions = [
  {
    question: '哪一顆行星是我們住的家？',
    options: ['火星', '地球', '木星'],
    answer: '地球',
    feedback: '答對了，我們就住在地球上。',
  },
  {
    question: '哪一顆行星最有名的是它的大環？',
    options: ['土星', '水星', '海王星'],
    answer: '土星',
    feedback: '沒錯，有漂亮大環的是土星。',
  },
  {
    question: '離太陽最近的行星是哪一顆？',
    options: ['水星', '金星', '火星'],
    answer: '水星',
    feedback: '對，排第一的是水星。',
  },
  {
    question: '太陽系最大的行星是哪一顆？',
    options: ['地球', '木星', '金星'],
    answer: '木星',
    feedback: '答對了，木星是太陽系最大的行星。',
  },
  {
    question: '八大行星共同在做什麼事？',
    options: ['繞著太陽走', '繞著月亮走', '排成一直線不動'],
    answer: '繞著太陽走',
    feedback: '對，它們都在自己的軌道上繞著太陽運動。',
  },
];

const planetButtons = [...document.querySelectorAll('.planet-chip')];
const orderButtons = [...document.querySelectorAll('.order-stop')];
const showcase = document.getElementById('planet-showcase');
const planetBall = document.getElementById('planet-ball');
const planetRing = document.getElementById('planet-ring');

const planetKicker = document.getElementById('planet-kicker');
const planetName = document.getElementById('planet-name');
const planetText = document.getElementById('planet-text');
const planetOrder = document.getElementById('planet-order');
const planetFamily = document.getElementById('planet-family');
const planetMemory = document.getElementById('planet-memory');

const orderKicker = document.getElementById('order-kicker');
const orderName = document.getElementById('order-name');
const orderText = document.getElementById('order-text');
const orderTags = document.getElementById('order-tags');

function renderPlanet(id) {
  const data = planetData[id];
  if (!data) return;

  planetButtons.forEach((button) => {
    button.classList.toggle('is-active', button.dataset.planet === id);
  });

  orderButtons.forEach((button) => {
    button.classList.toggle('is-active', button.dataset.planet === id);
  });

  showcase.dataset.planet = id;
  planetBall.style.background = data.color;
  planetBall.style.width = data.size;
  planetBall.style.height = data.size;

  if (data.ring) {
    planetRing.hidden = false;
  } else {
    planetRing.hidden = true;
  }

  planetKicker.textContent = data.kicker;
  planetName.textContent = data.name;
  planetText.textContent = data.text;
  planetOrder.textContent = data.order;
  planetFamily.textContent = data.family;
  planetMemory.textContent = data.memory;

  orderKicker.textContent = data.orderKicker;
  orderName.textContent = data.orderName;
  orderText.textContent = data.orderText;
  orderTags.innerHTML = data.tags.map((tag) => `<span>${tag}</span>`).join('');
}

planetButtons.forEach((button) => {
  button.addEventListener('click', () => renderPlanet(button.dataset.planet));
});

orderButtons.forEach((button) => {
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
