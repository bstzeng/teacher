const rainSteps = {
  tiny: {
    title: "1 很多小水滴",
    text: "雲裡本來就有很多很小很小的小水滴。它們很輕，所以一開始不會掉下來。",
    remember: "雨的起點，是雲裡很多很小的小水滴。",
    weightMeter: "16%",
    weightLabel: "很輕",
    small: 1,
    big: 0,
    rain: 0
  },
  join: {
    title: "2 聚在一起",
    text: "小水滴在雲裡碰在一起時，會慢慢合在一起，變成比較大的水滴。",
    remember: "越多小水滴碰在一起，就越容易慢慢變大。",
    weightMeter: "42%",
    weightLabel: "變重一點",
    small: 0.7,
    big: 0.56,
    rain: 0
  },
  heavy: {
    title: "3 變得更重",
    text: "當水滴變得更大、更重時，空氣就越來越難把它托在天上。",
    remember: "雨不是突然冒出來，而是水滴慢慢重到托不住。",
    weightMeter: "78%",
    weightLabel: "很重了",
    small: 0.22,
    big: 1,
    rain: 0
  },
  fall: {
    title: "4 掉下來",
    text: "重到空氣托不住時，水滴就往下掉。我們站在地上，就看到下雨了。",
    remember: "空氣托不住的大水滴掉下來，就是雨。",
    weightMeter: "100%",
    weightLabel: "掉下來了",
    small: 0,
    big: 0.2,
    rain: 1
  }
};

const stepButtons = document.querySelectorAll(".step-button");
const stepTitle = document.getElementById("step-title");
const stepText = document.getElementById("step-text");
const stepRemember = document.getElementById("step-remember");
const weightMeter = document.getElementById("weight-meter");
const weightLabel = document.getElementById("weight-label");
const stageSmallDrops = document.querySelector(".stage-small-drops");
const stageBigDrops = document.querySelector(".stage-big-drops");
const stageRain = document.querySelector(".stage-rain");

function setRainStep(stepKey) {
  const step = rainSteps[stepKey];
  if (!step) return;

  stepButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.step === stepKey);
  });

  stepTitle.textContent = step.title;
  stepText.textContent = step.text;
  stepRemember.textContent = step.remember;
  weightMeter.style.width = step.weightMeter;
  weightLabel.textContent = step.weightLabel;
  stageSmallDrops.style.opacity = String(step.small);
  stageBigDrops.style.opacity = String(step.big);
  stageRain.style.opacity = String(step.rain);
}

stepButtons.forEach((button) => {
  button.addEventListener("click", () => setRainStep(button.dataset.step));
});

const quizData = [
  {
    question: "雨一開始最接近下面哪一種說法？",
    options: ["雲裡很多很小的小水滴", "雲裡很多小石頭", "地上突然冒出的水"],
    answer: 0,
    explanation: "答對了。雨的起點是雲裡很多很小的小水滴。"
  },
  {
    question: "小水滴後來為什麼會變成雨？",
    options: ["因為它們聚在一起，變大又變重", "因為太陽把它們推下來", "因為月亮把它們吸下來"],
    answer: 0,
    explanation: "對。小水滴聚在一起後，會越來越大、越來越重。"
  },
  {
    question: "什麼時候水滴會掉下來？",
    options: ["重到空氣托不住時", "只要看到太陽時", "只有晚上才會"],
    answer: 0,
    explanation: "沒錯。重到空氣托不住時，就會掉下來。"
  },
  {
    question: "下雨前常常可能先看到什麼？",
    options: ["雲變多、變厚", "天空一定變成彩虹色", "所有東西突然不見"],
    answer: 0,
    explanation: "答對了。下雨前很常先看到雲變多、變厚。"
  },
  {
    question: "第六課最重要的重點是什麼？",
    options: ["水滴變大變重後會掉下來", "雨是雲破掉", "下雨和雲沒有關係"],
    answer: 0,
    explanation: "對。這就是下雨最簡單也最重要的概念。"
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

setRainStep("tiny");
renderQuiz();
