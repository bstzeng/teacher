const lesson28Modes = {
  name: {
    badge: "先抓住：名字沒有變",
    title: "從鋼琴轉到烏克麗麗，第一件事是安心",
    text: "孩子原本在鋼琴上知道的 C、F、G、Am，到了烏克麗麗還是同一批名字。這樣就不是從零開始。",
    list: ["C 還是 C。", "Am 還是 Am。", "不用重學一套名字。"]
  },
  harmony: {
    badge: "和聲感覺也能延續",
    title: "已經熟悉的和聲感，會幫忙學得更快",
    text: "如果孩子知道哪個和弦比較亮、哪個比較柔和，這些感覺也能跟著轉過來。雖然音色不同，但角色很接近。",
    list: ["主和弦還是穩定。", "小和弦常常比較柔和。", "帶路和弦會有想回去的感覺。"]
  },
  shape: {
    badge: "真正改變的是手型",
    title: "鋼琴用按鍵，烏克麗麗用手型",
    text: "在鋼琴上你是按不同的鍵，在烏克麗麗上是把手指放到對的位置，再刷出聲音。名字相同，方法不同。",
    list: ["鋼琴：按鍵。", "烏克麗麗：按弦手型。", "最後都在做同一個和弦名字。"]
  }
};

const lesson28Quiz = [
  {
    question: "從鋼琴轉到烏克麗麗時，哪一件事通常不變？",
    options: [{ label: "和弦名字" }, { label: "手型完全一樣" }, { label: "弦數" }],
    answer: 0,
    correct: "對，和弦名字不變，C 還是 C。",
    incorrect: "這課最重要的是：和弦名字不變。"
  },
  {
    question: "真正改變最大的是什麼？",
    options: [{ label: "和弦名字" }, { label: "發聲方法和手型" }, { label: "音樂不見了" }],
    answer: 1,
    correct: "對，改變最大的是發聲方法和手型。",
    incorrect: "鋼琴和烏克麗麗最大的差別，是按出和弦的方法。"
  },
  {
    question: "這課希望孩子先建立哪個感覺？",
    options: [{ label: "我不是從零開始" }, { label: "我一定要彈很快" }, { label: "我只能學一個樂器" }],
    answer: 0,
    correct: "對，孩子要知道自己不是從零開始。",
    incorrect: "這課的核心是讓孩子知道：原本的基礎會幫上忙。"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const titleEl = document.getElementById("lesson-28-title");
  const textEl = document.getElementById("lesson-28-text");
  const listEl = document.getElementById("lesson-28-list");
  const stageEl = document.getElementById("lesson-28-stage");
  const badgeEl = document.getElementById("lesson-28-badge");

  window.UkuleleTools?.setupSwitcher({
    buttons: Array.from(document.querySelectorAll("#lab .stage-controls button")),
    modes: lesson28Modes,
    applyMode: (modeKey, mode) => {
      stageEl.dataset.mode = modeKey;
      badgeEl.textContent = mode.badge;
      titleEl.textContent = mode.title;
      textEl.textContent = mode.text;
      listEl.innerHTML = mode.list.map((item) => `<li>${item}</li>`).join("");
    }
  });

  window.UkuleleTools?.setupQuiz({
    data: lesson28Quiz,
    progressEl: document.getElementById("lesson-28-progress"),
    questionEl: document.getElementById("lesson-28-question"),
    optionsEl: document.getElementById("lesson-28-options"),
    feedbackEl: document.getElementById("lesson-28-feedback"),
    nextEl: document.getElementById("lesson-28-next")
  });
});
