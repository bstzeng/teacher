const lesson16Modes = {
  shape: { badge: "三個點要排好", highlight: "第一次三指", title: "G7 的形狀要記三個位置", text: "C 弦第 2 格、E 弦第 1 格、A 弦第 2 格，這三個點就是 G7 的核心。", cloud: "先別急著一次抓得很快。慢慢把三個點排好，比快更重要。", list: ["C 弦第 2 格。", "E 弦第 1 格。", "A 弦第 2 格。"] },
  finger: { badge: "食中無名三根", highlight: "手指安排", title: "三根手指要各自有位置", text: "G7 比前面和弦再多一點挑戰，因為三根手指要互相讓位。", cloud: "孩子如果手比較小，可以讓他先一根一根放好，再一起試著定住。", list: ["食指最常按 E 弦。", "中指和無名指放兩個第 2 格。", "不要互相擠住。"] },
  sound: { badge: "很想回 C", highlight: "聽聲音", title: "G7 常常會帶耳朵回到 C", text: "刷 G7 之後再刷 C，會很有『回到家』的感覺。這是之後很多歌會用到的。", cloud: "試著刷一次 G7，再刷一次 C，孩子常常會自己聽出那種回家的感覺。", list: ["G7 後面很常接 C。", "這是一個很常見的路線。", "現在先用耳朵記住它。"] }
};
const lesson16Quiz = [
  { question: "G7 和弦這一課最大的挑戰是？", options: [{ label: "第一次三根手指一起工作" }, { label: "完全不用按弦" }, { label: "只能彈一條弦" }], answer: 0, correct: "對，G7 是第一次明顯的三指和弦。", incorrect: "G7 的最大挑戰是三根手指要一起工作。" },
  { question: "G7 很常帶你回到哪個和弦？", options: [{ label: "C" }, { label: "Am7" }, { label: "Dm" }], answer: 0, correct: "對，G7 很常帶你回到 C。", incorrect: "重點要記住：G7 很常接回 C。" },
  { question: "練 G7 時一開始最適合怎麼做？", options: [{ label: "慢慢排好三個位置" }, { label: "直接超快切換" }, { label: "完全不看圖" }], answer: 0, correct: "對，先慢慢排好三個位置。", incorrect: "先慢慢把三個位置排好，成功率最高。" }
];
document.addEventListener("DOMContentLoaded", () => {
  window.UkuleleTools?.renderChordGallery(document.getElementById("lesson-16-chord"), ["G7"]);
  const titleEl = document.getElementById("lesson-16-title");
  const textEl = document.getElementById("lesson-16-text");
  const listEl = document.getElementById("lesson-16-list");
  const stageEl = document.getElementById("lesson-16-stage");
  const badgeEl = document.getElementById("lesson-16-badge");
  const cloudEl = document.getElementById("lesson-16-cloud");
  const highlightEl = document.getElementById("lesson-16-highlight");
  window.UkuleleTools?.setupSwitcher({ buttons: Array.from(document.querySelectorAll("#lab .stage-controls button")), modes: lesson16Modes, applyMode: (modeKey, mode) => {
    stageEl.dataset.mode = modeKey; badgeEl.textContent = mode.badge; highlightEl.textContent = mode.highlight; titleEl.textContent = mode.title; textEl.textContent = mode.text; cloudEl.textContent = mode.cloud; listEl.innerHTML = mode.list.map((item) => `<li>${item}</li>`).join("");
  }});
  window.UkuleleTools?.setupQuiz({ data: lesson16Quiz, progressEl: document.getElementById("lesson-16-progress"), questionEl: document.getElementById("lesson-16-question"), optionsEl: document.getElementById("lesson-16-options"), feedbackEl: document.getElementById("lesson-16-feedback"), nextEl: document.getElementById("lesson-16-next") });
});
