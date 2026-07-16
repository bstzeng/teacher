const lesson26Modes = {
  am7: {
    badge: "先從最輕鬆的 Am7 開始",
    title: "Am7 是最放鬆的新和弦",
    text: "Am7 很特別，因為四條弦都空著就可以刷。孩子會發現：原來不按任何地方，也可以是一個真的和弦。",
    list: ["四條弦都空著。", "先輕輕刷下去。", "聲音會溫柔、鬆鬆的。"]
  },
  c7: {
    badge: "C7 只有一個點",
    title: "C7 很適合建立新和弦信心",
    text: "C7 只要按 A 弦第 1 格，比 C 更靠近琴頭一點。它常常會帶你去 F，所以在很多歌裡都很有用。",
    list: ["只按 A 弦第 1 格。", "比 C 更靠近前面。", "常常用來帶去 F。"]
  },
  dm: {
    badge: "Dm 是這課的小挑戰",
    title: "Dm 比較需要耐心",
    text: "Dm 是三指和弦，但它的聲音很柔和。孩子如果一開始按不乾淨，很正常，先慢慢把三個點排好就好。",
    list: ["G 弦第 2 格。", "C 弦第 2 格。", "E 弦第 1 格。"]
  },
  compare: {
    badge: "三個和弦角色不同",
    title: "一起看就更容易記住個性",
    text: "Am7 最輕鬆，C7 最好記，Dm 最需要耐心。只要先記住這三個印象，歌曲頁裡遇到它們就不會陌生。",
    list: ["Am7：空弦和弦。", "C7：一指和弦。", "Dm：三指柔和和弦。"]
  }
};

const lesson26Quiz = [
  {
    question: "哪一個和弦四條弦都不用按？",
    options: [{ label: "Am7" }, { label: "C7" }, { label: "Dm" }],
    answer: 0,
    correct: "對，Am7 四條弦都可以空著。",
    incorrect: "這課最輕鬆的是 Am7，四條弦都不用按。"
  },
  {
    question: "哪一個和弦只按 A 弦第 1 格？",
    options: [{ label: "Dm" }, { label: "C7" }, { label: "G" }],
    answer: 1,
    correct: "對，C7 只按 A 弦第 1 格。",
    incorrect: "只按 A 弦第 1 格的是 C7。"
  },
  {
    question: "這課最需要多一點耐心的是哪一個和弦？",
    options: [{ label: "Am7" }, { label: "C7" }, { label: "Dm" }],
    answer: 2,
    correct: "對，Dm 是這課的小挑戰。",
    incorrect: "Dm 是三指和弦，所以最需要多一點耐心。"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  window.UkuleleTools?.renderChordGallery(document.getElementById("lesson-26-chords"), ["Am7", "C7", "Dm"]);

  const titleEl = document.getElementById("lesson-26-title");
  const textEl = document.getElementById("lesson-26-text");
  const listEl = document.getElementById("lesson-26-list");
  const stageEl = document.getElementById("lesson-26-stage");
  const badgeEl = document.getElementById("lesson-26-badge");

  window.UkuleleTools?.setupSwitcher({
    buttons: Array.from(document.querySelectorAll("#lab .stage-controls button")),
    modes: lesson26Modes,
    applyMode: (modeKey, mode) => {
      stageEl.dataset.mode = modeKey;
      badgeEl.textContent = mode.badge;
      titleEl.textContent = mode.title;
      textEl.textContent = mode.text;
      listEl.innerHTML = mode.list.map((item) => `<li>${item}</li>`).join("");
    }
  });

  window.UkuleleTools?.setupQuiz({
    data: lesson26Quiz,
    progressEl: document.getElementById("lesson-26-progress"),
    questionEl: document.getElementById("lesson-26-question"),
    optionsEl: document.getElementById("lesson-26-options"),
    feedbackEl: document.getElementById("lesson-26-feedback"),
    nextEl: document.getElementById("lesson-26-next")
  });
});
