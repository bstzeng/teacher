const memberData = {
  milkyway: {
    name: "銀河系",
    text: "這是我們住的家。太陽系就在銀河系裡，所以講到本地星系群時，銀河系就是我們最熟悉的一位成員。",
    memory: "記法：先記住「我們住在銀河系裡」，再去看外面的鄰居。",
    facts: ["它是本地星系群的一員。", "太陽系住在銀河系裡面。", "我們是從這裡往外看宇宙。"]
  },
  andromeda: {
    name: "仙女座星系",
    text: "仙女座是我們附近最有名的大鄰居之一。當小朋友聽到『銀河系外面還有誰』時，最容易先記住的通常就是它。",
    memory: "記法：仙女座就像隔壁很大的鄰居城市。",
    facts: ["它和銀河系都屬於本地星系群。", "它是介紹星系鄰居時最常出現的名字。", "它能幫我們知道銀河系不是唯一的大星系。"]
  },
  triangulum: {
    name: "三角座星系",
    text: "三角座星系比仙女座低調一點，但它也是我們附近的重要成員。認識它以後，就知道本地星系群不只兩個大名字。",
    memory: "記法：除了銀河系和仙女座，還有三角座這位鄰居。",
    facts: ["它也是本地星系群的一員。", "它常被當成附近的重要星系範例。", "它能幫孩子建立『附近有很多成員』的感覺。"]
  },
  dwarf: {
    name: "小矮星系",
    text: "本地星系群裡不只有比較大的星系，也有很多比較小的矮星系。它們雖然小，但還是這個社區的一部分。",
    memory: "記法：一個社區裡會有大房子，也會有小房子。",
    facts: ["Leo A 就是常被提到的小矮星系例子。", "矮星系比較小、比較不顯眼。", "它們能幫我們理解星系群裡成員大小不同。"]
  },
  beyond: {
    name: "更遠的外面",
    text: "本地星系群只是離我們比較近的一個宇宙小社區。再往更遠的地方看，還有很多別的星系和更多更大的群聚。",
    memory: "記法：本地星系群只是附近，宇宙還有更外面的世界。",
    facts: ["深空照片裡常能看到很多很遠的星系。", "宇宙裡的星系數量多到超乎想像。", "這能幫孩子把視角從『附近』慢慢拉到『更遠』。"]
  }
};

const memberButtons = document.querySelectorAll(".neighbor-button");
const mapNodes = document.querySelectorAll(".map-node");
const memberName = document.getElementById("member-name");
const memberText = document.getElementById("member-text");
const memberMemory = document.getElementById("member-memory");
const memberFacts = document.getElementById("member-facts");

function setActiveMember(memberKey) {
  const data = memberData[memberKey];
  if (!data) return;

  memberButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.member === memberKey);
  });

  mapNodes.forEach((node) => {
    node.classList.toggle("active", node.dataset.member === memberKey);
  });

  memberName.textContent = data.name;
  memberText.textContent = data.text;
  memberMemory.textContent = data.memory;
  memberFacts.innerHTML = data.facts.map((fact) => `<li>${fact}</li>`).join("");
}

[...memberButtons, ...mapNodes].forEach((button) => {
  button.addEventListener("click", () => setActiveMember(button.dataset.member));
});

const quizData = [
  {
    question: "哪一個說法是對的？",
    options: ["銀河系是宇宙裡唯一的星系", "銀河系也有其他星系當鄰居", "太陽系比星系還大"],
    answer: 1,
    explanation: "答對了。銀河系不是自己單獨住著，它和其他鄰近星系一起住在本地星系群。"
  },
  {
    question: "我們住在哪裡？",
    options: ["住在仙女座星系裡", "住在銀河系裡", "住在所有星系外面"],
    answer: 1,
    explanation: "沒錯。地球在太陽系裡，而太陽系又住在銀河系裡。"
  },
  {
    question: "本地星系群裡只有大星系嗎？",
    options: ["不是，還有比較小的矮星系", "是，全部都一樣大", "裡面只有一個星系"],
    answer: 0,
    explanation: "對喔。除了比較大的成員，也有很多比較小的矮星系。"
  },
  {
    question: "仙女座星系比較像什麼？",
    options: ["銀河系附近的一位大鄰居", "地球旁邊的一顆月亮", "太陽系裡的一顆行星"],
    answer: 0,
    explanation: "答對了。仙女座星系是銀河系附近很有名的一位大鄰居。"
  },
  {
    question: "深空照片裡看到很多小亮點，最想告訴我們什麼？",
    options: ["宇宙裡只有幾個星系", "本地星系群就是全部宇宙", "宇宙裡在更遠處還有很多很多星系"],
    answer: 2,
    explanation: "完全正確。那種照片能讓孩子感覺到：宇宙裡還有非常多更遠的星系。"
  }
];

const quizProgress = document.getElementById("quiz-progress");
const quizQuestion = document.getElementById("quiz-question");
const quizOptions = document.getElementById("quiz-options");
const quizFeedback = document.getElementById("quiz-feedback");
const quizNext = document.getElementById("quiz-next");

let quizIndex = 0;
let quizLocked = false;

function renderQuiz() {
  const item = quizData[quizIndex];
  quizLocked = false;
  quizProgress.textContent = `第 ${quizIndex + 1} 題，共 ${quizData.length} 題`;
  quizQuestion.textContent = item.question;
  quizFeedback.textContent = "";
  quizNext.hidden = true;

  quizOptions.innerHTML = "";
  item.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "quiz-option";
    button.textContent = option;
    button.addEventListener("click", () => handleAnswer(index));
    quizOptions.appendChild(button);
  });
}

function handleAnswer(selectedIndex) {
  if (quizLocked) return;
  quizLocked = true;
  const item = quizData[quizIndex];
  const buttons = [...document.querySelectorAll(".quiz-option")];

  buttons.forEach((button, index) => {
    if (index === item.answer) button.classList.add("correct");
    if (index === selectedIndex && index !== item.answer) button.classList.add("wrong");
    button.disabled = true;
  });

  quizFeedback.textContent = item.explanation;
  quizNext.hidden = false;
  quizNext.textContent = quizIndex === quizData.length - 1 ? "再玩一次" : "下一題 →";
}

quizNext.addEventListener("click", () => {
  quizIndex = quizIndex === quizData.length - 1 ? 0 : quizIndex + 1;
  renderQuiz();
});

document.getElementById("current-year").textContent = new Date().getFullYear();
setActiveMember("milkyway");
renderQuiz();
