const lesson09Modes = {
  open: {
    badge: "先聽空弦",
    title: "0 格就是空弦",
    text: "什麼都不按，先聽原始的聲音。這是每一條弦最基本的起點。",
    stringName: "0 格：什麼都不按",
    list: ["空弦先聽清楚。", "右手先穩穩彈。", "聽完再往下一格走。"]
  },
  fret1: {
    badge: "第一格",
    title: "1 格是第一個按壓位置",
    text: "手指輕輕按在第一格附近，靠近 fret 後方一點，不要壓在金屬正上面。",
    stringName: "1 格：輕輕按下",
    list: ["手指尖尖地按。", "不要太大力。", "聽聽看聲音有沒有乾淨。"]
  },
  fret2: {
    badge: "第二格",
    title: "2 格開始需要更穩定的左手",
    text: "到第二格時，孩子常常會忘記保持手型。這時提醒『慢慢按、慢慢聽』很有用。",
    stringName: "2 格：慢慢按、慢慢聽",
    list: ["手腕不要僵硬。", "按完就聽。", "每次都讓聲音完整出來。"]
  },
  fret3: {
    badge: "第三格",
    title: "3 格是這一課的小終點",
    text: "到第三格時，孩子已經完成一小段單音旅程。接下來可以再慢慢回到 0 格。",
    stringName: "3 格：走到這一課終點",
    list: ["按好再彈。", "不要急著回頭。", "完成後再慢慢回 0 格。"]
  }
};

const lesson09Quiz = [
  {
    question: "0 格是什麼意思？",
    options: [{ label: "第十格" }, { label: "空弦，不按任何格" }, { label: "用兩隻手一起按" }],
    answer: 1,
    correct: "對，0 格就是空弦。",
    incorrect: "0 格的意思是空弦，不按任何格。"
  },
  {
    question: "按 1、2、3 格時，最重要的是？",
    options: [{ label: "按得很快" }, { label: "按得很大力" }, { label: "慢慢按，聽清楚聲音" }],
    answer: 2,
    correct: "對，慢慢按、聽清楚最重要。",
    incorrect: "單音練習的重點是慢慢按、聽清楚。"
  },
  {
    question: "第九課為什麼只先做 0 到 3 格？",
    options: [{ label: "因為一次只練少一點比較穩" }, { label: "因為其他格都不能按" }, { label: "因為右手不能動" }],
    answer: 0,
    correct: "對，一次只練少一點，孩子比較不容易亂掉。",
    incorrect: "重點是一次只練少一點，會比較穩。"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const titleEl = document.getElementById("lesson-09-title");
  const textEl = document.getElementById("lesson-09-text");
  const listEl = document.getElementById("lesson-09-list");
  const stageEl = document.getElementById("lesson-09-stage");
  const badgeEl = document.getElementById("lesson-09-badge");
  const stringNameEl = document.getElementById("lesson-09-string-name");

  window.UkuleleTools?.setupSwitcher({
    buttons: Array.from(document.querySelectorAll("#lab .stage-controls button")),
    modes: lesson09Modes,
    applyMode: (modeKey, mode) => {
      stageEl.dataset.mode = modeKey;
      badgeEl.textContent = mode.badge;
      titleEl.textContent = mode.title;
      textEl.textContent = mode.text;
      stringNameEl.textContent = mode.stringName;
      listEl.innerHTML = mode.list.map((item) => `<li>${item}</li>`).join("");
    }
  });

  window.UkuleleTools?.setupQuiz({
    data: lesson09Quiz,
    progressEl: document.getElementById("lesson-09-progress"),
    questionEl: document.getElementById("lesson-09-question"),
    optionsEl: document.getElementById("lesson-09-options"),
    feedbackEl: document.getElementById("lesson-09-feedback"),
    nextEl: document.getElementById("lesson-09-next")
  });
});
