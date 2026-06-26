const playData = {
  solar: {
    kicker: "SOLAR ECLIPSE",
    name: "日蝕",
    text: "月亮站到太陽和地球中間，從地球上看會覺得太陽被遮住一部分或大部分。",
    memory: "日蝕是月亮擋太陽。",
    moon: { left: 270, top: 168, opacity: 1 },
    shadow: { left: 318, top: 150, opacity: 1, width: 240 }
  },
  lunar: {
    kicker: "LUNAR ECLIPSE",
    name: "月蝕",
    text: "地球站到太陽和月亮中間，地球的影子落到月亮上，所以月亮看起來會變暗。",
    memory: "月蝕是地球影子落到月亮上。",
    moon: { left: 518, top: 170, opacity: 1 },
    shadow: { left: 438, top: 148, opacity: 1, width: 180 }
  },
  almost: {
    kicker: "ALMOST",
    name: "差一點點",
    text: "有時候三個天體差一點就排成一直線，但沒有排夠準，所以不會真的發生日蝕或月蝕。",
    memory: "不是很接近就一定有蝕象。",
    moon: { left: 520, top: 108, opacity: 1 },
    shadow: { left: 438, top: 148, opacity: 0.35, width: 170 }
  },
  normal: {
    kicker: "NORMAL",
    name: "普通排排站",
    text: "大多數時候，它們雖然都在動，但沒有剛好排得很直，所以天空看起來很平常。",
    memory: "蝕象其實沒有那麼常見。",
    moon: { left: 414, top: 84, opacity: 1 },
    shadow: { left: 438, top: 148, opacity: 0.12, width: 140 }
  }
};

const mapData = {
  sun: {
    kicker: "SUN",
    name: "太陽",
    text: "太陽像一個超亮的大燈，蝕象其實就是誰把這盞燈的光擋住了。",
    memory: "有光，才會有影子，也才會有蝕象。"
  },
  earth: {
    kicker: "EARTH",
    name: "地球",
    text: "在月蝕裡，地球會站到中間，變成投下影子的那一個主角。",
    memory: "月蝕時，中間那個是地球。"
  },
  moon: {
    kicker: "MOON",
    name: "月亮",
    text: "在日蝕裡，月亮跑到太陽前面；在月蝕裡，月亮則是跑進地球影子裡。",
    memory: "月亮有時擋別人，有時被影子蓋到。"
  },
  shadow: {
    kicker: "SHADOW",
    name: "影子",
    text: "影子是蝕象的關鍵。月蝕是看到地球的影子，日蝕則是月亮把太陽遮住。",
    memory: "看影子落在哪裡，就比較不會搞混。"
  },
  line: {
    kicker: "LINE UP",
    name: "一直線排列",
    text: "如果太陽、地球、月亮沒有排得夠直，就不會形成真正的蝕象。",
    memory: "排得夠直，蝕象才會出現。"
  }
};

const quizItems = [
  { question: "日蝕是誰擋住誰？", options: ["月亮擋住太陽", "地球擋住月亮", "太陽擋住地球"], answer: "月亮擋住太陽", note: "對，日蝕是月亮跑到太陽前面。" },
  { question: "月蝕時，誰站在中間？", options: ["地球", "月亮", "太陽"], answer: "地球", note: "答對了，月蝕時是地球站在中間。" },
  { question: "月蝕看起來月亮變暗，主要是因為什麼？", options: ["月亮走進地球影子裡", "月亮自己關燈", "太陽突然不亮"], answer: "月亮走進地球影子裡", note: "沒錯，月蝕是地球影子落到月亮上。" },
  { question: "為什麼不是每個月都有蝕象？", options: ["因為不一定排得夠直", "因為月亮會休息", "因為太陽不願意"], answer: "因為不一定排得夠直", note: "對，三個天體要排得很接近一直線才行。" },
  { question: "這堂課最重要的句子是什麼？", options: ["蝕象重點是誰站在中間", "蝕象是天空魔法", "蝕象只在卡通裡"], answer: "蝕象重點是誰站在中間", note: "完全正確，這就是整堂課的核心。" }
];

const playButtons = [...document.querySelectorAll(".play-button")];
const playKicker = document.querySelector("#play-kicker");
const playName = document.querySelector("#play-name");
const playText = document.querySelector("#play-text");
const playMemory = document.querySelector("#play-memory");
const sceneMoon = document.querySelector("#scene-moon");
const sceneShadow = document.querySelector("#scene-shadow");
const playScene = document.querySelector("#play-scene");

const mapHotspots = [...document.querySelectorAll(".map-hotspot")];
const mapKicker = document.querySelector("#map-kicker");
const mapName = document.querySelector("#map-name");
const mapText = document.querySelector("#map-text");
const mapMemory = document.querySelector("#map-memory");

const quizProgress = document.querySelector("#quiz-progress");
const quizQuestion = document.querySelector("#quiz-question");
const quizOptions = document.querySelector("#quiz-options");
const quizFeedback = document.querySelector("#quiz-feedback");
const quizNext = document.querySelector("#quiz-next");

let currentQuestion = 0;
let score = 0;

function renderPlay(mode) {
  const item = playData[mode];
  playButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.mode === mode));
  playScene.dataset.mode = mode;
  playKicker.textContent = item.kicker;
  playName.textContent = item.name;
  playText.textContent = item.text;
  playMemory.textContent = item.memory;
  sceneMoon.style.left = `${item.moon.left}px`;
  sceneMoon.style.top = `${item.moon.top}px`;
  sceneMoon.style.opacity = item.moon.opacity;
  sceneShadow.style.left = `${item.shadow.left}px`;
  sceneShadow.style.top = `${item.shadow.top}px`;
  sceneShadow.style.opacity = item.shadow.opacity;
  sceneShadow.style.width = `${item.shadow.width}px`;
}

function renderMap(part) {
  const item = mapData[part];
  mapHotspots.forEach((hotspot) => hotspot.classList.toggle("is-active", hotspot.dataset.part === part));
  mapKicker.textContent = item.kicker;
  mapName.textContent = item.name;
  mapText.textContent = item.text;
  mapMemory.textContent = item.memory;
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

playButtons.forEach((button) => {
  button.addEventListener("click", () => renderPlay(button.dataset.mode));
});

mapHotspots.forEach((hotspot) => {
  hotspot.addEventListener("click", () => renderMap(hotspot.dataset.part));
});

quizNext.addEventListener("click", () => {
  if (currentQuestion < quizItems.length - 1) {
    currentQuestion += 1;
    renderQuestion();
    return;
  }
  quizProgress.textContent = "完成了";
  quizQuestion.textContent = `你答對了 ${score} / ${quizItems.length} 題`;
  quizOptions.replaceChildren();
  quizFeedback.textContent = score === quizItems.length
    ? "太厲害了，你已經分得很清楚日蝕和月蝕。"
    : "很棒，你已經知道蝕象重點是誰站在中間。";
  quizNext.hidden = true;
});

renderPlay("solar");
renderMap("sun");
renderQuestion();
