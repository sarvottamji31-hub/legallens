const input = document.getElementById("searchInput");

if (input) {
  input.addEventListener("keyup", () => {
    const value = input.value.toLowerCase();
    document.querySelectorAll(".feature,.exam-card")
      .forEach(el => {
        el.style.display = el.innerText.toLowerCase().includes(value)
          ? "block" : "none";
      });
  });
}

function toggleDark() {
  document.body.classList.toggle("dark");
  localStorage.setItem("dark",
    document.body.classList.contains("dark"));
}

if (localStorage.getItem("dark") === "true") {
  document.body.classList.add("dark");
}
/* ===== PAGE TRANSITION SCRIPT ===== */

document.querySelectorAll("a").forEach(link => {
  if (link.hostname === window.location.hostname) {
    link.addEventListener("click", e => {
      e.preventDefault();
      const href = link.getAttribute("href");

      document.body.classList.add("page-exit");

      setTimeout(() => {
        window.location.href = href;
      }, 400);
    });
  }
});

/* ===== DARK MODE (KEEPING YOUR EXISTING FEATURE) ===== */
function toggleDark() {
  document.body.classList.toggle("dark");
  localStorage.setItem("dark",
    document.body.classList.contains("dark"));
}

if (localStorage.getItem("dark") === "true") {
  document.body.classList.add("dark");
}
