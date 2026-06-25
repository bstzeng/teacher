const factButtons = [...document.querySelectorAll("[data-fact]")];
const factKicker = document.querySelector("#fact-kicker");
const factTitle = document.querySelector("#fact-title");
const factText = document.querySelector("#fact-text");
const factMemory = document.querySelector("#fact-memory");

const recordCards = [...document.querySelectorAll("[data-record]")];
const recordKicker = document.querySelector("#record-kicker");
const recordTitle = document.querySelector("#record-title");
const recordText = document.querySelector("#record-text");
const recordMemory = document.querySelector("#record-memory");

const modeButtons = [...document.querySelectorAll("[data-mode]")];
const simKicker = document.querySelector("#sim-kicker");
const simTitle = document.querySelector("#sim-title");
const simText = document.querySelector("#sim-text");
const simMemory = document.querySelector("#sim-memory");
const dataBar = document.querySelector("#bar-data");
const voiceBar = document.querySelector("#bar-voice");
const findBar = document.querySelector("#bar-find");

const quizProgress = document.querySelector("#quiz-progress");
const quizQuestion = document.querySelector("#quiz-question");
const quizOptions = document.querySelector("#quiz-options");
const quizFeedback = document.querySelector("#quiz-feedback");
const quizNext = document.querySelector("#quiz-next");

const factContent = {
  color: {
    kicker: "BRIGHT COLOR",
    title: "其實不是黑色",
    text: "黑盒子通常會做成很亮的橘色或橘紅色，因為這樣比較容易被找到。名字叫黑盒子，不代表它真的長得黑黑的。",
    memory: "它不是要躲起來，而是要被趕快找到。",
  },
  place: {
    kicker: "PLACEMENT",
    title: "通常裝在哪",
    text: "黑盒子常常會裝在飛機比較後面的地方，因為那裡在很多情況下比較有機會被保護住。",
    memory: "它不是亂放的，位置也有經過考慮。",
  },
  purpose: {
    kicker: "PURPOSE",
    title: "為什麼重要",
    text: "黑盒子最重要的工作，就是把飛行過程留下線索，讓大家之後可以更了解當時發生了什麼。",
    memory: "它不是拿來控制飛機，而是拿來好好記錄。",
  },
};

const recordContent = {
  fdr: {
    kicker: "FLIGHT DATA",
    title: "飛行資料",
    text: "飛行資料記錄器會記下很多數字，例如高度、速度、方向和一些系統狀態，幫助大家知道飛機那時候在做什麼。",
    memory: "一個比較像記數字的筆記本。",
  },
  cvr: {
    kicker: "COCKPIT VOICE",
    title: "駕駛艙聲音",
    text: "駕駛艙聲音記錄器會保留駕駛艙裡的重要聲音，像是對話、警告聲或一些操作時的聲音線索。",
    memory: "一個比較像記聲音的錄音機。",
  },
  search: {
    kicker: "INVESTIGATION",
    title: "找到後能做什麼",
    text: "當大家把記錄找回來後，就能把數字和聲音一起對照，慢慢拼出當時的飛行情況。",
    memory: "不是只找到盒子就結束，而是找到後才能開始讀線索。",
  },
};

const simulatorContent = {
  normal: {
    kicker: "NORMAL FLIGHT",
    title: "平常飛行",
    text: "平常飛行時，飛行資料會一直穩定地記錄很多數字。雖然你平常感覺不到它，但它其實一直在工作。",
    memory: "黑盒子不是出事才開始工作，而是平常就在記。",
    bars: { data: "86%", voice: "48%", find: "14%" },
  },
  confusing: {
    kicker: "COMPLEX SITUATION",
    title: "情況複雜時",
    text: "如果當時情況比較複雜，數字資料和聲音記錄都會變得很重要，因為兩邊一起看比較能懂全貌。",
    memory: "一邊看數字、一邊聽線索，常常比較容易拼起來。",
    bars: { data: "88%", voice: "86%", find: "34%" },
  },
  search: {
    kicker: "AFTER SEARCH",
    title: "事後調查",
    text: "事後調查時，找到記錄器本身就很重要，所以定位和找回線索的功能也會特別被重視。",
    memory: "記得再完整，如果找不到，也沒辦法幫忙說話。",
    bars: { data: "72%", voice: "72%", find: "92%" },
  },
};

const quizItems = [
  { question: "黑盒子通常真的會做成黑色嗎？", options: ["通常不會", "一定會", "只有晚上才會"], answer: "通常不會", note: "對，它通常反而會做得很亮，方便被找到。" },
  { question: "黑盒子常見的其中一種工作，是記錄什麼？", options: ["飛行資料", "飛機塗裝顏色", "乘客點心數量"], answer: "飛行資料", note: "答對了，它會記錄很多飛行相關數字。" },
  { question: "另一種常見記錄，和哪裡的聲音有關？", options: ["駕駛艙", "機場餐廳", "行李轉盤"], answer: "駕駛艙", note: "沒錯，會保留駕駛艙的重要聲音線索。" },
  { question: "黑盒子最主要的用途比較像下面哪一種？", options: ["留下線索", "幫飛機加速", "幫機翼變長"], answer: "留下線索", note: "對，黑盒子最重要的是記錄，不是推飛機。" },
  { question: "下面哪句最接近這堂課重點？", options: ["黑盒子是重要記錄員", "黑盒子只是裝飾盒", "黑盒子平常不工作"], answer: "黑盒子是重要記錄員", note: "完全正確，這就是這堂課最想記住的事。" },
];

let currentQuestion = 0;
let score = 0;

function renderFact(key) {
  const item = factContent[key];
  factButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.fact === key));
  factKicker.textContent = item.kicker;
  factTitle.textContent = item.title;
  factText.textContent = item.text;
  factMemory.textContent = item.memory;
}

function renderRecord(key) {
  const item = recordContent[key];
  recordCards.forEach((button) => button.classList.toggle("is-active", button.dataset.record === key));
  recordKicker.textContent = item.kicker;
  recordTitle.textContent = item.title;
  recordText.textContent = item.text;
  recordMemory.textContent = item.memory;
}

function renderSimulator(key) {
  const item = simulatorContent[key];
  modeButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.mode === key));
  simKicker.textContent = item.kicker;
  simTitle.textContent = item.title;
  simText.textContent = item.text;
  simMemory.textContent = item.memory;
  dataBar.style.width = item.bars.data;
  voiceBar.style.width = item.bars.voice;
  findBar.style.width = item.bars.find;
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
      ? "太棒了！你已經知道黑盒子不是神祕道具，而是很認真的飛行記錄員。"
      : `你答對 ${score} 題。再把顏色、記錄內容和用途對一次，就會更熟。`;
}

factButtons.forEach((button) => button.addEventListener("click", () => renderFact(button.dataset.fact)));
recordCards.forEach((button) => button.addEventListener("click", () => renderRecord(button.dataset.record)));
modeButtons.forEach((button) => button.addEventListener("click", () => renderSimulator(button.dataset.mode)));
quizNext.addEventListener("click", () => {
  currentQuestion += 1;
  if (currentQuestion < quizItems.length) renderQuestion();
  else showResult();
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
renderFact("color");
renderRecord("fdr");
renderSimulator("normal");
renderQuestion();
