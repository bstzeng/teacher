const toolButtons = [...document.querySelectorAll("[data-tool]")];
const toolKicker = document.querySelector("#tool-kicker");
const toolTitle = document.querySelector("#tool-title");
const toolText = document.querySelector("#tool-text");
const toolMemory = document.querySelector("#tool-memory");

const sequenceCards = [...document.querySelectorAll("[data-stage]")];
const stageKicker = document.querySelector("#stage-kicker");
const stageTitle = document.querySelector("#stage-title");
const stageText = document.querySelector("#stage-text");
const stageMemory = document.querySelector("#stage-memory");

const speedButtons = [...document.querySelectorAll("[data-speed]")];
const simKicker = document.querySelector("#sim-kicker");
const simTitle = document.querySelector("#sim-title");
const simText = document.querySelector("#sim-text");
const simMemory = document.querySelector("#sim-memory");
const spoilerBar = document.querySelector("#bar-spoiler");
const reverseBar = document.querySelector("#bar-reverse");
const brakeBar = document.querySelector("#bar-brake");

const quizProgress = document.querySelector("#quiz-progress");
const quizQuestion = document.querySelector("#quiz-question");
const quizOptions = document.querySelector("#quiz-options");
const quizFeedback = document.querySelector("#quiz-feedback");
const quizNext = document.querySelector("#quiz-next");

const toolContent = {
  spoiler: {
    kicker: "SPOILER",
    title: "擾流板",
    text: "飛機一碰到地面，機翼上方的擾流板會彈起來，幫忙把升力趕快減少，讓重量更確實壓到輪子上。",
    memory: "先讓飛機乖乖坐好，輪子才比較好工作。",
  },
  reverse: {
    kicker: "REVERSE THRUST",
    title: "反推力",
    text: "反推力可以把一部分引擎氣流往前導，幫忙把飛機往後拉一點點，讓速度降下來。",
    memory: "它不是把飛機倒著飛，而是幫忙快一點慢下來。",
  },
  brake: {
    kicker: "WHEEL BRAKES",
    title: "輪子煞車",
    text: "輪子煞車和汽車一樣，都是讓輪子慢下來。不過飛機比較重，所以需要和其他方法一起合作。",
    memory: "不是只有輪子在煞，飛機通常會很多方法一起來。",
  },
};

const stageContent = {
  touchdown: {
    kicker: "TOUCHDOWN",
    title: "剛接地",
    text: "剛接地時，最重要的是讓飛機穩穩壓在跑道上，所以擾流板會很快幫忙。",
    memory: "擾流板先幫飛機「坐穩」，其他工具再一起接力。",
  },
  rolling: {
    kicker: "HIGH-SPEED ROLL",
    title: "高速滑跑",
    text: "速度還很快時，反推力常常會很有存在感，輪子煞車也會一起工作，讓速度繼續往下掉。",
    memory: "速度快的時候，大家通常會一起幫忙比較有效。",
  },
  slow: {
    kicker: "SLOW ROLL",
    title: "慢下來後",
    text: "等速度變慢後，反推力的重要性會慢慢降低，最後主要會靠輪子煞車把飛機停好。",
    memory: "最後收尾常常更像是輪子慢慢把飛機停住。",
  },
};

const simulatorContent = {
  fast: {
    kicker: "FAST ROLL",
    title: "140 節左右",
    text: "這時速度還很快，通常會看到擾流板和反推力都很重要，輪子煞車也會一起工作。",
    memory: "速度很快時，通常會是三種工具一起幫忙。",
    bars: { spoiler: "90%", reverse: "88%", brake: "72%" },
  },
  medium: {
    kicker: "MID ROLL",
    title: "80 節左右",
    text: "這時已經比剛落地慢一些，但還在滑跑中，輪子煞車通常越來越重要，反推力也可能還在幫忙。",
    memory: "中段很像接力交棒，煞車的角色會越來越大。",
    bars: { spoiler: "68%", reverse: "56%", brake: "82%" },
  },
  slow: {
    kicker: "NEAR STOP",
    title: "20 節左右",
    text: "快停住時，通常最主要就是輪子煞車在收尾，反推力的重要性會小很多。",
    memory: "最後停好時，最像我們熟悉的輪子慢慢煞住。",
    bars: { spoiler: "28%", reverse: "12%", brake: "86%" },
  },
};

const quizItems = [
  { question: "飛機落地後，常見的減速幫手有幾種主角？", options: ["三種", "一種", "五種"], answer: "三種", note: "對，這一課先記住擾流板、反推力和輪子煞車。" },
  { question: "擾流板最像先幫忙做什麼？", options: ["讓飛機更貼近跑道", "讓飛機飛更高", "打開客艙燈"], answer: "讓飛機更貼近跑道", note: "沒錯，先讓飛機穩穩壓在地面上。" },
  { question: "反推力是不是代表飛機要倒著飛？", options: ["不是", "是", "只有晚上才是"], answer: "不是", note: "答對了，它是幫忙減速，不是倒著飛。" },
  { question: "當速度已經很慢、快停住時，通常誰更像主力？", options: ["輪子煞車", "反推力", "機翼燈"], answer: "輪子煞車", note: "對，最後收尾通常更像輪子慢慢煞住。" },
  { question: "下面哪句最接近這堂課重點？", options: ["飛機靠很多方法一起減速", "飛機只靠輪子就夠了", "飛機落地後不用減速"], answer: "飛機靠很多方法一起減速", note: "完全正確，這就是這堂課的核心。" },
];

let currentQuestion = 0;
let score = 0;

function renderTool(key) {
  const item = toolContent[key];
  toolButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.tool === key));
  toolKicker.textContent = item.kicker;
  toolTitle.textContent = item.title;
  toolText.textContent = item.text;
  toolMemory.textContent = item.memory;
}

function renderStage(key) {
  const item = stageContent[key];
  sequenceCards.forEach((button) => button.classList.toggle("is-active", button.dataset.stage === key));
  stageKicker.textContent = item.kicker;
  stageTitle.textContent = item.title;
  stageText.textContent = item.text;
  stageMemory.textContent = item.memory;
}

function renderSimulator(key) {
  const item = simulatorContent[key];
  speedButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.speed === key));
  simKicker.textContent = item.kicker;
  simTitle.textContent = item.title;
  simText.textContent = item.text;
  simMemory.textContent = item.memory;
  spoilerBar.style.width = item.bars.spoiler;
  reverseBar.style.width = item.bars.reverse;
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
      ? "太棒了！你已經知道飛機減速不是只靠一種方法。"
      : `你答對 ${score} 題。再把三個減速幫手的工作分清楚一次，就會更熟。`;
}

toolButtons.forEach((button) => button.addEventListener("click", () => renderTool(button.dataset.tool)));
sequenceCards.forEach((button) => button.addEventListener("click", () => renderStage(button.dataset.stage)));
speedButtons.forEach((button) => button.addEventListener("click", () => renderSimulator(button.dataset.speed)));
quizNext.addEventListener("click", () => {
  currentQuestion += 1;
  if (currentQuestion < quizItems.length) renderQuestion();
  else showResult();
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
renderTool("spoiler");
renderStage("touchdown");
renderSimulator("fast");
renderQuestion();
