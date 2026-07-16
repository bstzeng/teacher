const lesson12Modes = {
  clap: {
    badge: "先把拍手做穩",
    title: "第一步，先用拍手把節拍做穩",
    text: "身體如果先知道 1、2、3、4 的節拍，右手撥弦時就比較不會慌張。",
    list: ["先拍手。", "每一下都平均。", "大聲數拍更有幫助。"]
  },
  pluck: {
    badge: "再把拍子放到右手",
    title: "第二步，讓右手照著同樣拍子下刷",
    text: "拍手穩了之後，再把一樣的節拍換成右手下刷，孩子會比較容易成功。",
    list: ["一拍一下刷。", "右手要放鬆。", "不要因為彈琴就突然加快。"]
  },
  together: {
    badge: "拍子和撥弦合在一起",
    title: "第三步，把身體拍子和琴上的聲音接起來",
    text: "這一步做好之後，孩子等於已經把後面和弦課最需要的節奏基礎準備好了。",
    list: ["拍子先在心裡走。", "右手跟著同一個節拍動。", "穩穩做比快快做更重要。"]
  }
};

const lesson12Quiz = [
  {
    question: "第十二課為什麼先拍手再撥弦？",
    options: [{ label: "因為拍手比較吵" }, { label: "因為先把節拍放進身體裡" }, { label: "因為右手不能用" }],
    answer: 1,
    correct: "對，先把節拍放進身體裡最重要。",
    incorrect: "先拍手，是為了先把節拍放進身體裡。"
  },
  {
    question: "拍手穩了之後，下一步是什麼？",
    options: [{ label: "直接彈很難的歌" }, { label: "把同樣節拍換成右手下刷" }, { label: "完全不要數拍" }],
    answer: 1,
    correct: "對，下一步就是把同樣節拍換成右手下刷。",
    incorrect: "拍手之後，要把同樣節拍換成右手下刷。"
  },
  {
    question: "前兩階段學到第十二課後，接下來最自然會進到什麼？",
    options: [{ label: "和弦與刷弦" }, { label: "完全不用拍子了" }, { label: "先不碰烏克麗麗" }],
    answer: 0,
    correct: "對，接下來最自然就是進和弦與刷弦。",
    incorrect: "第十二課就是為後面的和弦與刷弦做準備。"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const titleEl = document.getElementById("lesson-12-title");
  const textEl = document.getElementById("lesson-12-text");
  const listEl = document.getElementById("lesson-12-list");
  const stageEl = document.getElementById("lesson-12-stage");
  const badgeEl = document.getElementById("lesson-12-badge");

  window.UkuleleTools?.setupSwitcher({
    buttons: Array.from(document.querySelectorAll("#lab .stage-controls button")),
    modes: lesson12Modes,
    applyMode: (modeKey, mode) => {
      stageEl.dataset.mode = modeKey;
      badgeEl.textContent = mode.badge;
      titleEl.textContent = mode.title;
      textEl.textContent = mode.text;
      listEl.innerHTML = mode.list.map((item) => `<li>${item}</li>`).join("");
    }
  });

  window.UkuleleTools?.setupQuiz({
    data: lesson12Quiz,
    progressEl: document.getElementById("lesson-12-progress"),
    questionEl: document.getElementById("lesson-12-question"),
    optionsEl: document.getElementById("lesson-12-options"),
    feedbackEl: document.getElementById("lesson-12-feedback"),
    nextEl: document.getElementById("lesson-12-next")
  });
});
