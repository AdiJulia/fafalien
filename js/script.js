// === LOADPAGE (SPA) ===
async function loadPage(page) {
  try {
    if (!page.startsWith("pages/")) {
      page = "pages/" + page;
    }

    const res = await fetch(page);
    const html = await res.text();
    document.getElementById("content").innerHTML = html;

    // Update URL tanpa reload
    history.pushState(
      { page },
      "",
      "?page=" + page.replace("pages/", "").replace(".html", "")
    );

    // === cek apakah gallery ===
    const backBtn = document.getElementById("backButtonContainer");
    if (page.includes("gallery.html")) {
      backBtn.classList.remove("hidden");
    } else {
      backBtn.classList.add("hidden");
    }

    // kalau ada envelope
    if (page.includes("home.html") && typeof initEnvelope === "function") {
      initEnvelope();
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
