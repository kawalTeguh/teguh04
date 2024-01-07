const modeToggle = document.getElementById("mode-toggle");
const body = document.body;

modeToggle.addEventListener("click", () => {
	if (body.getAttribute("data-bs-theme") === "dark") {
		body.setAttribute("data-bs-theme", "light"); // Ganti ke mode terang
	} else {
		body.setAttribute("data-bs-theme", "dark"); // Ganti ke mode gelap
	}
});
