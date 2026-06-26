const playData = {
  new: {
    kicker: "NEW MOON",
    name: "新月",
    text: "這時候月亮亮的一面大多朝向太陽，不是朝向地球，所以我們很難看見它。",
    memory: "看不太到，不代表月亮不見了。",
    className: "new"
  },
  first: {
    kicker: "FIRST QUARTER",
    name: "上弦月",
    text: "月亮走到旁邊時，我們會看到一半亮、一半暗，看起來像半個月亮。",
    memory: "它不是半顆，只是亮面只看到一半。",
    className: "first"
  },
  full: {
    kicker: "FULL MOON",
    name: "滿月",
    text: "這時候我們大多能看到月亮被照亮的那一面，所以月亮看起來最圓、最亮。",
    memory: "滿月最圓，是因為亮面幾乎都朝向我們。",
    className: "full"
  },
  last: {
    kicker: "LAST QUARTER",
    name: "下弦月",
    text: "再繼續繞下去，又會回到只看到一半亮面的樣子，只是方向跟上弦月相反。",
    memory: "半月不只一種，左右會不一樣。",
    className: "last"
  }
};

const mapData = {
  sun: {
    kicker: "SUN",
    name: "太陽",
    text: "太陽像一盞超大的燈，一直照亮月亮的一半。月相故事就是從這裡開始的。",
    memory: "沒有太陽光，就沒有月相可以看。"
  },
  earth: {
    kicker: "EARTH",
    name: "地球",
    text: "我們站在地球上看月亮，所以月相其實是在說：地球上的我們現在看到哪一面。",
    memory: "月相是從地球看的角度。"
  },
  moon: {
    kicker: "MOON",
    name: "月亮",
    text: "月亮一直都是圓的，不會真的變胖變瘦，改變的是我們看到亮面的比例。",
    memory: "月亮本體沒變，視角變了。"
  },
  light: {
    kicker: "LIGHT",
    name: "太陽光方向",
    text: "這條光線提醒你：月亮亮亮的地方，是被太陽照到的那一側。",
    memory: "先找太陽在哪邊，就比較容易猜月相。"
  },
  track: {
    kicker: "ORBIT",
    name: "月球軌道",
    text: "月亮沿著軌道慢慢繞地球，位置一改，我們看到的亮面角度也跟著改。",
    memory: "月相是月亮繞圈後的視角變化。"
  }
};

const quizItems = [
  { question: "月亮為什麼會有陰晴圓缺？", options: ["因為我們看到的亮面角度不同", "因為月亮會變形", "因為雲把它咬掉"], answer: "因為我們看到的亮面角度不同", note: "對，月亮一直是圓的，變的是我們看到的亮面。" },
  { question: "月亮本身會不會自己發光？", options: ["不會，是太陽照亮它", "會，像燈泡一樣", "只有滿月會"], answer: "不會，是太陽照亮它", note: "答對了，月亮亮是因為被太陽照亮。" },
  { question: "新月是不是月亮消失了？", options: ["不是，只是亮面不太朝向我們", "是，月亮休息了", "是，被地球蓋住了"], answer: "不是，只是亮面不太朝向我們", note: "沒錯，新月不是不見，而是比較難看見。" },
  { question: "滿月看起來最圓，通常代表什麼？", options: ["我們看到比較多被照亮的那一面", "月亮真的變大了", "太陽跑到月亮裡面"], answer: "我們看到比較多被照亮的那一面", note: "對，滿月是看到大部分亮面。" },
  { question: "這堂課最重要的一句話是什麼？", options: ["月亮一直是圓的", "月亮每天會換形狀", "月亮只在晚上存在"], answer: "月亮一直是圓的", note: "完全正確，這是理解月相最重要的一句。" }
];

const playButtons = [...document.querySelectorAll(".play-button")];
const playKicker = document.querySelector("#play-kicker");
const playName = document.querySelector("#play-name");
const playText = document.querySelector("#play-text");
const playMemory = document.querySelector("#play-memory");
const playScene = document.querySelector("#play-scene");
const sceneMoon = document.querySelector("#scene-moon");

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
  sceneMoon.className = `scene-moon ${item.className}`;
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
    ? "太厲害了，你已經抓到月相最重要的想法。"
    : "很棒，你已經知道月亮沒有變形，變的是我們看到的亮面。";
  quizNext.hidden = true;
});

renderPlay("new");
renderMap("sun");
renderQuestion();
