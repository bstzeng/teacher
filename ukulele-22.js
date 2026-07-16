const lesson22Modes = {
  pattern: { badge: "先把順序念熟", title: "下下上上下上先用嘴巴記住", text: "順序念熟了，手才比較不會亂。這一課的第一步不是快，而是記順序。", list: ["下下上上下上。", "先嘴巴念。", "再慢慢做手。"] },
  count: { badge: "拍子要跟上", title: "順序之外，還要配節拍", text: "這個刷法會開始出現比較流動的節奏感，所以數拍很重要。", list: ["不要只有背順序。", "拍子也要穩。", "先慢一點最容易成功。"] },
  loop: { badge: "連成一整串", title: "做完一輪，再接下一輪", text: "能把一輪接一輪做穩，這個刷法就真的開始變成你會用的工具了。", list: ["一輪一輪接。", "手不要硬。", "穩定最重要。"] }
};
const lesson22Quiz = [
  { question: "第二十二課的常見刷法是？", options: [{ label: "↓ ↓ ↑ ↑ ↓ ↑" }, { label: "↓ ↓ ↓ ↓" }, { label: "↑ ↓ ↑ ↓" }], answer: 0, correct: "對，就是下下上上下上。", incorrect: "再看一次，這一課的常見刷法是下下上上下上。" },
  { question: "學這個刷法時，最好的第一步是？", options: [{ label: "先把順序念熟" }, { label: "先超高速刷" }, { label: "完全不數拍" }], answer: 0, correct: "對，先把順序念熟最穩。", incorrect: "這一課最好的第一步是先把順序念熟。" },
  { question: "如果孩子一做就亂，最適合怎麼辦？", options: [{ label: "放慢" }, { label: "更快" }, { label: "直接跳過" }], answer: 0, correct: "對，放慢最有效。", incorrect: "一亂就放慢，通常最有效。" }
];
document.addEventListener("DOMContentLoaded", () => {
  const titleEl = document.getElementById("lesson-22-title");
  const textEl = document.getElementById("lesson-22-text");
  const listEl = document.getElementById("lesson-22-list");
  const stageEl = document.getElementById("lesson-22-stage");
  const badgeEl = document.getElementById("lesson-22-badge");
  window.UkuleleTools?.setupSwitcher({ buttons: Array.from(document.querySelectorAll("#lab .stage-controls button")), modes: lesson22Modes, applyMode: (modeKey, mode) => {
    stageEl.dataset.mode = modeKey; badgeEl.textContent = mode.badge; titleEl.textContent = mode.title; textEl.textContent = mode.text; listEl.innerHTML = mode.list.map((item) => `<li>${item}</li>`).join("");
  }});
  window.UkuleleTools?.setupQuiz({ data: lesson22Quiz, progressEl: document.getElementById("lesson-22-progress"), questionEl: document.getElementById("lesson-22-question"), optionsEl: document.getElementById("lesson-22-options"), feedbackEl: document.getElementById("lesson-22-feedback"), nextEl: document.getElementById("lesson-22-next") });
});
