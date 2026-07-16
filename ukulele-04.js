const lesson04Modes = {
  size: {
    badge: "大小差異",
    title: "烏克麗麗通常比吉他更小",
    text: "對小朋友來說，樂器尺寸真的很重要。烏克麗麗比較容易抱穩，也比較容易坐著玩。",
    left: "比較小，抱起來更輕鬆。",
    right: "通常比較大，需要更多手臂和身體支撐。",
    list: ["小尺寸對初學者友善。", "比較不容易因太重而累。", "孩子比較願意主動拿起來。"]
  },
  strings: {
    badge: "弦數差異",
    title: "烏克麗麗是四條弦，吉他通常是六條弦",
    text: "弦少一點，剛開始看圖和找弦的資訊負擔就會低一點。",
    left: "四條弦，圖和位置比較簡潔。",
    right: "六條弦，資訊量比較多。",
    list: ["先學四條弦比較不容易慌。", "和弦圖也比較好讀。", "之後再接更複雜樂器也可以。"]
  },
  sound: {
    badge: "聲音差異",
    title: "烏克麗麗的聲音通常更亮、更輕快",
    text: "它很適合兒歌和簡單伴奏。吉他的聲音範圍通常更大，但入門歌曲不一定需要那麼複雜。",
    left: "聲音明亮、輕快，適合兒歌。",
    right: "音域和聲音變化通常更大。",
    list: ["小朋友通常很快喜歡上它的音色。", "邊唱邊刷很有成就感。", "歌曲入門很直覺。"]
  },
  piano: {
    badge: "和鋼琴連結",
    title: "和弦名字可以和鋼琴連起來理解",
    text: "雖然按法完全不同，但 C、Am、F、G7 這些和弦名字不是新的，孩子如果學過鋼琴會比較安心。",
    left: "按法不同，但和弦名字會熟悉。",
    right: "吉他也有和弦名，但指型和弦數都不同。",
    list: ["鋼琴的節拍感可以直接幫忙。", "和弦名不是從零開始。", "可以把耳朵聽到的和弦感帶過來。"]
  }
};

const lesson04Quiz = [
  {
    question: "烏克麗麗最常見有幾條弦？",
    options: [{ label: "四條弦" }, { label: "六條弦" }, { label: "七條弦" }],
    answer: 0,
    correct: "對，烏克麗麗最常見是四條弦。",
    incorrect: "答案是四條弦。"
  },
  {
    question: "哪個說法比較正確？",
    options: [{ label: "烏克麗麗就是縮小版吉他" }, { label: "烏克麗麗和吉他是同一種調音" }, { label: "它們是不同樂器，但能拿來比較" }],
    answer: 2,
    correct: "對，它們可以比較，但不是同一種樂器。",
    incorrect: "要記得：可以比較，但不是同一種樂器。"
  },
  {
    question: "如果孩子有學鋼琴，哪件事最能幫上忙？",
    options: [{ label: "知道所有吉他技巧" }, { label: "已經熟悉節拍和和弦名字" }, { label: "不用練姿勢了" }],
    answer: 1,
    correct: "對，節拍感和和弦名字都很有幫助。",
    incorrect: "鋼琴基礎主要幫在節拍和和弦名稱的熟悉感。"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const titleEl = document.getElementById("lesson-04-title");
  const textEl = document.getElementById("lesson-04-text");
  const listEl = document.getElementById("lesson-04-list");
  const badgeEl = document.getElementById("lesson-04-badge");
  const leftEl = document.getElementById("lesson-04-left");
  const rightEl = document.getElementById("lesson-04-right");
  const stageEl = document.getElementById("lesson-04-stage");

  window.UkuleleTools?.setupSwitcher({
    buttons: Array.from(document.querySelectorAll("#lab .stage-controls button")),
    modes: lesson04Modes,
    applyMode: (modeKey, mode) => {
      stageEl.dataset.mode = modeKey;
      badgeEl.textContent = mode.badge;
      titleEl.textContent = mode.title;
      textEl.textContent = mode.text;
      leftEl.textContent = mode.left;
      rightEl.textContent = mode.right;
      listEl.innerHTML = mode.list.map((item) => `<li>${item}</li>`).join("");
    }
  });

  window.UkuleleTools?.setupQuiz({
    data: lesson04Quiz,
    progressEl: document.getElementById("lesson-04-progress"),
    questionEl: document.getElementById("lesson-04-question"),
    optionsEl: document.getElementById("lesson-04-options"),
    feedbackEl: document.getElementById("lesson-04-feedback"),
    nextEl: document.getElementById("lesson-04-next")
  });
});
