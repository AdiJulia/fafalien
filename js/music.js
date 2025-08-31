function initMusic() {
  console.log("Music page loaded 🎶");

  // Playlist data
  const playlist = [
    {
      id: 1,
      title: "Runtuh",
      artist: "Feby Putri, Fiersa Besari",
      cover: "https://i.scdn.co/image/ab67616d00001e02a3a4b2d4a3d4e5f3a4b3c4d2",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    },
    {
      id: 2,
      title: "Sial",
      artist: "Mahalini",
      cover: "https://i.scdn.co/image/ab67616d00001e02b5a4b2d4a3d4e5f3a4b3c4d2",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    },
    {
      id: 3,
      title: "Tak Segampang Itu",
      artist: "Anggi Marito",
      cover: "https://i.scdn.co/image/ab67616d00001e02c5a4b2d4a3d4e5f3a4b3c4d2",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    },
    {
      id: 4,
      title: "Sempurna",
      artist: "Andmesh",
      cover: "https://i.scdn.co/image/ab67616d00001e02d5a4b2d4a3d4e5f3a4b3c4d2",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    },
    {
      id: 5,
      title: "Hati-Hati di Jalan",
      artist: "Tulus",
      cover: "https://i.scdn.co/image/ab67616d00001e02e5a4b2d4a3d4e5f3a4b3c4d2",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    },
    {
      id: 6,
      title: "Evaluasi",
      artist: "Hindia",
      cover: "https://i.scdn.co/image/ab67616d00001e02f5a4b2d4a3d4e5f3a4b3c4d2",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
    },
    {
      id: 7,
      title: "Bertaut",
      artist: "Nadin Amizah",
      cover: "https://i.scdn.co/image/ab67616d00001e02g5a4b2d4a3d4e5f3a4b3c4d2",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
    },
    {
      id: 8,
      title: "Menyesal",
      artist: "Yovie & Nuno",
      cover: "https://i.scdn.co/image/ab67616d00001e02h5a4b2d4a3d4e5f3a4b3c4d2",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
    },
    {
      id: 9,
      title: "Sisa Rasa",
      artist: "Mahalini",
      cover: "https://i.scdn.co/image/ab67616d00001e02i5a4b2d4a3d4e5f3a4b3c4d2",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
    },
    {
      id: 10,
      title: "Pesan Terakhir",
      artist: "Lyodra",
      cover: "https://i.scdn.co/image/ab67616d00001e02j5a4b2d4a3d4e5f3a4b3c4d2",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
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
        <i class="fas fa-music text-pink-500"></i>
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
    // 🔹 Hentikan musik background dulu
    if (typeof stopBgMusic === "function") stopBgMusic();

    if (index === currentSongIndex && isPlaying) {
      pauseSong();
      return;
    }
    const song = playlist[index];
    audioPlayer.src = song.audio;
    audioPlayer.play().then(() => {
      currentSongIndex = index;
      isPlaying = true;
      updatePlayerUI();
      updatePlaylistUI();
      playIcon.className = "fas fa-pause";
    });
  }

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
