const lesson07Modes = {
  g: {
    badge: "G 弦要調成 G",
    title: "先看 G 弦",
    text: "G 弦是最上面那條。調音時看到 G，不要緊張，這就是它該去的位置。",
    list: ["先認出 G 弦是哪一條。", "弦鈕要慢慢轉。", "越接近正確音越要小心。"]
  },
  c: {
    badge: "C 弦要調成 C",
    title: "再看 C 弦",
    text: "C 弦是第二條。很多孩子對 C 這個字母很熟，因為鋼琴裡也常看到。",
    list: ["C 弦在第二條。", "名字和鋼琴音名系統一致。", "調準之後聲音會更穩。"]
  },
  e: {
    badge: "E 弦要調成 E",
    title: "第三條是 E 弦",
    text: "E 弦很常在後面的和弦裡被按到，所以現在先把它調準很重要。",
    list: ["E 弦在第三條。", "後面 F、G7 常會用到它。", "調音不準會直接影響和弦。"]
  },
  a: {
    badge: "A 弦要調成 A",
    title: "最下面是 A 弦",
    text: "A 弦在很多入門和弦很重要，例如 C 和 C7 都會碰到它。",
    list: ["A 弦在最下面。", "先把字母和位置接好。", "後面第一個和弦 C 就會用到它。"]
  }
};

const lesson07Quiz = [
  {
    question: "調音時，弦鈕應該怎麼轉？",
    options: [{ label: "很用力快速亂轉" }, { label: "慢慢一點點轉" }, { label: "完全不用理它" }],
    answer: 1,
    correct: "對，弦鈕要慢慢轉。",
    incorrect: "調音最重要的是慢慢轉，不要亂扭。"
  },
  {
    question: "調音前先要知道什麼？",
    options: [{ label: "每條弦對應哪個字母" }, { label: "先背十首歌" }, { label: "先會所有和弦" }],
    answer: 0,
    correct: "對，先知道每條弦要調到哪個字母。",
    incorrect: "調音前最基本的是知道弦和字母的對應。"
  },
  {
    question: "為什麼先調音很重要？",
    options: [{ label: "因為不準的琴，整首歌會怪怪的" }, { label: "因為這樣一定會彈更快" }, { label: "因為可以不用練拍子" }],
    answer: 0,
    correct: "對，音不準時再整齊也會怪怪的。",
    incorrect: "重點是：音不準，整首歌聽起來就不對。"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const titleEl = document.getElementById("lesson-07-title");
  const textEl = document.getElementById("lesson-07-text");
  const listEl = document.getElementById("lesson-07-list");
  const stageEl = document.getElementById("lesson-07-stage");
  const badgeEl = document.getElementById("lesson-07-badge");

  window.UkuleleTools?.setupSwitcher({
    buttons: Array.from(document.querySelectorAll("#lab .stage-controls button")),
    modes: lesson07Modes,
    applyMode: (modeKey, mode) => {
      stageEl.dataset.mode = modeKey;
      badgeEl.textContent = mode.badge;
      titleEl.textContent = mode.title;
      textEl.textContent = mode.text;
      listEl.innerHTML = mode.list.map((item) => `<li>${item}</li>`).join("");
    }
  });

  window.UkuleleTools?.setupQuiz({
    data: lesson07Quiz,
    progressEl: document.getElementById("lesson-07-progress"),
    questionEl: document.getElementById("lesson-07-question"),
    optionsEl: document.getElementById("lesson-07-options"),
    feedbackEl: document.getElementById("lesson-07-feedback"),
    nextEl: document.getElementById("lesson-07-next")
  });
});
