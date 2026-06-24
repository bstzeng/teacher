const parts = {
  fuselage: {
    number: "01 / 10",
    category: "飛機的骨架",
    title: "機身 Fuselage",
    description:
      "把駕駛艙、客艙與貨艙連成一體，也是機翼和尾翼的安裝中心。圓筒形結構能承受高空增壓造成的力量。",
    when: "從登機到落地，全程都在承受與傳遞力量。",
  },
  wing: {
    number: "02 / 10",
    category: "製造升力",
    title: "主翼 Wing",
    description:
      "空氣流過翼面時，主翼會產生支撐飛機的升力。油箱通常也藏在機翼內，讓重量接近飛機重心。",
    when: "只要飛機在空中，主翼就是主要的升力來源。",
  },
  engine: {
    number: "03 / 10",
    category: "提供推力",
    title: "發動機 Engine",
    description:
      "吸入空氣、壓縮、燃燒，再把高速氣流向後噴出，形成向前的推力。現代客機多使用高旁通比渦輪扇發動機。",
    when: "滑行、起飛、爬升與巡航都需要，降落時則降低推力。",
  },
  gear: {
    number: "04 / 10",
    category: "地面支撐",
    title: "起落架 Landing gear",
    description:
      "承受飛機在地面的重量與接地衝擊。前起落架負責轉向，主起落架裝有煞車。",
    when: "滑行、起飛與降落時放下；巡航時收進機身以減少阻力。",
  },
  slat: {
    number: "05 / 10",
    category: "低速增加升力",
    title: "前緣縫翼 Slat",
    description:
      "位於機翼前緣。伸出後形成縫隙，幫助氣流在較大的迎角下仍貼著翼面，延後失速。",
    when: "主要在起飛和降落等低速階段伸出。",
  },
  flap: {
    number: "06 / 10",
    category: "改變翼型",
    title: "襟翼 Flap",
    description:
      "位於機翼後緣內側。放下後增加翼面彎度與面積，帶來更多升力，也同時增加阻力。",
    when: "起飛時部分放下；進場與降落時放得更多。",
  },
  aileron: {
    number: "07 / 10",
    category: "控制滾轉",
    title: "副翼 Aileron",
    description:
      "位於機翼後緣外側。左右副翼反向動作，改變兩側升力，讓飛機向左或向右傾斜。",
    when: "轉彎、保持機翼水平，以及抵抗側風時持續微調。",
  },
  spoiler: {
    number: "08 / 10",
    category: "破壞升力",
    title: "擾流板 Spoiler",
    description:
      "從機翼上表面升起，擾亂氣流、減少升力並增加阻力。也能協助滾轉。",
    when: "空中用於減速或下降；落地後全部升起，幫助輪胎抓地煞車。",
  },
  tail: {
    number: "09 / 10",
    category: "保持穩定與轉向",
    title: "尾翼 Empennage",
    description:
      "水平尾翼負責俯仰穩定，升降舵控制機頭上下；垂直尾翼保持方向穩定，方向舵控制偏航。",
    when: "整段飛行都在穩定飛機，任何方向修正都可能用到。",
  },
  apu: {
    number: "10 / 10",
    category: "藏在機尾的小幫手",
    title: "APU 輔助動力系統",
    description:
      "一具較小的燃氣渦輪，通常裝在機尾。它能供應電力與壓縮空氣，也可協助啟動主發動機。",
    when: "最常在停機坪使用；部分機型在飛行中也能作為備援。",
  },
};

const partControls = [...document.querySelectorAll("[data-part]")];
const partNumber = document.querySelector("#part-number");
const partCategory = document.querySelector("#part-category");
const partTitle = document.querySelector("#part-title");
const partDescription = document.querySelector("#part-description");
const partWhen = document.querySelector("#part-when");

function showPart(key) {
  const part = parts[key];
  if (!part) return;

  partControls.forEach((control) => {
    control.classList.toggle("is-active", control.dataset.part === key);
    control.setAttribute("aria-pressed", control.dataset.part === key ? "true" : "false");
  });

  partNumber.textContent = part.number;
  partCategory.textContent = part.category;
  partTitle.textContent = part.title;
  partDescription.textContent = part.description;
  partWhen.textContent = part.when;
}

partControls.forEach((control) => {
  control.addEventListener("click", () => showPart(control.dataset.part));
});

const questions = [
  {
    question: "在停機坪沒有啟動主發動機時，誰能提供電力與空調？",
    options: ["襟翼", "APU", "副翼"],
    answer: "APU",
    note: "答對了！APU 是藏在機尾的小型動力來源。",
  },
  {
    question: "起飛與降落時，誰會伸出來幫主翼增加升力？",
    options: ["襟翼", "擾流板", "起落架"],
    answer: "襟翼",
    note: "正確！襟翼改變翼型，低速時能產生更多升力。",
  },
  {
    question: "飛機落地後，誰會從機翼上表面升起，幫助輪胎抓地？",
    options: ["前緣縫翼", "擾流板", "方向舵"],
    answer: "擾流板",
    note: "正確！擾流板破壞升力，讓重量更快回到輪胎。",
  },
  {
    question: "要讓飛機向左或向右傾斜，主要使用哪個控制面？",
    options: ["副翼", "升降舵", "襟翼"],
    answer: "副翼",
    note: "答對了！左右副翼反向動作，控制飛機滾轉。",
  },
  {
    question: "巡航時收起來，可以明顯減少空氣阻力的是哪一項？",
    options: ["機身", "起落架", "垂直尾翼"],
    answer: "起落架",
    note: "沒錯！巡航時起落架會收進機身或機翼整流罩。",
  },
];

const progress = document.querySelector("#challenge-progress");
const question = document.querySelector("#challenge-question");
const options = document.querySelector("#challenge-options");
const feedback = document.querySelector("#challenge-feedback");
const next = document.querySelector("#challenge-next");
let current = 0;
let score = 0;

function renderQuestion() {
  const item = questions[current];
  progress.textContent = `第 ${current + 1} 題，共 ${questions.length} 題`;
  question.textContent = item.question;
  feedback.textContent = "";
  next.hidden = true;
  options.replaceChildren();

  item.options.forEach((label) => {
    const button = document.createElement("button");
    button.className = "challenge-option";
    button.type = "button";
    button.textContent = label;
    button.addEventListener("click", () => checkAnswer(button, label));
    options.append(button);
  });
}

function checkAnswer(selected, value) {
  const item = questions[current];
  options.querySelectorAll("button").forEach((button) => {
    button.disabled = true;
    if (button.textContent === item.answer) button.classList.add("is-correct");
  });

  if (value === item.answer) {
    score += 1;
    feedback.textContent = item.note;
  } else {
    selected.classList.add("is-wrong");
    feedback.textContent = `正確答案是「${item.answer}」。`;
  }

  next.hidden = false;
  next.firstChild.textContent =
    current === questions.length - 1 ? "查看成績 " : "下一題 ";
}

function showResult() {
  progress.textContent = "挑戰完成";
  options.replaceChildren();
  feedback.textContent = "";
  next.hidden = true;
  question.innerHTML = `<div class="challenge-result">${
    score === questions.length
      ? "滿分！你已經能看懂客機外部的重要零件。"
      : `你答對 ${score} 題。再點一次解剖圖，很快就會全部記住。`
  }</div>`;
}

next.addEventListener("click", () => {
  current += 1;
  if (current < questions.length) renderQuestion();
  else showResult();
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
showPart("fuselage");
renderQuestion();
