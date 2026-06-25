const basicButtons = [...document.querySelectorAll("[data-basic]")];
const basicKicker = document.querySelector("#basic-kicker");
const basicTitle = document.querySelector("#basic-title");
const basicText = document.querySelector("#basic-text");
const basicMemory = document.querySelector("#basic-memory");

const stepCards = [...document.querySelectorAll("[data-step]")];
const stepKicker = document.querySelector("#step-kicker");
const stepTitle = document.querySelector("#step-title");
const stepText = document.querySelector("#step-text");
const stepMemory = document.querySelector("#step-memory");

const modeButtons = [...document.querySelectorAll("[data-mode]")];
const simKicker = document.querySelector("#sim-kicker");
const simTitle = document.querySelector("#sim-title");
const simText = document.querySelector("#sim-text");
const simMemory = document.querySelector("#sim-memory");
const connectBar = document.querySelector("#bar-connect");
const pushBar = document.querySelector("#bar-push");
const disconnectBar = document.querySelector("#bar-disconnect");

const quizProgress = document.querySelector("#quiz-progress");
const quizQuestion = document.querySelector("#quiz-question");
const quizOptions = document.querySelector("#quiz-options");
const quizFeedback = document.querySelector("#quiz-feedback");
const quizNext = document.querySelector("#quiz-next");

const basicContent = {
  why: {
    kicker: "WHY PUSHBACK",
    title: "為什麼需要它",
    text: "很多停機位前方空間有限，而且飛機在登機門前不適合自己亂倒退，所以常常會由推車車先幫忙把飛機穩穩推出去。",
    memory: "先有人幫忙倒車，飛機再自己往前走。",
  },
  how: {
    kicker: "CONNECTION",
    title: "怎麼連接",
    text: "推車車通常要和前輪附近的裝置正確連接，這樣推出時才不會亂跑，也比較容易控制方向。",
    memory: "不是碰到就推，而是要先好好連上去。",
  },
  who: {
    kicker: "TEAMWORK",
    title: "誰一起合作",
    text: "推出飛機不是只有推車車自己忙，還會有駕駛艙、地面人員和推出車一起配合。",
    memory: "這不是一台車單打獨鬥，而是一場地面合作。",
  },
};

const stepContent = {
  connect: {
    kicker: "CONNECT",
    title: "連接",
    text: "推出前，推車車要先和前輪附近正確連接好。沒有連好就亂推，當然不行，所以這一步很重要。",
    memory: "先連好，才有辦法安全地動。",
  },
  push: {
    kicker: "PUSH SLOWLY",
    title: "慢慢推出",
    text: "連好之後，推車車會很慢很小心地把飛機推出停機位，不是像一般車子那樣快快倒車。",
    memory: "重點不是快，而是穩穩地退出正確位置。",
  },
  stop: {
    kicker: "STOP POSITION",
    title: "停好角度",
    text: "推出去之後，飛機通常還要停在正確角度，這樣後面自己滑行時才比較順。",
    memory: "不是推出去就好，還要放在好走的方向。",
  },
  disconnect: {
    kicker: "DISCONNECT",
    title: "分開離開",
    text: "等飛機停到正確位置後，推車車和地面人員會分開離開，讓飛機之後自己往前滑行。",
    memory: "任務完成後，小幫手就要安全退場。",
  },
};

const simulatorContent = {
  before: {
    kicker: "BEFORE PUSH",
    title: "推出前",
    text: "推出前最重要的是確認連接和周圍狀況，因為還沒正式動之前，大家要先把安全和位置都看清楚。",
    memory: "真正開始推之前，檢查和連接就是最關鍵的部分。",
    bars: { connect: "92%", push: "18%", disconnect: "8%" },
  },
  during: {
    kicker: "DURING PUSH",
    title: "推出中",
    text: "推出中最重要的是慢慢推和穩穩控制，因為飛機很大、空間也有限，所以不能急。",
    memory: "這時最重要的不是快，而是穩。",
    bars: { connect: "62%", push: "96%", disconnect: "18%" },
  },
  after: {
    kicker: "AFTER PUSH",
    title: "推出後",
    text: "推出後最重要的是安全分開，讓飛機接著能靠自己往前滑行，地面車輛也要趕快離開安全區域。",
    memory: "後面這一步像是把舞台交回給飛機自己。",
    bars: { connect: "18%", push: "34%", disconnect: "92%" },
  },
};

const quizItems = [
  { question: "推車車最主要是在幫飛機做什麼？", options: ["幫忙倒退出去", "幫忙洗窗戶", "幫忙裝餐點"], answer: "幫忙倒退出去", note: "對，推車車最主要是在做推出飛機這件事。" },
  { question: "推出前，最重要的其中一步是什麼？", options: ["先正確連接", "先開客艙燈", "先收行李"], answer: "先正確連接", note: "答對了，沒有連好就不能亂推。" },
  { question: "推出飛機時，動作通常是怎樣的？", options: ["慢慢而且小心", "越快越好", "像賽車一樣"], answer: "慢慢而且小心", note: "沒錯，推出飛機重點是穩定和安全。" },
  { question: "推出完成後，飛機接下來通常怎麼做？", options: ["自己滑行", "直接飛起來", "回到登機門"], answer: "自己滑行", note: "對，推出後通常才接著自己滑行。" },
  { question: "下面哪句最接近這堂課重點？", options: ["推車車是飛機的重要地面夥伴", "推車車只是裝飾車", "飛機平常都自己隨便倒車"], answer: "推車車是飛機的重要地面夥伴", note: "完全正確，這就是這堂課最想記住的事。" },
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

function renderStep(key) {
  const item = stepContent[key];
  stepCards.forEach((button) => button.classList.toggle("is-active", button.dataset.step === key));
  stepKicker.textContent = item.kicker;
  stepTitle.textContent = item.title;
  stepText.textContent = item.text;
  stepMemory.textContent = item.memory;
}

function renderSimulator(key) {
  const item = simulatorContent[key];
  modeButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.mode === key));
  simKicker.textContent = item.kicker;
  simTitle.textContent = item.title;
  simText.textContent = item.text;
  simMemory.textContent = item.memory;
  connectBar.style.width = item.bars.connect;
  pushBar.style.width = item.bars.push;
  disconnectBar.style.width = item.bars.disconnect;
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
      ? "太棒了！你已經知道推車車不是普通小車，而是很重要的地面合作夥伴。"
      : `你答對 ${score} 題。再把連接、推出和分開退場對一次，就會更熟。`;
}

basicButtons.forEach((button) => button.addEventListener("click", () => renderBasic(button.dataset.basic)));
stepCards.forEach((button) => button.addEventListener("click", () => renderStep(button.dataset.step)));
modeButtons.forEach((button) => button.addEventListener("click", () => renderSimulator(button.dataset.mode)));
quizNext.addEventListener("click", () => {
  currentQuestion += 1;
  if (currentQuestion < quizItems.length) renderQuestion();
  else showResult();
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
renderBasic("why");
renderStep("connect");
renderSimulator("before");
renderQuestion();
