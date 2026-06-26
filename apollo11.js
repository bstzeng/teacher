const missionSteps = {
  launch: {
    kicker: 'LAUNCH',
    name: '火箭起飛',
    text: '三位太空人先搭土星五號火箭離開地球，這一步像是把整趟任務正式按下開始鍵。',
    memory: '還沒登月前，第一關先是離開地球。',
    craft: { left: 118, top: 250, scale: 1.1, color: 'rocket' }
  },
  travel: {
    kicker: 'TRAVEL',
    name: '飛去月球',
    text: '離開地球後，太空船還要花一段時間飛向月球，不是發射完就立刻到了。',
    memory: '去月球的路，其實很長。',
    craft: { left: 244, top: 174, scale: 0.95, color: 'ship' }
  },
  landing: {
    kicker: 'LANDING',
    name: '登陸月球',
    text: '阿姆斯壯和奧德林搭登月小艇下降，慢慢靠近月球表面，這是最緊張的一關之一。',
    memory: '不是整艘大船下去，是小艇下去。',
    craft: { left: 362, top: 126, scale: 0.9, color: 'lander' }
  },
  walk: {
    kicker: 'MOONWALK',
    name: '走上月球',
    text: '成功降落後，阿姆斯壯先走下來，成為第一個站上月球的人。',
    memory: '先降落，才能踏出那一步。',
    craft: { left: 422, top: 170, scale: 0.82, color: 'walker' }
  },
  return: {
    kicker: 'RETURN',
    name: '回到地球',
    text: '兩位登月太空人回到上面的指令艙和柯林斯會合，最後三人一起回地球。',
    memory: '安全回來，任務才真的完成。',
    craft: { left: 254, top: 112, scale: 1, color: 'return' }
  }
};

const quizData = [
  {
    question: 'Apollo 11 一開始先做什麼？',
    options: ['先搭火箭離開地球', '先在月球散步', '先回到海裡'],
    answer: 0,
    explanation: '對，第一步一定是先搭火箭升空。'
  },
  {
    question: '是不是三位太空人都一起走到月球表面？',
    options: ['是', '不是，只有兩位下去', '不是，沒有人下去'],
    answer: 1,
    explanation: '沒錯，阿姆斯壯和奧德林下去，柯林斯留在上方。'
  },
  {
    question: '留在月球上方等隊友的是誰？',
    options: ['阿姆斯壯', '奧德林', '柯林斯'],
    answer: 2,
    explanation: '答對了，柯林斯留在指令艙。'
  },
  {
    question: '走上月球後，任務就立刻結束了嗎？',
    options: ['是，拍拍照就結束', '不是，還要回到太空船再回地球', '不是，要飛去太陽'],
    answer: 1,
    explanation: '對，還要重新會合並安全飛回地球。'
  },
  {
    question: '這堂課最重要的一句話是什麼？',
    options: ['登月是一趟分很多步驟的大任務', '月球自己飛來地球', '火箭只要飛一下就好'],
    answer: 0,
    explanation: '完全正確，登月不是一下就完成的。'
  }
];

const playButtons = document.querySelectorAll('.play-button');
const playScene = document.getElementById('play-scene');
const sceneCraft = document.getElementById('scene-craft');
const playKicker = document.getElementById('play-kicker');
const playName = document.getElementById('play-name');
const playText = document.getElementById('play-text');
const playMemory = document.getElementById('play-memory');

function setMissionStep(stepKey) {
  const step = missionSteps[stepKey];
  if (!step) return;

  playButtons.forEach((button) => {
    button.classList.toggle('is-active', button.dataset.step === stepKey);
  });

  playScene.dataset.step = stepKey;
  playKicker.textContent = step.kicker;
  playName.textContent = step.name;
  playText.textContent = step.text;
  playMemory.textContent = step.memory;

  sceneCraft.style.left = `${step.craft.left}px`;
  sceneCraft.style.top = `${step.craft.top}px`;
  sceneCraft.style.transform = `scale(${step.craft.scale})`;

  if (step.craft.color === 'rocket') {
    sceneCraft.style.background = 'linear-gradient(180deg, #fbfcff 0%, #cfddf1 100%)';
    sceneCraft.style.clipPath = 'polygon(50% 0, 100% 78%, 50% 100%, 0 78%)';
  } else if (step.craft.color === 'ship') {
    sceneCraft.style.background = 'linear-gradient(180deg, #dbe6f7 0%, #8da4c5 100%)';
    sceneCraft.style.clipPath = 'polygon(14% 12%, 86% 12%, 100% 52%, 78% 90%, 22% 90%, 0 52%)';
  } else if (step.craft.color === 'lander') {
    sceneCraft.style.background = 'linear-gradient(180deg, #ffe18f 0%, #ba8646 100%)';
    sceneCraft.style.clipPath = 'polygon(16% 0, 84% 0, 100% 65%, 80% 100%, 20% 100%, 0 65%)';
  } else if (step.craft.color === 'walker') {
    sceneCraft.style.background = 'linear-gradient(180deg, #ffffff 0%, #cad7eb 100%)';
    sceneCraft.style.clipPath = 'polygon(44% 0, 62% 0, 68% 20%, 62% 50%, 74% 100%, 58% 100%, 50% 70%, 42% 100%, 26% 100%, 38% 50%, 32% 20%)';
  } else {
    sceneCraft.style.background = 'linear-gradient(180deg, #f2f7ff 0%, #b5c7de 100%)';
    sceneCraft.style.clipPath = 'polygon(50% 0, 100% 78%, 50% 100%, 0 78%)';
  }
}

playButtons.forEach((button) => {
  button.addEventListener('click', () => setMissionStep(button.dataset.step));
});

const quizProgress = document.getElementById('quiz-progress');
const quizQuestion = document.getElementById('quiz-question');
const quizOptions = document.getElementById('quiz-options');
const quizFeedback = document.getElementById('quiz-feedback');
const quizNext = document.getElementById('quiz-next');

let quizIndex = 0;

function renderQuiz() {
  const current = quizData[quizIndex];
  quizProgress.textContent = `第 ${quizIndex + 1} 題，共 ${quizData.length} 題`;
  quizQuestion.textContent = current.question;
  quizFeedback.textContent = '';
  quizNext.hidden = true;
  quizOptions.innerHTML = '';

  current.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = option;
    button.addEventListener('click', () => handleAnswer(index));
    quizOptions.appendChild(button);
  });
}

function handleAnswer(selectedIndex) {
  const current = quizData[quizIndex];
  const buttons = quizOptions.querySelectorAll('button');

  buttons.forEach((button, index) => {
    button.disabled = true;
    if (index === current.answer) button.classList.add('correct');
    if (index === selectedIndex && index !== current.answer) button.classList.add('wrong');
  });

  quizFeedback.textContent = current.explanation;
  quizNext.hidden = false;
}

quizNext?.addEventListener('click', () => {
  quizIndex += 1;
  if (quizIndex >= quizData.length) {
    quizProgress.textContent = '全部完成';
    quizQuestion.textContent = '你已經走完整個 Apollo 11 小任務了！';
    quizOptions.innerHTML = '';
    quizFeedback.textContent = '很棒，你已經知道登月是一趟分很多步驟的大任務。';
    quizNext.hidden = true;
    return;
  }
  renderQuiz();
});

setMissionStep('launch');
renderQuiz();
