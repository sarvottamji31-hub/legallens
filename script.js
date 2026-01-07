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
