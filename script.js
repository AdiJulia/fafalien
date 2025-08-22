function checkLogin() {
  const username = document.getElementById("username").value.toLowerCase();
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  if (username === "love" && password === "123") {
    // tampilkan pop-up custom
    document.getElementById("love-popup").classList.remove("hidden");

    // tombol continue → redirect ke dashboard
    document.getElementById("continueBtn").addEventListener("click", () => {
      window.location.href = "dashboard.html";
    });
  } else {
    const messages = [
      "Dikit lagiii boi!!!",
      "Apa kamu sayangku??",
      "Anomali ini di hp ku namanya siapa wak?",
      "Meski salah, tetapi falola tetep dihati gw joooo",
      "Kira-kira apa yaa?",
      "Inget sesuatu ga soal password",
    ];

    errorMessage.textContent =
      messages[Math.floor(Math.random() * messages.length)];
    errorMessage.classList.remove("hidden");
  }
}

// Allow pressing Enter to login
document.getElementById("password").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    checkLogin();
  }
});
