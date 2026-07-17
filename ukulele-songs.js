const ukuleleSongLibrary = [
  {
    id: "twinkle",
    title: "小星星",
    subtitle: "最適合先練三個和弦",
    level: "2 到 3 個和弦",
    filter: "two-three",
    category: "classic",
    categoryLabel: "經典入門",
    tempo: "慢板",
    strum: "下、下、下、下",
    chords: ["C", "F", "G7"],
    focus: "先練穩定拍子，再換和弦。",
    structure: "C｜C｜F｜C｜F｜C｜G7｜C",
    note: "這首先保留常見版本，適合當第一首入門歌。"
  },
  {
    id: "mary",
    title: "瑪莉有隻小綿羊",
    subtitle: "很適合小朋友邊唱邊彈",
    level: "3 個和弦",
    filter: "three-four",
    category: "animal",
    categoryLabel: "動物朋友",
    tempo: "中板",
    strum: "下、下、下、下",
    chords: ["C", "F", "G7"],
    focus: "練習唱句子時不要停拍。",
    structure: "C｜G7｜C｜F｜C｜G7｜C",
    note: "這首保留常見英文童謠對應的華語教學版本。"
  },
  {
    id: "two-tigers",
    title: "兩隻老虎",
    subtitle: "很快就能有成就感",
    level: "2 個和弦",
    filter: "two-three",
    category: "animal",
    categoryLabel: "動物朋友",
    tempo: "中慢板",
    strum: "下、下、上、下",
    chords: ["C", "G7"],
    focus: "練習在簡單歌裡保持節拍。",
    structure: "C｜C｜G7｜G7｜C｜C｜G7｜C",
    note: "這首旋律和換和弦都很直覺，適合剛開始的孩子。"
  },
  {
    id: "clap-hands",
    title: "如果開心你就拍拍手",
    subtitle: "很適合邊唱邊做動作",
    level: "3 個和弦",
    filter: "three-four",
    category: "action",
    categoryLabel: "動作遊戲",
    tempo: "中板",
    strum: "下、下、上、下",
    chords: ["C", "F", "G7"],
    focus: "練習唱到動作詞時還能保持拍子。",
    structure: "C｜C｜G7｜G7｜C｜F｜C｜G7｜C",
    note: "這首適合邊彈邊做動作，孩子通常很有參與感。"
  },
  {
    id: "happy-birthday",
    title: "生日快樂",
    subtitle: "之後很實用的一首",
    level: "4 個和弦",
    filter: "three-four",
    category: "celebration",
    categoryLabel: "節日生活",
    tempo: "中板",
    strum: "下、下、上、下",
    chords: ["C", "G7", "F", "C7"],
    focus: "練習在旋律轉彎的地方準備換和弦。",
    structure: "C｜G7｜G7｜C｜C7｜F｜C｜G7｜C",
    note: "這首保留最常見的中文生日歌版本。"
  },
  {
    id: "old-macdonald",
    title: "王老先生有塊地",
    subtitle: "一句一句很規律",
    level: "3 個和弦",
    filter: "three-four",
    category: "animal",
    categoryLabel: "動物朋友",
    tempo: "中板",
    strum: "下、下、下、下",
    chords: ["C", "F", "G7"],
    focus: "練習在固定段落裡換和弦，建立規律感。",
    structure: "C｜C｜C｜G7｜G7｜C｜F｜C｜G7｜C",
    note: "這首用動物叫聲段落帶孩子練重複換和弦。"
  },
  {
    id: "abc-song",
    title: "ABC 歌",
    subtitle: "字母歌很適合規律換和弦",
    level: "3 個和弦",
    filter: "two-three",
    category: "classic",
    categoryLabel: "經典入門",
    tempo: "中慢板",
    strum: "下、下、下、下",
    chords: ["C", "F", "G7"],
    focus: "練習固定節拍和規律換和弦。",
    structure: "C｜C｜F｜C｜G7｜C｜F｜C",
    note: "旋律和小星星相近，孩子通常很快就能上手。"
  },
  {
    id: "little-donkey",
    title: "小毛驢",
    subtitle: "很適合做反覆和弦練習",
    level: "3 個和弦",
    filter: "two-three",
    category: "animal",
    categoryLabel: "動物朋友",
    tempo: "中板",
    strum: "下、下、下、下",
    chords: ["C", "F", "G7"],
    focus: "練習在熟悉旋律裡反覆換和弦。",
    structure: "C｜C｜F｜C｜G7｜C｜F｜G7｜C",
    note: "這首用規律重複很適合練和弦穩定度。"
  },
  {
    id: "pull-the-turnip",
    title: "拔蘿蔔",
    subtitle: "故事感很強，適合小朋友",
    level: "2 到 3 個和弦",
    filter: "two-three",
    category: "action",
    categoryLabel: "動作遊戲",
    tempo: "中慢板",
    strum: "下、下、下、下",
    chords: ["C", "G7", "F"],
    focus: "邊唱故事邊保持和弦順序。",
    structure: "C｜C｜G7｜C｜F｜C｜G7｜C",
    note: "這首適合搭配動作，也適合多人一起玩。"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const chordTarget = document.getElementById("song-chord-gallery");
  const filterRow = document.getElementById("song-filters");
  const categoryRow = document.getElementById("song-category-filters");
  const listEl = document.getElementById("song-list");
  const detailEl = document.getElementById("song-detail");
  let activeFilter = "all";
  let activeCategory = "all";
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
        <span>分類：${song.categoryLabel}</span>
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
      <div class="song-focus-chords">
        <h4>這首歌會用到的和弦</h4>
        <p class="song-focus-note">我已經把這首歌需要的和弦單獨抽出來了，演奏時可以直接看這一區，不用再回上面的總和弦表找。</p>
        <div class="chord-gallery song-focus-gallery" id="song-active-chords"></div>
      </div>
    `;

    const focusChordEl = document.getElementById("song-active-chords");
    window.UkuleleTools?.renderChordGallery(focusChordEl, song.chords);
  };

  const renderList = () => {
    const filtered = ukuleleSongLibrary.filter((song) => {
      const difficultyMatch = activeFilter === "all" ? true : song.filter === activeFilter;
      const categoryMatch = activeCategory === "all" ? true : song.category === activeCategory;
      return difficultyMatch && categoryMatch;
    });

    if (!filtered.find((song) => song.id === activeSongId)) {
      activeSongId = filtered[0]?.id ?? ukuleleSongLibrary[0].id;
    }

    listEl.innerHTML = filtered
      .map(
        (song) => `
          <button type="button" data-song="${song.id}" class="${song.id === activeSongId ? "is-active" : ""}">
            <strong>${song.title}</strong>
            <span>${song.subtitle}</span>
            <div class="song-list-meta">
              <span>${song.categoryLabel}</span>
              <span>${song.level}</span>
              <span>${song.chords.join(" / ")}</span>
            </div>
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

  Array.from(categoryRow.querySelectorAll("button")).forEach((button) => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.category;
      Array.from(categoryRow.querySelectorAll("button")).forEach((item) => {
        item.classList.toggle("is-active", item === button);
      });
      renderList();
    });
  });

  renderList();
});
