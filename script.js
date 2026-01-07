function showAlert() {
  alert("Welcome to LegalLens! More features coming soon.");
}

console.log("LegalLens website loaded successfully.");
const searchInput = document.getElementById("searchInput");
if (searchInput) {
  searchInput.addEventListener("keyup", function () {
    let value = this.value.toLowerCase();
    document.querySelectorAll(".feature, .list-card").forEach(item => {
      item.style.display = item.innerText.toLowerCase().includes(value)
        ? "block" : "none";
    });
  });
}
