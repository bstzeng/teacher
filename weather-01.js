const weatherModes = {
  sunny: {
    title: "晴天",
    text: "天空看起來最亮，雲很少，太陽最容易清楚看見。這種天氣通常會讓人覺得精神很好，也比較想去外面玩。",
    remember: "先記住：晴天最明顯的特徵，就是陽光很多、雲很少。",
    sun: 1,
    cloud: 0.16,
    rain: 0,
    shadow: 0,
    mist: 0
  },
  cloudy: {
    title: "多雲",
    text: "天空裡有不少雲，但還是看得到亮亮的天色。有時太陽會躲在雲後面，一下亮、一下暗。",
    remember: "先記住：多雲不是沒有太陽，而是雲變多了。",
    sun: 0.68,
    cloud: 1,
    rain: 0,
    shadow: 0.08,
    mist: 0
  },
  overcast: {
    title: "陰天",
    text: "雲很多很多，把天空蓋得比較滿，所以看起來灰灰的。這時候太陽比較難直接看見。",
    remember: "先記住：陰天最像一張大雲被子，把整個天空蓋起來。",
    sun: 0.12,
    cloud: 1,
    rain: 0,
    shadow: 0.2,
    mist: 0.18
  },
  rainy: {
    title: "雨天",
    text: "雲裡的水滴變多、變重，就可能變成雨掉下來。雨天常常也會讓天空看起來更暗一點。",
    remember: "先記住：雨天通常是『很多雲 + 水滴掉下來』一起出現。",
    sun: 0.08,
    cloud: 1,
    rain: 1,
    shadow: 0.22,
    mist: 0.24
  }
};

const modeButtons = document.querySelectorAll(".weather-mode-button");
const factorTitle = document.getElementById("factor-title");
const factorText = document.getElementById("factor-text");
const factorRemember = document.getElementById("factor-remember");
const skySun = document.querySelector(".sky-sun");
const skyClouds = document.querySelectorAll(".sky-cloud");
const skyRain = document.querySelector(".sky-rain");
const skyShadow = document.querySelector(".sky-shadow");
const skyMist = document.querySelector(".sky-mist");

function setWeatherMode(modeKey) {
  const mode = weatherModes[modeKey];
  if (!mode) return;

  modeButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mode === modeKey);
  });

  factorTitle.textContent = mode.title;
  factorText.textContent = mode.text;
  factorRemember.textContent = mode.remember;

  skySun.style.opacity = String(mode.sun);
  skyClouds.forEach((cloud) => {
    cloud.style.opacity = String(mode.cloud);
  });
  skyRain.style.opacity = String(mode.rain);
  skyShadow.style.opacity = String(mode.shadow);
  skyMist.style.opacity = String(mode.mist);
}

modeButtons.forEach((button) => {
  button.addEventListener("click", () => setWeatherMode(button.dataset.mode));
});

const quizData = [
  {
    question: "哪一種天氣通常最容易看到很亮的太陽？",
    options: ["晴天", "陰天", "雨天"],
    answer: 0,
    explanation: "答對了。晴天通常雲最少，所以最容易直接看到太陽。"
  },
  {
    question: "多雲和陰天最大的差別是什麼？",
    options: ["多雲還常常看得到亮亮的天空，陰天的雲通常更滿", "多雲一定會打雷", "陰天一定會下雪"],
    answer: 0,
    explanation: "對。多雲是雲變多，但還不一定把整個天空蓋滿。"
  },
  {
    question: "雨天最常和哪件事一起出現？",
    options: ["很多雲", "完全沒有雲", "月亮特別大"],
    answer: 0,
    explanation: "沒錯。雨天通常會看到比較多的雲。"
  },
  {
    question: "陰天時，太陽為什麼比較難看見？",
    options: ["因為被很多雲擋住", "因為太陽不見了", "因為地球停住了"],
    answer: 0,
    explanation: "答對了。太陽沒有不見，只是被比較厚的雲擋住。"
  },
  {
    question: "這一課最想先教會你的事是什麼？",
    options: ["先學會分晴天、多雲、陰天和雨天", "先背很難的氣象表", "先記住所有衛星名字"],
    answer: 0,
    explanation: "對。這一課的重點，是先把每天看得到的基本天氣分清楚。"
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

setWeatherMode("sunny");
renderQuiz();
