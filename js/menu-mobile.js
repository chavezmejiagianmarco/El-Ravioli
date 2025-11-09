// === CONTROL DEL MENÚ MÓVIL ===
function openNav() {
  const menu = document.getElementById("mobile-menu");
  menu.classList.add("open");
}

function closeNav() {
  const menu = document.getElementById("mobile-menu");
  menu.classList.remove("open");
}

// === CONTROL DE SUBMENÚS ===
document.addEventListener("DOMContentLoaded", () => {
  const submenus = document.querySelectorAll(".submenu-toggle");

  submenus.forEach(btn => {
    btn.addEventListener("click", () => {
      const parent = btn.parentElement;
      parent.classList.toggle("open");

      // Cierra otros submenús (opcional)
      submenus.forEach(other => {
        if (other !== btn) {
          other.parentElement.classList.remove("open");
        }
      });
    });
  });

  // === LÓGICA DEL MODAL DE INICIO DE SESIÓN ===
  const loginForm = document.getElementById("loginForm");
  const successMessage = document.getElementById("loginSuccess");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Cierra el menú móvil si está abierto
      closeNav();

      // Oculta el formulario y muestra el mensaje de éxito
      loginForm.classList.add("d-none");
      successMessage.classList.remove("d-none");

      // Cierra el modal después de 2 segundos
      setTimeout(() => {
        const modalEl = document.getElementById("loginModal");
        const modal = bootstrap.Modal.getInstance(modalEl);
        modal.hide();

        // Cuando se cierre el modal, restaura el formulario
        modalEl.addEventListener(
          "hidden.bs.modal",
          () => {
            loginForm.reset();
            loginForm.classList.remove("d-none");
            successMessage.classList.add("d-none");
          },
          { once: true }
        );
      }, 2000);
    });
  }

  // === OPCIONAL: CERRAR EL MENÚ AL ABRIR CUALQUIER MODAL ===
  const allModalLinks = document.querySelectorAll('[data-bs-toggle="modal"]');
  allModalLinks.forEach(link => {
    link.addEventListener("click", () => {
      closeNav();
    });
  });
});



// 🔹 Lógica del registro
document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registerForm");
  const registerSuccess = document.getElementById("registerSuccess");

  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Cerrar menú móvil si está abierto
      const mobileMenu = document.getElementById("mobile-menu");
      if (mobileMenu) mobileMenu.classList.remove("open");

      // Mostrar mensaje de éxito
      registerForm.classList.add("d-none");
      registerSuccess.classList.remove("d-none");

      // Cerrar modal después de 2 segundos
      setTimeout(() => {
        const modalEl = document.getElementById("registerModal");
        const modal = bootstrap.Modal.getInstance(modalEl);
        modal.hide();

        // Restaurar el formulario al cerrar
        modalEl.addEventListener(
          "hidden.bs.modal",
          () => {
            registerForm.reset();
            registerForm.classList.remove("d-none");
            registerSuccess.classList.add("d-none");
          },
          { once: true }
        );
      }, 2000);
    });
  }
});