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
const planBar = document.querySelector("#bar-plan");
const fillBar = document.querySelector("#bar-fill");
const checkBar = document.querySelector("#bar-check");

const quizProgress = document.querySelector("#quiz-progress");
const quizQuestion = document.querySelector("#quiz-question");
const quizOptions = document.querySelector("#quiz-options");
const quizFeedback = document.querySelector("#quiz-feedback");
const quizNext = document.querySelector("#quiz-next");

const basicContent = {
  plan: {
    kicker: "FUEL PLAN",
    title: "先算需要多少",
    text: "飛機出發前不會隨便說「加滿好了」，而是要先看航程、備用需求和整體計畫，決定這次要帶多少油。",
    memory: "不是吃到飽概念，而是要先算好夠不夠、重不重。",
  },
  where: {
    kicker: "FUEL TANKS",
    title: "油放在哪裡",
    text: "很多客機的油會放在機翼裡，因為這樣安排對飛機整體設計很有幫助，也和重量分配有關。",
    memory: "不是拿油桶放在客艙，而是放在設計好的油箱位置。",
  },
  balance: {
    kicker: "BALANCE",
    title: "還要看平衡",
    text: "加油不只看油量，還要注意整體平衡，因為油也是重量的一部分，放在哪裡也會有影響。",
    memory: "油不只是燃料，也是重量。",
  },
};

const stepContent = {
  plan: {
    kicker: "PLAN AMOUNT",
    title: "先看加多少",
    text: "加油前要先知道這次需要多少油，因為飛機不是只要飛得到，還要考慮備用和整體重量安排。",
    memory: "第一步不是先打開油蓋，而是先把需求想清楚。",
  },
  connect: {
    kicker: "CONNECT EQUIPMENT",
    title: "接上加油設備",
    text: "地面人員會把加油設備正確接好，這樣油才能安全地送進飛機指定的位置。",
    memory: "不是看到飛機就直接灌，而是要先好好連接。",
  },
  fill: {
    kicker: "FUELING",
    title: "慢慢加進去",
    text: "加油時會按照需要的數量慢慢加進去，不是越快越好，而是要確保數字和位置都對。",
    memory: "重點不是亂加很多，而是加得剛剛好。",
  },
  check: {
    kicker: "CHECK NUMBERS",
    title: "確認數字",
    text: "加完後還要確認最後結果，看看是不是真的加到正確數量，這樣飛機之後才比較安心。",
    memory: "不是加完就走，還要再核對一次。",
  },
};

const simulatorContent = {
  before: {
    kicker: "BEFORE FUELING",
    title: "加油前",
    text: "加油前最重要的是先把需求算好，因為這會影響後面到底要加多少、加到哪裡，以及整架飛機的重量安排。",
    memory: "還沒開始加油前，其實很多重要決定就已經先做好了。",
    bars: { plan: "94%", fill: "14%", check: "24%" },
  },
  during: {
    kicker: "DURING FUELING",
    title: "加油中",
    text: "加油中最重要的是穩穩把油加進去，而且要照著原本的需求和程序做，不是越快越好。",
    memory: "這時候最像在做一場很仔細的補給工作。",
    bars: { plan: "56%", fill: "96%", check: "44%" },
  },
  after: {
    kicker: "AFTER FUELING",
    title: "加油後",
    text: "加油後最重要的是確認最後數字和結果，因為只有真的核對完成，大家才知道這架飛機是不是已經準備好出發。",
    memory: "最後那次確認，很像幫整場補給蓋章。",
    bars: { plan: "34%", fill: "26%", check: "92%" },
  },
};

const quizItems = [
  { question: "飛機加油是不是只要想辦法加滿就好？", options: ["不是", "是", "只有短程航班才是"], answer: "不是", note: "對，飛機加油要先算需要多少，不是只看加滿。" },
  { question: "很多客機的油常常放在哪裡？", options: ["機翼裡", "乘客座位下", "機鼻裡"], answer: "機翼裡", note: "答對了，很多客機的油箱都在機翼裡。" },
  { question: "加油前最重要的一件事之一是什麼？", options: ["先算需要多少", "先打開客艙燈", "先收起輪子"], answer: "先算需要多少", note: "沒錯，第一步常常是先做油量計畫。" },
  { question: "加油後為什麼還要確認數字？", options: ["因為要確定真的加對了", "因為數字比較好看", "因為油會自己變色"], answer: "因為要確定真的加對了", note: "對，加完後還要核對結果。" },
  { question: "下面哪句最接近這堂課重點？", options: ["飛機加油和計畫與平衡有關", "飛機加油只是倒油進去", "飛機油放哪裡都沒差"], answer: "飛機加油和計畫與平衡有關", note: "完全正確，這就是這堂課最想記住的事。" },
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
  planBar.style.width = item.bars.plan;
  fillBar.style.width = item.bars.fill;
  checkBar.style.width = item.bars.check;
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
      ? "太棒了！你已經知道飛機加油不是只看加滿，而是要先計畫、再補給、最後確認。"
      : `你答對 ${score} 題。再把油量計畫、加注和確認結果排一次，就會更熟。`;
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
renderBasic("plan");
renderStep("plan");
renderSimulator("before");
renderQuestion();
