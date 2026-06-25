const airlines = [
  {
    id: "cal",
    type: "台灣航空公司",
    short: "華航",
    name: "中華航空",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/B-18902%40HKG_%2820190328181730%29.jpg/250px-B-18902%40HKG_%2820190328181730%29.jpg",
    article: "https://en.wikipedia.org/wiki/China_Airlines",
    intro: "白色機身配藍色字樣，再加上粉紅梅花尾翼，是很經典的華航印象。",
    look: "粉紅梅花尾翼",
    vibe: "穩重、代表性高、藍白很乾淨",
    fleet: "A321neo、A330、A350、777",
  },
  {
    id: "eva",
    type: "台灣航空公司",
    short: "長榮",
    name: "長榮航空",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/B-16727%40PEK_%2820190828182039%29.jpg/250px-B-16727%40PEK_%2820190828182039%29.jpg",
    article: "https://en.wikipedia.org/wiki/EVA_Air",
    intro: "長榮最容易讓人想到綠色系塗裝，還有尾翼上的圓形標誌。",
    look: "綠色塗裝與圓形尾翼標誌",
    vibe: "綠色、整齊、辨識度高",
    fleet: "A321、787、777",
  },
  {
    id: "jx",
    type: "台灣航空公司",
    short: "星宇",
    name: "星宇航空",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/STARLUX_AIRLINES_A330-941_B-58302.jpg/330px-STARLUX_AIRLINES_A330-941_B-58302.jpg",
    article: "https://en.wikipedia.org/wiki/Starlux_Airlines",
    intro: "星宇常給人黑金、俐落、很新的感覺，是現在很容易被注意到的塗裝。",
    look: "黑金色尾翼與深色線條",
    vibe: "新、俐落、黑金感很強",
    fleet: "A321neo、A330neo、A350",
  },
  {
    id: "it",
    type: "台灣航空公司",
    short: "虎航",
    name: "台灣虎航",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Tigerair_taiwan_landing_in_RCTP.jpg/250px-Tigerair_taiwan_landing_in_RCTP.jpg",
    article: "https://en.wikipedia.org/wiki/Tigerair_Taiwan",
    intro: "虎航的亮橘色非常好認，看到暖色系和 tigerair 字樣，常常就能先猜對。",
    look: "亮橘色與 tigerair 字樣",
    vibe: "活潑、醒目、很好記",
    fleet: "A320、A320neo",
  },
  {
    id: "mda",
    type: "台灣航空公司",
    short: "華信",
    name: "華信航空",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/B-16852.jpg/250px-B-16852.jpg",
    article: "https://en.wikipedia.org/wiki/Mandarin_Airlines",
    intro: "華信很常出現在國內線與區域線，藍色尾翼和螺旋槳客機很有記憶點。",
    look: "藍色尾翼與 ATR 螺旋槳客機",
    vibe: "親切、區域線感、藍色明顯",
    fleet: "ATR 72-600",
  },
  {
    id: "uia",
    type: "台灣航空公司",
    short: "立榮",
    name: "立榮航空",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/UNI_Air_ATR_72-600_B-17007_Departing_from_Taipei_Songshan_Airport_20150221c.jpg/330px-UNI_Air_ATR_72-600_B-17007_Departing_from_Taipei_Songshan_Airport_20150221c.jpg",
    article: "https://en.wikipedia.org/wiki/Uni_Air",
    intro: "立榮常飛國內線與離島線，綠色系尾翼加上 ATR 客機，是很實用的辨認重點。",
    look: "綠色尾翼與 ATR 客機",
    vibe: "離島線、國內線、綠色穩穩的",
    fleet: "ATR 72-600",
  },
  {
    id: "cx",
    type: "桃園常見外籍航空",
    short: "國泰",
    name: "國泰航空",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Cathay_Pacific_A350-1000XWB_B-LXA.jpg/250px-Cathay_Pacific_A350-1000XWB_B-LXA.jpg",
    article: "https://en.wikipedia.org/wiki/Cathay_Pacific",
    intro: "國泰的綠色尾翼刷痕標誌很有特色，在台港航線上也很常見。",
    look: "綠色刷痕尾翼標誌",
    vibe: "乾淨、國際感、港味很強",
    fleet: "A321neo、A330、A350、777",
  },
  {
    id: "jal",
    type: "桃園常見外籍航空",
    short: "JAL",
    name: "日本航空",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/JA02WJ_JFK_Landing_22L_JL_A350_1041_Small_%2853548157200%29.png/250px-JA02WJ_JFK_Landing_22L_JL_A350_1041_Small_%2853548157200%29.png",
    article: "https://en.wikipedia.org/wiki/Japan_Airlines",
    intro: "JAL 的白色機身加上紅色鶴丸尾翼很經典，只要看到紅圓標就很容易聯想到它。",
    look: "紅色鶴丸尾翼",
    vibe: "簡潔、日本感、白底紅標",
    fleet: "A350、787、777、737",
  },
  {
    id: "ana",
    type: "桃園常見外籍航空",
    short: "ANA",
    name: "全日空",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Boeing_787_N1015B_ANA_Airlines_%2827611880663%29_%28cropped%29.jpg/250px-Boeing_787_N1015B_ANA_Airlines_%2827611880663%29_%28cropped%29.jpg",
    article: "https://en.wikipedia.org/wiki/All_Nippon_Airways",
    intro: "ANA 常見的是藍白配色，大大的 ANA 字樣很直接，是很好記的日本航空公司。",
    look: "藍白配色與大大的 ANA 字樣",
    vibe: "清爽、藍白、很日本",
    fleet: "787、777、767、A320 家族",
  },
  {
    id: "sq",
    type: "桃園常見外籍航空",
    short: "新航",
    name: "新加坡航空",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Singapore_Airlines_Airbus_A350-941_F-WZFD_to_9V-SMF.jpg/250px-Singapore_Airlines_Airbus_A350-941_F-WZFD_to_9V-SMF.jpg",
    article: "https://en.wikipedia.org/wiki/Singapore_Airlines",
    intro: "新加坡航空很常被記住的是深藍加金色線條，整體看起來很典雅。",
    look: "深藍金色配色",
    vibe: "典雅、成熟、很有國際線氣質",
    fleet: "A350、A380、777、787",
  },
];

const airlineGrid = document.querySelector("#airline-grid");
const focusTabs = document.querySelector("#focus-tabs");
const focusImage = document.querySelector("#focus-image");
const focusKicker = document.querySelector("#focus-kicker");
const focusName = document.querySelector("#focus-name");
const focusText = document.querySelector("#focus-text");
const focusLook = document.querySelector("#focus-look");
const focusVibe = document.querySelector("#focus-vibe");
const focusFleet = document.querySelector("#focus-fleet");
const creditList = document.querySelector("#credit-list");
const revealButtons = [...document.querySelectorAll(".reveal-button")];
const quizProgress = document.querySelector("#quiz-progress");
const quizQuestion = document.querySelector("#quiz-question");
const quizOptions = document.querySelector("#quiz-options");
const quizFeedback = document.querySelector("#quiz-feedback");
const quizNext = document.querySelector("#quiz-next");

const quizItems = [
  {
    question: "看到黑金感很強的塗裝，你最可能先想到哪一家？",
    options: ["星宇航空", "台灣虎航", "華信航空"],
    answer: "星宇航空",
    note: "答對了。黑金色是星宇最強烈的印象之一。",
  },
  {
    question: "如果你看到粉紅梅花尾翼，通常最可能是哪一家？",
    options: ["中華航空", "長榮航空", "國泰航空"],
    answer: "中華航空",
    note: "沒錯。粉紅梅花是華航很經典的辨識點。",
  },
  {
    question: "哪兩家在台灣很常見，而且常飛離島或國內線？",
    options: ["立榮航空與華信航空", "JAL 與 ANA", "國泰與新加坡航空"],
    answer: "立榮航空與華信航空",
    note: "對。立榮和華信都是很常見的國內線與區域線航空公司。",
  },
  {
    question: "看到亮橘色塗裝，最容易先猜到哪一家？",
    options: ["台灣虎航", "全日空", "德安航空"],
    answer: "台灣虎航",
    note: "正確。虎航的亮橘色真的很醒目。",
  },
  {
    question: "白色機身搭配紅色鶴丸尾翼，是哪一家最經典的特色？",
    options: ["日本航空", "國泰航空", "長榮航空"],
    answer: "日本航空",
    note: "答對了。JAL 的鶴丸標誌非常有代表性。",
  },
];

let currentAirline = airlines[0].id;
let currentQuestion = 0;
let score = 0;

function renderCards() {
  airlineGrid.innerHTML = airlines
    .map(
      (airline) => `
        <article class="photo-card">
          <img src="${airline.image}" alt="${airline.name}客機照片" loading="lazy" />
          <div class="photo-card-copy">
            <p class="card-type">${airline.type}</p>
            <h3>${airline.name}</h3>
            <p>${airline.intro}</p>
            <div class="card-tags">
              <span>${airline.look}</span>
              <span>${airline.short}</span>
            </div>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderTabs() {
  focusTabs.innerHTML = airlines
    .map(
      (airline) => `
        <button
          class="focus-tab ${airline.id === currentAirline ? "is-active" : ""}"
          type="button"
          data-airline="${airline.id}"
        >
          ${airline.short}
        </button>
      `,
    )
    .join("");

  [...focusTabs.querySelectorAll("[data-airline]")].forEach((button) => {
    button.addEventListener("click", () => {
      currentAirline = button.dataset.airline;
      renderFocus();
    });
  });
}

function renderFocus() {
  const airline = airlines.find((item) => item.id === currentAirline);
  renderTabs();
  focusImage.src = airline.image;
  focusImage.alt = `${airline.name}客機照片`;
  focusKicker.textContent = airline.type;
  focusName.textContent = airline.name;
  focusText.textContent = airline.intro;
  focusLook.textContent = airline.look;
  focusVibe.textContent = airline.vibe;
  focusFleet.textContent = airline.fleet;
}

function renderCredits() {
  creditList.innerHTML = airlines
    .map(
      (airline) => `
        <li>
          <a href="${airline.article}" target="_blank" rel="noreferrer noopener">${airline.name}</a>
          的照片來源條目
        </li>
      `,
    )
    .join("");
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
      ? "太棒了！你已經能用真實照片的線索，快速猜出常見航空公司。"
      : `你答對 ${score} 題。再把顏色、尾翼和名字連一次，很快就會更熟。`;
}

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
renderCards();
renderFocus();
renderCredits();
renderQuestion();
