function initEnvelope() {
  const envelopeThumb = document.getElementById("envelopeThumb");
  const envelopePopup = document.getElementById("envelopePopup");
  const messagePopup = document.getElementById("messagePopup");
  const openPopup = document.getElementById("openPopup");
  const closePopup = document.getElementById("closePopup");
  const backToStart = document.getElementById("backToStart");

  if (envelopeThumb && envelopePopup) {
    // Klik thumbnail -> buka modal pertama
    envelopeThumb.addEventListener("click", () => {
      envelopePopup.classList.remove("hidden");
    });
  }

  if (openPopup && messagePopup && envelopePopup) {
    // Klik "Kepo banget gweh" -> tutup popup1, buka popup2
    openPopup.addEventListener("click", () => {
      envelopePopup.classList.add("hidden");
      messagePopup.classList.remove("hidden");
    });
  }

  if (closePopup && envelopePopup) {
    // Klik "Nanti deh" -> tutup popup1
    closePopup.addEventListener("click", () => {
      envelopePopup.classList.add("hidden");
    });
  }

  if (backToStart && messagePopup) {
    // Klik tutup pesan -> balik ke awal
    backToStart.addEventListener("click", () => {
      messagePopup.classList.add("hidden");
    });
  }
}

document.addEventListener("DOMContentLoaded", initEnvelope);