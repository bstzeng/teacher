const modeData = {
  box: {
    name: "盒子房間",
    text: "房間這種空間有牆、有角落，所以很容易想像「邊」。但宇宙不一定像這樣。",
    memory: "記法：如果你先把宇宙想成房間，就會太容易去找一面牆。",
    facts: ["盒子有明顯邊界。", "但這不一定適合拿來想宇宙。", "所以它是拿來對比的第一步。"],
    visible: ["box"]
  },
  globe: {
    name: "地球表面",
    text: "在地球表面一直走，不會走到一條硬硬的牆。這種『沒有房間牆』的感覺，比盒子更適合幫忙想宇宙。",
    memory: "記法：沒有邊邊牆，不代表沒有形狀。",
    facts: ["地球表面不是盒子。", "你可以一直走，但不會撞到一面牆。", "這是理解宇宙邊界很常用的比喻。"],
    visible: ["globe"]
  },
  balloon: {
    name: "氣球表面",
    text: "氣球表面也常拿來比喻宇宙。點點在表面上彼此變遠，但不需要一面像牆的邊界。",
    memory: "記法：氣球可以變大，表面上的點也可以變遠，但不一定有房間牆。",
    facts: ["這個比喻也能接上上一課的宇宙膨脹。", "表面上的點彼此變遠。", "重點是別急著找一面牆。"],
    visible: ["balloon"]
  },
  visible: {
    name: "可看見範圍",
    text: "我們看得到最遠的地方，不一定就是宇宙真正的邊界。有時只是光還沒從更遠的地方到我們這裡。",
    memory: "記法：看得到的最遠處，不等於真正的宇宙牆。",
    facts: ["可看見範圍和真正邊界不是同一件事。", "深空很遠，但不代表那裡就是最後。", "這是最容易搞混的地方。"],
    visible: ["horizon"]
  }
};

const shapeButtons = document.querySelectorAll(".shape-button");
const modeName = document.getElementById("mode-name");
const modeText = document.getElementById("mode-text");
const modeMemory = document.getElementById("mode-memory");
const modeFacts = document.getElementById("mode-facts");
const visualBox = document.querySelector(".visual-box");
const visualGlobe = document.querySelector(".visual-globe");
const visualBalloon = document.querySelector(".visual-balloon");
const visualHorizon = document.querySelector(".visual-horizon");

function setMode(modeKey) {
  const data = modeData[modeKey];
  if (!data) return;

  shapeButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === modeKey);
  });

  modeName.textContent = data.name;
  modeText.textContent = data.text;
  modeMemory.textContent = data.memory;
  modeFacts.innerHTML = data.facts.map((fact) => `<li>${fact}</li>`).join("");

  const visibleSet = new Set(data.visible);
  visualBox.style.opacity = visibleSet.has("box") ? "1" : "0.1";
  visualGlobe.style.opacity = visibleSet.has("globe") ? "1" : "0.1";
  visualBalloon.style.opacity = visibleSet.has("balloon") ? "1" : "0.1";
  visualHorizon.style.opacity = visibleSet.has("horizon") ? "1" : "0.1";
}

shapeButtons.forEach((button) => {
  button.addEventListener("click", () => setMode(button.dataset.mode));
});

const quizData = [
  {
    question: "哪一句最接近這課的重點？",
    options: ["宇宙一定像房間", "宇宙不一定像盒子那樣有硬牆邊界", "宇宙外面一定有樓梯"],
    answer: 1,
    explanation: "答對了。這課最重要的就是先放下『宇宙一定像房間』這個想法。"
  },
  {
    question: "看得到最遠的地方，一定就是宇宙牆嗎？",
    options: ["一定是", "不一定", "只有晚上是"],
    answer: 1,
    explanation: "沒錯。看得到最遠的地方，不一定就是宇宙真正的邊界。"
  },
  {
    question: "哪個比喻比較適合幫忙想宇宙沒有房間牆？",
    options: ["地球表面", "鉛筆盒", "冰箱門"],
    answer: 0,
    explanation: "對喔。地球表面是很常用來幫助理解的比喻。"
  },
  {
    question: "下面哪一句比較正確？",
    options: ["沒有邊邊就代表沒有形狀", "沒有房間牆，不代表完全沒有形狀", "有形狀就一定有牆"],
    answer: 1,
    explanation: "完全正確。這也是這課最容易搞混的地方。"
  },
  {
    question: "為什麼小朋友容易搞混宇宙邊界？",
    options: ["因為太空沒有星星", "因為常把宇宙先想成房間或盒子", "因為白天不能學"],
    answer: 1,
    explanation: "答對了。一開始先把宇宙想成盒子，就會太容易去找一面牆。"
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
    if (index === item.answer) button.classList.add("correct");
    if (index === selectedIndex && index !== item.answer) button.classList.add("wrong");
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

document.getElementById("current-year").textContent = new Date().getFullYear();
setMode("box");
renderQuiz();
