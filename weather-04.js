const cloudSteps = {
  warm: {
    title: "1 水被曬暖",
    text: "太陽照到水坑、河流、海面或濕濕的地面時，水會慢慢變得比較容易跑進空氣裡。",
    remember: "雲的起點不是天空，而是地上的水。",
    arrow: 0.28,
    vapor: 0.12,
    cloud: 0.2,
    droplets: 0
  },
  rise: {
    title: "2 跑到空氣裡",
    text: "一部分水跑到空氣裡了。雖然你不一定直接看得見，但它已經離開地面，慢慢往上。",
    remember: "水可以先變得看不太見，再到空氣裡去。",
    arrow: 1,
    vapor: 0.88,
    cloud: 0.24,
    droplets: 0
  },
  cool: {
    title: "3 遇冷變小滴",
    text: "水到了比較高、比較冷的地方時，就更容易變成很多很小很小的小水滴。",
    remember: "空氣變冷，是雲形成很重要的一步。",
    arrow: 0.78,
    vapor: 0.62,
    cloud: 0.56,
    droplets: 0.62
  },
  cloud: {
    title: "4 聚成雲",
    text: "當很多很小的小水滴聚在一起，變成白白一團時，我們就看到雲了。",
    remember: "雲 = 很多很小的小水滴聚在一起。",
    arrow: 0.34,
    vapor: 0.28,
    cloud: 1,
    droplets: 1
  }
};

const stepButtons = document.querySelectorAll(".step-button");
const stepTitle = document.getElementById("step-title");
const stepText = document.getElementById("step-text");
const stepRemember = document.getElementById("step-remember");
const stageArrow = document.querySelector(".stage-arrow");
const stageVapor = document.querySelector(".stage-vapor");
const stageCloud = document.querySelector(".stage-cloud");
const stageDroplets = document.querySelector(".stage-droplets");

function setCloudStep(stepKey) {
  const step = cloudSteps[stepKey];
  if (!step) return;

  stepButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.step === stepKey);
  });

  stepTitle.textContent = step.title;
  stepText.textContent = step.text;
  stepRemember.textContent = step.remember;
  stageArrow.style.opacity = String(step.arrow);
  stageVapor.style.opacity = String(step.vapor);
  stageCloud.style.opacity = String(step.cloud);
  stageDroplets.style.opacity = String(step.droplets);
}

stepButtons.forEach((button) => {
  button.addEventListener("click", () => setCloudStep(button.dataset.step));
});

const quizData = [
  {
    question: "雲最一開始的起點是什麼？",
    options: ["地上的水", "天空裡的石頭", "月亮的影子"],
    answer: 0,
    explanation: "答對了。雲最一開始的起點，是地上的水。"
  },
  {
    question: "水跑到空氣裡之後，接下來還需要什麼條件？",
    options: ["遇到比較冷的空氣", "一定要先打雷", "一定要先下雪"],
    answer: 0,
    explanation: "對。空氣變冷，水才更容易變成很多很小的小水滴。"
  },
  {
    question: "雲本身最接近下面哪一種說法？",
    options: ["很多很小的小水滴聚在一起", "很多棉花黏在天上", "很多灰塵排成一團"],
    answer: 0,
    explanation: "沒錯。雲不是棉花，最接近很多很小的小水滴。"
  },
  {
    question: "雨後水坑慢慢變少，這在提醒我們什麼？",
    options: ["水會慢慢跑到空氣裡", "水自己睡著了", "地面把水吃掉了"],
    answer: 0,
    explanation: "答對了。這是在提醒我們，水可以慢慢跑到空氣裡。"
  },
  {
    question: "第四課最重要的結論是什麼？",
    options: ["雲是地上的水經過變化後形成的", "雲和水沒有關係", "只有晚上才會有雲"],
    answer: 0,
    explanation: "對。雲和地上的水非常有關。"
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

setCloudStep("warm");
renderQuiz();
