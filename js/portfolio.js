const toggleModeButton = document.querySelector(".icon-pointer");
const sunIcon = document.querySelector(".fa-sun");
const moonIcon = document.querySelector(".fa-moon");

// Comprobar el modo guardado al cargar la página
if (localStorage.getItem("mode") === "dark") {
  document.body.classList.add("dark-mode");
  sunIcon.style.opacity = 0;
  moonIcon.style.opacity = 1;
}

if (toggleModeButton) {
  toggleModeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Alterna la visibilidad de los iconos de sol y luna
    if (document.body.classList.contains("dark-mode")) {
      sunIcon.style.opacity = 0;
      moonIcon.style.opacity = 1;
      localStorage.setItem("mode", "dark"); // Guardar la preferencia
    } else {
      sunIcon.style.opacity = 1;
      moonIcon.style.opacity = 0;
      localStorage.setItem("mode", "light"); // Guardar la preferencia
    }
  });
} else {
  console.error("No se encontró el elemento con la clase .icon-pointer.");
}
