const iconsDark = document.querySelectorAll(".icon-pointer");

const toggleDark = () => {
    console.log("Modo oscuro activado");
};

iconsDark.forEach(icon => {
    icon.addEventListener("click", toggleDark);
});
