const dropModes = {
  start: {
    title: "剛離開雲",
    text: "雨滴剛離開雲時，還在高高的天空裡，才剛開始往下掉。",
    remember: "雨滴離開雲之後，才會一路往地面掉下來。",
    distanceMeter: "100%",
    distanceLabel: "很高",
    top: "176px",
    left: "176px",
    rotate: "0deg",
    trail: 0.18,
    wind: 0,
    splash: 0
  },
  falling: {
    title: "往下掉",
    text: "雨滴在空中一路往下時，離地面越來越近，也越容易被我們看見。",
    remember: "雨滴不是一下就到地面，它會先走過一段空中的路。",
    distanceMeter: "64%",
    distanceLabel: "還很高",
    top: "236px",
    left: "196px",
    rotate: "0deg",
    trail: 0.74,
    wind: 0,
    splash: 0
  },
  "near-ground": {
    title: "快到地面",
    text: "當雨滴快靠近地面時，你更容易在窗戶外、車窗前或空地上直接看到它。",
    remember: "越靠近地面，越快要變成你聽得到、看得到的雨聲和水花。",
    distanceMeter: "20%",
    distanceLabel: "快到了",
    top: "294px",
    left: "230px",
    rotate: "0deg",
    trail: 0.9,
    wind: 0,
    splash: 0.18
  },
  windy: {
    title: "被風吹斜",
    text: "如果風在吹，雨滴就不一定直直下，而可能一邊落、一邊斜斜往旁邊走。",
    remember: "看到斜斜的雨，常常表示空氣正在動，也就是有風。",
    distanceMeter: "34%",
    distanceLabel: "斜斜落下",
    top: "278px",
    left: "280px",
    rotate: "18deg",
    trail: 0.72,
    wind: 1,
    splash: 0.1
  }
};

const dropButtons = document.querySelectorAll(".mode-button");
const dropTitle = document.getElementById("mode-title");
const dropText = document.getElementById("mode-text");
const dropRemember = document.getElementById("mode-remember");
const distanceMeter = document.getElementById("distance-meter");
const distanceLabel = document.getElementById("distance-label");
const stageDrop = document.querySelector(".stage-drop");
const stageTrail = document.querySelector(".stage-trail");
const stageWind = document.querySelector(".stage-wind");
const stageSplash = document.querySelector(".stage-splash");

function setDropMode(modeKey) {
  const mode = dropModes[modeKey];
  if (!mode) return;

  dropButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mode === modeKey);
  });

  dropTitle.textContent = mode.title;
  dropText.textContent = mode.text;
  dropRemember.textContent = mode.remember;
  distanceMeter.style.width = mode.distanceMeter;
  distanceLabel.textContent = mode.distanceLabel;
  stageDrop.style.top = mode.top;
  stageDrop.style.left = mode.left;
  stageDrop.style.transform = `rotate(${mode.rotate})`;
  stageTrail.style.opacity = String(mode.trail);
  stageWind.style.opacity = String(mode.wind);
  stageSplash.style.opacity = String(mode.splash);
}

dropButtons.forEach((button) => {
  button.addEventListener("click", () => setDropMode(button.dataset.mode));
});

const quizData = [
  {
    question: "雨滴掉到地面以前，會先從哪裡出來？",
    options: ["雲裡", "地面", "月亮上"],
    answer: 0,
    explanation: "答對了。雨滴先從雲裡離開。"
  },
  {
    question: "看到斜斜的雨，通常表示什麼？",
    options: ["有風在吹", "太陽變大", "雨滴停住了"],
    answer: 0,
    explanation: "對。風會把雨滴帶得斜斜的。"
  },
  {
    question: "雨滴碰到地面、雨傘或窗戶時，會怎樣？",
    options: ["可能出現水花或聲音", "一定變成雲", "一定飛回去天上"],
    answer: 0,
    explanation: "沒錯。碰到東西後常常會有水花或聲音。"
  },
  {
    question: "雨滴是不是一離開雲就馬上到地面？",
    options: ["不是，它會先走過一段空中的路", "是，立刻到地面", "只有晚上才會掉"],
    answer: 0,
    explanation: "答對了。雨滴要先經過空中，再到地面。"
  },
  {
    question: "第八課最重要的重點是什麼？",
    options: ["雨滴會從雲裡掉下來，還可能被風吹斜", "所有雨都一定直直下", "風和雨沒有關係"],
    answer: 0,
    explanation: "對。這就是這一課最核心的觀念。"
  }
];

const quizProgress = document.getElementById("quiz-progress");
const quizQuestion = document.getElementById("quiz-question");
const quizOptions = document.getElementById("quiz-options");
const quizFeedback = document.getElementById("quiz-feedback");
const quizNext = document.getElementById("quiz-next");

let quizIndex = 0;
let quizLocked = false;

function renderQuiz() {
  const item = quizData[quizIndex];
  quizLocked = false;
  quizProgress.textContent = `第 ${quizIndex + 1} 題，共 ${quizData.length} 題`;
  quizQuestion.textContent = item.question;
  quizFeedback.textContent = "";
  quizNext.hidden = true;
  quizOptions.innerHTML = "";

  item.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "quiz-option";
    button.textContent = option;
    button.addEventListener("click", () => handleAnswer(index));
    quizOptions.appendChild(button);
  });
}

function handleAnswer(selectedIndex) {
  if (quizLocked) return;
  quizLocked = true;
  const item = quizData[quizIndex];
  const buttons = [...document.querySelectorAll(".quiz-option")];
  buttons.forEach((button, index) => {
    if (index === item.answer) button.classList.add("is-correct");
    if (index === selectedIndex && index !== item.answer) button.classList.add("is-wrong");
    button.disabled = true;
  });
  quizFeedback.textContent = item.explanation;
  quizNext.hidden = false;
  quizNext.textContent = quizIndex === quizData.length - 1 ? "再玩一次" : "下一題 →";
}

quizNext.addEventListener("click", () => {
  quizIndex = quizIndex === quizData.length - 1 ? 0 : quizIndex + 1;
  renderQuiz();
});

setDropMode("start");
renderQuiz();
