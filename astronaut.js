const timelineData = {
  prep: {
    kicker: "SUIT UP",
    name: "準備裝備",
    text: "太空人先穿好裝備，做最後確認。這時候最重要的是確定人和裝備都準備好了。",
    memory: "先把自己準備好，才有辦法安全上去。",
    person: { left: 94, top: 214, rotate: 0, opacity: 1 },
    helmet: { left: 88, top: 178, rotate: 0, opacity: 1 },
    seat: 0,
    stars: 0,
    rocket: { left: 248, top: 86, rotate: 0 }
  },
  boarding: {
    kicker: "BOARDING",
    name: "坐進座艙",
    text: "太空人接著會坐進火箭上面的座艙裡，準備真正出發。",
    memory: "真正載人的地方通常在上面，不是靠近火焰的下面。",
    person: { left: 274, top: 154, rotate: 0, opacity: 1 },
    helmet: { left: 268, top: 120, rotate: 0, opacity: 1 },
    seat: 1,
    stars: 0,
    rocket: { left: 248, top: 86, rotate: 0 }
  },
  launch: {
    kicker: "STRAP IN",
    name: "發射固定",
    text: "發射時太空人要固定好自己，因為震動和推力都會變得很明顯。",
    memory: "不是坐著就好，還要被穩穩固定住。",
    person: { left: 280, top: 172, rotate: 90, opacity: 1 },
    helmet: { left: 304, top: 168, rotate: 90, opacity: 1 },
    seat: 1,
    stars: 0,
    rocket: { left: 248, top: 76, rotate: 0 }
  },
  space: {
    kicker: "IN SPACE",
    name: "進入太空",
    text: "等火箭把太空人送到更高更遠的地方，外面的天空就會越來越像太空。",
    memory: "這時候任務才真的從地球上方開始。",
    person: { left: 290, top: 128, rotate: 18, opacity: 0.92 },
    helmet: { left: 324, top: 116, rotate: 18, opacity: 0.92 },
    seat: 0,
    stars: 1,
    rocket: { left: 290, top: 34, rotate: 10 }
  }
};

const cabinData = {
  window: {
    kicker: "WINDOW",
    name: "圓窗",
    text: "座艙裡通常會有窗，讓太空人知道外面大概是什麼狀況，也能幫助觀察。",
    memory: "在太空船裡，窗戶像幫忙看外面的眼睛。"
  },
  seat: {
    kicker: "SEAT",
    name: "座椅",
    text: "太空人不是站著上去，而是坐在特別設計過的座椅裡，幫忙分散發射時的力量。",
    memory: "座椅不是普通椅子，是幫忙撐住身體的重要地方。"
  },
  belt: {
    kicker: "BELT",
    name: "安全帶",
    text: "發射時身體不能亂晃，所以太空人會被安全帶穩穩固定住。",
    memory: "推力很大時，安全帶像在幫忙抱住太空人。"
  },
  panel: {
    kicker: "PANEL",
    name: "控制面板",
    text: "座艙裡會有控制和顯示的地方，讓任務人員知道現在情況怎麼樣。",
    memory: "很多按鈕不是拿來亂按，是幫忙知道任務有沒有正常。"
  },
  helmet: {
    kicker: "HELMET",
    name: "頭盔",
    text: "頭盔是太空裝備很重要的一部分，可以保護頭部，也讓太空人更安全。",
    memory: "頭盔像太空人的透明保護罩。"
  }
};

const compareData = {
  suit: {
    kicker: "SPACE SUIT",
    name: "太空衣",
    text: "太空衣最像保護用的外殼。它不是拿來讓太空人飛比較快，而是幫忙保護身體。",
    bars: { protect: "95%", hold: "34%", move: "18%" }
  },
  seat: {
    kicker: "SEAT & BELT",
    name: "座椅固定",
    text: "座椅和安全帶最像穩穩固定住身體的幫手，特別是在發射那一刻很重要。",
    bars: { protect: "56%", hold: "98%", move: "24%" }
  },
  rocket: {
    kicker: "ROCKET RIDE",
    name: "火箭運送",
    text: "真的把太空人往上送的是火箭。它最像整趟任務的大力搬運車。",
    bars: { protect: "42%", hold: "42%", move: "96%" }
  }
};

const timelineButtons = [...document.querySelectorAll(".timeline-button")];
const timelineKicker = document.querySelector("#timeline-kicker");
const timelineName = document.querySelector("#timeline-name");
const timelineText = document.querySelector("#timeline-text");
const timelineMemory = document.querySelector("#timeline-memory");
const scenePerson = document.querySelector("#scene-person");
const sceneHelmet = document.querySelector("#scene-helmet");
const sceneSeat = document.querySelector("#scene-seat");
const sceneStars = document.querySelector("#scene-stars");
const sceneRocket = document.querySelector(".scene-rocket");
const sceneCapsule = document.querySelector(".scene-capsule");

const cabinHotspots = [...document.querySelectorAll(".cabin-hotspot")];
const cabinKicker = document.querySelector("#cabin-kicker");
const cabinName = document.querySelector("#cabin-name");
const cabinText = document.querySelector("#cabin-text");
const cabinMemory = document.querySelector("#cabin-memory");

const compareButtons = [...document.querySelectorAll(".compare-button")];
const compareKicker = document.querySelector("#compare-kicker");
const compareName = document.querySelector("#compare-name");
const compareText = document.querySelector("#compare-text");
const compareProtect = document.querySelector("#compare-protect");
const compareHold = document.querySelector("#compare-hold");
const compareMove = document.querySelector("#compare-move");

const quizProgress = document.querySelector("#quiz-progress");
const quizQuestion = document.querySelector("#quiz-question");
const quizOptions = document.querySelector("#quiz-options");
const quizFeedback = document.querySelector("#quiz-feedback");
const quizNext = document.querySelector("#quiz-next");

const quizItems = [
  { question: "太空人通常坐在哪裡去太空？", options: ["火箭上面的座艙裡", "火箭外面抱著", "站在火箭旁邊"], answer: "火箭上面的座艙裡", note: "對，太空人通常坐在受保護的座艙裡。" },
  { question: "發射時為什麼要固定好自己？", options: ["因為震動和推力很大", "因為想睡覺", "因為座艙太小"], answer: "因為震動和推力很大", note: "答對了，發射時身體要穩穩固定住。" },
  { question: "太空衣最像什麼？", options: ["保護用的外殼", "讓人變快的鞋子", "火箭的小翅膀"], answer: "保護用的外殼", note: "沒錯，太空衣最重要的是保護。" },
  { question: "太空人是不是自己跳上太空？", options: ["不是，是火箭送上去", "是，自己跳上去", "只有月亮上才是"], answer: "不是，是火箭送上去", note: "對，是火箭負責把太空人送上去。" },
  { question: "下面哪一句最接近這堂課重點？", options: ["太空人坐進座艙被送上太空", "太空人自己飛上去", "太空人坐在火焰旁邊"], answer: "太空人坐進座艙被送上太空", note: "完全正確，這就是這堂課最想記住的事。" }
];

let currentQuestion = 0;
let score = 0;

function renderTimeline(key) {
  const item = timelineData[key];
  timelineButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.step === key));
  timelineKicker.textContent = item.kicker;
  timelineName.textContent = item.name;
  timelineText.textContent = item.text;
  timelineMemory.textContent = item.memory;

  scenePerson.style.left = `${item.person.left}px`;
  scenePerson.style.top = `${item.person.top}px`;
  scenePerson.style.transform = `rotate(${item.person.rotate}deg)`;
  scenePerson.style.opacity = item.person.opacity;

  sceneHelmet.style.left = `${item.helmet.left}px`;
  sceneHelmet.style.top = `${item.helmet.top}px`;
  sceneHelmet.style.transform = `rotate(${item.helmet.rotate}deg)`;
  sceneHelmet.style.opacity = item.helmet.opacity;

  sceneSeat.style.opacity = item.seat;
  sceneStars.style.opacity = item.stars;
  sceneRocket.style.left = `${item.rocket.left}px`;
  sceneRocket.style.top = `${item.rocket.top}px`;
  sceneRocket.style.transform = `rotate(${item.rocket.rotate}deg)`;
  sceneCapsule.style.left = `${item.rocket.left + 6}px`;
  sceneCapsule.style.top = `${item.rocket.top - 42}px`;
  sceneCapsule.style.transform = `rotate(${item.rocket.rotate}deg)`;
}

function renderCabin(key) {
  const item = cabinData[key];
  cabinHotspots.forEach((hotspot) => hotspot.classList.toggle("is-active", hotspot.dataset.part === key));
  cabinKicker.textContent = item.kicker;
  cabinName.textContent = item.name;
  cabinText.textContent = item.text;
  cabinMemory.textContent = item.memory;
}

function renderCompare(key) {
  const item = compareData[key];
  compareButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.mode === key));
  compareKicker.textContent = item.kicker;
  compareName.textContent = item.name;
  compareText.textContent = item.text;
  compareProtect.style.width = item.bars.protect;
  compareHold.style.width = item.bars.hold;
  compareMove.style.width = item.bars.move;
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
      ? "太棒了！你已經知道太空人是怎麼被安全送上太空的。"
      : `你答對 ${score} 題。再把裝備、座艙和固定姿勢看一次，就會更熟。`;
}

timelineButtons.forEach((button) => button.addEventListener("click", () => renderTimeline(button.dataset.step)));
cabinHotspots.forEach((hotspot) => hotspot.addEventListener("click", () => renderCabin(hotspot.dataset.part)));
compareButtons.forEach((button) => button.addEventListener("click", () => renderCompare(button.dataset.mode)));
quizNext.addEventListener("click", () => {
  currentQuestion += 1;
  if (currentQuestion < quizItems.length) renderQuestion();
  else showResult();
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
renderTimeline("prep");
renderCabin("window");
renderCompare("suit");
renderQuestion();
