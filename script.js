function showAlert() {
  alert("Welcome to LegalLens! More features coming soon.");
}

console.log("LegalLens website loaded successfully.");
const input = document.getElementById("searchInput");

if (input) {
  input.addEventListener("keyup", () => {
    const value = input.value.toLowerCase();
    document.querySelectorAll(".feature, .list-card").forEach(el => {
      el.style.display = el.innerText.toLowerCase().includes(value)
        ? "block"
        : "none";
    });
  });
}
