function initMusic() {
  console.log("Music page loaded 🎶");

  // Playlist data
  const playlist = [
    {
      id: 1,
      title: "Too Good to Say Goodbye",
      artist: "Bruno Mars",
      cover: "assets/music/icon/1. Too Good to Say Goodbye.jpeg",
      audio: "assets/music/song_list/1. Too Good to Say Goodbye.mp3",
      icon: "assets/music/icon/1. Too Good to Say Goodbye.jpeg",
    },
    {
      id: 2,
      title: "Cause You Have To",
      artist: "LANY",
      cover:
        "assets/music/icon/2. LANY - 'Cause You Have To (Official Lyric Video).jpeg",
      audio:
        "assets/music/song_list/2. LANY - 'Cause You Have To (Official Lyric Video).mp3",
      icon: "assets/music/icon/2. LANY - 'Cause You Have To (Official Lyric Video).jpeg",
    },
    {
      id: 3,
      title: "Out Of My League",
      artist: "Fitz And The Tantrums",
      cover:
        "assets/music/icon/3. Fitz And The Tantrums - Out Of My League [Official Music Video].jpeg",
      audio:
        "assets/music/song_list/3. Fitz And The Tantrums - Out Of My League [Official Music Video].mp3",
      icon: "assets/music/icon/3. Fitz And The Tantrums - Out Of My League [Official Music Video].jpeg",
    },
    {
      id: 4,
      title: "You",
      artist: "Objective",
      cover: "assets/music/icon/4. You.jpeg",
      audio: "assets/music/song_list/4. You.mp3",
      icon: "assets/music/icon/4. You.jpeg",
    },
    {
      id: 5,
      title: "Di Akhir Perang",
      artist: "Nadin Amizah",
      cover:
        "assets/music/icon/5. Nadin Amizah - Di Akhir Perang (Official Lyric Video).jpeg",
      audio:
        "assets/music/song_list/5. Nadin Amizah - Di Akhir Perang (Official Lyric Video).mp3",
      icon: "assets/music/icon/5. Nadin Amizah - Di Akhir Perang (Official Lyric Video).jpeg",
    },
    {
      id: 6,
      title: "Multo",
      artist: "Cup of Joe",
      cover:
        "assets/music/icon/6. Multo - Cup of Joe (Official Music Video).jpeg",
      audio:
        "assets/music/song_list/6. Multo - Cup of Joe (Official Music Video).mp3",
      icon: "assets/music/icon/6. Multo - Cup of Joe (Official Music Video).jpeg",
    },
    {
      id: 7,
      title: "Peppermint",
      artist: "Che Ecru",
      cover: "assets/music/icon/7. Che Ecru - Peppermint.jpeg",
      audio: "assets/music/song_list/7. Che Ecru - Peppermint.mp3",
      icon: "assets/music/icon/7. Che Ecru - Peppermint.jpeg",
    },
    {
      id: 8,
      title: "Intentions",
      artist: "Starfall",
      cover: "assets/music/icon/8. starfall - intentions (Lyrics).jpeg",
      audio: "assets/music/song_list/8. starfall - intentions (Lyrics).mp3",
      icon: "assets/music/icon/8. starfall - intentions (Lyrics).jpeg",
    },
    {
      id: 9,
      title: "Wow",
      artist: "Post Malone",
      cover:
        "assets/music/icon/9. Post Malone - _Wow._ (Official Music Video).jpeg",
      audio:
        "assets/music/song_list/9. Post Malone - _Wow._ (Official Music Video).mp3",
      icon: "assets/music/icon/9. Post Malone - _Wow._ (Official Music Video).jpeg",
    },
    {
      id: 10,
      title: "Moonlight",
      artist: "Chase Atlantic",
      cover: "assets/music/icon/10. Moonlight.jpeg",
      audio: "assets/music/song_list/10. Moonlight.mp3",
      icon: "assets/music/icon/10. Moonlight.jpeg",
    },
  ];

  // DOM elements
  const playlistContainer = document.getElementById("playlist");
  const audioPlayer = document.getElementById("audio-player");
  const currentSongTitle = document.getElementById("current-song-title");
  const currentSongArtist = document.getElementById("current-song-artist");
  const currentSongCover = document.getElementById("current-song-cover");
  const playBtn = document.getElementById("play-btn");
  const playIcon = document.getElementById("play-icon");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const progressBar = document.getElementById("progress-bar");
  const currentTimeDisplay = document.getElementById("current-time");
  const durationDisplay = document.getElementById("duration");

  let currentSongIndex = -1;
  let isPlaying = false;

  function initPlaylist() {
    playlistContainer.innerHTML = "";
    playlist.forEach((song, index) => {
      const songElement = document.createElement("div");
      songElement.className =
        "song-card bg-white rounded-lg shadow-md p-4 flex items-center cursor-pointer hover:bg-pink-50 transition-colors mb-1";
      songElement.setAttribute("data-index", index);

      songElement.innerHTML = `
      <div class="w-12 h-12 bg-pink-100 rounded-md flex items-center justify-center mr-4">
        <img src="${song.icon}" alt="${
        song.title
      }" class="w-full h-full object-cover">
      </div>
      <div>
        <h3 class="font-semibold text-pink-800">${index + 1}. ${song.title}</h3>
        <p class="text-sm text-gray-600">${song.artist}</p>
      </div>
    `;

      // Tambahkan ke container
      playlistContainer.appendChild(songElement);

      // Klik seluruh card untuk play
      songElement.addEventListener("click", function () {
        playSong(index);
      });
    });
  }

  function playSong(index) {
    if (typeof stopBgMusic === "function") stopBgMusic();

    const song = playlist[index];

    // Reset audioPlayer dulu
    audioPlayer.innerHTML = `<source src="${song.audio}" type="audio/mpeg">`;
    audioPlayer.load();
    audioPlayer.play().then(() => {
      currentSongIndex = index;
      isPlaying = true;
      updatePlayerUI();
      playIcon.className = "fas fa-pause";
    });
  }

  // 🔹 Fungsi global untuk hentikan music.js player
  window.stopPlayerMusic = function () {
    if (!audioPlayer.paused) {
      audioPlayer.pause();
      isPlaying = false;
      playIcon.className = "fas fa-play";
      updatePlaylistUI();
    }
  };

  function pauseSong() {
    audioPlayer.pause();
    isPlaying = false;
    playIcon.className = "fas fa-play";
    updatePlaylistUI();
  }

  function playNextSong() {
    const nextIndex = (currentSongIndex + 1) % playlist.length;
    playSong(nextIndex);
  }

  function playPrevSong() {
    const prevIndex =
      (currentSongIndex - 1 + playlist.length) % playlist.length;
    playSong(prevIndex);
  }

  function updatePlayerUI() {
    const song = playlist[currentSongIndex];
    currentSongTitle.textContent = song.title;
    currentSongArtist.textContent = song.artist;
    currentSongCover.src = song.cover;
  }

  function updatePlaylistUI() {
    document.querySelectorAll(".play-song-btn").forEach((btn, index) => {
      const icon = btn.querySelector("i");
      if (index === currentSongIndex) {
        btn.parentElement.parentElement.classList.add(
          "ring-2",
          "ring-pink-500"
        );
        icon.className = isPlaying ? "fas fa-pause" : "fas fa-play";
      } else {
        btn.parentElement.parentElement.classList.remove(
          "ring-2",
          "ring-pink-500"
        );
        icon.className = "fas fa-play";
      }
    });
  }

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  }

  function updateProgressBar() {
    const currentTime = audioPlayer.currentTime;
    const duration = audioPlayer.duration || 1;
    progressBar.value = (currentTime / duration) * 100;
    currentTimeDisplay.textContent = formatTime(currentTime);
    if (!isNaN(duration)) {
      durationDisplay.textContent = formatTime(duration);
    }
  }

  function seekSong() {
    const seekTime = (progressBar.value / 100) * audioPlayer.duration;
    audioPlayer.currentTime = seekTime;
  }

  playBtn.addEventListener("click", () => {
    if (currentSongIndex === -1) playSong(0);
    else if (isPlaying) pauseSong();
    else playSong(currentSongIndex);
  });

  nextBtn.addEventListener("click", playNextSong);
  prevBtn.addEventListener("click", playPrevSong);
  progressBar.addEventListener("input", seekSong);
  audioPlayer.addEventListener("timeupdate", updateProgressBar);
  audioPlayer.addEventListener("ended", playNextSong);

  initPlaylist();
}
