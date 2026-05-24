// script.js
document.addEventListener('DOMContentLoaded', () => {
    
    /* ==========================================================================
       1. MENÚ PRINCIPAL RESPONSIVO (Hamburguesa Celulares)
       ========================================================================== */
    const mobileBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileBtn && mobileMenu) {
        const mobileIcon = mobileBtn.querySelector('i');

        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            
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

    /* ==========================================================================
       2. ACORDEONES DESPLEGABLES EN CELULARES
       ========================================================================== */
    const dropdownBtns = document.querySelectorAll('.mobile-dropdown-btn');
    
    if (dropdownBtns.length > 0) {
        dropdownBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const submenu = btn.nextElementSibling;
                const icon = btn.querySelector('.fa-chevron-down');
                
                if (submenu) {
                    submenu.classList.toggle('hidden');
                }
                if (icon) {
                    icon.classList.toggle('rotate-180');
                    icon.classList.toggle('text-uns');
                }
            });
        });
    }

    /* ==========================================================================
       3. MENÚ DESPLEGABLE DE ADMISIÓN (Escritorio)
       ========================================================================== */
    const btnAdmision = document.getElementById('btn-admision');
    const menuAdmision = document.getElementById('menu-admision');

    if (btnAdmision && menuAdmision) {
        btnAdmision.addEventListener('click', function(e) {
            e.stopPropagation(); 
            menuAdmision.classList.toggle('hidden');
        });

        document.addEventListener('click', function(e) {
            if (!menuAdmision.contains(e.target) && e.target !== btnAdmision) {
                menuAdmision.classList.add('hidden');
            }
        });
    }

    /* ==========================================================================
       4. VENTANA DE INTRANET (Modal Control)
       ========================================================================== */
    const ventana = document.getElementById('ventana-intranet');
    const contenidoVentana = document.getElementById('contenido-intranet');
    const btnIntranetDesktop = document.getElementById('btn-intranet-desktop');
    const btnIntranetMobile = document.getElementById('btn-intranet-mobile');
    const btnCerrarIntranet = document.getElementById('btn-cerrar-intranet');

    const abrirIntranet = () => {
        if (ventana && contenidoVentana) {
            ventana.classList.remove('opacity-0', 'pointer-events-none');
            contenidoVentana.classList.remove('scale-95');
            contenidoVentana.classList.add('scale-100');
        }
    };

    const cerrarIntranet = () => {
        if (ventana && contenidoVentana) {
            ventana.classList.add('opacity-0', 'pointer-events-none');
            contenidoVentana.classList.remove('scale-100');
            contenidoVentana.classList.add('scale-95');
        }
    };

    if (btnIntranetDesktop) btnIntranetDesktop.addEventListener('click', abrirIntranet);
    if (btnIntranetMobile) btnIntranetMobile.addEventListener('click', abrirIntranet);
    if (btnCerrarIntranet) btnCerrarIntranet.addEventListener('click', cerrarIntranet);

    if (ventana) {
        ventana.addEventListener('click', function(e) {
            if (e.target === ventana) {
                cerrarIntranet();
            }
        });
    }

    /* ==========================================================================
       5. INTERSECTION OBSERVER (Animaciones dinámicas al hacer Scroll)
       ========================================================================== */
    const opcionesObservador = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observador = new IntersectionObserver((entradas, observador) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.remove('opacity-0', 'translate-y-8');
                entrada.target.classList.add('opacity-100', 'translate-y-0');
                observador.unobserve(entrada.target); 
            }
        });
    }, opcionesObservador);

    document.querySelectorAll('.animacion-scroll').forEach((elemento) => {
        observador.observe(elemento);
    });

});