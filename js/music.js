// === MUSIK ===
const bgMusic = document.getElementById("bg-music");
const toggleBtn = document.getElementById("music-toggle");
let musicStarted = false;

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
  }
}

// Dengarkan interaksi user pertama kali
document.addEventListener("click", startMusicOnce, { once: true });
document.addEventListener("keydown", startMusicOnce, { once: true });
document.addEventListener("touchstart", startMusicOnce, { once: true });
