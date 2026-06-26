const playData = {
  clear: {
    kicker: "CLEAR DAY",
    name: "晴朗白天",
    text: "如果天空很乾淨、月亮位置又剛好，白天其實很常能看到它。",
    memory: "白天看得到月亮，是正常不是魔法。",
    moonTop: 120,
    moonRight: 118,
    moonOpacity: 0.8,
    scene: "day"
  },
  high: {
    kicker: "HIGH IN SKY",
    name: "位置高一點",
    text: "月亮位置高時，有時會比較容易被看到，因為不容易被地平線附近的霧氣干擾。",
    memory: "有時不是沒有月亮，是你還沒往更高的地方找。",
    moonTop: 74,
    moonRight: 132,
    moonOpacity: 0.74,
    scene: "day"
  },
  faint: {
    kicker: "FAINT",
    name: "很淡的時候",
    text: "有些白天月亮看起來超淡，是因為天空太亮、月亮亮面也不夠明顯。",
    memory: "白天月亮像淡淡粉筆痕，不是每次都很清楚。",
    moonTop: 132,
    moonRight: 102,
    moonOpacity: 0.38,
    scene: "day"
  },
  night: {
    kicker: "AT NIGHT",
    name: "晚上對照",
    text: "到了晚上，背景天空變暗，月亮就會一下子變得比較明顯。",
    memory: "月亮不是變大了，是背景變暗了。",
    moonTop: 106,
    moonRight: 118,
    moonOpacity: 0.98,
    scene: "night"
  }
};

const mapData = {
  sun: {
    kicker: "SUN",
    name: "太陽",
    text: "白天天空很亮，主要就是因為太陽在工作。這也是月亮有時比較不明顯的原因。",
    memory: "太陽太亮時，月亮就比較像淡淡的鉛筆畫。"
  },
  moon: {
    kicker: "MOON",
    name: "月亮",
    text: "月亮白天也可能在天空裡，只是有時候不夠亮、不夠顯眼，所以比較難注意到。",
    memory: "月亮不是只屬於晚上。"
  },
  sky: {
    kicker: "SKY",
    name: "藍天天空",
    text: "藍天天空像很亮的背景布幕，會讓原本就不算很亮的月亮變得比較低調。",
    memory: "背景太亮時，主角就比較不搶眼。"
  },
  light: {
    kicker: "LIGHT",
    name: "陽光方向",
    text: "陽光讓天空變亮，也讓月亮有亮面。這兩件事同時發生，所以白天月亮有時比較難找。",
    memory: "太陽一邊幫月亮發亮，一邊又讓天空變亮。"
  },
  look: {
    kicker: "LOOK",
    name: "觀察方向",
    text: "找白天月亮常常需要先知道大概在哪裡，再慢慢看，不能只隨便瞄一下。",
    memory: "知道往哪裡找，就會突然比較容易看到。"
  }
};

const quizItems = [
  { question: "白天看到月亮正常嗎？", options: ["正常，很常會發生", "不正常，一定是特別事件", "只有動畫裡才有"], answer: "正常，很常會發生", note: "對，白天看到月亮其實很正常。" },
  { question: "為什麼白天月亮有時不明顯？", options: ["因為天空很亮", "因為月亮躲起來", "因為月亮只在晚上發光"], answer: "因為天空很亮", note: "答對了，白天天空太亮時，月亮會顯得很淡。" },
  { question: "月亮是不是只能晚上出現？", options: ["不是，白天也可能出現", "是，只能晚上", "只有冬天白天才行"], answer: "不是，白天也可能出現", note: "沒錯，月亮沒有規定只能晚上出現。" },
  { question: "晚上月亮看起來比較明顯，常常是因為什麼？", options: ["背景天空變暗了", "月亮忽然變大", "月亮換了一顆"], answer: "背景天空變暗了", note: "對，背景暗了，月亮就更容易被看見。" },
  { question: "這堂課最重要的一句話是什麼？", options: ["白天月亮很正常", "白天不可能有月亮", "月亮怕太陽"], answer: "白天月亮很正常", note: "完全正確，這就是這堂課最想記住的事。" }
];

const playButtons = [...document.querySelectorAll(".play-button")];
const playKicker = document.querySelector("#play-kicker");
const playName = document.querySelector("#play-name");
const playText = document.querySelector("#play-text");
const playMemory = document.querySelector("#play-memory");
const playScene = document.querySelector("#play-scene");
const sceneMoon = document.querySelector("#scene-moon");
const sceneClouds = [...document.querySelectorAll(".scene-cloud")];

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
  playScene.dataset.mode = item.scene;
  playKicker.textContent = item.kicker;
  playName.textContent = item.name;
  playText.textContent = item.text;
  playMemory.textContent = item.memory;
  sceneMoon.style.top = `${item.moonTop}px`;
  sceneMoon.style.right = `${item.moonRight}px`;
  sceneMoon.style.opacity = item.moonOpacity;
  sceneClouds.forEach((cloud) => {
    cloud.style.opacity = mode === "night" ? "0.1" : "1";
  });
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
    ? "太厲害了，你已經抓到白天月亮的重點。"
    : "很棒，你已經知道白天看到月亮不是怪事。";
  quizNext.hidden = true;
});

renderPlay("clear");
renderMap("sun");
renderQuestion();
