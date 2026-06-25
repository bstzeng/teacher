const partButtons = [...document.querySelectorAll("[data-part]")];
const partKicker = document.querySelector("#part-kicker");
const partTitle = document.querySelector("#part-title");
const partText = document.querySelector("#part-text");
const partMemory = document.querySelector("#part-memory");

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
const turnBar = document.querySelector("#bar-turn");
const shockBar = document.querySelector("#bar-shock");
const brakeBar = document.querySelector("#bar-brake");

const quizProgress = document.querySelector("#quiz-progress");
const quizQuestion = document.querySelector("#quiz-question");
const quizOptions = document.querySelector("#quiz-options");
const quizFeedback = document.querySelector("#quiz-feedback");
const quizNext = document.querySelector("#quiz-next");

const partContent = {
  nose: {
    kicker: "NOSE GEAR",
    title: "前起落架",
    text: "前起落架通常在飛機前面，常常負責地面轉向。你在滑行時看到飛機慢慢轉彎，常常就是它在幫忙。",
    memory: "前輪很像方向盤在地上的幫手。",
  },
  main: {
    kicker: "MAIN GEAR",
    title: "主起落架",
    text: "主起落架通常承受比較多重量，飛機落地時最主要也是由它們來接住大部分的衝擊和重量。",
    memory: "真正扛重的主力，常常是中後段的大輪子。",
  },
  shock: {
    kicker: "SHOCK STRUT",
    title: "避震支柱",
    text: "避震支柱會幫忙吸收落地時的力量，不然飛機落地那一下就會硬硬地撞上去。",
    memory: "像飛機腳上的避震器，讓落地不要那麼生硬。",
  },
};

const jobContent = {
  support: {
    kicker: "SUPPORT",
    title: "撐住重量",
    text: "飛機落在地上時，整架飛機的重量要先被起落架接住，所以最基本的工作就是穩穩把飛機撐好。",
    memory: "如果沒有起落架，飛機在地上根本沒辦法正常站著。",
  },
  turn: {
    kicker: "STEERING",
    title: "幫忙轉向",
    text: "飛機在滑行道上不是直直走到底，常常要慢慢轉彎，所以前起落架的轉向功能很重要。",
    memory: "在地上找路時，前輪常常很忙。",
  },
  shock: {
    kicker: "ABSORB",
    title: "吸收落地衝擊",
    text: "飛機一碰地面時，不是輕輕放上去，而是會有一股力量傳上來，所以起落架要幫忙吃掉很多衝擊。",
    memory: "落地那一下如果沒有避震，整架飛機都會更難受。",
  },
  brake: {
    kicker: "BRAKE",
    title: "幫忙煞車",
    text: "很多主輪也會一起參與煞車工作，所以飛機落地後能慢慢停下來，不只靠反推力，也和輪子有關。",
    memory: "停下來這件事，輪子不是只在滾，它們也可能正在幫忙煞車。",
  },
};

const simulatorContent = {
  taxi: {
    kicker: "TAXI MODE",
    title: "滑行中",
    text: "滑行時最容易感覺到的是轉向工作，因為飛機要跟著滑行道慢慢轉彎、往正確方向前進。",
    memory: "滑行時最像在地上開很大的車，方向控制就很重要。",
    bars: { turn: "88%", shock: "22%", brake: "34%" },
  },
  landing: {
    kicker: "LANDING MODE",
    title: "剛落地",
    text: "剛落地時，吸震工作最有存在感，因為起落架要先把落地那一下的力量吃掉。",
    memory: "一碰地就先接住衝擊，這時避震最忙。",
    bars: { turn: "18%", shock: "94%", brake: "58%" },
  },
  stop: {
    kicker: "STOP MODE",
    title: "準備停好",
    text: "準備停妥時，煞車的感覺會更明顯，因為飛機要慢慢收尾，安全地停在指定位置。",
    memory: "最後收尾時，輪子更像是在幫飛機乖乖停好。",
    bars: { turn: "26%", shock: "18%", brake: "90%" },
  },
};

const quizItems = [
  { question: "前起落架在地面上常常最像在幫忙做什麼？", options: ["轉向", "發光", "煮飯"], answer: "轉向", note: "對，前起落架常常和地面轉向很有關係。" },
  { question: "主起落架通常最常被想到的工作之一是什麼？", options: ["承受比較多重量", "播放音樂", "打開客艙門"], answer: "承受比較多重量", note: "答對了，主起落架常常是扛重量的主力。" },
  { question: "落地那一下誰的工作最明顯？", options: ["吸收衝擊", "打開燈", "關閉引擎"], answer: "吸收衝擊", note: "沒錯，起落架要先幫忙吃掉落地的力量。" },
  { question: "飛機停下來時，輪子可能也在幫忙做什麼？", options: ["煞車", "收翅膀", "改變尾翼顏色"], answer: "煞車", note: "對，停下來這件事輪子也可能很重要。" },
  { question: "下面哪句最接近這堂課重點？", options: ["起落架不只是輪子", "起落架只是裝飾", "起落架和地面沒關係"], answer: "起落架不只是輪子", note: "完全正確，這就是這堂課想記住的事。" },
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
  turnBar.style.width = item.bars.turn;
  shockBar.style.width = item.bars.shock;
  brakeBar.style.width = item.bars.brake;
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
      ? "太棒了！你已經知道起落架不是單純幾顆輪子，而是一整套地面工作幫手。"
      : `你答對 ${score} 題。再把撐住、轉向、吸震和煞車排一遍，就會更熟。`;
}

partButtons.forEach((button) => button.addEventListener("click", () => renderPart(button.dataset.part)));
jobCards.forEach((button) => button.addEventListener("click", () => renderJob(button.dataset.job)));
modeButtons.forEach((button) => button.addEventListener("click", () => renderSimulator(button.dataset.mode)));
quizNext.addEventListener("click", () => {
  currentQuestion += 1;
  if (currentQuestion < quizItems.length) renderQuestion();
  else showResult();
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
renderPart("nose");
renderJob("support");
renderSimulator("taxi");
renderQuestion();
