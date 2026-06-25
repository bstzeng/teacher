const helperButtons = [...document.querySelectorAll("[data-helper]")];
const helperKicker = document.querySelector("#helper-kicker");
const helperTitle = document.querySelector("#helper-title");
const helperText = document.querySelector("#helper-text");
const helperMemory = document.querySelector("#helper-memory");

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
const airBar = document.querySelector("#bar-air");
const fireBar = document.querySelector("#bar-fire");
const runBar = document.querySelector("#bar-run");

const quizProgress = document.querySelector("#quiz-progress");
const quizQuestion = document.querySelector("#quiz-question");
const quizOptions = document.querySelector("#quiz-options");
const quizFeedback = document.querySelector("#quiz-feedback");
const quizNext = document.querySelector("#quiz-next");

const helperContent = {
  apu: {
    kicker: "APU",
    title: "APU",
    text: "APU 常常先提供幫忙啟動需要的資源，所以很多時候主發動機能開始醒來，背後第一位幫手就是 APU。",
    memory: "像是主發動機起床前，先來叫它起床的小助手。",
  },
  air: {
    kicker: "AIR FLOW",
    title: "空氣",
    text: "啟動時常常需要先有空氣幫忙讓發動機裡面開始轉，因為不先轉起來，後面的燃油和點火就不好接上去。",
    memory: "像先幫大風車推一下，讓它願意開始轉。",
  },
  fuel: {
    kicker: "FUEL & IGNITION",
    title: "燃油與點火",
    text: "等到轉動起來後，燃油和點火才會一起接手，讓發動機真正進入燃燒和穩定工作。",
    memory: "不是一開始就全部一起上，而是等前面準備好了才接棒。",
  },
};

const stepContent = {
  spin: {
    kicker: "SPIN",
    title: "先轉起來",
    text: "啟動時通常不會先直接噴火，而是先讓發動機裡面的部分開始轉動，這樣後面的燃油和點火才有意義。",
    memory: "先讓它動起來，再談後面的燃燒。",
  },
  fuel: {
    kicker: "ADD FUEL",
    title: "給燃油",
    text: "轉動到一定程度後，才會開始給燃油，因為這時候發動機才比較像已經準備好要正式醒來。",
    memory: "不是先倒油就好，要先有前面的準備。",
  },
  ignite: {
    kicker: "IGNITION",
    title: "點火",
    text: "有了燃油之後，還需要點火幫忙，這樣燃燒才能真正開始，發動機也才會慢慢進入自己的工作節奏。",
    memory: "給了燃油還不夠，還要讓它真的點起來。",
  },
  stable: {
    kicker: "STABLE RUN",
    title: "穩定運轉",
    text: "等燃燒穩定後，發動機就會慢慢自己接手，這時候才算是真的啟動成功。",
    memory: "最後不是有人一直推著它，而是它自己穩穩跑起來。",
  },
};

const simulatorContent = {
  before: {
    kicker: "BEFORE START",
    title: "啟動前",
    text: "啟動前最重要的是先把準備工作做好，這時候像 APU 和空氣幫忙的角色會比較明顯，因為主發動機自己還沒正式接手。",
    memory: "主角還沒上場前，後台小幫手已經很忙了。",
    bars: { air: "84%", fire: "22%", run: "8%" },
  },
  during: {
    kicker: "DURING START",
    title: "啟動中",
    text: "啟動中最忙的就是空氣幫忙、燃油和點火一起接力，因為這時候正是從『還沒醒』變成『快醒了』的關鍵階段。",
    memory: "這時最像大家一起把主發動機扶起來。",
    bars: { air: "76%", fire: "94%", run: "42%" },
  },
  after: {
    kicker: "AFTER START",
    title: "啟動後",
    text: "啟動成功後，最重要的就是發動機自己穩穩運轉，代表它已經不只是被叫醒，而是真的可以開始工作了。",
    memory: "最後最重要的不是有沒有點到火，而是它能不能穩穩跑下去。",
    bars: { air: "28%", fire: "34%", run: "92%" },
  },
};

const quizItems = [
  { question: "飛機發動機是不是按一下就會自己醒來？", options: ["不是", "是", "只有晚上才是"], answer: "不是", note: "對，它通常要一步一步啟動，不是按一下就好。" },
  { question: "啟動前常見的一個幫手是誰？", options: ["APU", "逃生滑梯", "窗戶"], answer: "APU", note: "答對了，APU 常常會先幫忙。" },
  { question: "發動機啟動時，常見的第一個大方向是什麼？", options: ["先轉起來", "先關燈", "先打開行李門"], answer: "先轉起來", note: "沒錯，通常要先讓裡面開始轉。" },
  { question: "給燃油後，還常常需要什麼？", options: ["點火", "洗輪子", "換塗裝"], answer: "點火", note: "對，燃油和點火會一起接棒。" },
  { question: "下面哪句最接近這堂課重點？", options: ["發動機啟動是一步一步完成的", "發動機自己會突然醒來", "發動機和空氣沒關係"], answer: "發動機啟動是一步一步完成的", note: "完全正確，這就是這堂課最想記住的事。" },
];

let currentQuestion = 0;
let score = 0;

function renderHelper(key) {
  const item = helperContent[key];
  helperButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.helper === key));
  helperKicker.textContent = item.kicker;
  helperTitle.textContent = item.title;
  helperText.textContent = item.text;
  helperMemory.textContent = item.memory;
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
  airBar.style.width = item.bars.air;
  fireBar.style.width = item.bars.fire;
  runBar.style.width = item.bars.run;
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
      ? "太棒了！你已經知道發動機醒來前，背後其實有一整串接力流程。"
      : `你答對 ${score} 題。再把先轉、給油、點火和穩定接手排一次，就會更熟。`;
}

helperButtons.forEach((button) => button.addEventListener("click", () => renderHelper(button.dataset.helper)));
stepCards.forEach((button) => button.addEventListener("click", () => renderStep(button.dataset.step)));
modeButtons.forEach((button) => button.addEventListener("click", () => renderSimulator(button.dataset.mode)));
quizNext.addEventListener("click", () => {
  currentQuestion += 1;
  if (currentQuestion < quizItems.length) renderQuestion();
  else showResult();
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
renderHelper("apu");
renderStep("spin");
renderSimulator("before");
renderQuestion();
