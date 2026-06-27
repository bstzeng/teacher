const eraData = {
  near: {
    name: "比較近的宇宙",
    text: "如果目標比較近，我們接到的光就比較新，比較像宇宙現在的樣子。",
    memory: "記法：越遠的光，越像宇宙以前留下來的信。",
    facts: ["距離近，光飛行時間較短。", "所以看到的畫面比較接近現在。", "這是時間線的起點。"],
    progress: "10%"
  },
  milkyway: {
    name: "銀河附近",
    text: "當我們看銀河裡比較遠的地方時，接到的光已經不是剛剛才出發，而是更早以前的光。",
    memory: "記法：先從自己的銀河裡，開始練習『看以前』。",
    facts: ["銀河系裡也有很遠的地方。", "光到我們眼前也需要時間。", "所以不一定看到的是現在這一刻。"],
    progress: "30%"
  },
  galaxy: {
    name: "遠星系",
    text: "看到別的星系時，我們會更明顯感覺自己是在看很久以前出發的光。",
    memory: "記法：講到星系，『以前』這個感覺就變得更強了。",
    facts: ["星系之間的距離很大。", "光要在宇宙裡跑很久。", "所以我們看到的是較早以前的畫面。"],
    progress: "52%"
  },
  deep: {
    name: "深空",
    text: "深空照片裡有很多非常遠的天體，所以很像在看宇宙很早以前留下的影像。",
    memory: "記法：深空照片像宇宙的古老相簿。",
    facts: ["深空通常代表超級遙遠。", "越遠，光越老。", "所以照片也越像以前。"],
    progress: "74%"
  },
  baby: {
    name: "更早宇宙",
    text: "如果望遠鏡接到的是非常非常古老的光，我們就像在看宇宙比較年輕時候的模樣。",
    memory: "記法：不是宇宙跑回去，而是古老的光現在才到。",
    facts: ["光跑得很快，但宇宙真的太大了。", "所以有些光要飛非常久。", "我們才有機會看到宇宙小時候。"],
    progress: "92%"
  }
};

const timelineButtons = document.querySelectorAll(".timeline-button");
const barNodes = document.querySelectorAll(".bar-node");
const eraName = document.getElementById("era-name");
const eraText = document.getElementById("era-text");
const eraMemory = document.getElementById("era-memory");
const eraFacts = document.getElementById("era-facts");
const barProgress = document.getElementById("bar-progress");

function setEra(key) {
  const data = eraData[key];
  if (!data) return;

  timelineButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.era === key);
  });

  barNodes.forEach((node) => {
    node.classList.toggle("active", node.dataset.era === key);
  });

  eraName.textContent = data.name;
  eraText.textContent = data.text;
  eraMemory.textContent = data.memory;
  eraFacts.innerHTML = data.facts.map((fact) => `<li>${fact}</li>`).join("");
  barProgress.style.width = data.progress;
}

[...timelineButtons, ...barNodes].forEach((button) => {
  button.addEventListener("click", () => setEra(button.dataset.era));
});

const quizData = [
  {
    question: "為什麼深空照片像在看宇宙小時候？",
    options: ["因為望遠鏡會讓宇宙變小", "因為很遠的光飛很久才到我們這裡", "因為照片是畫出來的"],
    answer: 1,
    explanation: "答對了。關鍵就是超遠的光在路上飛了很久很久。"
  },
  {
    question: "越遠的光，通常代表什麼？",
    options: ["越像以前", "越像現在", "越沒有顏色"],
    answer: 0,
    explanation: "沒錯。距離越遠，看到的通常越像以前留下來的畫面。"
  },
  {
    question: "深空望遠鏡最像什麼？",
    options: ["一把剪刀", "一本古老宇宙相簿", "一個大喇叭"],
    answer: 1,
    explanation: "對喔。它像在幫我們翻看宇宙很早以前的相簿。"
  },
  {
    question: "下面哪一句比較正確？",
    options: ["宇宙真的倒退回小時候", "古老的光現在才飛到我們眼前", "只有太陽會讓我們看到以前"],
    answer: 1,
    explanation: "完全正確。不是宇宙倒退，而是古老的光現在才到。"
  },
  {
    question: "如果要看更年輕的宇宙，通常要看哪種地方？",
    options: ["比較近的東西", "超級遠的深空", "教室窗外"],
    answer: 1,
    explanation: "答對了。越遠越深的地方，越可能讓我們看到更早的宇宙。"
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
setEra("near");
renderQuiz();
