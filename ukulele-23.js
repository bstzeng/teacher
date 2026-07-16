const lesson23Modes = {
  count: { badge: "先把 1 2 3 4 數穩", title: "嘴巴先會，右手才會穩", text: "如果嘴巴能穩穩數拍，右手通常就比較不會亂跑。", list: ["先用嘴巴數。", "每拍都平均。", "先別急著加花樣。"] },
  voice: { badge: "口訣很重要", title: "把口訣放進嘴巴裡", text: "很多小朋友刷弦一開始很需要口訣。1、2、3、4 就是最好的口訣。", list: ["嘴巴和手一起工作。", "可以大聲念。", "念出來會更穩。"] },
  together: { badge: "數拍和刷弦一起", title: "嘴巴和右手同時走", text: "這一步做穩，之後無論是簡單刷法還是常見刷法，都會更穩定。", list: ["數拍不能停。", "右手不能亂衝。", "整體要一起前進。"] }
};
const lesson23Quiz = [
  { question: "第二十三課為什麼要邊數拍邊刷弦？", options: [{ label: "讓右手更穩定" }, { label: "讓聲音變超大" }, { label: "因為不能按和弦" }], answer: 0, correct: "對，邊數拍會讓右手更穩。", incorrect: "這一課的重點是邊數拍讓右手更穩定。" },
  { question: "如果一刷弦就忘記數拍，最好的做法是？", options: [{ label: "回到更慢的速度" }, { label: "直接加快" }, { label: "完全不要數" }], answer: 0, correct: "對，回到更慢的速度最有效。", incorrect: "忘記數拍時，先放慢最有效。" },
  { question: "口訣最常用什麼？", options: [{ label: "1、2、3、4" }, { label: "隨便唱" }, { label: "完全安靜" }], answer: 0, correct: "對，最常用的口訣就是 1、2、3、4。", incorrect: "最常用的口訣就是 1、2、3、4。" }
];
document.addEventListener("DOMContentLoaded", () => {
  const titleEl = document.getElementById("lesson-23-title");
  const textEl = document.getElementById("lesson-23-text");
  const listEl = document.getElementById("lesson-23-list");
  const stageEl = document.getElementById("lesson-23-stage");
  const badgeEl = document.getElementById("lesson-23-badge");
  window.UkuleleTools?.setupSwitcher({ buttons: Array.from(document.querySelectorAll("#lab .stage-controls button")), modes: lesson23Modes, applyMode: (modeKey, mode) => {
    stageEl.dataset.mode = modeKey; badgeEl.textContent = mode.badge; titleEl.textContent = mode.title; textEl.textContent = mode.text; listEl.innerHTML = mode.list.map((item) => `<li>${item}</li>`).join("");
  }});
  window.UkuleleTools?.setupQuiz({ data: lesson23Quiz, progressEl: document.getElementById("lesson-23-progress"), questionEl: document.getElementById("lesson-23-question"), optionsEl: document.getElementById("lesson-23-options"), feedbackEl: document.getElementById("lesson-23-feedback"), nextEl: document.getElementById("lesson-23-next") });
});
