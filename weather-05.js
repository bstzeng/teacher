const cloudModes = {
  fluffy: {
    title: "棉花雲",
    text: "這種雲常常一朵一朵、圓圓胖胖，很像棉花。晴朗的日子最常看到它。",
    remember: "棉花雲最像一團一團的白色棉花。",
    lightMeter: "92%",
    lightLabel: "很亮",
    sun: 1,
    fluffy: 1,
    blanket: 0,
    feather: 0,
    rainCloud: 0,
    rain: 0
  },
  blanket: {
    title: "大片雲",
    text: "大片雲像一張大被子，把天空蓋住比較多，所以整體看起來會比較暗一些。",
    remember: "大片雲最像天空被一大片灰白色被子蓋住。",
    lightMeter: "46%",
    lightLabel: "比較暗",
    sun: 0.2,
    fluffy: 0.1,
    blanket: 1,
    feather: 0,
    rainCloud: 0,
    rain: 0
  },
  feather: {
    title: "羽毛雲",
    text: "羽毛雲常常很高很高、細細長長，像羽毛或刷子輕輕掃過天空。",
    remember: "羽毛雲最容易認的地方，就是細、薄、長。",
    lightMeter: "84%",
    lightLabel: "還滿亮",
    sun: 0.92,
    fluffy: 0,
    blanket: 0,
    feather: 1,
    rainCloud: 0,
    rain: 0
  },
  rain: {
    title: "雨雲",
    text: "雨雲看起來常常比較厚、比較重，天空也會變暗，常常和下雨一起出現。",
    remember: "雨雲的感覺通常是厚厚重重，還常常帶著雨。",
    lightMeter: "34%",
    lightLabel: "暗暗的",
    sun: 0.08,
    fluffy: 0,
    blanket: 0.26,
    feather: 0,
    rainCloud: 1,
    rain: 1
  }
};

const cloudButtons = document.querySelectorAll(".mode-button");
const cloudTitle = document.getElementById("mode-title");
const cloudText = document.getElementById("mode-text");
const cloudRemember = document.getElementById("mode-remember");
const lightMeter = document.getElementById("light-meter");
const lightLabel = document.getElementById("light-label");
const stageSun = document.querySelector(".stage-sun");
const stageFluffy = document.querySelector(".stage-cloud.fluffy");
const stageBlanket = document.querySelector(".stage-cloud.blanket");
const stageFeathers = document.querySelectorAll(".stage-cloud.feather");
const stageRainCloud = document.querySelector(".stage-cloud.rain");
const stageRain = document.querySelector(".stage-rain");

function setCloudMode(modeKey) {
  const mode = cloudModes[modeKey];
  if (!mode) return;

  cloudButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mode === modeKey);
  });

  cloudTitle.textContent = mode.title;
  cloudText.textContent = mode.text;
  cloudRemember.textContent = mode.remember;
  lightMeter.style.width = mode.lightMeter;
  lightLabel.textContent = mode.lightLabel;
  stageSun.style.opacity = String(mode.sun);
  stageFluffy.style.opacity = String(mode.fluffy);
  stageBlanket.style.opacity = String(mode.blanket);
  stageFeathers.forEach((cloud) => {
    cloud.style.opacity = String(mode.feather);
  });
  stageRainCloud.style.opacity = String(mode.rainCloud);
  stageRain.style.opacity = String(mode.rain);
}

cloudButtons.forEach((button) => {
  button.addEventListener("click", () => setCloudMode(button.dataset.mode));
});

document.querySelectorAll(".game-card").forEach((card) => {
  const answer = card.dataset.answer;
  const buttons = card.querySelectorAll("button");
  const feedback = card.querySelector(".game-feedback");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((item) => {
        item.disabled = true;
        item.classList.remove("is-correct", "is-wrong");
      });

      buttons.forEach((item) => {
        if (item.textContent === answer) item.classList.add("is-correct");
      });

      if (button.textContent !== answer) {
        button.classList.add("is-wrong");
        feedback.textContent = `這題比較像${answer}，因為描述的重點最接近${answer}的外形。`;
      } else {
        feedback.textContent = `答對了，這題就是${answer}。`;
      }
    });
  });
});

const quizData = [
  {
    question: "哪一種雲最像一團一團的白色棉花？",
    options: ["棉花雲", "大片雲", "雨雲"],
    answer: 0,
    explanation: "答對了。棉花雲最容易讓人想到棉花。"
  },
  {
    question: "哪一種雲最像一大片被子把天空蓋住？",
    options: ["大片雲", "羽毛雲", "棉花雲"],
    answer: 0,
    explanation: "對。大片雲的感覺就是整片蓋住天空。"
  },
  {
    question: "高高的天空裡，細細長長像羽毛的是什麼？",
    options: ["羽毛雲", "雨雲", "霧"],
    answer: 0,
    explanation: "沒錯。羽毛雲通常細細長長。"
  },
  {
    question: "哪一種雲常常比較厚、比較重，還容易和下雨一起出現？",
    options: ["雨雲", "棉花雲", "羽毛雲"],
    answer: 0,
    explanation: "答對了。雨雲常常讓天空變暗，還可能帶來下雨。"
  },
  {
    question: "第五課最重要的能力是什麼？",
    options: ["先會看雲的外形差異", "先背所有雲的英文", "先記住氣象地圖"],
    answer: 0,
    explanation: "對。這一課先訓練你看出不同雲的樣子。"
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

setCloudMode("fluffy");
renderQuiz();
