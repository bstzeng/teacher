const waypointButtons = [...document.querySelectorAll("[data-waypoint]")];
const waypointKicker = document.querySelector("#waypoint-kicker");
const waypointTitle = document.querySelector("#waypoint-title");
const waypointText = document.querySelector("#waypoint-text");
const waypointMemory = document.querySelector("#waypoint-memory");
const routePlane = document.querySelector("#route-plane");

const toolButtons = [...document.querySelectorAll("[data-tool]")];
const toolKicker = document.querySelector("#tool-kicker");
const toolTitle = document.querySelector("#tool-title");
const toolText = document.querySelector("#tool-text");
const toolIdea = document.querySelector("#tool-idea");
const toolJob = document.querySelector("#tool-job");
const toolMemory = document.querySelector("#tool-memory");

const planButtons = [...document.querySelectorAll("[data-leg]")];
const planTitle = document.querySelector("#plan-title-card");
const planText = document.querySelector("#plan-text");
const planSequence = document.querySelector("#plan-sequence");
const planReset = document.querySelector("#plan-reset");

const quizProgress = document.querySelector("#quiz-progress");
const quizQuestion = document.querySelector("#quiz-question");
const quizOptions = document.querySelector("#quiz-options");
const quizFeedback = document.querySelector("#quiz-feedback");
const quizNext = document.querySelector("#quiz-next");

const waypointContent = {
  alpha: {
    kicker: "航點 1",
    title: "ALFA",
    text: "這可以想成天空中的一個「路標」。飛機先飛到這裡，再決定下一段要往哪裡去。",
    memory: "航點像天空裡的轉彎點和集合點。",
    plane: { left: "98px", top: "210px" },
  },
  bravo: {
    kicker: "航點 2",
    title: "BRAVO",
    text: "到了這個航點，飛機可能會繼續直飛，也可能開始轉向，接上下一條航路。",
    memory: "飛到一個點，再決定下一個點。",
    plane: { left: "210px", top: "134px" },
  },
  charlie: {
    kicker: "航點 3",
    title: "CHARLIE",
    text: "中間的航點很像高速公路交流道，很多不同方向的飛機都可能經過這裡。",
    memory: "有些航點像空中的交流道。",
    plane: { left: "344px", top: "172px" },
  },
  delta: {
    kicker: "航點 4",
    title: "DELTA",
    text: "最後一個點可能代表你快接近目的地，或準備進入下一段程序，例如開始下降。",
    memory: "快到終點前，通常也還會有最後幾個路標。",
    plane: { left: "430px", top: "80px" },
  },
};

const toolContent = {
  gps: {
    kicker: "SATELLITE",
    title: "GPS / 衛星導航",
    text: "飛機可以用衛星訊號知道自己大概在地圖上的哪裡，很像手機地圖會定位你的位置。",
    idea: "天空版定位系統",
    job: "知道現在大概在哪裡",
    memory: "先知道自己在哪，才知道要往哪。",
  },
  vor: {
    kicker: "GROUND STATION",
    title: "VOR / 地面導航台",
    text: "地面上有一些導航台會發出訊號，飛機可以利用它來判斷自己和導航台的方向關係。",
    idea: "地面上會發訊號的路標",
    job: "幫飛機判斷方向",
    memory: "有時不只看天上，也會看地上的導航點。",
  },
  fms: {
    kicker: "FLIGHT MANAGEMENT",
    title: "FMS / 飛行管理系統",
    text: "FMS 很像飛機裡的大腦之一，會把航點、航路和高度速度規劃整理起來，幫飛機知道下一步。",
    idea: "把整條路線排好的系統",
    job: "整理整趟飛行要怎麼走",
    memory: "不只知道現在在哪，還知道接下來要去哪。",
  },
};

const planOrder = ["departure", "waypoint", "airway", "arrival"];
const planLabels = {
  departure: "起飛離場",
  waypoint: "飛往航點",
  airway: "進入航路",
  arrival: "準備進場",
};
const planTexts = {
  departure: "先從機場出發，離開跑道附近之後，飛機才會慢慢接上外面的航路。",
  waypoint: "接著飛機會往第一個或下一個航點前進，不是只盯著終點飛。",
  airway: "當航點接起來後，飛機就像進入一條空中的主要道路，沿著航路往前。",
  arrival: "快到目的地時，還會接到進場相關的路線，準備下降和靠近機場。",
};

let currentPlan = [];
let currentQuestion = 0;
let score = 0;

const quizItems = [
  { question: "航點最像下面哪一個？", options: ["天空中的路標", "飛機的輪胎", "機場的餐廳"], answer: "天空中的路標", note: "對。航點很像天空裡的路標或轉彎點。" },
  { question: "GPS 最主要幫飛機做什麼？", options: ["知道自己在哪裡", "讓機翼變大", "把跑道變長"], answer: "知道自己在哪裡", note: "沒錯。先定位，才知道怎麼走。" },
  { question: "FMS 比較像在幫飛機做什麼？", options: ["整理整條飛行路線", "擦窗戶", "收起落架"], answer: "整理整條飛行路線", note: "正確。FMS 很像幫忙整理整趟飛行計畫。" },
  { question: "飛機會不會常常只看終點，然後完全不理中間航點？", options: ["不會", "會", "一定每次都一樣"], answer: "不會", note: "對。很多時候會沿著一串航點慢慢接過去。" },
  { question: "哪一句最接近這堂課的重點？", options: ["飛機沿著航點和航路前進", "飛機都靠運氣飛", "飛機只要看到雲就知道方向"], answer: "飛機沿著航點和航路前進", note: "答對了。這就是這堂課最想記住的事。" },
];

function renderWaypoint(key) {
  const item = waypointContent[key];
  waypointButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.waypoint === key));
  waypointKicker.textContent = item.kicker;
  waypointTitle.textContent = item.title;
  waypointText.textContent = item.text;
  waypointMemory.textContent = item.memory;
  routePlane.style.left = item.plane.left;
  routePlane.style.top = item.plane.top;
}

function renderTool(key) {
  const item = toolContent[key];
  toolButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.tool === key));
  toolKicker.textContent = item.kicker;
  toolTitle.textContent = item.title;
  toolText.textContent = item.text;
  toolIdea.textContent = item.idea;
  toolJob.textContent = item.job;
  toolMemory.textContent = item.memory;
}

function renderPlan() {
  if (currentPlan.length === 0) {
    planTitle.textContent = "還沒開始排";
    planText.textContent = "先按第一步，看看一條完整航路會怎麼慢慢接起來。";
    planSequence.textContent = "—";
    return;
  }
  const last = currentPlan[currentPlan.length - 1];
  planTitle.textContent = planLabels[last];
  planText.textContent = planTexts[last];
  planSequence.textContent = currentPlan.map((key) => planLabels[key]).join(" → ");
}

function handlePlan(key) {
  const expected = planOrder[currentPlan.length];
  if (key !== expected) return;
  currentPlan.push(key);
  planButtons.forEach((button) => {
    if (currentPlan.includes(button.dataset.leg)) button.classList.add("is-done");
  });
  renderPlan();
}

function resetPlan() {
  currentPlan = [];
  planButtons.forEach((button) => button.classList.remove("is-done"));
  renderPlan();
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
      ? "太棒了！你已經知道飛機會怎麼沿著航點和航路找方向。"
      : `你答對 ${score} 題。再把航點、航路和導航工具連一次，很快就會更熟。`;
}

waypointButtons.forEach((button) => button.addEventListener("click", () => renderWaypoint(button.dataset.waypoint)));
toolButtons.forEach((button) => button.addEventListener("click", () => renderTool(button.dataset.tool)));
planButtons.forEach((button) => button.addEventListener("click", () => handlePlan(button.dataset.leg)));
planReset.addEventListener("click", resetPlan);
quizNext.addEventListener("click", () => {
  currentQuestion += 1;
  if (currentQuestion < quizItems.length) renderQuestion();
  else showResult();
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
renderWaypoint("alpha");
renderTool("gps");
renderPlan();
renderQuestion();
