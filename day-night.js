const playData = {
  morning: {
    kicker: "MORNING",
    name: "早上",
    text: "你住的地方正慢慢轉進亮面，所以天亮了，太陽看起來像要升起來。",
    memory: "早上像剛剛轉到燈光前面。",
    person: { right: 208, top: 226 }
  },
  noon: {
    kicker: "NOON",
    name: "中午",
    text: "你住的地方比較正對著太陽，所以這時候通常會最亮、影子也比較短。",
    memory: "中午像正對著大燈。",
    person: { right: 236, top: 182 }
  },
  evening: {
    kicker: "EVENING",
    name: "傍晚",
    text: "你住的地方正慢慢轉離亮面，所以天色會越來越暗，看起來像太陽要下山了。",
    memory: "傍晚像慢慢轉離燈光。",
    person: { right: 208, top: 138 }
  },
  night: {
    kicker: "MIDNIGHT",
    name: "半夜",
    text: "你住的地方已經轉到背著太陽的那一邊，所以你那裡就是晚上。",
    memory: "半夜像站在背光那一面。",
    person: { right: 154, top: 182 }
  }
};

const mapData = {
  sun: {
    kicker: "SUN",
    name: "太陽",
    text: "太陽像一盞很遠很遠的大燈，會讓地球的一邊亮、另一邊暗。",
    memory: "先找太陽在哪邊，再看哪邊亮。"
  },
  day: {
    kicker: "DAY SIDE",
    name: "亮面",
    text: "地球面向太陽的這一半就是白天，所以不同國家會輪流轉進這一面。",
    memory: "亮面就是白天那一邊。"
  },
  night: {
    kicker: "NIGHT SIDE",
    name: "暗面",
    text: "背著太陽的這一半就是晚上，所以半夜不是太陽不見了，而是你轉到暗面了。",
    memory: "暗面就是晚上那一邊。"
  },
  spin: {
    kicker: "SPIN",
    name: "自轉方向",
    text: "藍色箭頭提醒你：地球一直在轉，所以白天和晚上會輪流來。",
    memory: "不轉就不會有白天晚上的輪替。"
  },
  person: {
    kicker: "YOU",
    name: "地球上的人",
    text: "你住的地方就像地球表面的一個小點，跟著地球一起轉，所以時間也會改變。",
    memory: "是你跟著地球轉，不是太陽專門繞著你走。"
  }
};

const quizItems = [
  { question: "白天和晚上最主要是因為什麼？", options: ["地球自己在轉", "太陽開燈關燈", "月亮把太陽推走"], answer: "地球自己在轉", note: "對，白天和晚上最重要的原因是地球自轉。" },
  { question: "地球是不是同一時間全部都白天？", options: ["不是，一半亮一半暗", "是，會一起亮", "只有夏天才不是"], answer: "不是，一半亮一半暗", note: "答對了，同一時間本來就有亮面和暗面。" },
  { question: "晚上是因為太陽消失了嗎？", options: ["不是，是你轉到背光那一面", "是，太陽下班了", "是，月亮把太陽吃掉"], answer: "不是，是你轉到背光那一面", note: "沒錯，晚上是因為你那裡轉到暗面。" },
  { question: "中午通常代表什麼？", options: ["你那裡比較正對著太陽", "太陽最遠", "地球停止轉動"], answer: "你那裡比較正對著太陽", note: "對，中午像比較正對著太陽。" },
  { question: "這堂課最重要的一句話是什麼？", options: ["白天晚上是地球自轉造成的", "太陽每天繞地球一圈", "晚上是地球關燈"], answer: "白天晚上是地球自轉造成的", note: "完全正確，這就是這堂課最重要的想法。" }
];

const playButtons = [...document.querySelectorAll(".play-button")];
const playKicker = document.querySelector("#play-kicker");
const playName = document.querySelector("#play-name");
const playText = document.querySelector("#play-text");
const playMemory = document.querySelector("#play-memory");
const scenePerson = document.querySelector("#scene-person");
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
  scenePerson.style.right = `${item.person.right}px`;
  scenePerson.style.top = `${item.person.top}px`;
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
    ? "太厲害了，你已經抓到白天和晚上的重點。"
    : "很棒，你已經知道白天晚上是地球自轉造成的。";
  quizNext.hidden = true;
});

renderPlay("morning");
renderMap("sun");
renderQuestion();
