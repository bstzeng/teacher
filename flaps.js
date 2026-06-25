const partButtons = [...document.querySelectorAll("[data-part]")];
const partKicker = document.querySelector("#part-kicker");
const partTitle = document.querySelector("#part-title");
const partText = document.querySelector("#part-text");
const partMemory = document.querySelector("#part-memory");

const momentCards = [...document.querySelectorAll("[data-moment]")];
const momentKicker = document.querySelector("#moment-kicker");
const momentTitle = document.querySelector("#moment-title");
const momentText = document.querySelector("#moment-text");
const momentMemory = document.querySelector("#moment-memory");

const modeButtons = [...document.querySelectorAll("[data-mode]")];
const simKicker = document.querySelector("#sim-kicker");
const simTitle = document.querySelector("#sim-title");
const simText = document.querySelector("#sim-text");
const simMemory = document.querySelector("#sim-memory");
const flapBar = document.querySelector("#bar-flap");
const slatBar = document.querySelector("#bar-slat");
const speedBar = document.querySelector("#bar-speed");

const quizProgress = document.querySelector("#quiz-progress");
const quizQuestion = document.querySelector("#quiz-question");
const quizOptions = document.querySelector("#quiz-options");
const quizFeedback = document.querySelector("#quiz-feedback");
const quizNext = document.querySelector("#quiz-next");

const partContent = {
  flap: {
    kicker: "FLAP",
    title: "襟翼",
    text: "襟翼大多在機翼後面。放出來時，會讓機翼形狀改變，幫飛機在較慢速度下也能產生更多升力。",
    memory: "後面拉出一點，像把翅膀變大一點。",
  },
  slat: {
    kicker: "SLAT",
    title: "縫翼",
    text: "縫翼大多在機翼前面。打開後，會幫助空氣更順地流過機翼，讓慢速時比較不容易失去升力。",
    memory: "前面打開一點，幫空氣更順地滑過去。",
  },
  clean: {
    kicker: "CLEAN WING",
    title: "收起來時",
    text: "巡航時通常會把它們收起來，因為這樣阻力比較小，飛得比較省力也比較有效率。",
    memory: "飛很快的時候，常常會把機翼恢復成比較乾淨的樣子。",
  },
};

const momentContent = {
  takeoff: {
    kicker: "TAKEOFF",
    title: "起飛前後",
    text: "起飛時飛機還不夠快，所以常會放出一部分襟翼，幫助飛機在比較短的時間裡建立足夠升力。",
    memory: "速度還不夠快時，機翼就先變得比較會抓空氣。",
  },
  cruise: {
    kicker: "CRUISE",
    title: "高空巡航",
    text: "巡航時速度已經很快，通常會把襟翼和縫翼收起來，讓阻力變小，飛行更有效率。",
    memory: "飛快又飛久的時候，通常不需要把它們一直打開。",
  },
  landing: {
    kicker: "LANDING",
    title: "降落進場",
    text: "降落前速度會慢下來，所以常常會放出更多襟翼和縫翼，讓飛機可以用更慢的速度穩穩進場。",
    memory: "降落時常會比起飛放得更多，因為要慢慢地下來。",
  },
};

const simulatorContent = {
  takeoff: {
    kicker: "TAKEOFF CONFIG",
    title: "起飛模式",
    text: "起飛時常常只放出一部分，因為需要更多升力，但又不希望阻力太大。",
    memory: "起飛像是先開一點點幫忙，不是一次全開。",
    bars: { flap: "55%", slat: "50%", speed: "68%" },
  },
  cruise: {
    kicker: "CLEAN CONFIG",
    title: "巡航模式",
    text: "巡航時速度很快，通常會把襟翼和縫翼收起來，讓飛機更省力地往前飛。",
    memory: "巡航最像把機翼整理乾淨，專心飛快一點。",
    bars: { flap: "8%", slat: "8%", speed: "96%" },
  },
  landing: {
    kicker: "LANDING CONFIG",
    title: "降落模式",
    text: "降落前速度會慢很多，所以常常會放出更多襟翼和縫翼，幫飛機穩定地下來。",
    memory: "降落通常會比起飛更大方地打開。",
    bars: { flap: "92%", slat: "82%", speed: "34%" },
  },
};

const quizItems = [
  { question: "襟翼大多在機翼的哪一邊？", options: ["後面", "前面", "機尾"], answer: "後面", note: "對，襟翼通常在機翼後面。" },
  { question: "縫翼大多在機翼的哪一邊？", options: ["前面", "後面", "輪子旁邊"], answer: "前面", note: "答對了，縫翼通常在機翼前面。" },
  { question: "高空巡航時，它們通常怎麼樣？", options: ["大多收起來", "全部打開", "完全拆掉"], answer: "大多收起來", note: "沒錯，巡航時常常收起來減少阻力。" },
  { question: "降落前為什麼常常要放出更多襟翼和縫翼？", options: ["讓慢速飛行更穩", "讓飛機更亮", "讓機身變短"], answer: "讓慢速飛行更穩", note: "對，這樣飛機可以用比較慢的速度穩穩進場。" },
  { question: "下面哪句最接近這堂課重點？", options: ["機翼可以依情況改變形狀", "機翼永遠都一樣", "襟翼只拿來裝飾"], answer: "機翼可以依情況改變形狀", note: "完全正確，這就是這堂課想記住的事。" },
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

function renderMoment(key) {
  const item = momentContent[key];
  momentCards.forEach((button) => button.classList.toggle("is-active", button.dataset.moment === key));
  momentKicker.textContent = item.kicker;
  momentTitle.textContent = item.title;
  momentText.textContent = item.text;
  momentMemory.textContent = item.memory;
}

function renderSimulator(key) {
  const item = simulatorContent[key];
  modeButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.mode === key));
  simKicker.textContent = item.kicker;
  simTitle.textContent = item.title;
  simText.textContent = item.text;
  simMemory.textContent = item.memory;
  flapBar.style.width = item.bars.flap;
  slatBar.style.width = item.bars.slat;
  speedBar.style.width = item.bars.speed;
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
      ? "太棒了！你已經知道飛機的機翼不是每一刻都長一樣。"
      : `你答對 ${score} 題。再把襟翼、縫翼和使用時機對一遍，就會更熟。`;
}

partButtons.forEach((button) => button.addEventListener("click", () => renderPart(button.dataset.part)));
momentCards.forEach((button) => button.addEventListener("click", () => renderMoment(button.dataset.moment)));
modeButtons.forEach((button) => button.addEventListener("click", () => renderSimulator(button.dataset.mode)));
quizNext.addEventListener("click", () => {
  currentQuestion += 1;
  if (currentQuestion < quizItems.length) renderQuestion();
  else showResult();
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
renderPart("flap");
renderMoment("takeoff");
renderSimulator("takeoff");
renderQuestion();
