const lesson11Modes = {
  whole: {
    badge: "全音符最長",
    title: "全音符像走四下",
    text: "全音符最常見的錯誤，就是孩子太快想要換下一個動作。其實它要完整撐四拍。",
    list: ["走四拍。", "不要太快結束。", "一邊數 1 2 3 4 一邊撐住。"]
  },
  half: {
    badge: "二分音符中等長",
    title: "二分音符像走兩下",
    text: "二分音符比全音符短，但也不是一下就結束。它要穩穩地待兩拍。",
    list: ["走兩拍。", "比全音符短。", "比四分音符長。"]
  },
  quarter: {
    badge: "四分音符最短",
    title: "四分音符像走一下",
    text: "四分音符是最短也最常見的入門節奏單位，很適合和一拍一下刷連起來。",
    list: ["走一下。", "最常拿來配一拍一下刷。", "短短的、很清楚。"]
  }
};

const lesson11Quiz = [
  {
    question: "哪一個走最久？",
    options: [{ label: "全音符" }, { label: "四分音符" }, { label: "都一樣" }],
    answer: 0,
    correct: "對，全音符走最久。",
    incorrect: "走最久的是全音符。"
  },
  {
    question: "二分音符大約像走幾拍？",
    options: [{ label: "一拍" }, { label: "兩拍" }, { label: "四拍" }],
    answer: 1,
    correct: "對，二分音符像走兩拍。",
    incorrect: "二分音符的感覺是走兩拍。"
  },
  {
    question: "四分音符最適合先連到什麼感覺？",
    options: [{ label: "一拍一下" }, { label: "四拍都不動" }, { label: "一直亂刷" }],
    answer: 0,
    correct: "對，四分音符很適合連到一拍一下。",
    incorrect: "四分音符最容易連到一拍一下的感覺。"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const titleEl = document.getElementById("lesson-11-title");
  const textEl = document.getElementById("lesson-11-text");
  const listEl = document.getElementById("lesson-11-list");
  const stageEl = document.getElementById("lesson-11-stage");
  const badgeEl = document.getElementById("lesson-11-badge");

  window.UkuleleTools?.setupSwitcher({
    buttons: Array.from(document.querySelectorAll("#lab .stage-controls button")),
    modes: lesson11Modes,
    applyMode: (modeKey, mode) => {
      stageEl.dataset.mode = modeKey;
      badgeEl.textContent = mode.badge;
      titleEl.textContent = mode.title;
      textEl.textContent = mode.text;
      listEl.innerHTML = mode.list.map((item) => `<li>${item}</li>`).join("");
    }
  });

  window.UkuleleTools?.setupQuiz({
    data: lesson11Quiz,
    progressEl: document.getElementById("lesson-11-progress"),
    questionEl: document.getElementById("lesson-11-question"),
    optionsEl: document.getElementById("lesson-11-options"),
    feedbackEl: document.getElementById("lesson-11-feedback"),
    nextEl: document.getElementById("lesson-11-next")
  });
});
