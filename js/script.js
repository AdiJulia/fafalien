// === LOADPAGE (SPA) ===
// === LOADPAGE (SPA) ===
async function loadPage(page) {
  try {
    if (!page.startsWith("pages/")) {
      page = "pages/" + page;
    }

    const res = await fetch(page);
    const html = await res.text();

    // parsing HTML ke temporary element
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;

    // cari apakah ada player bar di halaman ini
    const playerBar = tempDiv.querySelector("#music-player-bar");
    if (playerBar) {
      // pindahkan ke container global di luar #content
      document.getElementById("player-container").innerHTML = "";
      document.getElementById("player-container").appendChild(playerBar);
    } else {
      // kalau halaman tidak punya player bar, kosongkan container
      document.getElementById("player-container").innerHTML = "";
    }

    // sisanya masuk ke #content
    document.getElementById("content").innerHTML = tempDiv.innerHTML;

    // Update URL tanpa reload
    history.pushState(
      { page },
      "",
      "?page=" + page.replace("pages/", "").replace(".html", "")
    );

    // === cek apakah gallery ===
    const backBtn = document.getElementById("backButtonContainer");
    if (
      page.includes("gallery.html") ||
      page.includes("webwishes.html") ||
      page.includes("music.html")
    ) {
      backBtn.classList.remove("hidden");
    } else {
      backBtn.classList.add("hidden");
    }

    // === Tambah body class khusus music.html ===
    if (page.includes("music.html")) {
      document.body.classList.add("music-page");
      document.body.classList.add("back-music-page");
    } else {
      document.body.classList.remove("music-page");
      document.body.classList.remove("back-music-page");
    }

    // FUNGSI DIBAWAH UNTUK MENAMBAHKAN LOADPAGE DARI FUNGSI JS FILE LAIN

    if (page.includes("home.html") && typeof initEnvelope === "function") {
      initEnvelope();
    }
    if (page.includes("webwishes.html") && typeof initWishes === "function") {
      initWishes();
    }
    if (page.includes("music.html") && typeof initMusic === "function") {
      initMusic();
    }
  } catch (err) {
    document.getElementById("content").innerHTML = "<p>Error loading page.</p>";
  }
}

// Biar tombol back/forward browser jalan
window.addEventListener("popstate", (event) => {
  if (event.state && event.state.page) {
    loadPage(event.state.page);
  }
});
