const modeButtons = [...document.querySelectorAll("[data-mode]")];
const modeKicker = document.querySelector("#mode-kicker");
const modeTitle = document.querySelector("#mode-title");
const modeText = document.querySelector("#mode-text");
const modeJob = document.querySelector("#mode-job");
const modeMemory = document.querySelector("#mode-memory");

const jobButtons = [...document.querySelectorAll("[data-job]")];
const jobKicker = document.querySelector("#job-kicker");
const jobTitle = document.querySelector("#job-title");
const jobText = document.querySelector("#job-text");
const jobMemory = document.querySelector("#job-memory");

const limitButtons = [...document.querySelectorAll("[data-limit]")];
const limitKicker = document.querySelector("#limit-kicker");
const limitTitle = document.querySelector("#limit-title");
const limitText = document.querySelector("#limit-text");
const limitMemory = document.querySelector("#limit-memory");

const quizProgress = document.querySelector("#quiz-progress");
const quizQuestion = document.querySelector("#quiz-question");
const quizOptions = document.querySelector("#quiz-options");
const quizFeedback = document.querySelector("#quiz-feedback");
const quizNext = document.querySelector("#quiz-next");

const modeContent = {
  heading: {
    kicker: "HDG MODE",
    title: "航向模式",
    text: "如果飛行員先設定一個要飛的方向，自動駕駛可以幫忙把飛機穩穩地轉到那個方向，再保持住。",
    job: "把方向盤固定在目標方向",
    memory: "不是自己選方向，是照著設定去做。",
  },
  altitude: {
    kicker: "ALT MODE",
    title: "高度模式",
    text: "如果已經決定好某個高度，自動駕駛可以幫忙爬升、下降，或在到達後穩穩守住那個高度。",
    job: "幫忙守住目標高度",
    memory: "高度是人先決定，自動駕駛幫忙維持。",
  },
  speed: {
    kicker: "SPD MODE",
    title: "速度模式",
    text: "飛機也常常需要守某個速度，自動駕駛或自動油門系統可以幫忙把速度穩穩控制在目標附近。",
    job: "幫忙不要飛太快或太慢",
    memory: "守速度，也是在守目標。",
  },
  approach: {
    kicker: "APP MODE",
    title: "進場模式",
    text: "在進場時，飛機可能需要更精準地跟住進場路線。這時候某些模式會幫忙把路線跟得更準。",
    job: "幫忙精準跟住進場路線",
    memory: "越靠近落地，越需要又穩又準。",
  },
};

const jobContent = {
  steady: {
    kicker: "STEADY FLIGHT",
    title: "幫忙保持平穩",
    text: "飛機在空中需要一直小小地修正。自動駕駛很擅長幫忙做這種穩穩的小修正。",
    memory: "它像一個很專心、很會守住目標的助手。",
  },
  reduce: {
    kicker: "REDUCE WORKLOAD",
    title: "讓飛行員少一直修正",
    text: "如果每一秒都要手動一直修方向、修高度，飛行員會很忙。自動駕駛能分擔很多重複工作。",
    memory: "它不是把人趕走，而是把重複工作接過去。",
  },
  precision: {
    kicker: "PRECISION",
    title: "更穩地守速度高度",
    text: "某些事情電腦很擅長，例如一點點、一點點地守住數值。這種細緻穩定的控制就是它的強項。",
    memory: "會幫忙守得更穩，但前提還是有人先決定目標。",
  },
};

const limitContent = {
  set: {
    kicker: "SET FIRST",
    title: "要先有人設定",
    text: "自動駕駛不是自己醒來就知道要飛哪裡。飛行員要先給它目標，它才知道要幫忙守什麼。",
    memory: "它很會執行，但不是自己發號施令。",
  },
  watch: {
    kicker: "MONITOR",
    title: "要一直有人監看",
    text: "就算自動駕駛正在幫忙飛，也不代表可以完全不看。飛行員還是要一直確認它是不是照預期工作。",
    memory: "有人設定，也要有人盯著看。",
  },
  weather: {
    kicker: "HUMAN DECISION",
    title: "碰到狀況還是要人決定",
    text: "遇到天氣、流量、突發狀況時，真正的判斷和決定還是要靠人來做，不是都交給機器。",
    memory: "複雜情況下，最後做決定的還是人。",
  },
};

const quizItems = [
  { question: "自動駕駛比較像下面哪一個？", options: ["很會幫忙守目標的助手", "完全自己做主的機器人", "會自己選目的地的導航神仙"], answer: "很會幫忙守目標的助手", note: "對。這堂課最重要的觀念就是這一句。" },
  { question: "航向模式最常幫忙守住什麼？", options: ["方向", "機艙餐點", "輪胎大小"], answer: "方向", note: "沒錯。航向模式就是在幫忙守住設定好的方向。" },
  { question: "高度模式最像在幫忙做什麼？", options: ["守住目標高度", "把雲推開", "讓跑道變短"], answer: "守住目標高度", note: "正確。先決定高度，再由系統幫忙穩住。" },
  { question: "自動駕駛開了之後，飛行員是不是就不用看了？", options: ["不是", "是", "只要晚上可以"], answer: "不是", note: "對。還是需要一直監看它有沒有照預期工作。" },
  { question: "碰到突發狀況時，最後誰要做決定？", options: ["人", "自動駕駛自己", "誰都不用"], answer: "人", note: "答對了。複雜情況下，真正做判斷的還是人。" },
];

let currentQuestion = 0;
let score = 0;

function renderMode(key) {
  const item = modeContent[key];
  modeButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.mode === key));
  modeKicker.textContent = item.kicker;
  modeTitle.textContent = item.title;
  modeText.textContent = item.text;
  modeJob.textContent = item.job;
  modeMemory.textContent = item.memory;
}

function renderJob(key) {
  const item = jobContent[key];
  jobButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.job === key));
  jobKicker.textContent = item.kicker;
  jobTitle.textContent = item.title;
  jobText.textContent = item.text;
  jobMemory.textContent = item.memory;
}

function renderLimit(key) {
  const item = limitContent[key];
  limitButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.limit === key));
  limitKicker.textContent = item.kicker;
  limitTitle.textContent = item.title;
  limitText.textContent = item.text;
  limitMemory.textContent = item.memory;
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
      ? "太棒了！你已經知道自動駕駛是怎麼幫忙飛行員的。"
      : `你答對 ${score} 題。再把「幫忙守目標」這個觀念連一次，很快就會更熟。`;
}

modeButtons.forEach((button) => button.addEventListener("click", () => renderMode(button.dataset.mode)));
jobButtons.forEach((button) => button.addEventListener("click", () => renderJob(button.dataset.job)));
limitButtons.forEach((button) => button.addEventListener("click", () => renderLimit(button.dataset.limit)));
quizNext.addEventListener("click", () => {
  currentQuestion += 1;
  if (currentQuestion < quizItems.length) renderQuestion();
  else showResult();
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
renderMode("heading");
renderJob("steady");
renderLimit("set");
renderQuestion();
