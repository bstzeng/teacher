const lesson19Modes = {
  down: { badge: "右手從上往下", title: "下刷就是從上往下掃過弦", text: "這是最基本的刷弦方向。先把方向自然做對，右手就會比較穩。", list: ["從上往下。", "手腕放鬆。", "不要太用力。"] },
  count: { badge: "一拍一下", title: "下刷最適合先配 1、2、3、4", text: "每一拍刷一下，是孩子最容易先做穩的方式。", list: ["每拍都平均。", "先慢慢刷。", "數拍和右手要一起。"] },
  loop: { badge: "連續下刷", title: "連續下刷時也要保持放鬆", text: "很多孩子一連續刷就越來越緊，所以這一課要刻意保持手腕鬆。", list: ["連續做也不要硬。", "刷弦不是打弦。", "穩定比速度重要。"] }
};
const lesson19Quiz = [
  { question: "下刷的方向是？", options: [{ label: "從上往下" }, { label: "從下往上" }, { label: "左右亂刷" }], answer: 0, correct: "對，下刷就是從上往下。", incorrect: "下刷的方向是從上往下。" },
  { question: "第十九課最適合先配什麼？", options: [{ label: "1、2、3、4" }, { label: "超複雜節奏" }, { label: "完全不數拍" }], answer: 0, correct: "對，先配 1、2、3、4 最穩。", incorrect: "這一課最適合先配 1、2、3、4。" },
  { question: "連續下刷時最要小心什麼？", options: [{ label: "手腕越刷越緊" }, { label: "太安靜" }, { label: "不會動" }], answer: 0, correct: "對，連續刷最容易越刷越緊。", incorrect: "連續刷時最要小心手腕越來越緊。" }
];
document.addEventListener("DOMContentLoaded", () => {
  const titleEl = document.getElementById("lesson-19-title");
  const textEl = document.getElementById("lesson-19-text");
  const listEl = document.getElementById("lesson-19-list");
  const stageEl = document.getElementById("lesson-19-stage");
  const badgeEl = document.getElementById("lesson-19-badge");
  window.UkuleleTools?.setupSwitcher({ buttons: Array.from(document.querySelectorAll("#lab .stage-controls button")), modes: lesson19Modes, applyMode: (modeKey, mode) => {
    stageEl.dataset.mode = modeKey; badgeEl.textContent = mode.badge; titleEl.textContent = mode.title; textEl.textContent = mode.text; listEl.innerHTML = mode.list.map((item) => `<li>${item}</li>`).join("");
  }});
  window.UkuleleTools?.setupQuiz({ data: lesson19Quiz, progressEl: document.getElementById("lesson-19-progress"), questionEl: document.getElementById("lesson-19-question"), optionsEl: document.getElementById("lesson-19-options"), feedbackEl: document.getElementById("lesson-19-feedback"), nextEl: document.getElementById("lesson-19-next") });
});
