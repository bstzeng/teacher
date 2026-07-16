const lesson06Modes = {
  left: {
    badge: "左手按弦",
    title: "左手的工作，是把弦按在對的位置",
    text: "現在先記一件事：手指不要壓在金屬 fret 正上面，稍微靠近 fret 後方一點，通常聲音會更乾淨。",
    list: ["手指尖尖地按，不要整片趴下。", "靠近 fret 後面一點。", "先求聲音乾淨，不求快。"]
  },
  right: {
    badge: "右手刷弦",
    title: "右手的工作，是把聲音刷出來",
    text: "右手先從最簡單的下刷開始。動作像輕輕掃過四條弦，不是用力打下去。",
    list: ["先學下刷就好。", "手腕保持放鬆。", "刷完可以停一下聽聲音。"]
  },
  together: {
    badge: "一起合作",
    title: "真正發出好聲音，需要左右手一起合作",
    text: "左手先放好，右手再慢慢刷。順序慢一點沒有關係，重點是每次都清楚。",
    list: ["左手先準備。", "右手再下刷。", "每次刷完都聽聽看乾不乾淨。"]
  }
};

const lesson06Quiz = [
  {
    question: "左手按弦時，比較好的位置是？",
    options: [{ label: "壓在 fret 正中間" }, { label: "靠近 fret 後面一點" }, { label: "隨便哪裡都可以" }],
    answer: 1,
    correct: "對，靠近 fret 後面一點通常比較清楚。",
    incorrect: "按弦時比較好的位置是靠近 fret 後面一點。"
  },
  {
    question: "右手一開始先學哪個動作最適合？",
    options: [{ label: "超快上下刷" }, { label: "簡單的下刷" }, { label: "先彈很難的指法" }],
    answer: 1,
    correct: "對，先把簡單下刷做穩最重要。",
    incorrect: "一開始先學簡單下刷就夠了。"
  },
  {
    question: "第六課最後先預告了哪些和弦？",
    options: [{ label: "C、Am、F、G7" }, { label: "Bm、E、A、D" }, { label: "全部十二個大調" }],
    answer: 0,
    correct: "對，先看 C、Am、F、G7 這四個。",
    incorrect: "這一課先預告的是 C、Am、F、G7。"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const titleEl = document.getElementById("lesson-06-title");
  const textEl = document.getElementById("lesson-06-text");
  const listEl = document.getElementById("lesson-06-list");
  const stageEl = document.getElementById("lesson-06-stage");
  const badgeEl = document.getElementById("lesson-06-badge");

  window.UkuleleTools?.setupSwitcher({
    buttons: Array.from(document.querySelectorAll("#lab .stage-controls button")),
    modes: lesson06Modes,
    applyMode: (modeKey, mode) => {
      stageEl.dataset.mode = modeKey;
      badgeEl.textContent = mode.badge;
      titleEl.textContent = mode.title;
      textEl.textContent = mode.text;
      listEl.innerHTML = mode.list.map((item) => `<li>${item}</li>`).join("");
    }
  });

  window.UkuleleTools?.renderChordGallery(
    document.getElementById("lesson-06-chords"),
    ["C", "Am", "F", "G7"]
  );

  window.UkuleleTools?.setupQuiz({
    data: lesson06Quiz,
    progressEl: document.getElementById("lesson-06-progress"),
    questionEl: document.getElementById("lesson-06-question"),
    optionsEl: document.getElementById("lesson-06-options"),
    feedbackEl: document.getElementById("lesson-06-feedback"),
    nextEl: document.getElementById("lesson-06-next")
  });
});
