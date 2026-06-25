const airlineTabs = [...document.querySelectorAll("[data-airline]")];
const selectorVisual = document.querySelector("#selector-visual");
const selectorTitle = document.querySelector("#selector-title");
const airlineKicker = document.querySelector("#airline-kicker");
const airlineName = document.querySelector("#airline-name");
const airlineText = document.querySelector("#airline-text");
const airlineVibe = document.querySelector("#airline-vibe");
const airlineFleet = document.querySelector("#airline-fleet");
const airlineLook = document.querySelector("#airline-look");
const liveryButtons = [...document.querySelectorAll("[data-livery]")];
const liveryDemo = document.querySelector("#livery-demo");
const demoTitle = document.querySelector("#demo-title");
const hotspotButtons = [...document.querySelectorAll("[data-part]")];
const liveryKicker = document.querySelector("#livery-kicker");
const liveryAirlineName = document.querySelector("#livery-airline-name");
const liveryText = document.querySelector("#livery-text");
const liveryMemory = document.querySelector("#livery-memory");
const revealButtons = [...document.querySelectorAll(".reveal-button")];
const quizProgress = document.querySelector("#quiz-progress");
const quizQuestion = document.querySelector("#quiz-question");
const quizOptions = document.querySelector("#quiz-options");
const quizFeedback = document.querySelector("#quiz-feedback");
const quizNext = document.querySelector("#quiz-next");

const airlineContent = {
  cal: {
    short: "華航",
    className: "airline-cal",
    title: "CHINA AIRLINES",
    kicker: "全服務航空",
    name: "中華航空",
    text: "華航常見的辨認方式，是白色機身配上藍色字樣，以及尾翼上的粉紅梅花。",
    vibe: "傳統、穩重、很有代表性",
    fleet: "A321neo、A330、A350、777",
    look: "粉紅梅花尾翼",
    livery: {
      tail: "華航最容易被記住的是尾翼梅花。就算距離有點遠，只要看到粉紅色花朵，很容易先猜到是華航。",
      title: "華航的機身字樣通常是藍色，看起來乾淨又清楚，和白色機身搭在一起很好辨認。",
      color: "華航整體常給人白色、藍色、粉紅點綴的印象，不會太花，但很有自己的標誌。",
      memory: "梅花、藍字、白機身。",
    },
  },
  eva: {
    short: "長榮",
    className: "airline-eva",
    title: "EVA AIR",
    kicker: "全服務航空",
    name: "長榮航空",
    text: "長榮最有記憶點的是綠色系塗裝，還有尾翼上像圓形徽章的標誌。",
    vibe: "整齊、綠色、很容易聯想到長榮",
    fleet: "A321、787、777",
    look: "綠色機身與圓形尾翼徽章",
    livery: {
      tail: "長榮尾翼上最明顯的是綠底配橘色圓形徽章，遠遠看就很有辨識度。",
      title: "長榮的字樣通常搭配綠色主色，很容易和整體塗裝連成一套記憶。",
      color: "只要看到整體偏綠，再配上白色機身，很多人會先聯想到長榮。",
      memory: "綠色、圓徽章、長榮字樣。",
    },
  },
  jx: {
    short: "星宇",
    className: "airline-jx",
    title: "STARLUX",
    kicker: "全服務航空",
    name: "星宇航空",
    text: "星宇的黑金風格非常醒目，整體看起來比較俐落，也常讓人覺得很新。",
    vibe: "俐落、黑金、現代感很強",
    fleet: "A321neo、A330neo、A350",
    look: "黑金色尾翼與深色設計",
    livery: {
      tail: "星宇的尾翼很常讓人一眼注意到，因為深色底配金色線條看起來很有個性。",
      title: "STARLUX 字樣通常不會用很花的顏色，而是配合整體黑金質感走簡潔路線。",
      color: "黑、灰、金是星宇很強烈的印象色，和其他台灣航空公司差很多。",
      memory: "黑金配色、深色尾翼、很有新世代感。",
    },
  },
  it: {
    short: "虎航",
    className: "airline-it",
    title: "tigerair",
    kicker: "低成本航空",
    name: "台灣虎航",
    text: "虎航通常用亮橘色抓住注意力，名字也很直接，看到橘色常常就能先猜對。",
    vibe: "活潑、醒目、很好記",
    fleet: "A320、A320neo",
    look: "亮橘色與 tigerair 字樣",
    livery: {
      tail: "虎航的尾翼和塗裝都偏亮橘色系，遠遠看就很容易跳出來。",
      title: "tigerair 的字樣通常也是辨認關鍵，因為名字本身就很有記憶點。",
      color: "橘色是虎航最直覺的辨識重點，看到醒目的暖色系，很容易先往虎航想。",
      memory: "亮橘色、虎航名字、低成本風格。",
    },
  },
};

const quizItems = [
  {
    question: "如果你先看飛機外觀，最容易先看哪裡來猜航空公司？",
    options: ["尾翼", "輪胎", "窗戶數量"],
    answer: "尾翼",
    note: "對了。尾翼通常是最遠也最容易辨認的地方。",
  },
  {
    question: "看到整體黑金風格，你最可能先想到哪一家？",
    options: ["星宇", "長榮", "台灣虎航"],
    answer: "星宇",
    note: "沒錯。黑金感是星宇很鮮明的印象。",
  },
  {
    question: "哪一家最容易讓人聯想到綠色系塗裝？",
    options: ["長榮", "華航", "虎航"],
    answer: "長榮",
    note: "答對了。長榮的綠色系非常有代表性。",
  },
  {
    question: "哪一家是台灣常見的低成本航空？",
    options: ["台灣虎航", "華航", "星宇"],
    answer: "台灣虎航",
    note: "正確。台灣虎航是很容易辨認的低成本航空。",
  },
  {
    question: "看到尾翼上的粉紅梅花，通常最可能是哪一家？",
    options: ["華航", "長榮", "星宇"],
    answer: "華航",
    note: "對。粉紅梅花是華航很經典的辨識點。",
  },
];

let activeLiveryAirline = "cal";
let activePart = "tail";
let currentQuestion = 0;
let score = 0;

function setAirlineVisual(element, key, titleElement) {
  element.classList.remove("airline-cal", "airline-eva", "airline-jx", "airline-it");
  element.classList.add(airlineContent[key].className);
  titleElement.textContent = airlineContent[key].title;
}

function renderAirline(key) {
  const item = airlineContent[key];
  airlineTabs.forEach((button) => button.classList.toggle("is-active", button.dataset.airline === key));
  setAirlineVisual(selectorVisual, key, selectorTitle);
  airlineKicker.textContent = item.kicker;
  airlineName.textContent = item.name;
  airlineText.textContent = item.text;
  airlineVibe.textContent = item.vibe;
  airlineFleet.textContent = item.fleet;
  airlineLook.textContent = item.look;
}

function renderLivery() {
  const airline = airlineContent[activeLiveryAirline];
  const text = airline.livery[activePart];
  liveryButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.livery === activeLiveryAirline));
  hotspotButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.part === activePart));
  setAirlineVisual(liveryDemo, activeLiveryAirline, demoTitle);
  liveryKicker.textContent =
    activePart === "tail" ? "先看尾翼" : activePart === "title" ? "再看機身字樣" : "最後看主色";
  liveryAirlineName.textContent = `${airline.short}塗裝`;
  liveryText.textContent = text;
  liveryMemory.textContent = airline.livery.memory;
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
      ? "太棒了！你已經能用塗裝線索，快速猜出台灣常見航空公司。"
      : `你答對 ${score} 題。再把尾翼、字樣和主色連一次，很快就會更熟。`;
}

airlineTabs.forEach((button) => {
  button.addEventListener("click", () => renderAirline(button.dataset.airline));
});

liveryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeLiveryAirline = button.dataset.livery;
    renderLivery();
  });
});

hotspotButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activePart = button.dataset.part;
    renderLivery();
  });
});

revealButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const answer = button.parentElement.querySelector(".spot-answer");
    answer.hidden = false;
    button.hidden = true;
  });
});

quizNext.addEventListener("click", () => {
  currentQuestion += 1;
  if (currentQuestion < quizItems.length) renderQuestion();
  else showResult();
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
renderAirline("cal");
renderLivery();
renderQuestion();
