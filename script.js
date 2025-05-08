const nameInput = document.getElementById("nameInput");
const userName = document.getElementById("userName");
const saveBtn = document.getElementById("saveBtn");
const profileCard = document.getElementById("profileCard");

// Load name from localStorage on page load
function loadName() {
  const storedName = localStorage.getItem("userName");
  userName.textContent = storedName || "Guest"; // fallback if not found
}

// Save name and trigger animation
function saveName() {
  const name = nameInput.value.trim();
  if (name) {
    localStorage.setItem("userName", name);
    userName.textContent = name;

    // Trigger animation
    profileCard.classList.remove("animate");
    void profileCard.offsetWidth; // reflow
    profileCard.classList.add("animate");
  }
}

// Event listeners
window.addEventListener("load", loadName);
saveBtn.addEventListener("click", saveName);
