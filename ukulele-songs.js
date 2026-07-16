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
    note: "如果換 G7 來不及，可以先停一下再接，不要亂刷。"
  },
  {
    id: "little-bee",
    title: "小蜜蜂",
    subtitle: "兩個和弦就能開始玩",
    level: "2 個和弦",
    filter: "two-three",
    category: "animal",
    categoryLabel: "動物朋友",
    tempo: "中慢板",
    strum: "下、下、下、下",
    chords: ["C", "G7"],
    focus: "先把 C 和 G7 的來回切換練穩。",
    structure: "C｜C｜G7｜G7｜C｜C｜G7｜C",
    note: "如果 G7 還不熟，可以先慢慢換，不要急著追拍。"
  },
  {
    id: "london-bridge",
    title: "倫敦鐵橋",
    subtitle: "和弦切換很規律",
    level: "3 個和弦",
    filter: "three-four",
    category: "classic",
    categoryLabel: "經典入門",
    tempo: "中慢板",
    strum: "下、下、下、下",
    chords: ["C", "F", "G7"],
    focus: "練習每 1 小節換一次和弦。",
    structure: "C｜F｜C｜G7｜C｜F｜C｜G7｜C",
    note: "這首歌很適合大聲數 1 2 3 4。"
  },
  {
    id: "row-row",
    title: "划呀划呀小船",
    subtitle: "很適合練平穩刷弦",
    level: "3 個和弦",
    filter: "two-three",
    category: "classic",
    categoryLabel: "經典入門",
    tempo: "慢板",
    strum: "下、下、下、下",
    chords: ["C", "F", "G7"],
    focus: "刷弦要像划船一樣穩穩往前，不要忽快忽慢。",
    structure: "C｜C｜C｜G7｜F｜C｜G7｜C",
    note: "這首歌的重點是平穩，不是大聲。"
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
    note: "如果唱到一半忘記，可以先維持 C 繼續唱。"
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
    note: "先用兩個和弦玩熟，比急著學更多歌更重要。"
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
    note: "這首歌很適合邊彈邊拍手或做動作，會更有參與感。"
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
    note: "這首歌的重點不是快，是提前看下一個和弦。"
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
    note: "這首歌很適合每唱完一句就看一下下一個和弦。"
  },
  {
    id: "bingo",
    title: "BINGO",
    subtitle: "反覆段落很好練",
    level: "3 個和弦",
    filter: "three-four",
    category: "animal",
    categoryLabel: "動物朋友",
    tempo: "中板",
    strum: "下、下、上、下",
    chords: ["C", "F", "G7"],
    focus: "練習同一段落反覆出現時，和弦能不能保持穩定。",
    structure: "C｜C｜F｜C｜G7｜C｜F｜C｜G7｜C",
    note: "可以先不管拼字遊戲，先把和弦規律刷穩。"
  },
  {
    id: "jingle-bells",
    title: "鈴兒響叮噹",
    subtitle: "熟悉旋律很有幫助",
    level: "3 個和弦",
    filter: "three-four",
    category: "celebration",
    categoryLabel: "節日生活",
    tempo: "中板",
    strum: "下、下、上、下",
    chords: ["C", "F", "G7"],
    focus: "在熟悉旋律裡練換和弦，通常比較不容易緊張。",
    structure: "C｜C｜C｜F｜C｜G7｜C｜F｜C｜G7｜C",
    note: "這首歌可以先慢慢彈，等熟了再加快。"
  },
  {
    id: "are-you-sleeping",
    title: "哥哥爸爸真偉大",
    subtitle: "很適合先練兩到三個和弦",
    level: "2 到 3 個和弦",
    filter: "two-three",
    category: "classic",
    categoryLabel: "經典入門",
    tempo: "慢板",
    strum: "下、下、下、下",
    chords: ["C", "G7", "F"],
    focus: "每一小句都很短，適合練短句換和弦。",
    structure: "C｜G7｜C｜C｜F｜C｜G7｜C",
    note: "如果孩子會唱這首，會更容易把拍子抓住。"
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
    note: "字母歌旋律很熟，孩子通常更容易把拍子撐住。"
  },
  {
    id: "wheels-on-the-bus",
    title: "公車上的輪子",
    subtitle: "重複句型很適合初學刷法",
    level: "3 個和弦",
    filter: "three-four",
    category: "action",
    categoryLabel: "動作遊戲",
    tempo: "中板",
    strum: "下、下、上、下",
    chords: ["C", "F", "G7"],
    focus: "在重複段落裡維持同樣節拍。",
    structure: "C｜F｜C｜G7｜C｜F｜C｜G7｜C",
    note: "每一句都很像，最適合練穩定感。"
  },
  {
    id: "head-shoulders",
    title: "頭兒肩膀膝腳趾",
    subtitle: "邊做動作邊彈更有趣",
    level: "2 到 3 個和弦",
    filter: "two-three",
    category: "action",
    categoryLabel: "動作遊戲",
    tempo: "中板",
    strum: "下、下、下、下",
    chords: ["C", "G7", "F"],
    focus: "練習唱和動作一起時拍子不要亂。",
    structure: "C｜C｜G7｜C｜F｜C｜G7｜C",
    note: "可以先只唱不做動作，穩了再一起做。"
  },
  {
    id: "baby-shark",
    title: "寶寶鯊魚",
    subtitle: "節奏明確，小朋友很熟",
    level: "2 個和弦",
    filter: "two-three",
    category: "animal",
    categoryLabel: "動物朋友",
    tempo: "中板",
    strum: "下、下、上、下",
    chords: ["C", "G7"],
    focus: "練習在重複句子裡保持活力但不加速。",
    structure: "C｜C｜G7｜G7｜C｜C｜G7｜C",
    note: "這首很容易越彈越快，要刻意穩住。"
  },
  {
    id: "rain-rain",
    title: "雨啊雨啊別下了",
    subtitle: "短短一句，很適合剛開始練",
    level: "2 到 3 個和弦",
    filter: "two-three",
    category: "classic",
    categoryLabel: "經典入門",
    tempo: "慢板",
    strum: "下、下、下、下",
    chords: ["C", "F", "G7"],
    focus: "練習短句裡的簡單換和弦。",
    structure: "C｜F｜C｜G7｜C｜F｜C｜G7",
    note: "短句歌很適合讓孩子先建立完成感。"
  },
  {
    id: "santa-coming",
    title: "聖誕老公公進城",
    subtitle: "節慶歌裡很實用的一首",
    level: "4 個和弦",
    filter: "three-four",
    category: "celebration",
    categoryLabel: "節日生活",
    tempo: "中板",
    strum: "下、下、上、下",
    chords: ["C", "Am", "F", "G7"],
    focus: "練習四和弦在一首歌裡輪流出現。",
    structure: "C｜Am｜F｜G7｜C｜Am｜F｜G7",
    note: "很適合在四和弦都熟一點之後再玩。"
  },
  {
    id: "we-wish-you",
    title: "祝你聖誕快樂",
    subtitle: "有節日氣氛，也很好配和弦",
    level: "4 個和弦",
    filter: "three-four",
    category: "celebration",
    categoryLabel: "節日生活",
    tempo: "中板",
    strum: "下、下、上、下",
    chords: ["C", "F", "G7", "C7"],
    focus: "練習在節慶歌裡提前看下一個和弦。",
    structure: "C｜F｜G7｜C｜C7｜F｜G7｜C",
    note: "如果 C7 還不熟，可以先放慢到非常慢。"
  },
  {
    id: "you-are-my-sunshine",
    title: "你是我的陽光",
    subtitle: "旋律溫柔，很適合慢慢唱",
    level: "4 個和弦",
    filter: "three-four",
    category: "classic",
    categoryLabel: "經典入門",
    tempo: "慢板",
    strum: "下、下、上、下",
    chords: ["C", "F", "C7", "G7"],
    focus: "練習在慢歌裡維持穩定呼吸和拍子。",
    structure: "C｜F｜C｜G7｜C｜F｜C7｜G7｜C",
    note: "慢歌最怕拖拍，所以嘴巴和右手都要穩。"
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
    note: "這首歌很適合先用下下下下刷穩。"
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
    note: "可以搭配拉蘿蔔動作，孩子會更投入。"
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
