const lesson01Modes = {
  small: {
    badge: "小小一把",
    title: "烏克麗麗是一把小小的樂器",
    text: "它不像鋼琴那樣固定在一個大地方，也不像一般吉他那麼大。小朋友抱起來比較有安全感。",
    list: ["比較輕，拿起來不會太有壓力。", "抱琴時身體比較容易穩定。", "小朋友比較快願意自己拿著玩。"] 
  },
  strings: {
    badge: "四條弦",
    title: "烏克麗麗最常見的是四條弦",
    text: "四條弦代表一開始需要看的資訊比較少，孩子在視覺上和手上都比較容易管理。",
    list: ["比六條弦的吉他更容易先開始。", "後面學和弦圖時，圖也比較簡單。", "先把四條弦認熟，就已經很好。"]
  },
  bright: {
    badge: "亮亮的聲音",
    title: "它的聲音明亮、輕快，很適合兒歌",
    text: "很多入門兒歌都很適合用烏克麗麗配。對初學小朋友來說，容易有『我真的在彈歌』的感覺。",
    list: ["很適合邊唱邊刷。", "常常學幾個和弦就能開始玩歌。", "對已經有節拍感的鋼琴孩子很友善。"]
  }
};

const lesson01Quiz = [
  {
    question: "烏克麗麗最常見有幾條弦？",
    options: [{ label: "四條弦" }, { label: "六條弦" }, { label: "八條弦" }],
    answer: 0,
    correct: "對，入門烏克麗麗最常見是四條弦。",
    incorrect: "再看一次，烏克麗麗最常見是四條弦。"
  },
  {
    question: "為什麼烏克麗麗很適合小朋友開始？",
    options: [{ label: "因為它很大很重" }, { label: "因為它比較小、比較容易抱" }, { label: "因為它一定比鋼琴簡單" }],
    answer: 1,
    correct: "對，小而輕是它很友善的地方。",
    incorrect: "重點在於它比較小、比較容易抱穩。"
  },
  {
    question: "這一課最重要先做到什麼？",
    options: [{ label: "馬上背十個和弦" }, { label: "先知道它是一把四弦的小樂器" }, { label: "一定要先彈完整歌曲" }],
    answer: 1,
    correct: "對，先建立正確印象就夠了。",
    incorrect: "先認識樂器本體，比急著彈歌重要。"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const titleEl = document.getElementById("lesson-01-title");
  const textEl = document.getElementById("lesson-01-text");
  const listEl = document.getElementById("lesson-01-list");
  const stageEl = document.getElementById("lesson-01-stage");
  const badgeEl = document.getElementById("lesson-01-badge");

  window.UkuleleTools?.setupSwitcher({
    buttons: Array.from(document.querySelectorAll("#lab .stage-controls button")),
    modes: lesson01Modes,
    applyMode: (modeKey, mode) => {
      stageEl.dataset.mode = modeKey;
      badgeEl.textContent = mode.badge;
      titleEl.textContent = mode.title;
      textEl.textContent = mode.text;
      listEl.innerHTML = mode.list.map((item) => `<li>${item}</li>`).join("");
    }
  });

  window.UkuleleTools?.setupQuiz({
    data: lesson01Quiz,
    progressEl: document.getElementById("lesson-01-progress"),
    questionEl: document.getElementById("lesson-01-question"),
    optionsEl: document.getElementById("lesson-01-options"),
    feedbackEl: document.getElementById("lesson-01-feedback"),
    nextEl: document.getElementById("lesson-01-next")
  });
});
