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

    /* ==========================================================================
       MENÚ DESPLEGABLE DE DIRECCIONES (Escritorio)
       ========================================================================== */
    const btnDirecciones = document.getElementById('btn-direcciones');
    const menuDirecciones = document.getElementById('menu-direcciones');

    if (btnDirecciones && menuDirecciones) {
        btnDirecciones.addEventListener('click', function(e) {
            e.stopPropagation(); 
            menuDirecciones.classList.toggle('hidden');
        });

        document.addEventListener('click', function(e) {
            if (!menuDirecciones.contains(e.target) && e.target !== btnDirecciones) {
                menuDirecciones.classList.add('hidden');
            }
        });
    }

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
    
    /* ==========================================================================
    6. LÓGICA DEL BANNER DINÁMICO (AUTO-PLAY SLIDER)
    ========================================================================== */
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-dot');

    function showSlides() {
        // Resetear todas las slides
        slides.forEach(slide => slide.classList.replace('opacity-100', 'opacity-0'));
        dots.forEach(dot => dot.classList.remove('active', 'bg-uns'));

        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }

        // Mostrar slide actual
        slides[slideIndex - 1].classList.replace('opacity-0', 'opacity-100');
        dots[slideIndex - 1].classList.add('active', 'bg-uns');

        setTimeout(showSlides, 6000); // Cambia cada 6 segundos
    }

    // Iniciar el slider cuando cargue el DOM
    if(slides.length > 0) {
        // Inicializar primer punto como activo
        dots[0].classList.add('active');
        setTimeout(showSlides, 6000);
    }

    // Función para hacer clic en los puntos (Opcional)
    function currentSlide(n) {
        slideIndex = n;
        slides.forEach(slide => slide.classList.replace('opacity-100', 'opacity-0'));
        dots.forEach(dot => dot.classList.remove('active', 'bg-uns'));
        
        slides[n].classList.replace('opacity-0', 'opacity-100');
        dots[n].classList.add('active', 'bg-uns');
    }
    /* ==========================================================================
       7. LÓGICA DEL "MINI-SITIO" DE FACULTADES
       ========================================================================== */
    const tabsMiniSitio = document.querySelectorAll('.facultad-tab');
    const paginasFacultades = document.querySelectorAll('.facultad-content');

    if (tabsMiniSitio.length > 0) {
        tabsMiniSitio.forEach(tab => {
            tab.addEventListener('click', () => {
                const target = tab.getAttribute('data-target');

                // 1. Limpiar estilo de todos los botones de la píldora
                tabsMiniSitio.forEach(t => {
                    t.classList.remove('bg-uns', 'text-white', 'shadow-md');
                    t.classList.add('bg-transparent', 'text-gray-500');
                });

                // 2. Activar el botón seleccionado
                tab.classList.remove('bg-transparent', 'text-gray-500');
                tab.classList.add('bg-uns', 'text-white', 'shadow-md');

                // 3. Ocultar todas las páginas y mostrar la correspondiente con animación
                paginasFacultades.forEach(pagina => {
                    if (pagina.id === `content-${target}`) {
                        pagina.classList.remove('hidden');
                        pagina.classList.add('block', 'animate-fade-in'); 
                    } else {
                        pagina.classList.add('hidden');
                        pagina.classList.remove('block', 'animate-fade-in');
                    }
                });
            });
        });
    }
    /* ==========================================================================
       8. LÓGICA DEL "MINI-SITIO" DE POSGRADO (ESTILO FACULTADES)
       ========================================================================== */
    const tabsPosgrado = document.querySelectorAll('.posgrado-tab');
    const paginasPosgrado = document.querySelectorAll('.posgrado-content');

    if (tabsPosgrado.length > 0) {
        tabsPosgrado.forEach(tab => {
            tab.addEventListener('click', () => {
                const target = tab.getAttribute('data-target');

                // 1. Limpiar estilo de todos los botones de la píldora
                tabsPosgrado.forEach(t => {
                    t.classList.remove('bg-uns', 'text-white', 'shadow-md');
                    t.classList.add('bg-transparent', 'text-gray-500');
                });

                // 2. Activar el botón seleccionado
                tab.classList.remove('bg-transparent', 'text-gray-500');
                tab.classList.add('bg-uns', 'text-white', 'shadow-md');

                // 3. Ocultar todas las páginas y mostrar la correspondiente con animación
                paginasPosgrado.forEach(pagina => {
                    if (pagina.id === `content-posgrado-${target}`) {
                        pagina.classList.remove('hidden');
                        pagina.classList.add('block', 'animate-fade-in'); 
                    } else {
                        pagina.classList.add('hidden');
                        pagina.classList.remove('block', 'animate-fade-in');
                    }
                });
            });
        });
    }
    /* ==========================================================================
       9. INTERCEPTOR DE ENLACES TEMPORALES (TOAST UX)
       ========================================================================== */
    const enlacesTemporales = document.querySelectorAll('a[href="#"]');
    
    enlacesTemporales.forEach(enlace => {
        enlace.addEventListener('click', (e) => {
            e.preventDefault(); // Evita que la página salte hacia arriba
            
            // Crear el elemento Toast con clases de Tailwind
            const toast = document.createElement('div');
            toast.className = 'fixed bottom-5 right-5 bg-gray-900 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 transform translate-y-20 opacity-0 transition-all duration-300 z-[200] font-medium border-l-4 border-uns';
            toast.innerHTML = '<i class="fa-solid fa-person-digging text-uns-light text-xl"></i> Sección en construcción';
            
            document.body.appendChild(toast);
            
            // Trigger para la animación de entrada
            setTimeout(() => {
                toast.classList.remove('translate-y-20', 'opacity-0');
            }, 10);
            
            // Animación de salida y destrucción del elemento en el DOM
            setTimeout(() => {
                toast.classList.add('translate-y-20', 'opacity-0');
                setTimeout(() => toast.remove(), 300);
            }, 2500);
        });
    });
    /* ==========================================================================
       10. LÓGICA DEL MODAL DE INSCRIPCIÓN (Formulario)
       ========================================================================== */
    const modalInscripcion = document.getElementById('ventana-inscripcion');
    const contenidoInscripcion = document.getElementById('contenido-inscripcion');
    const btnInscripcion = document.getElementById('btn-inscripcion');
    const btnCerrarInscripcion = document.getElementById('btn-cerrar-inscripcion');
    const formInscripcion = document.getElementById('form-inscripcion');

    const abrirInscripcion = (e) => {
        if(e) e.preventDefault();
        if (modalInscripcion && contenidoInscripcion) {
            modalInscripcion.classList.remove('opacity-0', 'pointer-events-none');
            contenidoInscripcion.classList.remove('scale-95');
            contenidoInscripcion.classList.add('scale-100');
        }
    };

    const cerrarInscripcion = () => {
        if (modalInscripcion && contenidoInscripcion) {
            modalInscripcion.classList.add('opacity-0', 'pointer-events-none');
            contenidoInscripcion.classList.remove('scale-100');
            contenidoInscripcion.classList.add('scale-95');
        }
    };

    if (btnInscripcion) btnInscripcion.addEventListener('click', abrirInscripcion);
    if (btnCerrarInscripcion) btnCerrarInscripcion.addEventListener('click', cerrarInscripcion);

    // Cerrar al hacer clic fuera del modal
    if (modalInscripcion) {
        modalInscripcion.addEventListener('click', function(e) {
            if (e.target === modalInscripcion) {
                cerrarInscripcion();
            }
        });
    }

    // Prevenir el recargo de página al enviar el formulario (Simulación)
    if (formInscripcion) {
        formInscripcion.addEventListener('submit', (e) => {
            e.preventDefault();
            // Aquí en un futuro puedes conectar tu API o backend
            alert('¡Inscripción enviada correctamente!');
            formInscripcion.reset();
            cerrarInscripcion();
        });
    }
    /* ==========================================================================
       MODAL BIZAGI: DRAG-TO-SCROLL HORIZONTAL
       ========================================================================== */
    const modalBizagi = document.getElementById('ventana-bizagi');
    const contenidoBizagi = document.getElementById('contenido-bizagi');
    const btnAbrirBizagi = document.getElementById('btn-proceso-bizagi');
    const btnCerrarBizagi = document.getElementById('btn-cerrar-bizagi');
    const scrollContainer = document.getElementById('contenedor-scroll-bizagi');

    const abrirBizagi = (e) => {
        if(e) e.preventDefault();
        if (modalBizagi && contenidoBizagi) {
            modalBizagi.classList.remove('opacity-0', 'pointer-events-none');
            contenidoBizagi.classList.remove('scale-95');
            contenidoBizagi.classList.add('scale-100');
        }
    };

    const cerrarBizagi = () => {
        if (modalBizagi && contenidoBizagi) {
            modalBizagi.classList.add('opacity-0', 'pointer-events-none');
            contenidoBizagi.classList.remove('scale-100');
            contenidoBizagi.classList.add('scale-95');
        }
    };

    if (btnAbrirBizagi) btnAbrirBizagi.addEventListener('click', abrirBizagi);
    if (btnCerrarBizagi) btnCerrarBizagi.addEventListener('click', cerrarBizagi);

    if (modalBizagi) {
        modalBizagi.addEventListener('click', function(e) {
            if (e.target === modalBizagi) cerrarBizagi();
        });
    }

    // Lógica para arrastrar el diagrama con el mouse
    if (scrollContainer) {
        let isDown = false;
        let startX;
        let scrollLeft;

        scrollContainer.addEventListener('mousedown', (e) => {
            isDown = true;
            scrollContainer.classList.add('active');
            startX = e.pageX - scrollContainer.offsetLeft;
            scrollLeft = scrollContainer.scrollLeft;
        });
        scrollContainer.addEventListener('mouseleave', () => {
            isDown = false;
            scrollContainer.classList.remove('active');
        });
        scrollContainer.addEventListener('mouseup', () => {
            isDown = false;
            scrollContainer.classList.remove('active');
        });
        scrollContainer.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - scrollContainer.offsetLeft;
            const walk = (x - startX) * 1.5; // Multiplicador de velocidad
            scrollContainer.scrollLeft = scrollLeft - walk;
        });
    }

    /* ==========================================================================
       11. TRANSICIONES SUAVES ENTRE PÁGINAS (.HTML)
       ========================================================================== */
    // Buscar todos los enlaces que sean internos (que no abran en otra pestaña y no sean anclas #)
    const enlacesInternos = document.querySelectorAll('a[href]:not([target="_blank"]):not([href^="#"]):not([href^="mailto:"]):not([href^="tel:"])');

    enlacesInternos.forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            const urlDestino = this.getAttribute('href');

            // Ignorar enlaces sin destino real
            if (!urlDestino || urlDestino.startsWith('javascript:')) return;

            e.preventDefault(); // Detener el salto inmediato

            // Agregar la clase de salida (Fade out)
            document.body.classList.remove('page-transition');
            document.body.classList.add('page-transition-out');

            // Esperar 400ms (lo que dura la animación CSS) para cambiar de página
            setTimeout(() => {
                window.location.href = urlDestino;
            }, 400);
        });
    });
});