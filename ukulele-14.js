const lesson14Modes = {
  shape: { badge: "G 弦第 2 格", highlight: "最上面那條弦", title: "Am 和弦只按一個點", text: "位置在最上面的 G 弦第 2 格，其他弦都可以空著。", cloud: "先想成：這次和 C 相反，不是最下面工作，而是最上面工作。", list: ["G 弦在最上面。", "按第 2 格。", "其他弦先保持空弦。"] },
  finger: { badge: "中指最常用", highlight: "手指安排", title: "Am 和弦常用中指", text: "很多孩子會用中指按 G 弦第 2 格，這樣手型通常比較自然。", cloud: "如果孩子一按就歪掉，可以先只按住，不刷，讓手習慣這個位置。", list: ["中指放到第 2 格。", "按準再刷。", "先慢慢找位置。"] },
  sound: { badge: "溫柔一點", highlight: "聽聲音", title: "Am 和弦會比 C 柔和一點", text: "雖然一樣容易按，但 Am 給人的感覺通常比 C 更柔和。", cloud: "把 C 和 Am 輪流刷一刷，孩子會慢慢聽到兩種不同顏色。", list: ["刷完先和 C 比較。", "聲音不需要很大。", "先感覺不一樣就好。"] }
};
const lesson14Quiz = [
  { question: "Am 和弦按在哪裡？", options: [{ label: "A 弦第 3 格" }, { label: "G 弦第 2 格" }, { label: "E 弦第 1 格" }], answer: 1, correct: "對，Am 和弦是 G 弦第 2 格。", incorrect: "Am 和弦的位置是 G 弦第 2 格。" },
  { question: "Am 和弦和 C 和弦哪裡像？", options: [{ label: "都只要一根手指" }, { label: "都要三根手指" }, { label: "都不能刷四條弦" }], answer: 0, correct: "對，兩個都很適合入門，因為都只要一根手指。", incorrect: "它們最像的地方是都只要一根手指。" },
  { question: "第十四課最適合和哪個和弦一起比較？", options: [{ label: "C 和弦" }, { label: "G7 和弦" }, { label: "Dm 和弦" }], answer: 0, correct: "對，Am 和 C 很適合一起比較。", incorrect: "這一課最適合拿來和 C 和弦一起比較。" }
];
document.addEventListener("DOMContentLoaded", () => {
  window.UkuleleTools?.renderChordGallery(document.getElementById("lesson-14-chord"), ["Am"]);
  const titleEl = document.getElementById("lesson-14-title");
  const textEl = document.getElementById("lesson-14-text");
  const listEl = document.getElementById("lesson-14-list");
  const stageEl = document.getElementById("lesson-14-stage");
  const badgeEl = document.getElementById("lesson-14-badge");
  const cloudEl = document.getElementById("lesson-14-cloud");
  const highlightEl = document.getElementById("lesson-14-highlight");
  window.UkuleleTools?.setupSwitcher({ buttons: Array.from(document.querySelectorAll("#lab .stage-controls button")), modes: lesson14Modes, applyMode: (modeKey, mode) => {
    stageEl.dataset.mode = modeKey; badgeEl.textContent = mode.badge; highlightEl.textContent = mode.highlight; titleEl.textContent = mode.title; textEl.textContent = mode.text; cloudEl.textContent = mode.cloud; listEl.innerHTML = mode.list.map((item) => `<li>${item}</li>`).join("");
  }});
  window.UkuleleTools?.setupQuiz({ data: lesson14Quiz, progressEl: document.getElementById("lesson-14-progress"), questionEl: document.getElementById("lesson-14-question"), optionsEl: document.getElementById("lesson-14-options"), feedbackEl: document.getElementById("lesson-14-feedback"), nextEl: document.getElementById("lesson-14-next") });
});
