/* comportamiento del scroll en dispositivos pequeños */
document.addEventListener("DOMContentLoaded", function () {
  // Detecta el desplazamiento del usuario y activa el desplazamiento suave
  document
    .querySelector(".container-items")
    .addEventListener("scroll", function (event) {
      // Verifica si el usuario está desplazándose hacia abajo
      if (this.scrollTop > this.lastScrollTop) {
        // Encuentra el siguiente elemento visible y lo desplaza al centro de la ventana
        const nextItem = document.querySelector(
          ".item:not(.scrolled):first-of-type"
        );
        if (nextItem) {
          nextItem.classList.add("scrolled");
          nextItem.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
    });
});
