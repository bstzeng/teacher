const modeData = {
  room: {
    name: "房間",
    text: "房間在建築裡，所以外面通常是走廊、別的房間或戶外。這種問題很好回答。",
    memory: "記法：如果東西本來就放在更大的地方裡，問外面通常很合理。",
    facts: ["房間有牆。", "牆外面還有別的地方。", "所以「外面」這題很直覺。"],
    visible: ["room"]
  },
  tank: {
    name: "魚缸",
    text: "魚缸也很適合問外面有什麼，因為魚缸就是放在房間裡，外面有桌子、空氣和人。",
    memory: "記法：容器放在別處，外面就好回答。",
    facts: ["魚缸有玻璃邊界。", "玻璃外面還有房間。", "所以它和房間一樣很好懂。"],
    visible: ["tank"]
  },
  map: {
    name: "地圖",
    text: "地圖畫到紙邊就停了，但世界本身沒有在那張紙邊結束。所以『畫面外』和『真的外面』也不一定一樣。",
    memory: "記法：畫出來的範圍，不等於事情真的只到那裡。",
    facts: ["紙張有邊。", "但地圖上的世界不一定在紙邊結束。", "這跟宇宙問題很像。"],
    visible: ["map"]
  },
  universe: {
    name: "宇宙",
    text: "如果宇宙本來就在講所有空間，那『外面』這個問法就不一定像房間外面那樣好回答。",
    memory: "記法：問宇宙外面之前，先問宇宙是不是一定放在別處。",
    facts: ["宇宙不一定像盒子。", "它不一定放在更大的房間裡。", "所以「外面」這題要先換種想法。"],
    visible: ["universe"]
  }
};

const compareButtons = document.querySelectorAll(".compare-button");
const modeName = document.getElementById("mode-name");
const modeText = document.getElementById("mode-text");
const modeMemory = document.getElementById("mode-memory");
const modeFacts = document.getElementById("mode-facts");

const roomShape = document.querySelector(".room-shape");
const tankShape = document.querySelector(".tank-shape");
const mapShape = document.querySelector(".map-shape");
const universeShape = document.querySelector(".universe-shape");

function setMode(modeKey) {
  const data = modeData[modeKey];
  if (!data) return;

  compareButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === modeKey);
  });

  modeName.textContent = data.name;
  modeText.textContent = data.text;
  modeMemory.textContent = data.memory;
  modeFacts.innerHTML = data.facts.map((fact) => `<li>${fact}</li>`).join("");

  const visibleSet = new Set(data.visible);
  roomShape.style.opacity = visibleSet.has("room") ? "1" : "0.12";
  tankShape.style.opacity = visibleSet.has("tank") ? "1" : "0.12";
  mapShape.style.opacity = visibleSet.has("map") ? "1" : "0.12";
  universeShape.style.opacity = visibleSet.has("universe") ? "1" : "0.12";
}

compareButtons.forEach((button) => {
  button.addEventListener("click", () => setMode(button.dataset.mode));
});

const quizData = [
  {
    question: "哪個東西最容易直接回答『外面有什麼』？",
    options: ["房間", "宇宙", "整個空間本身"],
    answer: 0,
    explanation: "答對了。房間放在更大的地方裡，所以外面很好回答。"
  },
  {
    question: "為什麼宇宙外面這題比較特別？",
    options: ["因為宇宙太黑", "因為宇宙不一定像房間放在別處", "因為星星不會發光"],
    answer: 1,
    explanation: "沒錯。重點是宇宙不一定像一個放在別的地方裡的大盒子。"
  },
  {
    question: "地圖畫到紙邊就停了，代表世界在那裡結束嗎？",
    options: ["代表真的結束", "不一定", "只有晚上會結束"],
    answer: 1,
    explanation: "對喔。紙邊只是畫面邊，不一定是真實世界邊界。"
  },
  {
    question: "下面哪一句比較正確？",
    options: ["看得到的範圍就是所有真正外面", "宇宙不一定需要有像房間那樣的外面", "宇宙外面一定有另一個教室"],
    answer: 1,
    explanation: "完全正確。這就是這課最重要的想法。"
  },
  {
    question: "這課最想教我們什麼？",
    options: ["所有東西都一定有外面", "有些問題要先換種問法", "宇宙是一個大魚缸"],
    answer: 1,
    explanation: "答對了。有時候真正重要的，是先確認問題本身怎麼問比較對。"
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
setMode("room");
renderQuiz();
