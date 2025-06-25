// Créer dynamiquement les 10 verres d'eau avec 0.5L chacun const waterContainer = document.getElementById("waterCups"); for (let i = 0; i < 10; i++) { const cup = document.createElement("div"); cup.classList.add("water-cup"); const label = document.createElement("span"); label.textContent = "0.5L"; cup.appendChild(label); cup.addEventListener("click", () => cup.classList.toggle("active")); waterContainer.appendChild(cup); }

function showProgress() { const waterCups = document.querySelectorAll(".water-cup.active").length;
     const prayers = document.querySelectorAll('#prayers input[type="checkbox"]:checked').length; const tasks = document.querySelectorAll('#bucketList input[type="checkbox"]:checked').length;
}
const waterPoints = waterCups; // 1 point par demi-verre const prayerPoints = prayers * 2; // 2 points par prière const taskPoints = tasks * 1; // 1 point par activité

const total = waterPoints + prayerPoints + taskPoints; let message = "";

if (total === 0) { message = "🥱 Tu n'as"}