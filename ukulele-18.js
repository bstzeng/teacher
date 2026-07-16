const lesson18Modes = {
  progression: { badge: "先記住和弦順序", title: "第一步，先把和弦循環記住", text: "第一次做小歌，不要一開始就想很多。先把 C、Am、F、G7 的順序記穩。", list: ["可以先嘴巴念順序。", "順序熟了再刷。", "先一圈一圈走。"] },
  strum: { badge: "再加最簡單刷法", title: "第二步，加最簡單的下刷", text: "每個和弦先刷 4 下，孩子就能很快感覺到『這像一首歌』。", list: ["一拍一下。", "每個和弦先刷 4 下。", "整齊比花俏更重要。"] },
  full: { badge: "和弦＋刷法＋哼唱", title: "第三步，全部合在一起", text: "和弦順序穩了、下刷也穩了，就可以用 la la la 或簡單歌詞做第一次小歌體驗。", list: ["先輕輕哼唱。", "不一定要正式歌詞。", "完成一圈就很值得鼓勵。"] }
};
const lesson18Quiz = [
  { question: "第十八課的小歌先用哪四個和弦？", options: [{ label: "C、Am、F、G7" }, { label: "G、Dm、C7、Am7" }, { label: "只有 C 和 G7" }], answer: 0, correct: "對，就是 C、Am、F、G7。", incorrect: "這一課的小歌先用 C、Am、F、G7。" },
  { question: "第一次做小歌時，刷法最適合先怎麼做？", options: [{ label: "先用最簡單下刷" }, { label: "先刷很複雜的節奏" }, { label: "完全不刷" }], answer: 0, correct: "對，先用最簡單下刷最穩。", incorrect: "小歌的第一步先用最簡單下刷。" },
  { question: "如果孩子還不敢唱歌，最好的替代方法是？", options: [{ label: "完全停下來" }, { label: "先用 la la la 哼" }, { label: "直接換更難的歌" }], answer: 1, correct: "對，先用 la la la 哼唱就很好。", incorrect: "還不敢唱也沒關係，先用 la la la 哼唱就可以。" }
];
document.addEventListener("DOMContentLoaded", () => {
  window.UkuleleTools?.renderChordGallery(document.getElementById("lesson-18-chords"), ["C", "Am", "F", "G7"]);
  const titleEl = document.getElementById("lesson-18-title");
  const textEl = document.getElementById("lesson-18-text");
  const listEl = document.getElementById("lesson-18-list");
  const stageEl = document.getElementById("lesson-18-stage");
  const badgeEl = document.getElementById("lesson-18-badge");
  window.UkuleleTools?.setupSwitcher({ buttons: Array.from(document.querySelectorAll("#lab .stage-controls button")), modes: lesson18Modes, applyMode: (modeKey, mode) => {
    stageEl.dataset.mode = modeKey; badgeEl.textContent = mode.badge; titleEl.textContent = mode.title; textEl.textContent = mode.text; listEl.innerHTML = mode.list.map((item) => `<li>${item}</li>`).join("");
  }});
  window.UkuleleTools?.setupQuiz({ data: lesson18Quiz, progressEl: document.getElementById("lesson-18-progress"), questionEl: document.getElementById("lesson-18-question"), optionsEl: document.getElementById("lesson-18-options"), feedbackEl: document.getElementById("lesson-18-feedback"), nextEl: document.getElementById("lesson-18-next") });
});
