// Selecciona el botón de hamburguesa
const btn = document.querySelector(".menu-toggle");

// Selecciona el menú de navegación
const menu = document.querySelector(".nav-menu");

if (btn && menu) {
  btn.addEventListener("click", () => {
    // Alterna la clase "active" para mostrar/ocultar el menú
    menu.classList.toggle("active");

    // Opcional: cambiar el ícono hamburguesa a X
    btn.classList.toggle("open");
  });
}
