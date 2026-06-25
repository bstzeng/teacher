const basicButtons = [...document.querySelectorAll("[data-basic]")];
const basicKicker = document.querySelector("#basic-kicker");
const basicTitle = document.querySelector("#basic-title");
const basicText = document.querySelector("#basic-text");
const basicMemory = document.querySelector("#basic-memory");

const jobCards = [...document.querySelectorAll("[data-job]")];
const jobKicker = document.querySelector("#job-kicker");
const jobTitle = document.querySelector("#job-title");
const jobText = document.querySelector("#job-text");
const jobMemory = document.querySelector("#job-memory");

const modeButtons = [...document.querySelectorAll("[data-mode]")];
const simKicker = document.querySelector("#sim-kicker");
const simTitle = document.querySelector("#sim-title");
const simText = document.querySelector("#sim-text");
const simMemory = document.querySelector("#sim-memory");
const powerBar = document.querySelector("#bar-power");
const airBar = document.querySelector("#bar-air");
const startBar = document.querySelector("#bar-start");

const quizProgress = document.querySelector("#quiz-progress");
const quizQuestion = document.querySelector("#quiz-question");
const quizOptions = document.querySelector("#quiz-options");
const quizFeedback = document.querySelector("#quiz-feedback");
const quizNext = document.querySelector("#quiz-next");

const basicContent = {
  where: {
    kicker: "LOCATION",
    title: "通常在哪裡",
    text: "APU 常常放在飛機尾巴附近，所以有時候你會聽到飛機後面傳來聲音，那不一定是主發動機，可能是 APU 在工作。",
    memory: "像一個藏在尾巴附近的小幫手。",
  },
  notmain: {
    kicker: "NOT MAIN ENGINE",
    title: "不是主發動機",
    text: "APU 不是拿來像主發動機那樣推著飛機一直往前飛，它比較像輔助幫手，負責先把一些事情準備好。",
    memory: "不是主角引擎，但常常是主角上場前的重要幫手。",
  },
  helper: {
    kicker: "HELPER",
    title: "為什麼重要",
    text: "很多地面上的事情如果沒有 APU，準備起來會比較麻煩，所以它在航班準備時常常很關鍵。",
    memory: "小小一台，卻常常讓整架飛機比較方便開始工作。",
  },
};

const jobContent = {
  power: {
    kicker: "ELECTRICAL POWER",
    title: "供電",
    text: "APU 可以先幫飛機提供電力，讓機艙裡很多系統先有力氣工作，不一定要等到主發動機都開起來才開始。",
    memory: "主發動機還沒正式上班前，APU 可以先讓很多東西動起來。",
  },
  air: {
    kicker: "BLEED AIR",
    title: "供氣",
    text: "APU 也可以提供氣源，讓一些系統先有需要的空氣，這在地面準備和啟動時都很有用。",
    memory: "它不只會給電，還可能會送出『可以拿來做事的空氣』。",
  },
  start: {
    kicker: "ENGINE START",
    title: "幫忙啟動發動機",
    text: "主發動機不是按一下就自己醒來，APU 常常會先幫忙，讓主發動機更順利開始運轉。",
    memory: "有時候主發動機的第一聲『早安』，背後就是 APU 在幫忙。",
  },
};

const simulatorContent = {
  gate: {
    kicker: "AT THE GATE",
    title: "停在登機門",
    text: "停在登機門時，APU 最容易讓人想到的是先幫忙供電，讓很多系統先穩穩工作，不一定要立刻靠主發動機。",
    memory: "飛機停著的時候，不代表整架飛機什麼都沒在動。",
    bars: { power: "92%", air: "44%", start: "18%" },
  },
  start: {
    kicker: "READY TO START",
    title: "準備啟動",
    text: "準備啟動主發動機時，APU 的供氣和幫忙啟動角色通常會變得更明顯，因為這時候它很像啟動前的助跑員。",
    memory: "真正要叫醒主發動機前，APU 常常會突然變得很忙。",
    bars: { power: "66%", air: "88%", start: "94%" },
  },
  after: {
    kicker: "AFTER START",
    title: "主發動機已運轉",
    text: "等主發動機都穩定工作後，APU 的角色可能就沒有剛剛那麼明顯，因為很多主要工作已經交回主發動機和其他系統。",
    memory: "小幫手不是一直衝第一線，有時候任務完成就退到旁邊。",
    bars: { power: "34%", air: "28%", start: "12%" },
  },
};

const quizItems = [
  { question: "APU 最像下面哪一種角色？", options: ["小幫手", "主飛行員", "乘客座椅"], answer: "小幫手", note: "對，APU 比較像輔助幫手，不是主推進主角。" },
  { question: "APU 常常在哪個位置附近？", options: ["飛機尾巴附近", "機翼最前面", "駕駛座椅下面"], answer: "飛機尾巴附近", note: "答對了，很多客機的 APU 都在尾部附近。" },
  { question: "APU 常見的工作之一是什麼？", options: ["供電", "打開跑道燈", "畫塗裝"], answer: "供電", note: "沒錯，它常常先幫飛機供電。" },
  { question: "APU 會不會幫忙啟動主發動機？", options: ["會", "不會", "只有下雨才會"], answer: "會", note: "對，這也是它很重要的一個角色。" },
  { question: "下面哪句最接近這堂課重點？", options: ["APU 是飛機上的小型動力助手", "APU 只是裝飾", "APU 和地面作業沒關係"], answer: "APU 是飛機上的小型動力助手", note: "完全正確，這就是這堂課最想記住的事。" },
];

let currentQuestion = 0;
let score = 0;

function renderBasic(key) {
  const item = basicContent[key];
  basicButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.basic === key));
  basicKicker.textContent = item.kicker;
  basicTitle.textContent = item.title;
  basicText.textContent = item.text;
  basicMemory.textContent = item.memory;
}

function renderJob(key) {
  const item = jobContent[key];
  jobCards.forEach((button) => button.classList.toggle("is-active", button.dataset.job === key));
  jobKicker.textContent = item.kicker;
  jobTitle.textContent = item.title;
  jobText.textContent = item.text;
  jobMemory.textContent = item.memory;
}

function renderSimulator(key) {
  const item = simulatorContent[key];
  modeButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.mode === key));
  simKicker.textContent = item.kicker;
  simTitle.textContent = item.title;
  simText.textContent = item.text;
  simMemory.textContent = item.memory;
  powerBar.style.width = item.bars.power;
  airBar.style.width = item.bars.air;
  startBar.style.width = item.bars.start;
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
      ? "太棒了！你已經知道 APU 雖然低調，但在飛機準備時真的很重要。"
      : `你答對 ${score} 題。再把供電、供氣和幫忙啟動對一次，就會更熟。`;
}

basicButtons.forEach((button) => button.addEventListener("click", () => renderBasic(button.dataset.basic)));
jobCards.forEach((button) => button.addEventListener("click", () => renderJob(button.dataset.job)));
modeButtons.forEach((button) => button.addEventListener("click", () => renderSimulator(button.dataset.mode)));
quizNext.addEventListener("click", () => {
  currentQuestion += 1;
  if (currentQuestion < quizItems.length) renderQuestion();
  else showResult();
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
renderBasic("where");
renderJob("power");
renderSimulator("gate");
renderQuestion();
