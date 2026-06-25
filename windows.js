const shapeButtons = [...document.querySelectorAll("[data-shape]")];
const shapeKicker = document.querySelector("#shape-kicker");
const shapeTitle = document.querySelector("#shape-title");
const shapeText = document.querySelector("#shape-text");
const shapeMemory = document.querySelector("#shape-memory");

const pressureCards = [...document.querySelectorAll("[data-pressure]")];
const pressureKicker = document.querySelector("#pressure-kicker");
const pressureTitle = document.querySelector("#pressure-title-card");
const pressureText = document.querySelector("#pressure-text");
const pressureMemory = document.querySelector("#pressure-memory");

const modeButtons = [...document.querySelectorAll("[data-mode]")];
const simKicker = document.querySelector("#sim-kicker");
const simTitle = document.querySelector("#sim-title");
const simText = document.querySelector("#sim-text");
const simMemory = document.querySelector("#sim-memory");
const roundBar = document.querySelector("#bar-round");
const cornerBar = document.querySelector("#bar-corner");
const layerBar = document.querySelector("#bar-layer");

const quizProgress = document.querySelector("#quiz-progress");
const quizQuestion = document.querySelector("#quiz-question");
const quizOptions = document.querySelector("#quiz-options");
const quizFeedback = document.querySelector("#quiz-feedback");
const quizNext = document.querySelector("#quiz-next");

const shapeContent = {
  round: {
    kicker: "ROUNDED WINDOW",
    title: "圓角窗",
    text: "圓角或橢圓形的窗戶，能讓力量比較平均地分散在周圍，不會像尖角那樣把壓力卡在某一小塊地方。",
    memory: "角不要太尖，壓力就比較不會擠在同一點。",
  },
  square: {
    kicker: "SHARP CORNERS",
    title: "方角窗",
    text: "如果角很尖，力量比較容易在角落集中。對高空飛行來說，這種集中感就不是很理想。",
    memory: "越尖的角，越可能變成大家一起擠過去的地方。",
  },
  layers: {
    kicker: "MULTI LAYERS",
    title: "多層窗片",
    text: "飛機窗戶通常不只一層，這樣可以讓整體設計更完整，也能更好地幫忙面對高空環境。",
    memory: "它不是一片薄玻璃，而是一套有安排的窗戶結構。",
  },
};

const pressureContent = {
  inside: {
    kicker: "CABIN PRESSURE",
    title: "機艙裡外有差",
    text: "飛機飛到高空時，外面的空氣狀態和機艙裡不一樣，所以窗戶周圍要一直幫忙承受這些差異帶來的力量。",
    memory: "不是窗戶特別脆弱，而是它一直在面對高空環境。",
  },
  corners: {
    kicker: "STRESS POINT",
    title: "尖角容易集中",
    text: "如果形狀有尖角，力量就比較容易卡在那裡。圓角設計的好處，就是讓力量更不容易擠在單一小點。",
    memory: "圓一點，不是比較可愛，而是比較平均。",
  },
  layers: {
    kicker: "LAYER DESIGN",
    title: "窗戶不是只有一層",
    text: "飛機窗戶通常會有多層結構，這樣可以讓整體安排更安全，也更適合面對飛行時的壓力差。",
    memory: "一個小窗戶，其實常常比看起來更有工程設計。",
  },
};

const simulatorContent = {
  shape: {
    kicker: "SHAPE VIEW",
    title: "看形狀",
    text: "單看外形時，最容易先注意到的就是圓角設計，因為它會讓窗戶周圍的力量比較不容易卡在尖尖的地方。",
    memory: "窗戶做得圓一點，不只是可愛，還和安全有關。",
    bars: { round: "90%", corner: "56%", layer: "34%" },
  },
  stress: {
    kicker: "CORNER STRESS",
    title: "看角落受力",
    text: "一想到力量會卡在某些地方時，尖角的影響就會變得很明顯，所以大家才會特別注意窗戶角落的形狀。",
    memory: "不是整片都一樣辛苦，角落常常更值得小心。",
    bars: { round: "64%", corner: "92%", layer: "30%" },
  },
  layers: {
    kicker: "LAYER VIEW",
    title: "看多層保護",
    text: "如果從整體保護來看，多層窗片的安排就很重要，因為飛機窗戶不是只靠單一薄片在面對高空環境。",
    memory: "小小一扇窗，也可能有很多層一起分工。",
    bars: { round: "48%", corner: "26%", layer: "90%" },
  },
};

const quizItems = [
  { question: "飛機窗戶常常做成圓角，最接近下面哪個原因？", options: ["讓力量比較平均", "讓乘客比較容易畫畫", "讓飛機飛得更亮"], answer: "讓力量比較平均", note: "對，圓角和力量分散比較有關。" },
  { question: "尖角對窗戶周圍比較可能帶來什麼情況？", options: ["力量比較容易集中", "顏色會變藍", "一定會變大"], answer: "力量比較容易集中", note: "沒錯，尖角比較容易讓力量卡在某些地方。" },
  { question: "飛機窗戶通常只有一層嗎？", options: ["通常不只一層", "一定只有一層", "完全沒有窗片"], answer: "通常不只一層", note: "答對了，飛機窗戶通常是多層安排。" },
  { question: "為什麼高空時窗戶設計會更重要？", options: ["因為機艙裡外有差異", "因為雲比較白", "因為跑道比較長"], answer: "因為機艙裡外有差異", note: "對，高空環境讓窗戶周圍一直在承受力量。" },
  { question: "下面哪句最接近這堂課重點？", options: ["飛機窗戶形狀和安全有關", "飛機窗戶只是好看", "飛機窗戶越尖越好"], answer: "飛機窗戶形狀和安全有關", note: "完全正確，這就是這堂課最想記住的事。" },
];

let currentQuestion = 0;
let score = 0;

function renderShape(key) {
  const item = shapeContent[key];
  shapeButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.shape === key));
  shapeKicker.textContent = item.kicker;
  shapeTitle.textContent = item.title;
  shapeText.textContent = item.text;
  shapeMemory.textContent = item.memory;
}

function renderPressure(key) {
  const item = pressureContent[key];
  pressureCards.forEach((button) => button.classList.toggle("is-active", button.dataset.pressure === key));
  pressureKicker.textContent = item.kicker;
  pressureTitle.textContent = item.title;
  pressureText.textContent = item.text;
  pressureMemory.textContent = item.memory;
}

function renderSimulator(key) {
  const item = simulatorContent[key];
  modeButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.mode === key));
  simKicker.textContent = item.kicker;
  simTitle.textContent = item.title;
  simText.textContent = item.text;
  simMemory.textContent = item.memory;
  roundBar.style.width = item.bars.round;
  cornerBar.style.width = item.bars.corner;
  layerBar.style.width = item.bars.layer;
}

function renderQuestion() {
  const item = quizItems[currentQuestion];
  quizProgress.textContent = `第 ${currentQuestion + 1} 題，共 ${quizItems.length} 題`;
  quizQuestion.textContent = item.question;
  quizFeedback.textContent = "";
  quizNext.hidden = true;
  quizOptions.replaceChildren();
  item.options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "quiz-option";
    button.type = "button";
    button.textContent = option;
    button.addEventListener("click", () => checkAnswer(button, option));
    quizOptions.append(button);
  });
}

function checkAnswer(selected, value) {
  const item = quizItems[currentQuestion];
  quizOptions.querySelectorAll("button").forEach((button) => {
    button.disabled = true;
    if (button.textContent === item.answer) button.classList.add("is-correct");
  });
  if (value === item.answer) {
    score += 1;
    quizFeedback.textContent = item.note;
  } else {
    selected.classList.add("is-wrong");
    quizFeedback.textContent = `正確答案是「${item.answer}」。`;
  }
  quizNext.hidden = false;
  quizNext.firstChild.textContent = currentQuestion === quizItems.length - 1 ? "查看成績 " : "下一題 ";
}

function showResult() {
  quizProgress.textContent = "挑戰完成";
  quizOptions.replaceChildren();
  quizFeedback.textContent = "";
  quizNext.hidden = true;
  quizQuestion.innerHTML =
    score === quizItems.length
      ? "太棒了！你已經知道飛機窗戶圓圓的背後，其實是很認真的工程想法。"
      : `你答對 ${score} 題。再把圓角、壓力和安全對一次，就會更熟。`;
}

shapeButtons.forEach((button) => button.addEventListener("click", () => renderShape(button.dataset.shape)));
pressureCards.forEach((button) => button.addEventListener("click", () => renderPressure(button.dataset.pressure)));
modeButtons.forEach((button) => button.addEventListener("click", () => renderSimulator(button.dataset.mode)));
quizNext.addEventListener("click", () => {
  currentQuestion += 1;
  if (currentQuestion < quizItems.length) renderQuestion();
  else showResult();
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
renderShape("round");
renderPressure("inside");
renderSimulator("shape");
renderQuestion();
