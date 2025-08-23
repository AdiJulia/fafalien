let errorIndex = 0;

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
  } else if (username != "love") {
    const messages = ["Anomali ini di hp ku username-nya siapa joo?"];
    errorMessage.textContent =
      messages[Math.floor(Math.random() * messages.length)];
    errorMessage.classList.remove("hidden");
  } else if (username === "love" && password === "04052025") {
    const messages = ["AYO SAYANGKU DIKIT LAGI KAMU BISA!!! 😃"];
    errorMessage.textContent =
      messages[Math.floor(Math.random() * messages.length)];
    errorMessage.classList.remove("hidden");
  } else {
    const messages = [
      "Dikit lagiii boi!!!",
      "Apa kamu sayangku??",
      "Meski salah, tetapi falola tetep dihati gw joooo❤",
      "Inget sesuatu ga soal password?",
    ];

    errorMessage.textContent = messages[errorIndex];
    errorMessage.classList.remove("hidden");

    // geser ke pesan berikutnya, tapi kalau sudah terakhir tetap di situ
    errorIndex = (errorIndex + 1) % messages.length;
  }
}

// Allow pressing Enter to login
document.getElementById("password").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    checkLogin();
  }
});


