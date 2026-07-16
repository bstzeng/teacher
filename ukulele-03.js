const lesson03Modes = {
  g: {
    badge: "G 弦",
    title: "G 弦是最上面的那一條",
    text: "標準調音裡，G 弦是四條弦中的第一條。孩子先把名字和位置配起來就夠了。",
    list: ["字母 G 和鋼琴音名系統一致。", "先記它在最上面。", "之後調音時會常用到。"]
  },
  c: {
    badge: "C 弦",
    title: "C 弦很重要，很多和弦圖會用到它",
    text: "之後像 G7、G、Dm 這些和弦，常常都會看到 C 弦上有指法。",
    list: ["字母 C 很常出現在和弦名裡。", "它是第二條弦。", "孩子如果會鋼琴，通常對 C 最熟。"]
  },
  e: {
    badge: "E 弦",
    title: "E 弦是第三條弦",
    text: "E 弦在很多簡單和弦中也會出現，例如 F 和 G7 都會摸到它。",
    list: ["字母 E 和鋼琴的 E 一樣。", "先記位置，再記實際用法。", "之後會常看到第 1 格。"]
  },
  a: {
    badge: "A 弦",
    title: "A 弦是最下面的一條",
    text: "很多入門和弦會直接用到 A 弦，例如 C 和 C7 都在這一條做文章。",
    list: ["先記住它在最下面。", "C 和弦就會按在 A 弦第 3 格。", "對之後學第一個和弦很重要。"]
  }
};

const lesson03Quiz = [
  {
    question: "烏克麗麗標準調音四條弦是？",
    options: [{ label: "G、C、E、A" }, { label: "C、D、E、F" }, { label: "A、B、C、D" }],
    answer: 0,
    correct: "對，就是 G、C、E、A。",
    incorrect: "再看一次，四條弦是 G、C、E、A。"
  },
  {
    question: "哪一條弦在最下面？",
    options: [{ label: "G 弦" }, { label: "C 弦" }, { label: "A 弦" }],
    answer: 2,
    correct: "對，A 弦在最下面。",
    incorrect: "最下面的是 A 弦。"
  },
  {
    question: "這些字母和什麼樂器的音名可以連起來？",
    options: [{ label: "鼓" }, { label: "鋼琴" }, { label: "口風琴" }],
    answer: 1,
    correct: "對，鋼琴也用一樣的字母音名。",
    incorrect: "這些字母和鋼琴的音名系統可以連起來。"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const titleEl = document.getElementById("lesson-03-title");
  const textEl = document.getElementById("lesson-03-text");
  const listEl = document.getElementById("lesson-03-list");
  const stageEl = document.getElementById("lesson-03-stage");
  const badgeEl = document.getElementById("lesson-03-badge");

  window.UkuleleTools?.setupSwitcher({
    buttons: Array.from(document.querySelectorAll("#lab .stage-controls button")),
    modes: lesson03Modes,
    applyMode: (modeKey, mode) => {
      stageEl.dataset.mode = modeKey;
      badgeEl.textContent = mode.badge;
      titleEl.textContent = mode.title;
      textEl.textContent = mode.text;
      listEl.innerHTML = mode.list.map((item) => `<li>${item}</li>`).join("");
    }
  });

  window.UkuleleTools?.setupQuiz({
    data: lesson03Quiz,
    progressEl: document.getElementById("lesson-03-progress"),
    questionEl: document.getElementById("lesson-03-question"),
    optionsEl: document.getElementById("lesson-03-options"),
    feedbackEl: document.getElementById("lesson-03-feedback"),
    nextEl: document.getElementById("lesson-03-next")
  });
});
