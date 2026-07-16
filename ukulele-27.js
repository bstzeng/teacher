const lesson27Modes = {
  strings: {
    badge: "先找到四條直線",
    title: "和弦圖裡的直線，就是四條弦",
    text: "和弦表像是把琴頸立起來看。四條直線代表四條弦，孩子先把這件事記住，圖就不會那麼神祕。",
    list: ["四條直線就是四條弦。", "每條弦都會有自己的黑點。", "先分清楚弦，再看位置。"]
  },
  frets: {
    badge: "橫線就是格子",
    title: "橫橫的一條一條，是格線",
    text: "和弦圖上的橫線代表格子。黑點落在哪一格，就表示左手要按那一格附近。",
    list: ["橫線不是弦。", "橫線是格子。", "黑點會落在某一格。"]
  },
  dots: {
    badge: "黑點才是要按的地方",
    title: "黑點和數字一起看，就知道怎麼按",
    text: "黑點表示要按的位置，黑點裡的小數字通常是建議用哪一根手指。先看位置，再看數字。",
    list: ["黑點是按弦位置。", "數字是手指號碼。", "先看位置，再看手指。"]
  },
  read: {
    badge: "整張圖從上到下讀一次",
    title: "名字、位置、手指，這樣讀最快",
    text: "最穩的讀法是：先看和弦名字，再看黑點分布，最後看手指數字。這樣孩子會比較不容易亂放。",
    list: ["先看和弦名字。", "再看黑點分布。", "最後看手指號碼。"]
  }
};

const lesson27Quiz = [
  {
    question: "和弦圖裡的直線通常代表什麼？",
    options: [{ label: "四條弦" }, { label: "四個拍子" }, { label: "四首歌" }],
    answer: 0,
    correct: "對，直線代表四條弦。",
    incorrect: "先記住：和弦圖裡的直線就是四條弦。"
  },
  {
    question: "和弦圖裡的黑點代表什麼？",
    options: [{ label: "要唱哪一句" }, { label: "要按的位置" }, { label: "要刷幾次" }],
    answer: 1,
    correct: "對，黑點代表要按的位置。",
    incorrect: "黑點不是拍子，是要按的位置。"
  },
  {
    question: "看和弦圖時，最穩的順序是？",
    options: [{ label: "先亂按再看圖" }, { label: "名字 → 黑點 → 手指號碼" }, { label: "只看顏色" }],
    answer: 1,
    correct: "對，名字 → 黑點 → 手指號碼，最容易讀懂。",
    incorrect: "先看名字，再看黑點，最後看手指號碼。"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  window.UkuleleTools?.renderChordGallery(document.getElementById("lesson-27-chart"), ["G7"]);

  const titleEl = document.getElementById("lesson-27-title");
  const textEl = document.getElementById("lesson-27-text");
  const listEl = document.getElementById("lesson-27-list");
  const stageEl = document.getElementById("lesson-27-stage");
  const badgeEl = document.getElementById("lesson-27-badge");

  window.UkuleleTools?.setupSwitcher({
    buttons: Array.from(document.querySelectorAll("#lab .stage-controls button")),
    modes: lesson27Modes,
    applyMode: (modeKey, mode) => {
      stageEl.dataset.mode = modeKey;
      badgeEl.textContent = mode.badge;
      titleEl.textContent = mode.title;
      textEl.textContent = mode.text;
      listEl.innerHTML = mode.list.map((item) => `<li>${item}</li>`).join("");
    }
  });

  window.UkuleleTools?.setupQuiz({
    data: lesson27Quiz,
    progressEl: document.getElementById("lesson-27-progress"),
    questionEl: document.getElementById("lesson-27-question"),
    optionsEl: document.getElementById("lesson-27-options"),
    feedbackEl: document.getElementById("lesson-27-feedback"),
    nextEl: document.getElementById("lesson-27-next")
  });
});
