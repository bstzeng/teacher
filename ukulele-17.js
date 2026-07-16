const lesson17Modes = {
  pair1: { badge: "先練 C ↔ Am", title: "先把最簡單的兩個練熟", text: "C 和 Am 都只用一根手指，是最適合先做切換入門的一組。", list: ["先做兩個最簡單。", "一換完就停一下。", "不要因為簡單就亂快。"] },
  pair2: { badge: "再練 F ↔ G7", title: "再把比較難的兩個練穩", text: "F 和 G7 會比較慢沒關係。這一組本來就比較需要時間。", list: ["F 先按兩個點。", "G7 再排三個點。", "練慢一點很正常。"] },
  all: { badge: "四個連起來", title: "最後把四個和弦串成一條路線", text: "當孩子能慢慢走完 C、Am、F、G7，就等於真的開始會做和弦循環了。", list: ["先記順序。", "每個和弦刷 2 到 4 下都可以。", "先求走完，不求快。"] }
};
const lesson17Quiz = [
  { question: "第十七課最主要在練什麼？", options: [{ label: "新的單音" }, { label: "四個和弦的切換" }, { label: "調音器怎麼用" }], answer: 1, correct: "對，這一課的重點是四個和弦切換。", incorrect: "這一課最主要在練四個和弦的切換。" },
  { question: "最適合先練的簡單組合是？", options: [{ label: "C 和 Am" }, { label: "F 和 G7" }, { label: "G7 和 Dm" }], answer: 0, correct: "對，先練 C 和 Am 最容易開始。", incorrect: "先做 C 和 Am，成功率最高。" },
  { question: "切換練習最重要先追求什麼？", options: [{ label: "快" }, { label: "走完路線" }, { label: "一定要唱歌" }], answer: 1, correct: "對，先把路線走完最重要。", incorrect: "切換練習先把路線走完，比快更重要。" }
];
document.addEventListener("DOMContentLoaded", () => {
  window.UkuleleTools?.renderChordGallery(document.getElementById("lesson-17-chords"), ["C", "Am", "F", "G7"]);
  const titleEl = document.getElementById("lesson-17-title");
  const textEl = document.getElementById("lesson-17-text");
  const listEl = document.getElementById("lesson-17-list");
  const stageEl = document.getElementById("lesson-17-stage");
  const badgeEl = document.getElementById("lesson-17-badge");
  window.UkuleleTools?.setupSwitcher({ buttons: Array.from(document.querySelectorAll("#lab .stage-controls button")), modes: lesson17Modes, applyMode: (modeKey, mode) => {
    stageEl.dataset.mode = modeKey; badgeEl.textContent = mode.badge; titleEl.textContent = mode.title; textEl.textContent = mode.text; listEl.innerHTML = mode.list.map((item) => `<li>${item}</li>`).join("");
  }});
  window.UkuleleTools?.setupQuiz({ data: lesson17Quiz, progressEl: document.getElementById("lesson-17-progress"), questionEl: document.getElementById("lesson-17-question"), optionsEl: document.getElementById("lesson-17-options"), feedbackEl: document.getElementById("lesson-17-feedback"), nextEl: document.getElementById("lesson-17-next") });
});
