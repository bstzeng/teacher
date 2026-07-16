const lesson24Modes = {
  progression: { badge: "先完成一整圈", title: "先把和弦順序走完", text: "這一課最重要的第一步，是把短曲的和弦順序完整走過一次。", list: ["和弦順序先記穩。", "每個和弦不用急。", "先完成一整圈。"] },
  strum: { badge: "再把刷法放進去", title: "有和弦後，再把刷法加進來", text: "孩子如果一開始就全部一起做容易亂，所以先和弦、再刷法，通常最穩。", list: ["先有和弦。", "再加刷法。", "整體保持拍子。"] },
  full: { badge: "短曲完整走完", title: "最後把和弦、刷法、哼唱合起來", text: "能慢慢把一首短曲走完，就是前四階段最好的收尾。", list: ["唱或哼都可以。", "先完整，不用快。", "完成感最重要。"] }
};
const lesson24Quiz = [
  { question: "第二十四課最重要的目標是？", options: [{ label: "把短曲完整走完" }, { label: "學一個全新和弦" }, { label: "完全不刷弦" }], answer: 0, correct: "對，這一課最重要的是把短曲完整走完。", incorrect: "第二十四課的目標是把短曲完整走完。" },
  { question: "如果孩子一開始就全部一起做很亂，最好的做法是？", options: [{ label: "先拆成和弦和刷法兩步" }, { label: "直接更快" }, { label: "立刻換更難的歌" }], answer: 0, correct: "對，先拆成和弦和刷法兩步最穩。", incorrect: "這一課最好的做法是先拆成和弦和刷法兩步。" },
  { question: "第二十四課結束後，最自然可以去哪裡？", options: [{ label: "歌曲頁" }, { label: "回到調音課" }, { label: "完全停下來" }], answer: 0, correct: "對，完成這課後很適合直接進歌曲頁。", incorrect: "這一課結束後，很適合進歌曲頁開始玩歌。" }
];
document.addEventListener("DOMContentLoaded", () => {
  window.UkuleleTools?.renderChordGallery(document.getElementById("lesson-24-chords"), ["C", "Am", "F", "G7"]);
  const titleEl = document.getElementById("lesson-24-title");
  const textEl = document.getElementById("lesson-24-text");
  const listEl = document.getElementById("lesson-24-list");
  const stageEl = document.getElementById("lesson-24-stage");
  const badgeEl = document.getElementById("lesson-24-badge");
  window.UkuleleTools?.setupSwitcher({ buttons: Array.from(document.querySelectorAll("#lab .stage-controls button")), modes: lesson24Modes, applyMode: (modeKey, mode) => {
    stageEl.dataset.mode = modeKey; badgeEl.textContent = mode.badge; titleEl.textContent = mode.title; textEl.textContent = mode.text; listEl.innerHTML = mode.list.map((item) => `<li>${item}</li>`).join("");
  }});
  window.UkuleleTools?.setupQuiz({ data: lesson24Quiz, progressEl: document.getElementById("lesson-24-progress"), questionEl: document.getElementById("lesson-24-question"), optionsEl: document.getElementById("lesson-24-options"), feedbackEl: document.getElementById("lesson-24-feedback"), nextEl: document.getElementById("lesson-24-next") });
});
