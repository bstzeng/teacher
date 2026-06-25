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
const cabinBar = document.querySelector("#bar-cabin");
const passengerBar = document.querySelector("#bar-passenger");
const reportBar = document.querySelector("#bar-report");

const quizProgress = document.querySelector("#quiz-progress");
const quizQuestion = document.querySelector("#quiz-question");
const quizOptions = document.querySelector("#quiz-options");
const quizFeedback = document.querySelector("#quiz-feedback");
const quizNext = document.querySelector("#quiz-next");

const basicContent = {
  cabin: {
    kicker: "CABIN CHECK",
    title: "看客艙有沒有整理好",
    text: "空服員會先確認座位區、置物櫃、走道和工作區是不是已經整理到可以安全起飛，因為飛機一加速，沒有固定好的東西可能就會變成麻煩。",
    memory: "像校車出發前先收好東西，飛機也要先把客艙整理穩穩的。",
  },
  passengers: {
    kicker: "PASSENGER READY",
    title: "看乘客有沒有準備好",
    text: "空服員會留意大家是不是坐好、安全帶有沒有繫上、手提行李是不是放好，還會幫需要協助的人先準備好。",
    memory: "不是只看人有沒有坐下，而是看大家是不是已經安全地坐好了。",
  },
  report: {
    kicker: "REPORT READY",
    title: "把狀況回報完成",
    text: "當客艙都確認好了，空服員還要把狀況回報，讓駕駛艙知道客艙已經準備完成，大家才能往起飛前下一步前進。",
    memory: "準備好了不代表別人自動知道，所以還要把消息送出去。",
  },
};

const stepContent = {
  boarding: {
    kicker: "BOARDING",
    title: "協助大家登機",
    text: "一開始空服員會迎接乘客、幫忙找到座位、留意需要特別幫忙的人，也會一邊觀察客艙的狀況是不是順利。",
    memory: "登機不是只有說歡迎光臨，還是在偷偷做很多觀察。",
  },
  secure: {
    kicker: "SECURE CABIN",
    title: "確認客艙固定好",
    text: "接著要檢查行李櫃、座椅、桌板、走道和工作區，確保客艙裡沒有鬆鬆的東西會在起飛時亂動。",
    memory: "飛機還沒飛起來前，先把客艙變成不會亂晃的樣子。",
  },
  briefing: {
    kicker: "SAFETY BRIEFING",
    title: "提醒安全重點",
    text: "空服員會做安全示範或提醒，讓乘客知道安全帶、氧氣面罩、救生衣和緊急出口大概在哪裡。",
    memory: "安全提醒不是例行公事，是要讓大家知道真的有事時怎麼做。",
  },
  ready: {
    kicker: "READY REPORT",
    title: "回報可以起飛",
    text: "當客艙都準備好了，空服員會完成最後確認並回報，之後大家入座，飛機才會繼續往起飛前的程序走。",
    memory: "最後這一步像是在說：客艙這邊，準備完成。",
  },
};

const simulatorContent = {
  boarding: {
    kicker: "BOARDING TIME",
    title: "登機中",
    text: "乘客一個個上機時，空服員要一邊協助座位和行李，一邊看整個客艙是不是慢慢變整齊、順利。",
    memory: "看起來像在招呼大家，其實也是在幫客艙整隊。",
    bars: { cabin: "72%", passenger: "84%", report: "18%" },
  },
  closing: {
    kicker: "BEFORE DOOR CLOSE",
    title: "關門前",
    text: "這時候最重要的是把客艙確認到可以起飛，像是行李放好、安全帶繫好、椅背和桌板都到正確位置。",
    memory: "飛機門要關之前，很多小細節都要一起到位。",
    bars: { cabin: "94%", passenger: "88%", report: "42%" },
  },
  taxi: {
    kicker: "READY TO TAXI",
    title: "滑行準備",
    text: "到快要滑行時，空服員會完成最後檢查並坐回自己的位置，表示客艙已經準備好進入起飛前狀態。",
    memory: "當空服員也坐好時，表示客艙的準備差不多完成了。",
    bars: { cabin: "44%", passenger: "54%", report: "96%" },
  },
};

const quizItems = [
  { question: "空服員起飛前最重要的是什麼？", options: ["確認安全準備", "先發飲料", "先關掉窗戶"], answer: "確認安全準備", note: "對，起飛前最重要的是客艙安全準備。" },
  { question: "手提行李為什麼要放好？", options: ["避免起飛時亂動", "讓飛機變快", "讓窗戶變大"], answer: "避免起飛時亂動", note: "答對了，沒有固定好的東西在加速時可能造成麻煩。" },
  { question: "安全示範是在提醒乘客什麼？", options: ["有事時怎麼保護自己", "怎麼開飛機", "怎麼加油"], answer: "有事時怎麼保護自己", note: "沒錯，安全示範是要讓乘客知道緊急時怎麼做。" },
  { question: "客艙準備好了之後，空服員還要做什麼？", options: ["回報狀況", "打開機翼", "收起跑道"], answer: "回報狀況", note: "對，準備完成後還要把狀況回報出去。" },
  { question: "下面哪一句最接近這堂課重點？", options: ["空服員起飛前在做很多安全確認", "空服員起飛前都在休息", "空服員起飛前只負責餐點"], answer: "空服員起飛前在做很多安全確認", note: "完全正確，這就是這堂課最想記住的事。" },
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
  cabinBar.style.width = item.bars.cabin;
  passengerBar.style.width = item.bars.passenger;
  reportBar.style.width = item.bars.report;
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
      ? "太棒了！你已經知道空服員起飛前其實在替整個客艙做最後的安全準備。"
      : `你答對 ${score} 題。再把客艙確認、乘客提醒和最後回報排一次，就會更熟。`;
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
renderBasic("cabin");
renderStep("boarding");
renderSimulator("boarding");
renderQuestion();
