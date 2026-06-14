document.addEventListener('DOMContentLoaded', () => {
    
    /* ==========================================================================
       1. MENÚ PRINCIPAL RESPONSIVO
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

    const dropdownBtns = document.querySelectorAll('.mobile-dropdown-btn');
    if (dropdownBtns.length > 0) {
        dropdownBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const submenu = btn.nextElementSibling;
                const icon = btn.querySelector('.fa-chevron-down');
                if (submenu) submenu.classList.toggle('hidden');
                if (icon) {
                    icon.classList.toggle('rotate-180');
                    icon.classList.toggle('text-uns');
                }
            });
        });
    }

    /* ==========================================================================
       2. MENÚS DESPLEGABLES (Escritorio)
       ========================================================================== */
    const btnAdmision = document.getElementById('btn-admision');
    const menuAdmision = document.getElementById('menu-admision');
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
       3. VENTANAS Y MODALES GENERALES
       ========================================================================== */
    // INTRANET
    const ventanaIntranet = document.getElementById('ventana-intranet');
    const contenidoIntranet = document.getElementById('contenido-intranet');
    const btnIntranetDesktop = document.getElementById('btn-intranet-desktop');
    const btnIntranetMobile = document.getElementById('btn-intranet-mobile');
    const btnCerrarIntranet = document.getElementById('btn-cerrar-intranet');

    const abrirIntranet = () => {
        if (ventanaIntranet && contenidoIntranet) {
            document.body.classList.add('overflow-hidden');
            ventanaIntranet.classList.remove('opacity-0', 'pointer-events-none');
            contenidoIntranet.classList.remove('scale-95');
            contenidoIntranet.classList.add('scale-100');
        }
    };
    const cerrarIntranet = () => {
        if (ventanaIntranet && contenidoIntranet) {
            document.body.classList.remove('overflow-hidden');
            ventanaIntranet.classList.add('opacity-0', 'pointer-events-none');
            contenidoIntranet.classList.remove('scale-100');
            contenidoIntranet.classList.add('scale-95');
        }
    };
    if (btnIntranetDesktop) btnIntranetDesktop.addEventListener('click', abrirIntranet);
    if (btnIntranetMobile) btnIntranetMobile.addEventListener('click', abrirIntranet);
    if (btnCerrarIntranet) btnCerrarIntranet.addEventListener('click', cerrarIntranet);
    if (ventanaIntranet) ventanaIntranet.addEventListener('click', (e) => { if (e.target === ventanaIntranet) cerrarIntranet(); });

    // INSCRIPCIÓN
    const modalInscripcion = document.getElementById('ventana-inscripcion');
    const contenidoInscripcion = document.getElementById('contenido-inscripcion');
    const btnInscripcion = document.getElementById('btn-inscripcion');
    const btnCerrarInscripcion = document.getElementById('btn-cerrar-inscripcion');
    const formInscripcion = document.getElementById('form-inscripcion');

    const abrirInscripcion = (e) => {
        if(e) e.preventDefault();
        if (modalInscripcion && contenidoInscripcion) {
            document.body.classList.add('overflow-hidden');
            modalInscripcion.classList.remove('opacity-0', 'pointer-events-none');
            contenidoInscripcion.classList.remove('scale-95');
            contenidoInscripcion.classList.add('scale-100');
        }
    };
    const cerrarInscripcion = () => {
        if (modalInscripcion && contenidoInscripcion) {
            document.body.classList.remove('overflow-hidden');
            modalInscripcion.classList.add('opacity-0', 'pointer-events-none');
            contenidoInscripcion.classList.remove('scale-100');
            contenidoInscripcion.classList.add('scale-95');
        }
    };
    if (btnInscripcion) btnInscripcion.addEventListener('click', abrirInscripcion);
    if (btnCerrarInscripcion) btnCerrarInscripcion.addEventListener('click', cerrarInscripcion);
    if (modalInscripcion) modalInscripcion.addEventListener('click', (e) => { if (e.target === modalInscripcion) cerrarInscripcion(); });
    if (formInscripcion) {
        formInscripcion.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('¡Inscripción enviada correctamente!');
            formInscripcion.reset();
            cerrarInscripcion();
        });
    }

    // BIZAGI
    const modalBizagi = document.getElementById('ventana-bizagi');
    const contenidoBizagi = document.getElementById('contenido-bizagi');
    const btnAbrirBizagi = document.getElementById('btn-proceso-bizagi');
    const btnCerrarBizagi = document.getElementById('btn-cerrar-bizagi');
    const scrollContainer = document.getElementById('contenedor-scroll-bizagi');

    const abrirBizagi = (e) => {
        if(e) e.preventDefault();
        if (modalBizagi && contenidoBizagi) {
            document.body.classList.add('overflow-hidden');
            modalBizagi.classList.remove('opacity-0', 'pointer-events-none');
            contenidoBizagi.classList.remove('scale-95');
            contenidoBizagi.classList.add('scale-100');
        }
    };
    const cerrarBizagi = () => {
        if (modalBizagi && contenidoBizagi) {
            document.body.classList.remove('overflow-hidden');
            modalBizagi.classList.add('opacity-0', 'pointer-events-none');
            contenidoBizagi.classList.remove('scale-100');
            contenidoBizagi.classList.add('scale-95');
        }
    };
    if (btnAbrirBizagi) btnAbrirBizagi.addEventListener('click', abrirBizagi);
    if (btnCerrarBizagi) btnCerrarBizagi.addEventListener('click', cerrarBizagi);
    if (modalBizagi) modalBizagi.addEventListener('click', (e) => { if (e.target === modalBizagi) cerrarBizagi(); });

    // Drag-to-scroll en Bizagi
    if (scrollContainer) {
        let isDown = false; let startX; let scrollLeft;
        scrollContainer.addEventListener('mousedown', (e) => {
            isDown = true;
            scrollContainer.classList.add('active');
            startX = e.pageX - scrollContainer.offsetLeft;
            scrollLeft = scrollContainer.scrollLeft;
        });
        scrollContainer.addEventListener('mouseleave', () => { isDown = false; scrollContainer.classList.remove('active'); });
        scrollContainer.addEventListener('mouseup', () => { isDown = false; scrollContainer.classList.remove('active'); });
        scrollContainer.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - scrollContainer.offsetLeft;
            const walk = (x - startX) * 1.5;
            scrollContainer.scrollLeft = scrollLeft - walk;
        });
    }

    /* ==========================================================================
       4. ANIMACIONES AL HACER SCROLL
       ========================================================================== */
    const opcionesObservador = { root: null, rootMargin: '0px', threshold: 0.15 };
    const observador = new IntersectionObserver((entradas, obs) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.remove('opacity-0', 'translate-y-8');
                entrada.target.classList.add('opacity-100', 'translate-y-0');
                obs.unobserve(entrada.target); 
            }
        });
    }, opcionesObservador);
    document.querySelectorAll('.animacion-scroll').forEach((elemento) => { observador.observe(elemento); });
    
    /* ==========================================================================
       5. BANNER DINÁMICO (SLIDER)
       ========================================================================== */
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-dot');

    function showSlides() {
        slides.forEach(slide => slide.classList.replace('opacity-100', 'opacity-0'));
        dots.forEach(dot => dot.classList.remove('active', 'bg-uns'));
        slideIndex++;
        if (slideIndex > slides.length) slideIndex = 1;
        slides[slideIndex - 1].classList.replace('opacity-0', 'opacity-100');
        dots[slideIndex - 1].classList.add('active', 'bg-uns');
        setTimeout(showSlides, 6000);
    }
    if(slides.length > 0) {
        dots[0].classList.add('active');
        setTimeout(showSlides, 6000);
    }
    window.currentSlide = function(n) {
        slideIndex = n;
        slides.forEach(slide => slide.classList.replace('opacity-100', 'opacity-0'));
        dots.forEach(dot => dot.classList.remove('active', 'bg-uns'));
        slides[n].classList.replace('opacity-0', 'opacity-100');
        dots[n].classList.add('active', 'bg-uns');
    }

    /* ==========================================================================
       6. TABS DE FACULTADES Y POSGRADO
       ========================================================================== */
    const configurarTabs = (tabs, contenidos, prefijo) => {
        if (tabs.length > 0) {
            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    const target = tab.getAttribute('data-target');
                    tabs.forEach(t => {
                        t.classList.remove('bg-uns', 'text-white', 'shadow-md');
                        t.classList.add('bg-transparent', 'text-gray-500');
                    });
                    tab.classList.remove('bg-transparent', 'text-gray-500');
                    tab.classList.add('bg-uns', 'text-white', 'shadow-md');
                    contenidos.forEach(pagina => {
                        if (pagina.id === `${prefijo}-${target}`) {
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
    };
    configurarTabs(document.querySelectorAll('.facultad-tab'), document.querySelectorAll('.facultad-content'), 'content');
    configurarTabs(document.querySelectorAll('.posgrado-tab'), document.querySelectorAll('.posgrado-content'), 'content-posgrado');

    /* ==========================================================================
       7. INTERCEPTOR ENLACES TEMPORALES (TOAST UX)
       ========================================================================== */
    const enlacesTemporales = document.querySelectorAll('a[href="#"]');
    enlacesTemporales.forEach(enlace => {
        enlace.addEventListener('click', (e) => {
            e.preventDefault();
            const toast = document.createElement('div');
            toast.className = 'fixed bottom-5 right-5 bg-gray-900 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 transform translate-y-20 opacity-0 transition-all duration-300 z-[200] font-medium border-l-4 border-uns';
            toast.innerHTML = '<i class="fa-solid fa-person-digging text-uns-light text-xl"></i> Sección en construcción';
            document.body.appendChild(toast);
            setTimeout(() => { toast.classList.remove('translate-y-20', 'opacity-0'); }, 10);
            setTimeout(() => {
                toast.classList.add('translate-y-20', 'opacity-0');
                setTimeout(() => toast.remove(), 300);
            }, 2500);
        });
    });
});

/* ==========================================================================
   MODALES ESPECÍFICOS Y MÓVIL
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');

    // TEMARIO
    const btnTemario = document.getElementById('btn-temario');
    const btnTemarioMobile = document.getElementById('btn-temario-mobile');
    const ventanaTemario = document.getElementById('ventana-temario');
    const btnCerrarTemario = document.getElementById('btn-cerrar-temario');
    const contenidoTemario = document.getElementById('contenido-temario');

    const abrirTemario = (e) => {
        e.preventDefault();
        document.body.classList.add('overflow-hidden');
        ventanaTemario.classList.remove('opacity-0', 'pointer-events-none');
        contenidoTemario.classList.remove('scale-95');
        contenidoTemario.classList.add('scale-100');
        if(mobileMenu) mobileMenu.classList.add('hidden');
    };
    const cerrarTemario = () => {
        document.body.classList.remove('overflow-hidden');
        ventanaTemario.classList.add('opacity-0', 'pointer-events-none');
        contenidoTemario.classList.remove('scale-100');
        contenidoTemario.classList.add('scale-95');
    };
    if (btnTemario) btnTemario.addEventListener('click', abrirTemario);
    if (btnTemarioMobile) btnTemarioMobile.addEventListener('click', abrirTemario);
    if (btnCerrarTemario) btnCerrarTemario.addEventListener('click', cerrarTemario);
    if (ventanaTemario) ventanaTemario.addEventListener('click', (e) => { if (e.target === ventanaTemario) cerrarTemario(); });

    // BIZAGI MOBILE (El de escritorio está arriba)
    const btnBizagiMobile = document.getElementById('btn-proceso-bizagi-mobile');
    const ventanaBizagi = document.getElementById('ventana-bizagi');
    const contenidoBizagi = document.getElementById('contenido-bizagi');
    if (btnBizagiMobile && ventanaBizagi) {
        btnBizagiMobile.addEventListener('click', (e) => {
            e.preventDefault();
            document.body.classList.add('overflow-hidden');
            ventanaBizagi.classList.remove('opacity-0', 'pointer-events-none');
            contenidoBizagi.classList.remove('scale-95');
            contenidoBizagi.classList.add('scale-100');
            if(mobileMenu) mobileMenu.classList.add('hidden');
        });
    }

    // ADMISIÓN MOBILE (Desplegable)
    const btnAdmisionMobile = document.getElementById('btn-admision-mobile');
    const submenuAdmisionMobile = document.getElementById('submenu-admision-mobile');
    const iconAdmisionMobile = document.getElementById('icon-admision-mobile');
    if(btnAdmisionMobile && submenuAdmisionMobile) {
        btnAdmisionMobile.addEventListener('click', () => {
            submenuAdmisionMobile.classList.toggle('hidden');
            submenuAdmisionMobile.classList.toggle('flex');
            iconAdmisionMobile.classList.toggle('rotate-180');
        });
    }

    // TABLA DE CONVERSIONES
    const btnTablaDesktop = document.getElementById('btn-tabla-desktop');
    const btnTablaMobile = document.getElementById('btn-tabla-mobile');
    const ventanaTabla = document.getElementById('ventana-tabla');
    const btnCerrarTabla = document.getElementById('btn-cerrar-tabla');
    const contenidoTabla = document.getElementById('contenido-tabla');
    
    const abrirModalTabla = (e) => {
        e.preventDefault();
        document.body.classList.add('overflow-hidden');
        ventanaTabla.classList.remove('opacity-0', 'pointer-events-none');
        contenidoTabla.classList.remove('scale-95');
        contenidoTabla.classList.add('scale-100');
        if (mobileMenu) mobileMenu.classList.add('hidden');
    };
    const cerrarModalTabla = () => {
        document.body.classList.remove('overflow-hidden');
        ventanaTabla.classList.add('opacity-0', 'pointer-events-none');
        contenidoTabla.classList.remove('scale-100');
        contenidoTabla.classList.add('scale-95');
    }

    if (btnTablaDesktop) btnTablaDesktop.addEventListener('click', abrirModalTabla);
    if (btnTablaMobile) btnTablaMobile.addEventListener('click', abrirModalTabla);
    if (btnCerrarTabla) btnCerrarTabla.addEventListener('click', cerrarModalTabla);
    if (ventanaTabla) ventanaTabla.addEventListener('click', (e) => { if (e.target === ventanaTabla) cerrarModalTabla(); });

    // GENERADOR DE TABLA
    const tbody = document.getElementById('cuerpo-tabla-conversiones');
    if (tbody) {
        let htmlFilas = '';
        const FACTOR_UNS = 20.377;
        for (let nota = 200; nota >= 110; nota--) {
            let pes = (nota / 10).toFixed(2);
            let puntaje = (pes * FACTOR_UNS).toFixed(3);
            puntaje = parseFloat(puntaje).toString();
            let esEntero = (nota % 10 === 0);
            let bgClass = esEntero ? 'bg-red-50/40 font-bold' : 'hover:bg-gray-50';
            
            htmlFilas += `
                <tr class="transition-colors duration-200 ${bgClass}">
                    <td class="py-3 px-6 text-center border-r border-gray-100">
                        <span class="text-gray-700 text-sm md:text-base">${pes}</span>
                    </td>
                    <td class="py-3 px-6 text-center">
                        <span class="text-uns font-bold text-sm md:text-base">${puntaje}</span>
                    </td>
                </tr>
            `;
        }
        tbody.innerHTML = htmlFilas;
    }
});

/* ==========================================================================
   MODALES DE CARRERAS DINÁMICOS
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    const botonesCarreras = document.querySelectorAll('[data-modal]');
    
    botonesCarreras.forEach(boton => {
        boton.addEventListener('click', (e) => {
            e.preventDefault(); 
            const carreraId = boton.getAttribute('data-modal');
            const ventana = document.getElementById(`ventana-${carreraId}`);
            const contenido = document.getElementById(`contenido-${carreraId}`);
            
            if (ventana && contenido) {
                document.body.classList.add('overflow-hidden');
                ventana.classList.remove('opacity-0', 'pointer-events-none');
                contenido.classList.remove('scale-95');
                contenido.classList.add('scale-100');
            }
        });
    });

    const botonesCerrar = document.querySelectorAll('.btn-cerrar-carrera');
    botonesCerrar.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const ventana = e.target.closest('.fixed.inset-0'); 
            if (ventana) {
                const contenido = ventana.querySelector('.scale-100');
                document.body.classList.remove('overflow-hidden');
                ventana.classList.add('opacity-0', 'pointer-events-none');
                if (contenido) {
                    contenido.classList.remove('scale-100');
                    contenido.classList.add('scale-95');
                }
            }
        });
    });

    document.querySelectorAll('.fixed.inset-0').forEach(ventana => {
        ventana.addEventListener('click', (e) => {
            if (e.target === ventana) {
                const btnCerrar = ventana.querySelector('.btn-cerrar-carrera');
                if (btnCerrar) btnCerrar.click();
            }
        });
    });
});

/* ==========================================================================
   NUEVO SISTEMA DE TRANSICIÓN MODERNO (Fade Out / Fade In)
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('page-transition-overlay');

    if (overlay) {
        setTimeout(() => {
            overlay.classList.add('overlay-modern-hidden');
        }, 700);
    }

    const enlacesPaginas = document.querySelectorAll('a');
    
    enlacesPaginas.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            if (href && href.endsWith('.html') && !href.startsWith('#') && !link.target) {
                e.preventDefault(); 
                
                if (overlay) {
                    overlay.classList.remove('overlay-modern-hidden');
                }
                
                setTimeout(() => {
                    window.location.href = href;
                }, 500);
            }
        });
    });
});