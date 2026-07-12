const windModes = {
  still: {
    title: "幾乎沒風",
    text: "空氣幾乎沒什麼明顯移動時，我們就不太感覺得到風。",
    remember: "風 = 空氣在移動。",
    windMeter: "8%",
    windLabel: "很少",
    windOpacity: 0.08,
    flagRotate: "0deg",
    sunScale: 1
  },
  breeze: {
    title: "微微風",
    text: "當空氣開始有一點移動時，你可能會先感覺到臉上有微微的風。",
    remember: "空氣只要開始動，你就可能感覺到風。",
    windMeter: "36%",
    windLabel: "微微的",
    windOpacity: 0.42,
    flagRotate: "8deg",
    sunScale: 1
  },
  windy: {
    title: "比較有風",
    text: "空氣移動更明顯時，旗子、樹葉、頭髮都會更容易被吹動。",
    remember: "風越明顯，通常表示空氣移動得更多。",
    windMeter: "74%",
    windLabel: "明顯了",
    windOpacity: 0.86,
    flagRotate: "18deg",
    sunScale: 1
  },
  "hot-cool": {
    title: "冷熱差更大",
    text: "不同地方如果冷熱差更大，空氣更容易動起來，所以比較容易有更明顯的風。",
    remember: "冷熱差常常會讓空氣更容易動起來。",
    windMeter: "100%",
    windLabel: "更容易有風",
    windOpacity: 1,
    flagRotate: "26deg",
    sunScale: 1.08
  }
};

const windButtons = document.querySelectorAll(".mode-button");
const windTitle = document.getElementById("mode-title");
const windText = document.getElementById("mode-text");
const windRemember = document.getElementById("mode-remember");
const windMeter = document.getElementById("wind-meter");
const windLabel = document.getElementById("wind-label");
const stageWind = document.querySelector(".stage-wind");
const stageFlag = document.querySelector(".stage-flag");
const stageSun = document.querySelector(".stage-sun");

function setWindMode(modeKey) {
  const mode = windModes[modeKey];
  if (!mode) return;

  windButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mode === modeKey);
  });

  windTitle.textContent = mode.title;
  windText.textContent = mode.text;
  windRemember.textContent = mode.remember;
  windMeter.style.width = mode.windMeter;
  windLabel.textContent = mode.windLabel;
  stageWind.style.opacity = String(mode.windOpacity);
  stageFlag.style.transform = `rotate(${mode.flagRotate})`;
  stageSun.style.transform = `scale(${mode.sunScale})`;
}

windButtons.forEach((button) => {
  button.addEventListener("click", () => setWindMode(button.dataset.mode));
});

const quizData = [
  {
    question: "風最簡單可以怎麼說？",
    options: ["空氣在移動", "雲在睡覺", "太陽在跑步"],
    answer: 0,
    explanation: "答對了。風最簡單就是空氣在移動。"
  },
  {
    question: "冷熱差和風有沒有關係？",
    options: ["有，冷熱差常常讓空氣更容易動", "沒有，完全無關", "只有晚上才有關"],
    answer: 0,
    explanation: "對。冷熱差常常會讓空氣動起來。"
  },
  {
    question: "下面哪一個最能提醒你有風？",
    options: ["旗子在飄", "石頭放在地上", "牆壁不動"],
    answer: 0,
    explanation: "沒錯。旗子飄動是很常見的風的提醒。"
  },
  {
    question: "如果空氣幾乎沒明顯移動，通常會怎樣？",
    options: ["不太感覺得到風", "風一定很大", "一定會下雨"],
    answer: 0,
    explanation: "答對了。空氣沒什麼動時，就不太感覺得到風。"
  },
  {
    question: "第十課最重要的重點是什麼？",
    options: ["風是空氣在移動", "風是一條看不見的繩子", "風和空氣沒有關係"],
    answer: 0,
    explanation: "對。這就是這一課最核心的概念。"
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

setWindMode("still");
renderQuiz();
