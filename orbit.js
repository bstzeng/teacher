const playData = {
  fall: {
    kicker: "TOO LITTLE",
    name: "幾乎不往前",
    text: "如果太空船只是被放在高處，卻沒有足夠往前衝，它就會很快掉回地球。",
    memory: "軌道不是停住，是一直往前跑出來的。",
    ship: { left: 408, top: 102, rotate: 95 },
    path: { left: 336, top: 118, width: 96, height: 154, rotate: 0, borderTop: 0, borderRight: 0, borderBottom: 5, borderLeft: 5, radius: "0 0 0 132px" }
  },
  slow: {
    kicker: "TOO SLOW",
    name: "太慢",
    text: "有往前，但是不夠快，太空船還是會慢慢往下掉，最後回到地球。",
    memory: "只要速度不夠，地球還是會把它拉回來。",
    ship: { left: 452, top: 146, rotate: 28 },
    path: { left: 318, top: 110, width: 172, height: 158, rotate: 6, borderTop: 0, borderRight: 0, borderBottom: 5, borderLeft: 5, radius: "0 0 0 160px" }
  },
  orbit: {
    kicker: "JUST RIGHT",
    name: "剛剛好",
    text: "往前速度剛剛好時，太空船一邊被拉、一邊錯過地面，就會穩穩繞著地球跑。",
    memory: "一直掉，但是每次都剛好掉不到地上。",
    ship: { left: 476, top: 116, rotate: -12 },
    path: { left: 288, top: 96, width: 224, height: 126, rotate: -10, borderTop: 5, borderRight: 5, borderBottom: 5, borderLeft: 5, radius: "50%" }
  },
  escape: {
    kicker: "TOO FAST",
    name: "太快",
    text: "如果速度快到超過地球抓得住的程度，太空船就可能一路飛出去，不再繞地球。",
    memory: "太快時，不是繞圈，是一路跑遠。",
    ship: { left: 520, top: 74, rotate: -18 },
    path: { left: 334, top: 124, width: 220, height: 42, rotate: -18, borderTop: 5, borderRight: 0, borderBottom: 0, borderLeft: 0, radius: "0" }
  }
};

const mapData = {
  earth: {
    kicker: "EARTH",
    name: "地球",
    text: "地球是整個故事的中心，因為重力就是從這裡把太空船拉回來。",
    memory: "地球一直在說：回來我這邊。"
  },
  gravity: {
    kicker: "GRAVITY",
    name: "重力方向",
    text: "白色箭頭是在提醒你：地球一直把太空船往自己的方向拉。",
    memory: "有重力，才會有被拉回來的感覺。"
  },
  speed: {
    kicker: "SPEED",
    name: "前進速度",
    text: "藍色箭頭表示太空船一直往前衝。這個往前速度，就是軌道很重要的一半。",
    memory: "不是只有被拉，還要一直往前。"
  },
  thruster: {
    kicker: "THRUSTER",
    name: "小推進器",
    text: "有時候太空船會用小推進器輕輕推一下，幫忙修正方向、速度或高度。",
    memory: "不是每次都要大火箭，小推一下也很有用。"
  },
  track: {
    kicker: "ORBIT",
    name: "軌道路線",
    text: "金色虛線是在告訴你：如果速度和高度配合得剛剛好，就會出現繞圈的路線。",
    memory: "軌道像一條看不見的繞圈跑道。"
  }
};

const quizItems = [
  { question: "為什麼太空船不會立刻掉下來？", options: ["因為它也一直往前衝", "因為天空黏住它", "因為地球不拉它"], answer: "因為它也一直往前衝", note: "對，太空船除了被拉，還有很快的前進速度。" },
  { question: "如果完全不往前，最可能發生什麼事？", options: ["掉回地球", "永遠停在天上", "飛去太陽"], answer: "掉回地球", note: "答對了，只有高沒有快，還是會掉下來。" },
  { question: "軌道最像下面哪一句？", options: ["一直掉但一直錯過地面", "停在空中不動", "被雲托住"], answer: "一直掉但一直錯過地面", note: "沒錯，這是最簡單也最像的說法。" },
  { question: "太空船的小推進器可以做什麼？", options: ["輕輕修正方向或速度", "把地球推開", "讓月亮變亮"], answer: "輕輕修正方向或速度", note: "對，小推進器常用來慢慢修正。" },
  { question: "下面哪句最接近這堂課重點？", options: ["重力和前進速度一起做出軌道", "軌道就是停在天空上", "地球外面沒有重力"], answer: "重力和前進速度一起做出軌道", note: "完全正確，這就是這堂課最重要的想法。" }
];

const playButtons = [...document.querySelectorAll(".play-button")];
const playKicker = document.querySelector("#play-kicker");
const playName = document.querySelector("#play-name");
const playText = document.querySelector("#play-text");
const playMemory = document.querySelector("#play-memory");
const playScene = document.querySelector("#play-scene");
const sceneShip = document.querySelector("#scene-ship");
const scenePath = document.querySelector("#scene-path");

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

  sceneShip.style.left = `${item.ship.left}px`;
  sceneShip.style.top = `${item.ship.top}px`;
  sceneShip.style.transform = `rotate(${item.ship.rotate}deg)`;

  scenePath.style.left = `${item.path.left}px`;
  scenePath.style.top = `${item.path.top}px`;
  scenePath.style.width = `${item.path.width}px`;
  scenePath.style.height = `${item.path.height}px`;
  scenePath.style.transform = `rotate(${item.path.rotate}deg)`;
  scenePath.style.borderTopWidth = `${item.path.borderTop}px`;
  scenePath.style.borderRightWidth = `${item.path.borderRight}px`;
  scenePath.style.borderBottomWidth = `${item.path.borderBottom}px`;
  scenePath.style.borderLeftWidth = `${item.path.borderLeft}px`;
  scenePath.style.borderRadius = item.path.radius;
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
    ? "太厲害了，你已經抓到軌道最重要的感覺。"
    : "很棒，你已經知道軌道不是停在天上，而是被拉著一直往前跑。";
  quizNext.hidden = true;
});

renderPlay("fall");
renderMap("earth");
renderQuestion();
