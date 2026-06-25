const holdButtons = [...document.querySelectorAll("[data-hold]")];
const holdKicker = document.querySelector("#hold-kicker");
const holdTitle = document.querySelector("#hold-title");
const holdText = document.querySelector("#hold-text");
const holdMemory = document.querySelector("#hold-memory");

const balanceCards = [...document.querySelectorAll("[data-balance]")];
const balanceKicker = document.querySelector("#balance-kicker");
const balanceTitle = document.querySelector("#balance-title-card");
const balanceText = document.querySelector("#balance-text");
const balanceMemory = document.querySelector("#balance-memory");

const bagButtons = [...document.querySelectorAll("[data-bag][data-slot]")];
const gameTitle = document.querySelector("#game-title-card");
const gameText = document.querySelector("#game-text");
const gameMemory = document.querySelector("#game-memory");
const cargoReset = document.querySelector("#cargo-reset");

const quizProgress = document.querySelector("#quiz-progress");
const quizQuestion = document.querySelector("#quiz-question");
const quizOptions = document.querySelector("#quiz-options");
const quizFeedback = document.querySelector("#quiz-feedback");
const quizNext = document.querySelector("#quiz-next");

const holdContent = {
  front: {
    kicker: "FRONT HOLD",
    title: "前貨艙",
    text: "前貨艙是飛機前半段的重要配重區之一。東西放在這裡，會影響飛機前後平衡。",
    memory: "不是只有有沒有裝，還要看裝在哪裡。",
  },
  center: {
    kicker: "CENTER AREA",
    title: "中間區域",
    text: "中間附近通常比較接近平衡核心，所以常常是很重要的參考區域。",
    memory: "越靠近平衡中心，影響感覺通常越穩一些。",
  },
  rear: {
    kicker: "REAR HOLD",
    title: "後貨艙",
    text: "後貨艙放太多太重的東西，也會讓飛機的整體平衡往後偏。",
    memory: "前後都不能太極端，重點是落在安全範圍內。",
  },
};

const balanceContent = {
  center: {
    kicker: "GOOD BALANCE",
    title: "平衡剛好",
    text: "飛機最喜歡的狀態不是「隨便平均」，而是落在合適範圍內，讓操縱和性能都比較正常。",
    memory: "不是越多越好，也不是越平均越好，而是要在安全範圍裡。",
  },
  frontheavy: {
    kicker: "TOO FAR FORWARD",
    title: "前面太重",
    text: "如果前面太重，飛機整體感覺會太往前壓。這不是理想的配重方式。",
    memory: "太前面不行，太後面也不行。",
  },
  rearheavy: {
    kicker: "TOO FAR BACK",
    title: "後面太重",
    text: "如果後面太重，飛機整體感覺會太往後偏，這同樣不是理想狀態。",
    memory: "配重不是只看重量，還要看位置。",
  },
};

const bagWeights = { small: 1, medium: 2, large: 3 };
const slotValues = { front: -1, center: 0, rear: 1 };
let placements = {};

const quizItems = [
  { question: "飛機裝行李時，最重要的不只是什麼？", options: ["有沒有裝得平衡", "有沒有裝得很多", "有沒有裝得好看"], answer: "有沒有裝得平衡", note: "對。不是只看能不能塞進去，還要看平衡。" },
  { question: "如果很多重物都放在很後面，可能會怎樣？", options: ["後面太重", "前面太重", "完全沒差"], answer: "後面太重", note: "沒錯。位置不同，感覺就不同。" },
  { question: "載重平衡最像下面哪一個？", options: ["翹翹板", "窗簾", "餐盒"], answer: "翹翹板", note: "正確。這堂課就是用翹翹板感覺來理解。" },
  { question: "中間區域通常給人的感覺比較像什麼？", options: ["比較接近平衡中心", "一定最重", "一定不能放東西"], answer: "比較接近平衡中心", note: "對。中間常常比較接近平衡核心。" },
  { question: "下面哪一句最接近這堂課重點？", options: ["重量和位置都很重要", "只要塞得進去就好", "後面永遠不能放行李"], answer: "重量和位置都很重要", note: "答對了。這就是這堂課的主軸。" },
];

let currentQuestion = 0;
let score = 0;

function renderHold(key) {
  const item = holdContent[key];
  holdButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.hold === key));
  holdKicker.textContent = item.kicker;
  holdTitle.textContent = item.title;
  holdText.textContent = item.text;
  holdMemory.textContent = item.memory;
}

function renderBalance(key) {
  const item = balanceContent[key];
  balanceCards.forEach((button) => button.classList.toggle("is-active", button.dataset.balance === key));
  balanceKicker.textContent = item.kicker;
  balanceTitle.textContent = item.title;
  balanceText.textContent = item.text;
  balanceMemory.textContent = item.memory;
}

function summarizeGame() {
  const keys = Object.keys(placements);
  if (keys.length === 0) {
    gameTitle.textContent = "還沒開始";
    gameText.textContent = "先把三個箱子放進去，看看現在的感覺是太前、太後，還是剛剛好。";
    gameMemory.textContent = "—";
    return;
  }

  const scoreValue = keys.reduce((sum, key) => sum + bagWeights[key] * slotValues[placements[key]], 0);
  const summary = keys.map((key) => `${key}:${placements[key]}`).join(" / ");
  gameMemory.textContent = summary;

  if (keys.length < 3) {
    gameTitle.textContent = "還沒放完";
    gameText.textContent = "你已經開始配重了，再把剩下箱子放完，才看得出整體結果。";
    return;
  }

  if (scoreValue === 0) {
    gameTitle.textContent = "剛剛好";
    gameText.textContent = "這組配置落在很平衡的感覺上，代表你有一起想到重量和位置。";
  } else if (scoreValue < 0) {
    gameTitle.textContent = "太前面";
    gameText.textContent = "這組配置比較往前壓，表示前面放得太重或太多。";
  } else {
    gameTitle.textContent = "太後面";
    gameText.textContent = "這組配置比較往後偏，表示後面放得太重或太多。";
  }
}

function resetGame() {
  placements = {};
  summarizeGame();
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
      ? "太棒了！你已經知道貨艙不是亂塞，而是要一起看重量和位置。"
      : `你答對 ${score} 題。再把「重量」和「位置」一起想一次，很快就會更熟。`;
}

holdButtons.forEach((button) => button.addEventListener("click", () => renderHold(button.dataset.hold)));
balanceCards.forEach((button) => button.addEventListener("click", () => renderBalance(button.dataset.balance)));
bagButtons.forEach((button) =>
  button.addEventListener("click", () => {
    placements[button.dataset.bag] = button.dataset.slot;
    summarizeGame();
  }),
);
cargoReset.addEventListener("click", resetGame);
quizNext.addEventListener("click", () => {
  currentQuestion += 1;
  if (currentQuestion < quizItems.length) renderQuestion();
  else showResult();
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
renderHold("front");
renderBalance("center");
resetGame();
renderQuestion();
