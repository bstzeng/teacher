const playData = {
  fall: {
    kicker: "TOO SLOW",
    name: "太慢了",
    text: "如果月亮沒有足夠往前跑，就會被地球拉得更靠近，不會維持現在這樣的繞圈。",
    memory: "不是離得遠就安全，還要一直往前跑。",
    moon: { left: 320, top: 176, scale: 1 },
    path: { left: 214, top: 156, width: 156, height: 118, rotate: 18, radius: "0 0 0 130px", topW: 0, rightW: 0, bottomW: 5, leftW: 5 }
  },
  orbit: {
    kicker: "JUST RIGHT",
    name: "剛剛好",
    text: "現在的感覺比較像這樣：月亮一直往前，地球一直拉，所以就穩穩地繞著地球走。",
    memory: "一直往前，又一直被拉著回來。",
    moon: { left: 384, top: 96, scale: 1 },
    path: { left: 212, top: 90, width: 224, height: 148, rotate: -14, radius: "50%", topW: 5, rightW: 5, bottomW: 5, leftW: 5 }
  },
  wide: {
    kicker: "FARTHER",
    name: "更遠一點",
    text: "如果月亮在更遠的地方繞，也還是可能形成軌道，只是圈圈會看起來更大。",
    memory: "遠一點也能繞，只是路線會不一樣。",
    moon: { left: 434, top: 74, scale: 1.05 },
    path: { left: 186, top: 60, width: 290, height: 190, rotate: -14, radius: "50%", topW: 5, rightW: 5, bottomW: 5, leftW: 5 }
  },
  escape: {
    kicker: "TOO FAST",
    name: "太快了",
    text: "如果快到超過地球抓得住的程度，月亮就不會乖乖繞圈，而是一路跑遠。",
    memory: "太快時，就不是繞地球，而是跑掉。",
    moon: { left: 470, top: 82, scale: 1.02 },
    path: { left: 252, top: 124, width: 254, height: 34, rotate: -18, radius: "0", topW: 5, rightW: 0, bottomW: 0, leftW: 0 }
  }
};

const mapData = {
  earth: {
    kicker: "EARTH",
    name: "地球",
    text: "地球的重力一直在影響月亮，所以地球是這個故事的中心。",
    memory: "地球像在拉著月亮一起玩繞圈圈。"
  },
  moon: {
    kicker: "MOON",
    name: "月亮",
    text: "月亮不是一顆停住的小球，而是一個一直往前跑、一直繞著地球動的天體。",
    memory: "月亮一直都在路上。"
  },
  gravity: {
    kicker: "GRAVITY",
    name: "重力方向",
    text: "白色箭頭是在告訴你：地球一直把月亮往自己的方向拉。",
    memory: "有被拉，才會一直靠著地球轉。"
  },
  speed: {
    kicker: "SPEED",
    name: "前進方向",
    text: "藍色箭頭表示月亮一直往前。沒有這個前進，月亮就不會繞圈。",
    memory: "不是只有被拉，還要一直前進。"
  },
  track: {
    kicker: "ORBIT",
    name: "軌道路線",
    text: "金色虛線像月亮的跑道，提醒我們它是在太空中沿著一條路慢慢繞行。",
    memory: "軌道像看不見的太空跑道。"
  }
};

const quizItems = [
  { question: "月亮為什麼不會直接掉到地球上？", options: ["因為它也一直往前跑", "因為天空把它黏住", "因為地球沒有重力"], answer: "因為它也一直往前跑", note: "對，月亮不是停住的，它也有一直往前的速度。" },
  { question: "地球會不會拉月亮？", options: ["會，一直都在拉", "不會，只拉海水", "只在晚上才拉"], answer: "會，一直都在拉", note: "答對了，地球的重力一直在影響月亮。" },
  { question: "月亮現在最像下面哪一種情況？", options: ["剛剛好在繞圈", "完全停住不動", "快到飛走"], answer: "剛剛好在繞圈", note: "沒錯，月亮現在就是一直繞著地球。" },
  { question: "如果月亮完全不往前，最可能怎麼樣？", options: ["會被拉得更靠近地球", "會變成太陽", "會自己發光"], answer: "會被拉得更靠近地球", note: "對，沒有前進速度，就不會維持現在的軌道。" },
  { question: "這堂課最重要的一句話是什麼？", options: ["月亮也在軌道上", "月亮是貼在天空上", "月亮只會跟著雲走"], answer: "月亮也在軌道上", note: "完全正確，這就是這堂課最想記住的事。" }
];

const playButtons = [...document.querySelectorAll(".play-button")];
const playKicker = document.querySelector("#play-kicker");
const playName = document.querySelector("#play-name");
const playText = document.querySelector("#play-text");
const playMemory = document.querySelector("#play-memory");
const playScene = document.querySelector("#play-scene");
const sceneMoon = document.querySelector("#scene-moon");
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

  sceneMoon.style.left = `${item.moon.left}px`;
  sceneMoon.style.top = `${item.moon.top}px`;
  sceneMoon.style.transform = `scale(${item.moon.scale})`;

  scenePath.style.left = `${item.path.left}px`;
  scenePath.style.top = `${item.path.top}px`;
  scenePath.style.width = `${item.path.width}px`;
  scenePath.style.height = `${item.path.height}px`;
  scenePath.style.transform = `rotate(${item.path.rotate}deg)`;
  scenePath.style.borderRadius = item.path.radius;
  scenePath.style.borderTopWidth = `${item.path.topW}px`;
  scenePath.style.borderRightWidth = `${item.path.rightW}px`;
  scenePath.style.borderBottomWidth = `${item.path.bottomW}px`;
  scenePath.style.borderLeftWidth = `${item.path.leftW}px`;
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
    ? "太厲害了，你已經知道月亮也是在軌道上的。"
    : "很棒，你已經抓到月亮不是掛在天上，而是在繞著地球跑。";
  quizNext.hidden = true;
});

renderPlay("fall");
renderMap("earth");
renderQuestion();
