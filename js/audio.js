// === MUSIK ===
const bgMusic = document.getElementById("bg-music");
const toggleBtn = document.getElementById("music-toggle");
const musicIcon = document.getElementById("musicIcon"); // pastikan ada
let musicStarted = false;

bgMusic.volume = 0.3;

// Fungsi toggle manual lewat tombol
toggleBtn.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
    musicIcon.classList.remove("fa-play");
    musicIcon.classList.add("fa-pause");
  } else {
    bgMusic.pause();
    musicIcon.classList.remove("fa-pause");
    musicIcon.classList.add("fa-play");
  }
});

// === AUTO MULAI JIKA USER INTERAKSI DI MANA SAJA ===
function startMusicOnce() {
  if (!musicStarted) {
    bgMusic.play().catch((err) => {
      console.log("Autoplay diblokir browser:", err);
    });
    musicStarted = true;
    musicIcon.classList.remove("fa-play");
    musicIcon.classList.add("fa-pause");
  }
}

// Dengarkan interaksi user pertama kali
document.addEventListener("click", startMusicOnce, { once: true });
document.addEventListener("keydown", startMusicOnce, { once: true });
document.addEventListener("touchstart", startMusicOnce, { once: true });

// 🔹 Tambahkan fungsi global untuk hentikan bg music
window.stopBgMusic = function () {
  if (!bgMusic.paused) {
    bgMusic.pause();
    musicIcon.classList.remove("fa-pause");
    musicIcon.classList.add("fa-play");
  }
};
