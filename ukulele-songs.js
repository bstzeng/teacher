const ukuleleSongLibrary = [
  {
    id: "twinkle",
    title: "小星星",
    subtitle: "最適合先練三個和弦",
    level: "2 到 3 個和弦",
    filter: "two-three",
    tempo: "慢板",
    strum: "下、下、下、下",
    chords: ["C", "F", "G7"],
    focus: "先練穩定拍子，再換和弦。",
    structure: "C｜C｜F｜C｜F｜C｜G7｜C",
    note: "如果換 G7 來不及，可以先停一下再接，不要亂刷。"
  },
  {
    id: "london-bridge",
    title: "倫敦鐵橋",
    subtitle: "和弦切換很規律",
    level: "3 個和弦",
    filter: "three-four",
    tempo: "中慢板",
    strum: "下、下、下、下",
    chords: ["C", "F", "G7"],
    focus: "練習每 1 小節換一次和弦。",
    structure: "C｜F｜C｜G7｜C｜F｜C｜G7｜C",
    note: "這首歌很適合大聲數 1 2 3 4。"
  },
  {
    id: "mary",
    title: "瑪莉有隻小綿羊",
    subtitle: "很適合小朋友邊唱邊彈",
    level: "3 個和弦",
    filter: "three-four",
    tempo: "中板",
    strum: "下、下、下、下",
    chords: ["C", "F", "G7"],
    focus: "練習唱句子時不要停拍。",
    structure: "C｜G7｜C｜F｜C｜G7｜C",
    note: "如果唱到一半忘記，可以先維持 C 繼續唱。"
  },
  {
    id: "two-tigers",
    title: "兩隻老虎",
    subtitle: "很快就能有成就感",
    level: "2 個和弦",
    filter: "two-three",
    tempo: "中慢板",
    strum: "下、下、上、下",
    chords: ["C", "G7"],
    focus: "練習在簡單歌裡保持節拍。",
    structure: "C｜C｜G7｜G7｜C｜C｜G7｜C",
    note: "先用兩個和弦玩熟，比急著學更多歌更重要。"
  },
  {
    id: "happy-birthday",
    title: "生日快樂",
    subtitle: "之後很實用的一首",
    level: "4 個和弦",
    filter: "three-four",
    tempo: "中板",
    strum: "下、下、上、下",
    chords: ["C", "G7", "F", "C7"],
    focus: "練習在旋律轉彎的地方準備換和弦。",
    structure: "C｜G7｜G7｜C｜C7｜F｜C｜G7｜C",
    note: "這首歌的重點不是快，是提前看下一個和弦。"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const chordTarget = document.getElementById("song-chord-gallery");
  const filterRow = document.getElementById("song-filters");
  const listEl = document.getElementById("song-list");
  const detailEl = document.getElementById("song-detail");
  let activeFilter = "all";
  let activeSongId = ukuleleSongLibrary[0].id;

  window.UkuleleTools?.renderChordGallery(chordTarget, ["C", "Am", "F", "G7", "G", "Dm", "C7", "Am7"]);

  const renderDetail = (song) => {
    detailEl.innerHTML = `
      <div class="song-title-row">
        <div>
          <p class="ukulele-note">歌曲練習卡</p>
          <h3>${song.title}</h3>
        </div>
        <span class="lesson-chip">${song.level}</span>
      </div>
      <p>${song.subtitle}</p>
      <div class="song-meta-row">
        <span>速度：${song.tempo}</span>
        <span>刷法：${song.strum}</span>
        <span>和弦：${song.chords.join(" / ")}</span>
      </div>
      <div class="song-detail-block">
        <h4>這首先練什麼</h4>
        <p>${song.focus}</p>
      </div>
      <div class="song-detail-block">
        <h4>簡化和弦順序</h4>
        <p>${song.structure}</p>
      </div>
      <div class="song-detail-block">
        <h4>老師提醒</h4>
        <p>${song.note}</p>
      </div>
    `;
  };

  const renderList = () => {
    const filtered = ukuleleSongLibrary.filter((song) => {
      if (activeFilter === "all") return true;
      return song.filter === activeFilter;
    });

    if (!filtered.find((song) => song.id === activeSongId)) {
      activeSongId = filtered[0]?.id ?? ukuleleSongLibrary[0].id;
    }

    listEl.innerHTML = filtered
      .map(
        (song) => `
          <button type="button" data-song="${song.id}" class="${song.id === activeSongId ? "is-active" : ""}">
            <strong>${song.title}</strong>
            <span>${song.subtitle}<br />${song.chords.join(" / ")}</span>
          </button>
        `
      )
      .join("");

    Array.from(listEl.querySelectorAll("button")).forEach((button) => {
      button.addEventListener("click", () => {
        activeSongId = button.dataset.song;
        renderList();
      });
    });

    renderDetail(ukuleleSongLibrary.find((song) => song.id === activeSongId) || ukuleleSongLibrary[0]);
  };

  Array.from(filterRow.querySelectorAll("button")).forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      Array.from(filterRow.querySelectorAll("button")).forEach((item) => {
        item.classList.toggle("is-active", item === button);
      });
      renderList();
    });
  });

  renderList();
});
