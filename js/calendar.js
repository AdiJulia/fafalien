// calendar.js
function initCalendar() {
  const calendarGrid = document.querySelector(".calendar-grid");
  if (!calendarGrid) return;

  function generateCalendar(month, year, specialDates = {}) {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();

    calendarGrid.innerHTML = "";

    const headers = ["S","M","T","W","T","F","S"];
    headers.forEach(h => {
      calendarGrid.innerHTML += `<div class="font-bold text-pink-500">${h}</div>`;
    });

    for (let i = 0; i < firstDay; i++) {
      calendarGrid.innerHTML += `<div class="calendar-day"></div>`;
    }

    for (let d = 1; d <= daysInMonth; d++) {
      const isSpecial = specialDates[d] ? "special-date" : "";
      calendarGrid.innerHTML += `
        <div class="calendar-day ${isSpecial}" 
             data-day="${d}" 
             title="${specialDates[d] || ""}">
          ${d}
        </div>
      `;
    }

    // === Popup handling ===
    const popup = document.getElementById("messagePopup");
    const closeBtn = document.getElementById("closePopup");

    document.querySelectorAll(".special-date").forEach(day => {
      day.addEventListener("click", () => {
        popup.classList.remove("hidden"); // show popup
      });
    });

    closeBtn.addEventListener("click", () => {
      popup.classList.add("hidden"); // hide popup
    });
  }

  // September 2025, highlight 3
  generateCalendar(8, 2025, { 3: "Ulang Tahun" });
}
