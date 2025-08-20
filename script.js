function checkLogin() {
  const username = document.getElementById("username").value.toLowerCase();
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  // Our secret login
  if (username === "love" && password === "123") {
    // Hide login page with animation
    document.getElementById("login-page").style.opacity = "0";
    document.getElementById("login-page").style.pointerEvents = "none";

    // Show scrapbook after animation completes
    setTimeout(() => {
      document.getElementById("login-page").classList.add("hidden");
      document.getElementById("scrapbook-page").classList.remove("hidden");

      // Start playing romantic background music (optional)
      // new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3').play();
    }, 500);
  } else {
    // Romantic error messages
    const messages = [
      "Oops! That's not our secret code. Try 'love' and '123'",
      "My heart only opens for the right combination!",
      "Not quite right, but I still adore you! Try again?",
      "Even when you get it wrong, you're still perfect to me",
      "Wrong password, but you'll always have the key to my heart",
    ];

    errorMessage.textContent =
      messages[Math.floor(Math.random() * messages.length)];
    errorMessage.classList.remove("hidden");

    // Shake animation for wrong login
    document
      .getElementById("login-page")
      .querySelector("div")
      .classList.add("animate-shake");
    setTimeout(() => {
      document
        .getElementById("login-page")
        .querySelector("div")
        .classList.remove("animate-shake");
    }, 500);
  }
}

// Heart animation
document
  .getElementById("heart-container")
  .addEventListener("click", function (e) {
    for (let i = 0; i < 10; i++) {
      createHeart(e);
    }
  });

function createHeart(e) {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "px";
  heart.style.top = Math.random() * 100 + "px";
  heart.style.fontSize = Math.random() * 20 + 10 + "px";
  heart.style.animationDuration = Math.random() * 3 + 2 + "s";

  this.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}

// Allow pressing Enter to login
document.getElementById("password").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    checkLogin();
  }
});
