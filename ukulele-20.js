const lesson20Modes = {
  up: { badge: "右手往上帶回來", title: "上刷像輕輕往上帶回來", text: "上刷不是反方向硬打，而是右手往上時，輕輕帶到幾條弦。", list: ["方向往上。", "力量比下刷輕。", "像回彈一樣。"] },
  count: { badge: "回彈要輕", title: "上刷的手感通常比較彈", text: "如果每一下都很重，孩子會很快覺得手硬掉。上刷常常要更輕。", list: ["比下刷更輕。", "手腕不要卡住。", "先做短短的小動作。"] },
  loop: { badge: "連續上刷", title: "連續做時，重點還是放鬆", text: "就算只練上刷，也不要讓手變成用力甩出去。", list: ["輕輕帶過。", "不要猛甩。", "保持節拍感。"] }
};
const lesson20Quiz = [
  { question: "上刷最像哪種感覺？", options: [{ label: "輕輕帶回來" }, { label: "大力打下去" }, { label: "完全不碰弦" }], answer: 0, correct: "對，上刷很像輕輕帶回來。", incorrect: "上刷的感覺應該是輕輕帶回來。" },
  { question: "上刷和下刷比起來通常怎麼樣？", options: [{ label: "通常更輕" }, { label: "一定更大力" }, { label: "完全一樣重" }], answer: 0, correct: "對，上刷通常更輕一些。", incorrect: "上刷通常要比下刷更輕一點。" },
  { question: "第二十課最主要在學什麼？", options: [{ label: "新的和弦" }, { label: "向上的刷弦手感" }, { label: "調音器品牌" }], answer: 1, correct: "對，這一課在學向上的刷弦手感。", incorrect: "這一課的主角是向上的刷弦手感。" }
];
document.addEventListener("DOMContentLoaded", () => {
  const titleEl = document.getElementById("lesson-20-title");
  const textEl = document.getElementById("lesson-20-text");
  const listEl = document.getElementById("lesson-20-list");
  const stageEl = document.getElementById("lesson-20-stage");
  const badgeEl = document.getElementById("lesson-20-badge");
  window.UkuleleTools?.setupSwitcher({ buttons: Array.from(document.querySelectorAll("#lab .stage-controls button")), modes: lesson20Modes, applyMode: (modeKey, mode) => {
    stageEl.dataset.mode = modeKey; badgeEl.textContent = mode.badge; titleEl.textContent = mode.title; textEl.textContent = mode.text; listEl.innerHTML = mode.list.map((item) => `<li>${item}</li>`).join("");
  }});
  window.UkuleleTools?.setupQuiz({ data: lesson20Quiz, progressEl: document.getElementById("lesson-20-progress"), questionEl: document.getElementById("lesson-20-question"), optionsEl: document.getElementById("lesson-20-options"), feedbackEl: document.getElementById("lesson-20-feedback"), nextEl: document.getElementById("lesson-20-next") });
});
