const expandRange = document.getElementById("expand-range");
const balloonVisual = document.getElementById("balloon-visual");
const expandText = document.getElementById("expand-text");
const stageName = document.getElementById("stage-name");
const stageText = document.getElementById("stage-text");
const stageMemory = document.getElementById("stage-memory");
const stageFacts = document.getElementById("stage-facts");

const stageData = [
  {
    max: 15,
    name: "幾乎還沒膨脹",
    text: "這時候點和點之間還很靠近，像是比較早以前、比較緊的宇宙。",
    memory: "記法：如果今天還在拉開，那很早以前就會更擠一點。",
    facts: ["點和點距離比較短。", "空間還沒有拉很開。", "這像比較早以前的宇宙。"],
    summary: "現在是「還很靠近」：點和點之間差不多擠在一起。"
  },
  {
    max: 45,
    name: "有一點點膨脹",
    text: "這時候你會看到每個點都彼此拉開，但它們不是自己選方向衝出去，而是整個底圖一起撐大。",
    memory: "記法：想像氣球表面的貼紙不是自己跑，而是氣球吹大後，貼紙之間自然變遠。",
    facts: ["空間一起變大。", "點點之間自然越來越遠。", "越遠的兩點，看起來常常拉得更明顯。"],
    summary: "現在是「有一點點變大」：點和點之間已經比原本遠一些。"
  },
  {
    max: 75,
    name: "膨脹更明顯",
    text: "現在連比較遠的點也被拉得更開，所以你會更容易感覺整體空間正在撐大。",
    memory: "記法：不是某一顆特別想跑，而是整張宇宙地圖一起被拉大。",
    facts: ["越遠的距離，變化感通常更明顯。", "這是宇宙膨脹最常用的直覺畫面。", "空間是一起變大的。"],
    summary: "現在是「變大得更明顯」：本來遠的兩點，被拉得更開。"
  },
  {
    max: 100,
    name: "已經拉開很多",
    text: "如果空間拉開很多，點與點之間就會隔得很遠，這能幫你理解今天為什麼宇宙尺度這麼巨大。",
    memory: "記法：今天看到很大的宇宙，表示它已經拉開了很久很久。",
    facts: ["空間經過很久的變大。", "星系彼此會隔著很大的距離。", "所以今天的宇宙看起來非常大。"],
    summary: "現在是「拉開很多」：點和點之間已經明顯比早期遠很多。"
  }
];

function updateExpansion(value) {
  const scale = 1 + value / 180;
  balloonVisual.style.transform = `scale(${scale})`;

  const stage = stageData.find((item) => value <= item.max) || stageData[stageData.length - 1];
  stageName.textContent = stage.name;
  stageText.textContent = stage.text;
  stageMemory.textContent = stage.memory;
  stageFacts.innerHTML = stage.facts.map((fact) => `<li>${fact}</li>`).join("");
  expandText.textContent = stage.summary;
}

expandRange.addEventListener("input", (event) => {
  updateExpansion(Number(event.target.value));
});

const quizData = [
  {
    question: "宇宙膨脹最接近哪個意思？",
    options: ["星系自己亂跑", "空間在拉開", "太陽一直變大"],
    answer: 1,
    explanation: "答對了。重點是整個空間在拉開，不是某一顆自己亂衝。"
  },
  {
    question: "哪個比喻最適合幫忙理解宇宙膨脹？",
    options: ["吹大的氣球", "關掉電燈", "切西瓜"],
    answer: 0,
    explanation: "沒錯。氣球表面的點會因為氣球變大而彼此變遠。"
  },
  {
    question: "如果今天宇宙還在變大，倒著想回去會怎樣？",
    options: ["以前宇宙比較小", "以前宇宙比較冷就不動", "以前宇宙消失了"],
    answer: 0,
    explanation: "對喔。如果現在還在拉開，那以前就會比較緊、比較小。"
  },
  {
    question: "下面哪一句比較正確？",
    options: ["星系自己選方向飛走", "空間變大讓星系彼此更遠", "只有銀河系會移動"],
    answer: 1,
    explanation: "完全正確。更好記的說法是：底下的空間一起變大。"
  },
  {
    question: "為什麼越遠的兩點常常看起來拉得更明顯？",
    options: ["因為遠的點比較重", "因為同樣一起拉開時，本來遠的距離增加感更明顯", "因為只有遠的點會動"],
    answer: 1,
    explanation: "答對了。本來就比較遠的兩點，在整張空間一起變大時，距離差看起來會更明顯。"
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
updateExpansion(Number(expandRange.value));
renderQuiz();
