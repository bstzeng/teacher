const lesson25Modes = {
  shape: {
    badge: "先把三個點排整齊",
    highlight: "三根手指排成小山",
    title: "G 和弦是很常見的三指和弦",
    text: "G 和弦要按三個點：C 弦第 2 格、E 弦第 3 格、A 弦第 2 格。先把形狀記住，之後很多歌都會遇到它。",
    cloud: "可以先把兩個第 2 格想成一排，再記住中間有一個第 3 格。",
    list: ["C 弦第 2 格。", "E 弦第 3 格。", "A 弦第 2 格。"]
  },
  finger: {
    badge: "每根手指只管一個點",
    highlight: "不要全擠在一起",
    title: "三根手指要分工，不要互相推擠",
    text: "G 和弦剛開始常常會覺得手很擠，所以更要慢。每根手指先找到自己的位置，再一起刷。",
    cloud: "如果手很緊，可以先放開，再一根一根重新放回去。",
    list: ["先放食指。", "再放中指。", "最後補第三根手指。"]
  },
  sound: {
    badge: "聽亮亮的主和弦",
    highlight: "比 G7 更像主角",
    title: "G 和弦聽起來明亮、穩定",
    text: "G 和弦和 G7 都很常見，但 G 會更像主角，G7 則比較像在幫你帶路。孩子只要先聽出感覺不同，就很夠了。",
    cloud: "刷完先聽整體，不必急著分辨每條弦，但要感覺聲音是開的。",
    list: ["先聽亮亮的感覺。", "不要刷太大力。", "每條弦都要清楚。"]
  }
};

const lesson25Quiz = [
  {
    question: "G 和弦這課最主要在學什麼？",
    options: [{ label: "新的三指和弦 G" }, { label: "調音器怎麼用" }, { label: "只刷空弦" }],
    answer: 0,
    correct: "對，第二十五課是在學新的三指和弦 G。",
    incorrect: "這課的重點是新的三指和弦 G。"
  },
  {
    question: "G 和弦和 G7 相比，哪個更像亮亮的主角？",
    options: [{ label: "G" }, { label: "G7" }, { label: "兩個都完全一樣" }],
    answer: 0,
    correct: "對，G 聽起來通常更像主角。",
    incorrect: "這課先把 G 想成比較亮、比較像主角的和弦。"
  },
  {
    question: "三指和弦剛開始最重要先追求什麼？",
    options: [{ label: "超快切換" }, { label: "排好位置、聲音乾淨" }, { label: "邊按邊跳" }],
    answer: 1,
    correct: "對，先排好位置、讓聲音乾淨最重要。",
    incorrect: "三指和弦先不要急，位置對、聲音乾淨比較重要。"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  window.UkuleleTools?.renderChordGallery(document.getElementById("lesson-25-chord"), ["G"]);

  const titleEl = document.getElementById("lesson-25-title");
  const textEl = document.getElementById("lesson-25-text");
  const listEl = document.getElementById("lesson-25-list");
  const stageEl = document.getElementById("lesson-25-stage");
  const badgeEl = document.getElementById("lesson-25-badge");
  const cloudEl = document.getElementById("lesson-25-cloud");
  const highlightEl = document.getElementById("lesson-25-highlight");

  window.UkuleleTools?.setupSwitcher({
    buttons: Array.from(document.querySelectorAll("#lab .stage-controls button")),
    modes: lesson25Modes,
    applyMode: (modeKey, mode) => {
      stageEl.dataset.mode = modeKey;
      badgeEl.textContent = mode.badge;
      highlightEl.textContent = mode.highlight;
      titleEl.textContent = mode.title;
      textEl.textContent = mode.text;
      cloudEl.textContent = mode.cloud;
      listEl.innerHTML = mode.list.map((item) => `<li>${item}</li>`).join("");
    }
  });

  window.UkuleleTools?.setupQuiz({
    data: lesson25Quiz,
    progressEl: document.getElementById("lesson-25-progress"),
    questionEl: document.getElementById("lesson-25-question"),
    optionsEl: document.getElementById("lesson-25-options"),
    feedbackEl: document.getElementById("lesson-25-feedback"),
    nextEl: document.getElementById("lesson-25-next")
  });
});
