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
    id: "little-bee",
    title: "小蜜蜂",
    subtitle: "兩個和弦就能開始玩",
    level: "2 個和弦",
    filter: "two-three",
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
    id: "clap-hands",
    title: "如果開心你就拍拍手",
    subtitle: "很適合邊唱邊做動作",
    level: "3 個和弦",
    filter: "three-four",
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
    tempo: "慢板",
    strum: "下、下、下、下",
    chords: ["C", "G7", "F"],
    focus: "每一小句都很短，適合練短句換和弦。",
    structure: "C｜G7｜C｜C｜F｜C｜G7｜C",
    note: "如果孩子會唱這首，會更容易把拍子抓住。"
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
