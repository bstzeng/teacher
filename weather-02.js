const weatherCompareModes = {
  sunny: {
    title: "晴天",
    text: "晴天的特徵是太陽最清楚、雲最少，整個天空看起來最亮。",
    remember: "晴天 = 太陽明顯 + 雲很少。",
    cloudMeter: "18%",
    lightMeter: "96%",
    cloudLabel: "很少",
    lightLabel: "最亮",
    sun: 1,
    cloudOne: 0.24,
    cloudTwo: 0,
    cloudThree: 0,
    shadow: 0
  },
  cloudy: {
    title: "多雲",
    text: "多雲時雲變多了，但天空還是亮亮的，太陽常常一下出來、一下躲起來。",
    remember: "多雲 = 雲變多，但還不是整片灰灰的。",
    cloudMeter: "58%",
    lightMeter: "74%",
    cloudLabel: "中等偏多",
    lightLabel: "還算亮",
    sun: 0.62,
    cloudOne: 1,
    cloudTwo: 0.88,
    cloudThree: 0.22,
    shadow: 0.1
  },
  overcast: {
    title: "陰天",
    text: "陰天時雲常常很多，會把天空蓋得更滿，所以整體看起來比較灰、比較暗。",
    remember: "陰天 = 很多雲像被子一樣把天空蓋起來。",
    cloudMeter: "92%",
    lightMeter: "42%",
    cloudLabel: "很多",
    lightLabel: "比較暗",
    sun: 0.12,
    cloudOne: 1,
    cloudTwo: 1,
    cloudThree: 1,
    shadow: 0.24
  }
};

const compareButtons = document.querySelectorAll(".mode-button");
const modeTitle = document.getElementById("mode-title");
const modeText = document.getElementById("mode-text");
const modeRemember = document.getElementById("mode-remember");
const cloudMeter = document.getElementById("cloud-meter");
const lightMeter = document.getElementById("light-meter");
const cloudLabel = document.getElementById("cloud-label");
const lightLabel = document.getElementById("light-label");
const stageSun = document.querySelector(".stage-sun");
const stageCloudOne = document.querySelector(".stage-cloud.one");
const stageCloudTwo = document.querySelector(".stage-cloud.two");
const stageCloudThree = document.querySelector(".stage-cloud.three");
const stageShadow = document.querySelector(".stage-shadow");

function setCompareMode(modeKey) {
  const mode = weatherCompareModes[modeKey];
  if (!mode) return;

  compareButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mode === modeKey);
  });

  modeTitle.textContent = mode.title;
  modeText.textContent = mode.text;
  modeRemember.textContent = mode.remember;
  cloudMeter.style.width = mode.cloudMeter;
  lightMeter.style.width = mode.lightMeter;
  cloudLabel.textContent = mode.cloudLabel;
  lightLabel.textContent = mode.lightLabel;
  stageSun.style.opacity = String(mode.sun);
  stageCloudOne.style.opacity = String(mode.cloudOne);
  stageCloudTwo.style.opacity = String(mode.cloudTwo);
  stageCloudThree.style.opacity = String(mode.cloudThree);
  stageShadow.style.opacity = String(mode.shadow);
}

compareButtons.forEach((button) => {
  button.addEventListener("click", () => setCompareMode(button.dataset.mode));
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
        feedback.textContent = `這題比較像${answer}。因為這個情境的太陽、雲量和亮度最接近${answer}。`;
      } else {
        feedback.textContent = `答對了，這題就是${answer}。`;
      }
    });
  });
});

const quizData = [
  {
    question: "哪一種天空通常最亮？",
    options: ["晴天", "陰天", "霧天"],
    answer: 0,
    explanation: "答對了。晴天通常太陽最清楚，所以最亮。"
  },
  {
    question: "多雲和陰天最大的差別是什麼？",
    options: ["多雲還常常保有亮亮天空，陰天雲更滿", "多雲一定更冷", "陰天一定有雷"],
    answer: 0,
    explanation: "對。多雲不是完全被雲蓋住，陰天通常蓋得更多。"
  },
  {
    question: "看到太陽一下出來、一下躲起來，比較像哪一種？",
    options: ["多雲", "陰天", "下雪"],
    answer: 0,
    explanation: "沒錯。多雲時最常出現一下亮、一下暗。"
  },
  {
    question: "天空灰灰暗暗、雲很多，但還沒下雨，比較像？",
    options: ["陰天", "晴天", "彩虹天"],
    answer: 0,
    explanation: "答對了。陰天的重點就是雲很多、亮度較低。"
  },
  {
    question: "第二課最想教你的判斷方法是什麼？",
    options: ["看太陽、雲量、亮度", "先背很多氣象名詞", "先記住所有雲的英文"],
    answer: 0,
    explanation: "對。先會看太陽、雲量和亮度，就很夠用了。"
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

setCompareMode("sunny");
renderQuiz();
