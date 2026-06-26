const timelineData = {
  countdown: {
    kicker: "COUNTDOWN",
    name: "倒數準備",
    text: "火箭先站在發射台上，大家要做很多最後確認，所以才會從 10 一路倒數。",
    memory: "倒數不是表演，是最後一次確認真的準備好了沒。",
    rocket: { left: 208, top: 96, rotate: 0, opacity: 1 },
    fire: { opacity: 0, scale: 0.4, height: 50 },
    smoke: { opacity: 0.18, scale: 0.8, x: 0, y: 0 },
    stage: { opacity: 0, top: 218 }
  },
  ignition: {
    kicker: "IGNITION",
    name: "點火噴發",
    text: "點火後，火箭底下會先噴出很熱很快的氣體，這時候整個發射台附近會出現超大的火焰和煙。",
    memory: "先看到很大的噴發，推力才會開始把火箭往上推。",
    rocket: { left: 208, top: 92, rotate: 0, opacity: 1 },
    fire: { opacity: 1, scale: 1, height: 92 },
    smoke: { opacity: 0.9, scale: 1.1, x: 0, y: 0 },
    stage: { opacity: 0, top: 218 }
  },
  liftoff: {
    kicker: "LIFT-OFF",
    name: "離開地面",
    text: "當往上的推力比往下拉的力量還大，火箭才會真的離開發射台，開始慢慢往上衝。",
    memory: "不是點火就一定會飛，要大到能把自己整支推起來。",
    rocket: { left: 238, top: 30, rotate: 8, opacity: 1 },
    fire: { opacity: 1, scale: 1.15, height: 110 },
    smoke: { opacity: 0.82, scale: 1.15, x: -16, y: 18 },
    stage: { opacity: 0, top: 218 }
  },
  stage: {
    kicker: "STAGING",
    name: "分段前進",
    text: "有些火箭飛到一個階段後，會把用完的部分分開，讓上面的部分繼續飛，這樣就能變輕一點。",
    memory: "該丟掉的重量丟掉，火箭才比較好繼續往前衝。",
    rocket: { left: 256, top: 12, rotate: 12, opacity: 1 },
    fire: { opacity: 1, scale: 0.9, height: 88 },
    smoke: { opacity: 0.4, scale: 0.82, x: 18, y: 32 },
    stage: { opacity: 1, top: 244 }
  }
};

const partData = {
  nose: {
    kicker: "NOSE",
    name: "火箭尖端",
    text: "火箭最上面尖尖的地方要幫忙切開前面的空氣，也讓整支火箭比較容易往上飛。",
    memory: "尖尖的前面，像幫火箭先開路。"
  },
  cabin: {
    kicker: "CABIN",
    name: "乘坐艙或上方載具",
    text: "如果這次任務有太空人，或要把東西送上去，最上面的地方就會放重要的乘坐艙或載具。",
    memory: "上面通常是最重要、最想送上去的部分。"
  },
  fuel: {
    kicker: "FUEL",
    name: "燃料段",
    text: "火箭中間很大一段常常都和燃料有關，因為要往上飛，真的需要很多很多能量。",
    memory: "火箭看起來高高長長，很多地方其實都在幫忙裝能量。"
  },
  fins: {
    kicker: "FINS",
    name: "尾翼",
    text: "火箭下方兩側的翼片會幫忙穩定方向，看起來雖然小，卻是很重要的控制幫手。",
    memory: "火箭下面的小翅膀，像在幫忙它不要亂晃。"
  },
  engine: {
    kicker: "ENGINE",
    name: "引擎與噴嘴",
    text: "火箭最下面的地方會噴出很熱很快的氣體，推力就是從這裡做出來的。",
    memory: "最下面最會噴，也最有力。"
  }
};

const compareData = {
  countdown: {
    kicker: "COUNTDOWN",
    name: "倒數",
    text: "這時候火箭還沒有真的往上飛，所以看得到的是安靜地站著，等最後命令。",
    bars: { fire: "6%", smoke: "10%", height: "2%" }
  },
  ignition: {
    kicker: "IGNITION",
    name: "點火",
    text: "這時候火焰和煙會突然變得很明顯，因為火箭正在努力做出足夠的推力。",
    bars: { fire: "96%", smoke: "88%", height: "8%" }
  },
  climb: {
    kicker: "CLIMB",
    name: "升空",
    text: "真正往上飛之後，最明顯的是高度一直增加，代表火箭已經離開發射台了。",
    bars: { fire: "74%", smoke: "54%", height: "98%" }
  }
};

const timelineButtons = [...document.querySelectorAll(".timeline-button")];
const timelineScene = document.querySelector("#timeline-scene");
const sceneRocket = document.querySelector("#scene-rocket");
const sceneFire = document.querySelector("#scene-fire");
const sceneSmoke = document.querySelector("#scene-smoke");
const sceneStagePiece = document.querySelector("#scene-stage-piece");
const timelineKicker = document.querySelector("#timeline-kicker");
const timelineName = document.querySelector("#timeline-name");
const timelineText = document.querySelector("#timeline-text");
const timelineMemory = document.querySelector("#timeline-memory");

const partHotspots = [...document.querySelectorAll(".part-hotspot")];
const partKicker = document.querySelector("#part-kicker");
const partName = document.querySelector("#part-name");
const partText = document.querySelector("#part-text");
const partMemory = document.querySelector("#part-memory");

const compareButtons = [...document.querySelectorAll(".compare-button")];
const compareKicker = document.querySelector("#compare-kicker");
const compareName = document.querySelector("#compare-name");
const compareText = document.querySelector("#compare-text");
const compareFire = document.querySelector("#compare-fire");
const compareSmoke = document.querySelector("#compare-smoke");
const compareHeight = document.querySelector("#compare-height");

const quizProgress = document.querySelector("#quiz-progress");
const quizQuestion = document.querySelector("#quiz-question");
const quizOptions = document.querySelector("#quiz-options");
const quizFeedback = document.querySelector("#quiz-feedback");
const quizNext = document.querySelector("#quiz-next");

const quizItems = [
  { question: "火箭最重要的往上力量，來自哪裡？", options: ["往下噴出的氣體", "月亮拉它", "風把它吹上去"], answer: "往下噴出的氣體", note: "對，火箭靠往下噴，得到往上的推力。" },
  { question: "倒數最像在做什麼？", options: ["最後確認準備", "讓火箭睡覺", "把雲趕走"], answer: "最後確認準備", note: "答對了，倒數是升空前最後確認。" },
  { question: "火箭分段最大的好處是什麼？", options: ["讓自己變輕", "讓顏色更亮", "讓天空變黑"], answer: "讓自己變輕", note: "沒錯，丟掉用完的部分，剩下的比較容易繼續飛。" },
  { question: "火箭最下面最重要的是哪個地方？", options: ["引擎和噴嘴", "窗戶", "最上面的尖端"], answer: "引擎和噴嘴", note: "對，最下面是做出推力的地方。" },
  { question: "下面哪一句最接近這堂課重點？", options: ["火箭靠推力升空", "火箭自己會飄起來", "火箭靠雲朵托住"], answer: "火箭靠推力升空", note: "完全正確，這就是這堂課最想記住的事。" }
];

let currentQuestion = 0;
let score = 0;

function renderTimeline(key) {
  const item = timelineData[key];
  timelineButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.step === key));
  timelineScene.dataset.scene = key;
  timelineKicker.textContent = item.kicker;
  timelineName.textContent = item.name;
  timelineText.textContent = item.text;
  timelineMemory.textContent = item.memory;

  sceneRocket.style.left = `${item.rocket.left}px`;
  sceneRocket.style.top = `${item.rocket.top}px`;
  sceneRocket.style.transform = `rotate(${item.rocket.rotate}deg)`;
  sceneRocket.style.opacity = item.rocket.opacity;

  sceneFire.style.opacity = item.fire.opacity;
  sceneFire.style.transform = `scaleY(${item.fire.scale})`;
  sceneFire.style.height = `${item.fire.height}px`;

  sceneSmoke.style.opacity = item.smoke.opacity;
  sceneSmoke.style.transform = `translate(${item.smoke.x}px, ${item.smoke.y}px) scale(${item.smoke.scale})`;

  sceneStagePiece.style.opacity = item.stage.opacity;
  sceneStagePiece.style.top = `${item.stage.top}px`;
}

function renderPart(key) {
  const item = partData[key];
  partHotspots.forEach((hotspot) => hotspot.classList.toggle("is-active", hotspot.dataset.part === key));
  partKicker.textContent = item.kicker;
  partName.textContent = item.name;
  partText.textContent = item.text;
  partMemory.textContent = item.memory;
}

function renderCompare(key) {
  const item = compareData[key];
  compareButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.mode === key));
  compareKicker.textContent = item.kicker;
  compareName.textContent = item.name;
  compareText.textContent = item.text;
  compareFire.style.width = item.bars.fire;
  compareSmoke.style.width = item.bars.smoke;
  compareHeight.style.width = item.bars.height;
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
      ? "太棒了！你已經知道火箭要靠很大的推力，才能真的離開地球。"
      : `你答對 ${score} 題。再把推力、點火、分段和火箭部位看一次，就會更熟。`;
}

timelineButtons.forEach((button) => button.addEventListener("click", () => renderTimeline(button.dataset.step)));
partHotspots.forEach((hotspot) => hotspot.addEventListener("click", () => renderPart(hotspot.dataset.part)));
compareButtons.forEach((button) => button.addEventListener("click", () => renderCompare(button.dataset.mode)));
quizNext.addEventListener("click", () => {
  currentQuestion += 1;
  if (currentQuestion < quizItems.length) renderQuestion();
  else showResult();
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
renderTimeline("countdown");
renderPart("nose");
renderCompare("countdown");
renderQuestion();
