const lesson21Modes = {
  pattern: { badge: "一拍一下，全部往下", title: "下下下下是最簡單也很實用的刷法", text: "很多兒歌只用這個刷法就能配得很好。", list: ["四拍都往下。", "一拍一下。", "很適合剛開始。"] },
  count: { badge: "1 2 3 4 都是下刷", title: "數拍和刷弦要完全對齊", text: "如果孩子能邊數 1、2、3、4 邊做四次下刷，很多歌就能開始了。", list: ["每拍對一個下刷。", "拍子不要飄。", "先慢再快。"] },
  loop: { badge: "連續做也要整齊", title: "一輪做完，再做第二輪", text: "做完四下，再重來一次，孩子就會開始感覺到刷法循環。", list: ["四下是一輪。", "一輪一輪做。", "整齊比快重要。"] }
};
const lesson21Quiz = [
  { question: "第二十一課最簡單的刷法是？", options: [{ label: "↓ ↓ ↓ ↓" }, { label: "↓ ↑ ↓ ↑" }, { label: "↑ ↑ ↑ ↑" }], answer: 0, correct: "對，就是下下下下。", incorrect: "最簡單的刷法就是下下下下。" },
  { question: "這個刷法為什麼重要？", options: [{ label: "因為很多歌用它就夠開始" }, { label: "因為一定最難" }, { label: "因為不能配和弦" }], answer: 0, correct: "對，很多歌光靠這個就能開始。", incorrect: "這個刷法重要，因為很多歌光靠它就能開始。" },
  { question: "一輪下下下下通常對應幾拍？", options: [{ label: "4 拍" }, { label: "2 拍" }, { label: "8 拍" }], answer: 0, correct: "對，一輪通常就是 4 拍。", incorrect: "下下下下最常先對應 4 拍。" }
];
document.addEventListener("DOMContentLoaded", () => {
  const titleEl = document.getElementById("lesson-21-title");
  const textEl = document.getElementById("lesson-21-text");
  const listEl = document.getElementById("lesson-21-list");
  const stageEl = document.getElementById("lesson-21-stage");
  const badgeEl = document.getElementById("lesson-21-badge");
  window.UkuleleTools?.setupSwitcher({ buttons: Array.from(document.querySelectorAll("#lab .stage-controls button")), modes: lesson21Modes, applyMode: (modeKey, mode) => {
    stageEl.dataset.mode = modeKey; badgeEl.textContent = mode.badge; titleEl.textContent = mode.title; textEl.textContent = mode.text; listEl.innerHTML = mode.list.map((item) => `<li>${item}</li>`).join("");
  }});
  window.UkuleleTools?.setupQuiz({ data: lesson21Quiz, progressEl: document.getElementById("lesson-21-progress"), questionEl: document.getElementById("lesson-21-question"), optionsEl: document.getElementById("lesson-21-options"), feedbackEl: document.getElementById("lesson-21-feedback"), nextEl: document.getElementById("lesson-21-next") });
});
