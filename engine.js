const partButtons = [...document.querySelectorAll("[data-part]")];
const partKicker = document.querySelector("#part-kicker");
const partTitle = document.querySelector("#part-title");
const partText = document.querySelector("#part-text");
const partMemory = document.querySelector("#part-memory");

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
const coreBar = document.querySelector("#bar-core");
const thrustBar = document.querySelector("#bar-thrust");

const quizProgress = document.querySelector("#quiz-progress");
const quizQuestion = document.querySelector("#quiz-question");
const quizOptions = document.querySelector("#quiz-options");
const quizFeedback = document.querySelector("#quiz-feedback");
const quizNext = document.querySelector("#quiz-next");

const partContent = {
  fan: {
    kicker: "FAN",
    title: "前面大風扇",
    text: "你在客機發動機前面最容易看到的大風扇，會先把很多空氣吸進來。這是整個流程的第一步。",
    memory: "先把空氣大口吸進來，後面才能繼續工作。",
  },
  core: {
    kicker: "CORE",
    title: "中間核心",
    text: "發動機中間的核心區域會把空氣壓縮，再和燃料一起燃燒，這裡很像整個發動機的心臟。",
    memory: "真正很忙的地方，常常藏在中間看不太到。",
  },
  exhaust: {
    kicker: "EXHAUST",
    title: "後面噴口",
    text: "處理完的高溫高速氣流會從後面噴出去。往後噴得越明顯，飛機往前的推力通常也越大。",
    memory: "空氣往後跑，飛機才會往前走。",
  },
};

const stepContent = {
  intake: {
    kicker: "INTAKE",
    title: "吸氣",
    text: "發動機先把很多空氣吸進來。沒有空氣進來，後面的壓縮和燃燒就沒辦法繼續。",
    memory: "第一步不是先噴火，而是先把空氣帶進來。",
  },
  compress: {
    kicker: "COMPRESS",
    title: "壓縮",
    text: "吸進來的空氣接著會被壓得更緊，這樣後面的燃燒會更有效率，也更有力。",
    memory: "先把空氣擠一擠，後面才更容易用。",
  },
  burn: {
    kicker: "BURN",
    title: "燃燒",
    text: "壓縮後的空氣會和燃料一起燃燒，產生高溫高能量，幫忙帶動後面的整個流程。",
    memory: "燒不是最後目的，而是為了讓空氣更有力量往後衝。",
  },
  exhaust: {
    kicker: "EXHAUST",
    title: "噴出",
    text: "最後高溫高速的氣流往後噴出去，飛機就會得到往前的推力。",
    memory: "往後噴，就是在幫飛機往前推。",
  },
};

const simulatorContent = {
  takeoff: {
    kicker: "TAKEOFF THRUST",
    title: "起飛推力",
    text: "起飛時需要很大的推力，所以會吸進更多空氣，核心工作也會更忙，往後推的力量最明顯。",
    memory: "需要衝很快時，發動機就會更努力把空氣往後推。",
    bars: { air: "92%", core: "88%", thrust: "96%" },
  },
  cruise: {
    kicker: "CRUISE THRUST",
    title: "巡航推力",
    text: "巡航時還是持續工作，但不像起飛那麼用力，因為飛機已經在高空穩穩前進。",
    memory: "巡航像是穩穩跑，不用像起飛那樣全力衝刺。",
    bars: { air: "68%", core: "64%", thrust: "62%" },
  },
  approach: {
    kicker: "APPROACH THRUST",
    title: "進場推力",
    text: "進場時通常不需要很大的推力，但發動機還是會持續幫忙，讓飛機保持穩定速度和高度控制。",
    memory: "準備降落時，不是完全不用推力，而是改成比較溫柔地工作。",
    bars: { air: "42%", core: "38%", thrust: "34%" },
  },
};

const quizItems = [
  { question: "客機發動機最重要的大方向，是把什麼往後推？", options: ["空氣", "椅子", "窗戶"], answer: "空氣", note: "對，發動機最核心的概念就是處理空氣再往後推出去。" },
  { question: "你最容易先看到發動機前面的哪個部位？", options: ["大風扇", "起落架", "尾翼"], answer: "大風扇", note: "答對了，前面的大風扇最容易被看到。" },
  { question: "吸氣後，常見的下一步是什麼？", options: ["壓縮", "關燈", "收輪子"], answer: "壓縮", note: "沒錯，先吸進來，再把空氣壓一壓。" },
  { question: "氣流往後噴出去時，飛機通常會怎樣？", options: ["往前走", "往後退", "變更短"], answer: "往前走", note: "對，這就是推力的大方向。" },
  { question: "下面哪句最接近這堂課重點？", options: ["發動機一直在處理空氣", "發動機只負責發光", "發動機和空氣沒關係"], answer: "發動機一直在處理空氣", note: "完全正確，這就是這堂課最想記住的事。" },
];

let currentQuestion = 0;
let score = 0;

function renderPart(key) {
  const item = partContent[key];
  partButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.part === key));
  partKicker.textContent = item.kicker;
  partTitle.textContent = item.title;
  partText.textContent = item.text;
  partMemory.textContent = item.memory;
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
  coreBar.style.width = item.bars.core;
  thrustBar.style.width = item.bars.thrust;
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
      ? "太棒了！你已經知道發動機不只是很大聲，而是真的一直在處理空氣。"
      : `你答對 ${score} 題。再把吸氣、壓縮、燃燒、噴出排一次，就會更熟。`;
}

partButtons.forEach((button) => button.addEventListener("click", () => renderPart(button.dataset.part)));
stepCards.forEach((button) => button.addEventListener("click", () => renderStep(button.dataset.step)));
modeButtons.forEach((button) => button.addEventListener("click", () => renderSimulator(button.dataset.mode)));
quizNext.addEventListener("click", () => {
  currentQuestion += 1;
  if (currentQuestion < quizItems.length) renderQuestion();
  else showResult();
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
renderPart("fan");
renderStep("intake");
renderSimulator("takeoff");
renderQuestion();
