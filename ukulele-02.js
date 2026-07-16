const lesson02Modes = {
  headstock: {
    badge: "琴頭",
    title: "琴頭是最上面的地方",
    text: "這裡有弦鈕，之後要調音的時候，會在這裡慢慢轉。",
    list: ["把弦固定住。", "調音時會常常碰到。", "位置在最上端。"] 
  },
  neck: {
    badge: "琴頸",
    title: "琴頸是左手工作的主要地方",
    text: "後面按和弦、按單音，幾乎都會在琴頸這一帶發生。",
    list: ["上面會有 fret。", "左手指頭在這裡按弦。", "和弦圖看的就是這一區。"]
  },
  body: {
    badge: "琴身",
    title: "琴身是你抱著的主體",
    text: "琴身負責讓整把樂器有空間共鳴，也讓孩子抱起來比較穩定。",
    list: ["是整把琴最大塊的地方。", "音孔和琴橋都在這裡。", "抱琴時最常碰到。"]
  },
  hole: {
    badge: "音孔",
    title: "音孔是聲音傳出來很重要的位置",
    text: "孩子常常會直覺想摸這個洞，這沒關係，順便就可以教它叫音孔。",
    list: ["位置通常在琴身中央附近。", "聲音會從這裡更明顯地傳出。", "不要把東西塞進去。"]
  },
  bridge: {
    badge: "琴橋",
    title: "琴橋把弦固定在琴身上",
    text: "弦的一端會固定在琴橋。雖然現在還不需要懂細節，但知道它的位置很有幫助。",
    list: ["通常在琴身下半部。", "弦會從這裡延伸出去。", "之後看整把琴時比較不會迷路。"]
  }
};

const lesson02Quiz = [
  {
    question: "哪個部位最常和調音有關？",
    options: [{ label: "琴頭" }, { label: "音孔" }, { label: "琴身" }],
    answer: 0,
    correct: "對，弦鈕在琴頭，調音時會用到。",
    incorrect: "想想弦鈕在哪裡，答案是琴頭。"
  },
  {
    question: "左手之後按和弦主要會在什麼地方？",
    options: [{ label: "琴頭" }, { label: "琴頸" }, { label: "音孔" }],
    answer: 1,
    correct: "對，左手主要在琴頸工作。",
    incorrect: "後面按和弦主要是在琴頸。"
  },
  {
    question: "哪個位置像一個圓圓的洞？",
    options: [{ label: "琴橋" }, { label: "音孔" }, { label: "琴頭" }],
    answer: 1,
    correct: "對，那就是音孔。",
    incorrect: "圓圓的洞叫做音孔。"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const titleEl = document.getElementById("lesson-02-title");
  const textEl = document.getElementById("lesson-02-text");
  const listEl = document.getElementById("lesson-02-list");
  const stageEl = document.getElementById("lesson-02-stage");
  const badgeEl = document.getElementById("lesson-02-badge");

  window.UkuleleTools?.setupSwitcher({
    buttons: Array.from(document.querySelectorAll("#lab .stage-controls button")),
    modes: lesson02Modes,
    applyMode: (modeKey, mode) => {
      stageEl.dataset.mode = modeKey;
      badgeEl.textContent = mode.badge;
      titleEl.textContent = mode.title;
      textEl.textContent = mode.text;
      listEl.innerHTML = mode.list.map((item) => `<li>${item}</li>`).join("");
    }
  });

  window.UkuleleTools?.setupQuiz({
    data: lesson02Quiz,
    progressEl: document.getElementById("lesson-02-progress"),
    questionEl: document.getElementById("lesson-02-question"),
    optionsEl: document.getElementById("lesson-02-options"),
    feedbackEl: document.getElementById("lesson-02-feedback"),
    nextEl: document.getElementById("lesson-02-next")
  });
});
