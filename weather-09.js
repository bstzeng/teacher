const waterModes = {
  wet: {
    title: "剛下完雨",
    text: "地面還很濕，水坑也很明顯。這時候水還大多留在地上。",
    remember: "水不是不見，而是慢慢跑進空氣裡。",
    waterMeter: "100%",
    waterLabel: "很多",
    sun: 0.24,
    puddleWidth: "236px",
    puddleHeight: "64px",
    vapor: 0.16
  },
  sunny: {
    title: "太陽出來",
    text: "太陽出來後，地上的水會比較容易慢慢離開地面，跑進空氣裡。",
    remember: "太陽和空氣流動，都會幫忙讓地上的水慢慢變少。",
    waterMeter: "80%",
    waterLabel: "還很多",
    sun: 1,
    puddleWidth: "204px",
    puddleHeight: "56px",
    vapor: 0.46
  },
  shrinking: {
    title: "越來越少",
    text: "過一段時間後，水坑會越來越小，代表很多水已經慢慢進到空氣裡了。",
    remember: "看到水坑縮小，就是在看到蒸發的結果。",
    waterMeter: "42%",
    waterLabel: "變少了",
    sun: 1,
    puddleWidth: "152px",
    puddleHeight: "42px",
    vapor: 0.84
  },
  gone: {
    title: "快看不見",
    text: "最後水坑幾乎看不見了，不是它消失，而是很多水已經跑回空氣裡。",
    remember: "乾掉，不代表消失，代表水換地方了。",
    waterMeter: "10%",
    waterLabel: "快沒了",
    sun: 1,
    puddleWidth: "68px",
    puddleHeight: "20px",
    vapor: 1
  }
};

const waterButtons = document.querySelectorAll(".mode-button");
const waterTitle = document.getElementById("mode-title");
const waterText = document.getElementById("mode-text");
const waterRemember = document.getElementById("mode-remember");
const waterMeter = document.getElementById("water-meter");
const waterLabel = document.getElementById("water-label");
const stageSun = document.querySelector(".stage-sun");
const stagePuddle = document.querySelector(".stage-puddle");
const stageVapor = document.querySelector(".stage-vapor");

function setWaterMode(modeKey) {
  const mode = waterModes[modeKey];
  if (!mode) return;

  waterButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mode === modeKey);
  });

  waterTitle.textContent = mode.title;
  waterText.textContent = mode.text;
  waterRemember.textContent = mode.remember;
  waterMeter.style.width = mode.waterMeter;
  waterLabel.textContent = mode.waterLabel;
  stageSun.style.opacity = String(mode.sun);
  stagePuddle.style.width = mode.puddleWidth;
  stagePuddle.style.height = mode.puddleHeight;
  stageVapor.style.opacity = String(mode.vapor);
}

waterButtons.forEach((button) => {
  button.addEventListener("click", () => setWaterMode(button.dataset.mode));
});

const quizData = [
  {
    question: "水坑後來慢慢變少，最接近下面哪種說法？",
    options: ["水慢慢跑進空氣裡", "水變成石頭", "水躲進地板裡不動"],
    answer: 0,
    explanation: "答對了。水坑變少，表示很多水慢慢進到空氣裡。"
  },
  {
    question: "太陽出來後，地上的水通常會怎樣？",
    options: ["比較容易慢慢變少", "一定立刻變冰", "完全不會變"],
    answer: 0,
    explanation: "對。太陽會幫忙讓地上的水慢慢變少。"
  },
  {
    question: "衣服晾乾，和水坑變少是不是同一種感覺？",
    options: ["是，都是水慢慢跑進空氣裡", "不是，完全無關", "只有衣服會這樣"],
    answer: 0,
    explanation: "沒錯。它們都在提醒你水會慢慢進到空氣裡。"
  },
  {
    question: "地上乾了，是不是代表水消失了？",
    options: ["不是，代表水換地方了", "是，真的消失", "只有晚上才會這樣"],
    answer: 0,
    explanation: "答對了。水沒有消失，只是換地方。"
  },
  {
    question: "第九課最重要的重點是什麼？",
    options: ["地上的水會慢慢跑回空氣裡", "所有水最後都會變石頭", "只有水坑才會變少"],
    answer: 0,
    explanation: "對。這就是這一課最重要的觀念。"
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

setWaterMode("wet");
renderQuiz();
