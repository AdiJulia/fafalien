// === wishes.js ===

// Wish data
const wishes = {
sad: [
    "Aku sedih karena hari ini hujan terus 😢",
    "Aku sedih karena makanan favoritku habis 😞",
    "Aku sedih karena ketinggalan bus pagi ini 😔",
    "Aku sedih karena lupa membawa charger 😣",
    "Aku sedih karena tanaman kesayanganku layu 😥",
    "Aku sedih karena acara TV favoritku tamat 😭",
    "Aku sedih karena kehilangan pensil warna kesayangan 😟",
    "Aku sedih karena bangun kesiangan 😴",
    "Aku sedih karena lupa hari ulang tahun teman 😶",
    "Aku sedih karena sepatuku basah kehujanan 😧",
    "Aku sedih karena tidak bisa menemukan kunci rumah 😩",
    "Aku sedih karena lupa menyimpan dokumen penting 😫",
    "Aku sedih karena baterai handphone cepat habis 😖",
    "Aku sedih karena lupa membeli susu di supermarket 😕",
    "Aku sedih karena rencana liburan batal 😞",
    "Aku sedih karena buku yang dipinjam teman rusak 😢",
    "Aku sedih karena tidak bisa menghadiri konser 😭",
    "Aku sedih karena lupa mematikan kompor 😰",
    "Aku sedih karena laptop tiba-tiba restart 😱",
    "Aku sedih karena tidak ada yang mengerti perasaanku 😔",
    "Aku sedih karena lupa membalas pesan penting 😓",
    "Aku sedih karena tidak bisa tidur nyenyak 😪",
    "Aku sedih karena rencana makan malam batal 😞",
    "Aku sedih karena kehilangan tiket event 😥",
    "Aku sedih karena tidak bisa menemukan dompet 😩",
  ],
  happy: [
    "Aku bahagia karena hari ini cerah 😊",
    "Aku bahagia karena bertemu teman lama 😄",
    "Aku bahagia karena dapat makanan gratis 😋",
    "Aku bahagia karena lulus ujian 😁",
    "Aku bahagia karena dapat hadiah kejutan 🎁",
    "Aku bahagia karena liburan akhirnya tiba 🏖️",
    "Aku bahagia karena dapat promosi di kerja 💼",
    "Aku bahagia karena masakanku enak 😋",
    "Aku bahagia karena dapat diskon besar 🛍️",
    "Aku bahagia karena bertemu idolaku 🤩",
    "Aku bahagia karena dapat nilai bagus 📚",
    "Aku bahagia karena hari ini hari ulang tahunku 🎂",
    "Aku bahagia karena dapat pelukan hangat 🤗",
    "Aku bahagia karena mimpi indah tadi malam 😴",
    "Aku bahagia karena dapat kabar baik 📩",
    "Aku bahagia karena berhasil mencapai target 🎯",
    "Aku bahagia karena bisa membantu orang lain 💖",
    "Aku bahagia karena dapat pujian 😊",
    "Aku bahagia karena menemukan barang yang hilang 🔍",
    "Aku bahagia karena bisa tidur nyenyak 😴",
    "Aku bahagia karena hari ini hari libur 🎉",
    "Aku bahagia karena bisa makan enak bersama keluarga 🍽️",
    "Aku bahagia karena berhasil menyelesaikan proyek besar 🏆",
    "Aku bahagia karena dapat bunga dari seseorang 🌹",
    "Aku bahagia karena bisa berbagi kebahagiaan dengan orang lain 💕",
  ],
  angry: [
    "Aku marah karena terjebak macet 😠",
    "Aku marah karena ada yang mengambil makananku 😤",
    "Aku marah karena internet lambat 😡",
    "Aku marah karena janji dibatalkan last minute 🤬",
    "Aku marah karena ada yang meminjam barang tanpa izin 😠",
    "Aku marah karena difitnah 😤",
    "Aku marah karena tidak dihargai 😡",
    "Aku marah karena ada yang menyela pembicaraan 🤬",
    "Aku marah karena barang pesanan tidak sesuai 😠",
    "Aku marah karena ada yang parkir sembarangan 😤",
    "Aku marah karena diabaikan 😡",
    "Aku marah karena ada yang membocorkan rahasia 🤬",
    "Aku marah karena dimanfaatkan 😠",
    "Aku marah karena ada yang merusak barang kesayangan 😤",
    "Aku marah karena ditipu 😡",
    "Aku marah karena ada yang tidak menepati janji 🤬",
    "Aku marah karena dihakimi tanpa alasan 😠",
    "Aku marah karena ada yang menyalahkan tanpa tahu duduk masalah 😤",
    "Aku marah karena diperlakukan tidak adil 😡",
    "Aku marah karena ada yang mengganggu waktu istirahatku 🤬",
    "Aku marah karena direndahkan 😠",
    "Aku marah karena ada yang mengkritik tanpa solusi 😤",
    "Aku marah karena dihina 😡",
    "Aku marah karena ada yang sengaja membuat masalah 🤬",
    "Aku marah karena tidak dianggap 😠",
  ],
  tired: [
    "Aku capek karena kerja seharian 😩",
    "Aku capek karena kurang tidur 😴",
    "Aku capek karena banyak deadline 🥱",
    "Aku capek karena harus berulang kali menjelaskan hal yang sama 😮‍💨",
    "Aku capek karena harus menghadapi drama 😪",
    "Aku capek karena harus berkompromi terus menerus 😓",
    "Aku capek karena harus menyelesaikan masalah orang lain 🥺",
    "Aku capek karena harus multitasking 😵‍💫",
    "Aku capek karena harus bangun pagi terus 😫",
    "Aku capek karena harus beradaptasi dengan perubahan 😮‍💨",
    "Aku capek karena harus menunggu lama 😴",
    "Aku capek karena harus berdebat tanpa hasil 😓",
    "Aku capek karena harus mengulang kesalahan yang sama 😩",
    "Aku capek karena harus menjelaskan sesuatu yang seharusnya sudah jelas 😮‍💨",
    "Aku capek karena harus memikirkan banyak hal sekaligus 🥱",
    "Aku capek karena harus berusaha keras tapi tidak dihargai 😪",
    "Aku capek karena harus mengikuti aturan yang tidak masuk akal 😓",
    "Aku capek karena harus berkomunikasi dengan orang yang sulit dimengerti 🥺",
    "Aku capek karena harus mengorbankan waktu istirahat 😵‍💫",
    "Aku capek karena harus berperan sebagai penengah 😫",
    "Aku capek karena harus mengikuti meeting yang tidak penting 😮‍💨",
    "Aku capek karena harus mengulang pekerjaan karena kesalahan kecil 😴",
    "Aku capek karena harus beradaptasi dengan teknologi baru 😓",
    "Aku capek karena harus menjelaskan lewat chat panjang 😩",
    "Aku capek karena harus mengingatkan hal yang sama berulang kali 😮‍💨",
  ],
};

// Current indexes for each category
const currentIndexes = {
  sad: 0,
  happy: 0,
  angry: 0,
  tired: 0,
};

// Init function (dipanggil setelah webwishes.html dimuat)
function initWishes() {
  // DOM Elements (pastikan ada di webwishes.html)
  const jar = document.getElementById("jar");
  const popupOverlay = document.getElementById("popup-overlay");
  const popupContent = document.getElementById("popup-content");
  const closePopupBtn = document.getElementById("close-popup");

  // Register event listeners hanya kalau elemen ada
  document.getElementById("sad-btn")?.addEventListener("click", () => showWish("sad", "bg-yellow-100"));
  document.getElementById("happy-btn")?.addEventListener("click", () => showWish("happy", "bg-green-100"));
  document.getElementById("angry-btn")?.addEventListener("click", () => showWish("angry", "bg-red-100"));
  document.getElementById("tired-btn")?.addEventListener("click", () => showWish("tired", "bg-blue-100"));
  closePopupBtn?.addEventListener("click", closePopup);

  // Show wish function
  function showWish(category, bgColor) {
    if (!jar) return;

    // Shake and open jar animation
    jar.classList.add("jar-shake");
    setTimeout(() => {
      jar.classList.remove("jar-shake");
      jar.classList.add("jar-open");
      setTimeout(() => jar.classList.remove("jar-open"), 500);
    }, 500);

    // Get current wish
    const currentIndex = currentIndexes[category];
    const wish = wishes[category][currentIndex];

    // Update popup content
    popupContent.textContent = wish;
    popupOverlay.querySelector(".bg-white").classList.add(bgColor);
    popupOverlay.classList.remove("hidden");

    // Update index (loop back to 0 if reached end)
    currentIndexes[category] = (currentIndex + 1) % wishes[category].length;
  }

  // Close popup function
  function closePopup() {
    popupOverlay.classList.add("hidden");
    popupOverlay.querySelector(".bg-white").className =
      "bg-white rounded-lg p-6 max-w-sm w-full mx-4 popup";
  }
}

