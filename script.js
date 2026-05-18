// script.js
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Abrir y cerrar el menú principal en celulares
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    // Verificamos que existan para no causar errores en otras páginas
    if (mobileBtn && mobileMenu) {
        const mobileIcon = mobileBtn.querySelector('i');

        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            
            // Cambiar el icono de hamburguesa a una 'X'
            if (mobileIcon) {
                if (mobileMenu.classList.contains('hidden')) {
                    mobileIcon.classList.remove('fa-xmark');
                    mobileIcon.classList.add('fa-bars');
                } else {
                    mobileIcon.classList.remove('fa-bars');
                    mobileIcon.classList.add('fa-xmark');
                }
            }
        });
    }

    // 2. Dar vida a los botones desplegables (Acordeón) en celulares
    const dropdownBtns = document.querySelectorAll('.mobile-dropdown-btn');
    
    if (dropdownBtns.length > 0) {
        dropdownBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Encuentra la lista (submenu) que le sigue al botón
                const submenu = btn.nextElementSibling;
                const icon = btn.querySelector('.fa-chevron-down');
                
                // Alternar visibilidad de la lista
                if (submenu) {
                    submenu.classList.toggle('hidden');
                }
                
                // Girar la flechita
                if (icon) {
                    icon.classList.toggle('rotate-180');
                    icon.classList.toggle('text-uns');
                }
            });
        });
    }

});