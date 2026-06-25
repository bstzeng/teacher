const mapButtons = [...document.querySelectorAll("[data-item]")];
const itemKicker = document.querySelector("#item-kicker");
const itemTitle = document.querySelector("#item-title");
const itemText = document.querySelector("#item-text");
const itemMemory = document.querySelector("#item-memory");

const itemCards = [...document.querySelectorAll("[data-card]")];
const cardKicker = document.querySelector("#card-kicker");
const cardTitle = document.querySelector("#card-title");
const cardText = document.querySelector("#card-text");
const cardMemory = document.querySelector("#card-memory");

const situationButtons = [...document.querySelectorAll("[data-situation]")];
const situationKicker = document.querySelector("#situation-kicker");
const situationTitle = document.querySelector("#situation-title");
const situationText = document.querySelector("#situation-text");
const situationMemory = document.querySelector("#situation-memory");

const quizProgress = document.querySelector("#quiz-progress");
const quizQuestion = document.querySelector("#quiz-question");
const quizOptions = document.querySelector("#quiz-options");
const quizFeedback = document.querySelector("#quiz-feedback");
const quizNext = document.querySelector("#quiz-next");

const mapContent = {
  belt: {
    kicker: "SAFETY ITEM",
    title: "安全帶",
    text: "安全帶最常用，也最容易忽略。它的工作就是在顛簸、起飛、落地時，把你穩穩留在座位上。",
    memory: "最常用、最重要、也最不該偷懶的，就是安全帶。",
  },
  card: {
    kicker: "SAFETY CARD",
    title: "安全卡",
    text: "安全卡會用圖告訴你出口在哪裡、設備在哪裡，還有真正需要時該怎麼做。",
    memory: "不是裝飾卡片，是給你快速看懂逃生重點的地圖。",
  },
  mask: {
    kicker: "OXYGEN MASK",
    title: "氧氣面罩",
    text: "如果客艙需要更多氧氣，面罩會掉下來。這時候最重要的是先讓自己正常呼吸。",
    memory: "先顧好自己的呼吸，才有辦法幫別人。",
  },
  vest: {
    kicker: "LIFE VEST",
    title: "救生衣",
    text: "救生衣通常放在座位附近，不是平常拿來玩的，是水上迫降這種特殊情況才會用。",
    memory: "不是每次都用，但真的要用時要知道它在哪。",
  },
  light: {
    kicker: "FLOOR LIGHT",
    title: "逃生燈",
    text: "地上的逃生燈會幫大家在視線不好時，找到往出口的方向。",
    memory: "看不清楚時，就跟著地上的光找路。",
  },
  exit: {
    kicker: "EXIT",
    title: "緊急出口",
    text: "出口的位置在每架飛機可能不完全一樣，所以每次搭機都要重新注意。",
    memory: "不要只記平常那一扇門，真的要記的是你這次飛機的出口。",
  },
};

const cardContent = {
  belt: {
    kicker: "SEAT BELT",
    title: "安全帶",
    text: "飛機遇到亂流時，最容易先派上用場的就是安全帶。它不是只有起飛落地才重要。",
    memory: "顛一下時，安全帶就是讓你不要離開椅子的那一條。",
  },
  mask: {
    kicker: "OXYGEN MASK",
    title: "氧氣面罩",
    text: "面罩掉下來時，通常代表要先讓呼吸穩定。這不是叫你慌，而是叫你先把最重要的事做好。",
    memory: "先自己戴好，再幫旁邊的人。",
  },
  vest: {
    kicker: "LIFE VEST",
    title: "救生衣",
    text: "救生衣平常很少真的用到，但它是水上迫降時的重要裝備，所以安全示範一定會提到。",
    memory: "少用到，不代表不重要。",
  },
};

const situationContent = {
  bumpy: {
    kicker: "BUMPY AIR",
    title: "突然顛一下",
    text: "這時候最重要的通常是安全帶。它可以讓你不要因為突然的上下晃動撞到座位或天花板。",
    memory: "安全帶亮了，真的就要繫好，不是提醒好看而已。",
  },
  lowoxygen: {
    kicker: "NEED OXYGEN",
    title: "客艙需要更多氧氣",
    text: "這時候最重要的是氧氣面罩。先穩住呼吸，腦袋才有辦法繼續清楚做事。",
    memory: "先呼吸好，再做下一步。",
  },
  evacuate: {
    kicker: "LEAVE QUICKLY",
    title: "要快速離開飛機",
    text: "這時候出口位置、逃生燈和空服員指示都會變得很重要，因為大家要快速找到正確方向。",
    memory: "緊張的時候，更要跟著正確出口和指示走。",
  },
};

const quizItems = [
  { question: "飛機突然顛一下時，最先派上用場的是什麼？", options: ["安全帶", "救生衣", "餐桌"], answer: "安全帶", note: "對。顛簸時最先保護你的常常就是安全帶。" },
  { question: "氧氣面罩掉下來時，最重要的第一件事是什麼？", options: ["先讓自己正常呼吸", "先拍照", "先站起來找出口"], answer: "先讓自己正常呼吸", note: "沒錯。先穩住自己的呼吸，後面才做得好。" },
  { question: "安全卡最像下面哪一個？", options: ["一張快速逃生地圖", "紀念卡片", "餐點菜單"], answer: "一張快速逃生地圖", note: "正確。安全卡不是裝飾，是給你快速看懂重點的。" },
  { question: "救生衣是不是每次飛行都會用到？", options: ["不是", "一定會", "只有起飛會"], answer: "不是", note: "對。很少真的用到，但重要時就很重要。" },
  { question: "下面哪一句最接近這堂課重點？", options: ["客艙很多設備平常安靜，但真的有工作", "飛機上東西大多只是裝飾", "只要有出口就不用記別的"], answer: "客艙很多設備平常安靜，但真的有工作", note: "答對了。這就是這堂課最想記住的事情。" },
];

let currentQuestion = 0;
let score = 0;

function renderMap(key) {
  const item = mapContent[key];
  mapButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.item === key));
  itemKicker.textContent = item.kicker;
  itemTitle.textContent = item.title;
  itemText.textContent = item.text;
  itemMemory.textContent = item.memory;
}

function renderCard(key) {
  const item = cardContent[key];
  itemCards.forEach((button) => button.classList.toggle("is-active", button.dataset.card === key));
  cardKicker.textContent = item.kicker;
  cardTitle.textContent = item.title;
  cardText.textContent = item.text;
  cardMemory.textContent = item.memory;
}

function renderSituation(key) {
  const item = situationContent[key];
  situationButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.situation === key));
  situationKicker.textContent = item.kicker;
  situationTitle.textContent = item.title;
  situationText.textContent = item.text;
  situationMemory.textContent = item.memory;
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
      ? "太棒了！你已經知道客艙裡這些安全設備各自在做什麼。"
      : `你答對 ${score} 題。再把設備和情況連一次，很快就會更熟。`;
}

mapButtons.forEach((button) => button.addEventListener("click", () => renderMap(button.dataset.item)));
itemCards.forEach((button) => button.addEventListener("click", () => renderCard(button.dataset.card)));
situationButtons.forEach((button) => button.addEventListener("click", () => renderSituation(button.dataset.situation)));
quizNext.addEventListener("click", () => {
  currentQuestion += 1;
  if (currentQuestion < quizItems.length) renderQuestion();
  else showResult();
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
renderMap("belt");
renderCard("belt");
renderSituation("bumpy");
renderQuestion();
