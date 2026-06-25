const roleButtons = [...document.querySelectorAll("[data-role]")];
const roleKicker = document.querySelector("#role-kicker");
const roleTitle = document.querySelector("#role-title");
const roleText = document.querySelector("#role-text");
const rolePlace = document.querySelector("#role-place");
const roleJob = document.querySelector("#role-job");
const roleMemory = document.querySelector("#role-memory");

const journeyButtons = [...document.querySelectorAll("[data-step]")];
const journeyKicker = document.querySelector("#journey-kicker");
const journeyTitle = document.querySelector("#journey-title-card");
const journeyText = document.querySelector("#journey-text");
const journeyMemory = document.querySelector("#journey-memory");

const radioButtons = [...document.querySelectorAll("[data-radio]")];
const radioKicker = document.querySelector("#radio-kicker");
const radioTitle = document.querySelector("#radio-title-card");
const radioText = document.querySelector("#radio-text");
const radioPlain = document.querySelector("#radio-plain");

const quizProgress = document.querySelector("#quiz-progress");
const quizQuestion = document.querySelector("#quiz-question");
const quizOptions = document.querySelector("#quiz-options");
const quizFeedback = document.querySelector("#quiz-feedback");
const quizNext = document.querySelector("#quiz-next");

const roleContent = {
  ground: {
    kicker: "GROUND",
    title: "地面管制",
    text: "地面管制主要管飛機在地面怎麼移動，例如從停機坪推出、滑行到跑道附近。",
    place: "停機坪、滑行道、等待線",
    job: "告訴飛機從哪裡滑去跑道",
    memory: "地上找路，先找地面管制。",
  },
  tower: {
    kicker: "TOWER",
    title: "塔台",
    text: "塔台主要負責跑道附近最重要的時刻，例如進跑道、起飛、落地，還有跑道有沒有空。",
    place: "跑道、跑道頭、短距離目視範圍",
    job: "決定可不可以進跑道和起飛落地",
    memory: "跑道最忙的地方，交給塔台看。",
  },
  approach: {
    kicker: "APPROACH",
    title: "近場管制",
    text: "近場管制負責機場附近的空域，幫飛機排好順序，安排離場和進場不要撞在一起。",
    place: "機場周圍空域",
    job: "安排進場和離場的隊形",
    memory: "快到機場時，近場幫你排隊。",
  },
  center: {
    kicker: "CENTER",
    title: "區域管制",
    text: "區域管制負責比較高、比較遠的空域。很多飛機在高空巡航時，主要就是和區管聯絡。",
    place: "較高空、較遠的航路空域",
    job: "管理高空航路和巡航飛機",
    memory: "飛遠又飛高，就交給區管。",
  },
};

const journeyContent = {
  pushback: {
    kicker: "GROUND → TOWER",
    title: "推出與滑行",
    text: "飛機準備離開停機坪時，會先和地面管制聯絡，確認怎麼推、怎麼滑，接近跑道後再交給塔台。",
    memory: "飛機移動到哪裡，幫忙的人就可能換一位。",
  },
  takeoff: {
    kicker: "TOWER",
    title: "起飛前後",
    text: "到了跑道附近，塔台最重要。它要確認跑道有沒有空，也要決定什麼時候可以進跑道和起飛。",
    memory: "只要跟跑道有關，塔台就很重要。",
  },
  climb: {
    kicker: "TOWER → APPROACH",
    title: "離場爬升",
    text: "飛機起飛後不會一直留在塔台手上，很快就會交給近場管制，安排怎麼離開機場周圍空域。",
    memory: "一離開跑道附近，就要開始交接。",
  },
  cruise: {
    kicker: "APPROACH → CENTER",
    title: "高空巡航",
    text: "等飛機越飛越高、越飛越遠，通常就會交給區域管制，在高空航路上繼續飛。",
    memory: "飛高又飛遠，區管接手。",
  },
  arrival: {
    kicker: "CENTER → APPROACH → TOWER → GROUND",
    title: "進場落地",
    text: "回到目的地時，順序會反過來：先從高空回近場，再交塔台落地，最後滑回停機坪又回到地面管制。",
    memory: "去程像往上交，回程像往下交。",
  },
};

const radioContent = {
  ground: {
    kicker: "GROUND EXAMPLE",
    title: "地面對話",
    text: "這時候的大意通常是：「我準備好了，請告訴我該從哪條路滑去跑道附近。」",
    plain: "地面管制像是在機場地面幫飛機導航。",
  },
  tower: {
    kicker: "TOWER EXAMPLE",
    title: "塔台對話",
    text: "這時候的大意通常是：「我到跑道了，現在可不可以進跑道、起飛或落地？」",
    plain: "塔台像是在守最重要的跑道出入口。",
  },
  approach: {
    kicker: "APPROACH EXAMPLE",
    title: "近場對話",
    text: "這時候的大意通常是：「我快靠近機場了，請告訴我怎麼排進場、怎麼轉彎和下降。」",
    plain: "近場管制像在幫很多飛機排隊進門。",
  },
  center: {
    kicker: "CENTER EXAMPLE",
    title: "區域管制對話",
    text: "這時候的大意通常是：「我在高空航路上，請告訴我保持哪個方向和高度繼續飛。」",
    plain: "區管像在管理高速公路上的很多飛機。",
  },
};

const quizItems = [
  { question: "飛機在停機坪推出、滑行時，通常先找誰？", options: ["地面管制", "塔台", "區域管制"], answer: "地面管制", note: "對。只要還在地面上找路，通常先找地面管制。" },
  { question: "哪一個單位最常管跑道能不能進、能不能起飛？", options: ["塔台", "近場管制", "地面管制"], answer: "塔台", note: "正確。跑道附近最重要的決定，通常是塔台在管。" },
  { question: "飛機離開跑道附近後，常常會先交給誰？", options: ["近場管制", "區域管制", "地面管制"], answer: "近場管制", note: "沒錯。近場會接手機場周圍空域的進出安排。" },
  { question: "高空巡航很久、飛很遠時，主要常和誰聯絡？", options: ["區域管制", "塔台", "地面管制"], answer: "區域管制", note: "對了。高空航路通常是區域管制在管理。" },
  { question: "落地之後滑回停機坪，通常又會回到誰手上？", options: ["地面管制", "近場管制", "區域管制"], answer: "地面管制", note: "答對了。落地後回到地面找路，又是地面管制在幫忙。" },
];

let currentQuestion = 0;
let score = 0;

function renderRole(key) {
  const item = roleContent[key];
  roleButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.role === key));
  roleKicker.textContent = item.kicker;
  roleTitle.textContent = item.title;
  roleText.textContent = item.text;
  rolePlace.textContent = item.place;
  roleJob.textContent = item.job;
  roleMemory.textContent = item.memory;
}

function renderJourney(key) {
  const item = journeyContent[key];
  journeyButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.step === key));
  journeyKicker.textContent = item.kicker;
  journeyTitle.textContent = item.title;
  journeyText.textContent = item.text;
  journeyMemory.textContent = item.memory;
}

function renderRadio(key) {
  const item = radioContent[key];
  radioButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.radio === key));
  radioKicker.textContent = item.kicker;
  radioTitle.textContent = item.title;
  radioText.textContent = item.text;
  radioPlain.textContent = item.plain;
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
      ? "太棒了！你已經知道不同飛行階段，會有不同航管單位輪流接手。"
      : `你答對 ${score} 題。再把地面、塔台、近場和區管連一次，很快就會更熟。`;
}

roleButtons.forEach((button) => button.addEventListener("click", () => renderRole(button.dataset.role)));
journeyButtons.forEach((button) => button.addEventListener("click", () => renderJourney(button.dataset.step)));
radioButtons.forEach((button) => button.addEventListener("click", () => renderRadio(button.dataset.radio)));
quizNext.addEventListener("click", () => {
  currentQuestion += 1;
  if (currentQuestion < quizItems.length) renderQuestion();
  else showResult();
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
renderRole("ground");
renderJourney("pushback");
renderRadio("ground");
renderQuestion();
