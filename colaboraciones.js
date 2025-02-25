document.addEventListener('DOMContentLoaded', function() {
    // Datos de ejemplo para los eventos
    const eventos = [
        {
            titulo: "Workshop: Marketing Digital",
            categoria: "Taller",
            descripcion: "Taller práctico sobre estrategias de marketing digital para emprendedores.",
            fecha: "3/15/2025",
            hora: "9:00 AM - 12:00 PM",
            ubicacion: "Centro de Innovación Valle",
            participantes: "25",
            cuposDisponibles: "10",
            costo: "Gratuito",
            incluye: "Material de trabajo y refrigerio",
            requisitos: "Registro previo obligatorio",
            organizador: "TechValle Solutions"
        },
        {
            titulo: "Degustación de Café Especial",
            categoria: "Evento",
            descripcion: "Experiencia sensorial con los mejores cafés especiales del Valle de Aburrá.",
            fecha: "3/20/2025",
            hora: "4:00 PM - 7:00 PM",
            ubicacion: "Café del Valle, Envigado",
            participantes: "30",
            cuposDisponibles: "12",
            costo: "$20.000 por persona",
            incluye: "Degustación de 5 variedades y material informativo",
            requisitos: "Mayores de edad",
            organizador: "Café del Valle"
        },
        {
            titulo: "Exposición de Artesanías",
            categoria: "Exhibición",
            descripcion: "Muestra de técnicas ancestrales y productos artesanales del Valle de Aburrá.",
            fecha: "4/05/2025",
            hora: "10:00 AM - 6:00 PM",
            ubicacion: "Centro Cultural Bello",
            participantes: "40",
            cuposDisponibles: "15",
            costo: "Gratuito",
            incluye: "Recorrido guiado y folleto cultural",
            requisitos: "Ninguno",
            organizador: "Artesanías Ancestrales"
        },
        {
            titulo: "Encuentro de Emprendedores",
            categoria: "Networking",
            descripcion: "Espacio para conectar con otros emprendedores y compartir experiencias.",
            fecha: "4/12/2025",
            hora: "3:00 PM - 7:00 PM",
            ubicacion: "Hotel Valle Real, Medellín",
            participantes: "50",
            cuposDisponibles: "20",
            costo: "$15.000 por persona",
            incluye: "Coffee break y material de networking",
            requisitos: "Registro previo obligatorio",
            organizador: "Red De Apoyo Local"
        },
        {
            titulo: "Curso de Limpieza Sostenible",
            categoria: "Taller",
            descripcion: "Aprende a crear productos de limpieza ecológicos para tu hogar o negocio.",
            fecha: "4/18/2025",
            hora: "2:00 PM - 5:00 PM",
            ubicacion: "Sede EcoLimpia, Itagüí",
            participantes: "20",
            cuposDisponibles: "8",
            costo: "$25.000 por persona",
            incluye: "Kit de productos y manual de recetas",
            requisitos: "Traer recipientes para llevar productos",
            organizador: "EcoLimpia"
        }
    ];

    // Datos de ejemplo para las ferias
    const ferias = [
        {
            titulo: "Feria de Emprendedores 2025",
            categoria: "Feria",
            descripcion: "Gran feria de emprendedores locales con espacios para networking y exhibición de productos.",
            fecha: "3/14/2025",
            hora: "9:00 AM - 6:00 PM",
            ubicacion: "Parque Arví",
            participantes: "45",
            cuposDisponibles: "15",
            costo: "Gratuito",
            incluye: "Material de trabajo y refrigerio",
            requisitos: "Registro previo obligatorio",
            organizador: "Centro de Innovación Valle",
            tiposProductos: "Artesanías, alimentos, tecnología, moda, servicios"
        },
        {
            titulo: "Mercado Verde Valle",
            categoria: "Feria",
            descripcion: "Feria especializada en productos orgánicos, sostenibles y ecológicos del Valle de Aburrá.",
            fecha: "3/28/2025",
            hora: "8:00 AM - 3:00 PM",
            ubicacion: "Jardín Botánico de Medellín",
            participantes: "35",
            cuposDisponibles: "8",
            costo: "Gratuito",
            incluye: "Punto de atención al cliente y zona de descanso",
            requisitos: "Productos 100% ecológicos o sostenibles",
            organizador: "AgroValle Orgánicos",
            tiposProductos: "Alimentos orgánicos, productos naturales, artesanías sostenibles"
        },
        {
            titulo: "ExpoCafé Valle 2025",
            categoria: "Feria",
            descripcion: "La mayor exposición de cafés especiales del Valle con degustaciones, talleres y venta directa.",
            fecha: "4/10/2025",
            hora: "10:00 AM - 8:00 PM",
            ubicacion: "Plaza Mayor Medellín",
            participantes: "30",
            cuposDisponibles: "5",
            costo: "$10.000 para visitantes",
            incluye: "Estación de servicio y equipo básico",
            requisitos: "Productores certificados de café",
            organizador: "Asociación de Cafeteros del Valle",
            tiposProductos: "Café, equipos para preparación, accesorios, dulces de café"
        },
        {
            titulo: "Feria de Moda Sostenible",
            categoria: "Feria",
            descripcion: "Espacio dedicado a la moda sostenible, ética y con propósito del Valle de Aburrá.",
            fecha: "4/24/2025",
            hora: "11:00 AM - 7:00 PM",
            ubicacion: "Centro Comercial El Tesoro",
            participantes: "25",
            cuposDisponibles: "8",
            costo: "Gratuito",
            incluye: "Pasarela compartida y vestidor",
            requisitos: "Moda sostenible certificada",
            organizador: "Valle Fashion",
            tiposProductos: "Ropa, accesorios, calzado, joyería sostenible"
        },
        {
            titulo: "Feria Gastronómica del Valle",
            categoria: "Feria",
            descripcion: "Festival gastronómico con los mejores sabores y tradiciones culinarias de la región.",
            fecha: "5/02/2025",
            hora: "12:00 PM - 10:00 PM",
            ubicacion: "Parque de los Deseos",
            participantes: "40",
            cuposDisponibles: "10",
            costo: "Entrada libre, consumo por plato",
            incluye: "Espacio con instalaciones básicas",
            requisitos: "Permisos sanitarios vigentes",
            organizador: "Asociación Gastronómica del Valle",
            tiposProductos: "Comida típica, fusión, postres, bebidas artesanales"
        }
    ];

    // Referencias a elementos del DOM
    const tabBtns = document.querySelectorAll('.tab-btn');
    const eventosSection = document.getElementById('eventos-section');
    const feriasSection = document.getElementById('ferias-section');
    const eventosContainer = document.querySelector('.eventos-scroll');
    const feriasContainer = document.querySelector('.ferias-scroll');
    const eventModal = document.getElementById('event-modal');
    const feriaModal = document.getElementById('feria-modal');
    const registerEventBtn = document.getElementById('register-event-btn');
    const registerFeriaBtn = document.getElementById('register-feria-btn');
    const closeModalBtns = document.querySelectorAll('.close-modal');
    const cancelBtns = document.querySelectorAll('.cancel-btn');
    const eventForm = document.getElementById('event-form');
    const feriaForm = document.getElementById('feria-form');

    // Función para cambiar entre las pestañas (Eventos/Ferias)
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const sectionToShow = this.dataset.section;
            
            // Actualizar clases activas de botones
            tabBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Mostrar sección correspondiente
            if (sectionToShow === 'eventos') {
                eventosSection.classList.add('active');
                feriasSection.classList.remove('active');
            } else {
                feriasSection.classList.add('active');
                eventosSection.classList.remove('active');
            }
        });
    });

    // Función para crear tarjetas de eventos
    function renderEventos() {
        eventosContainer.innerHTML = '';
        
        eventos.forEach(evento => {
            const card = document.createElement('div');
            card.classList.add('event-card');
            
            card.innerHTML = `
                <span class="card-tag">${evento.categoria}</span>
                <h3 class="card-title">${evento.titulo}</h3>
                <p class="card-description">${evento.descripcion}</p>
                
                <div class="card-info">
                    <div class="card-info-item">
                        <i>📅</i>
                        <span>Fecha: ${evento.fecha}</span>
                    </div>
                    <div class="card-info-item">
                        <i>⏰</i>
                        <span>Hora: ${evento.hora}</span>
                    </div>
                    <div class="card-info-item">
                        <i>📍</i>
                        <span>Ubicación: ${evento.ubicacion}</span>
                    </div>
                    <div class="card-info-item">
                        <i>👥</i>
                        <span>Participantes: ${evento.participantes}</span>
                    </div>
                    <div class="card-info-item">
                        <i>🎟️</i>
                        <span>Cupos disponibles: ${evento.cuposDisponibles}</span>
                    </div>
                </div>
                
                <div class="card-divider"></div>
                
                <div class="card-additional-info">
                    <h4>Información Adicional:</h4>
                    <ul>
                        <li>Costo de entrada: ${evento.costo}</li>
                        <li>Incluye: ${evento.incluye}</li>
                        <li>Requisitos: ${evento.requisitos}</li>
                        <li>Organizador: ${evento.organizador}</li>
                    </ul>
                </div>
                
                <div class="card-actions">
                    <button class="card-btn">Inscribirse</button>
                    <button class="card-link">Más Detalles</button>
                </div>
            `;
            
            eventosContainer.appendChild(card);
        });

        // Aplicar efecto de hover a las tarjetas
        applyHoverEffect(document.querySelectorAll('.event-card'));
    }

    // Función para crear tarjetas de ferias
    function renderFerias() {
        feriasContainer.innerHTML = '';
        
        ferias.forEach(feria => {
            const card = document.createElement('div');
            card.classList.add('feria-card');
            
            card.innerHTML = `
                <span class="card-tag">${feria.categoria}</span>
                <h3 class="card-title">${feria.titulo}</h3>
                <p class="card-description">${feria.descripcion}</p>
                
                <div class="card-info">
                    <div class="card-info-item">
                        <i>📅</i>
                        <span>Fecha: ${feria.fecha}</span>
                    </div>
                    <div class="card-info-item">
                        <i>⏰</i>
                        <span>Hora: ${feria.hora}</span>
                    </div>
                    <div class="card-info-item">
                        <i>📍</i>
                        <span>Ubicación: ${feria.ubicacion}</span>
                    </div>
                    <div class="card-info-item">
                        <i>👥</i>
                        <span>Participantes: ${feria.participantes}</span>
                    </div>
                    <div class="card-info-item">
                        <i>🎟️</i>
                        <span>Cupos disponibles: ${feria.cuposDisponibles}</span>
                    </div>
                </div>
                
                <div class="card-divider"></div>
                
                <div class="card-additional-info">
                    <h4>Información Adicional:</h4>
                    <ul>
                        <li>Costo de entrada: ${feria.costo}</li>
                        <li>Incluye: ${feria.incluye}</li>
                        <li>Requisitos: ${feria.requisitos}</li>
                        <li>Organizador: ${feria.organizador}</li>
                        <li>Productos permitidos: ${feria.tiposProductos}</li>
                    </ul>
                </div>
                
                <div class="card-actions">
                    <button class="card-btn">Inscribirse</button>
                    <button class="card-link">Más Detalles</button>
                </div>
            `;
            
            feriasContainer.appendChild(card);
        });

        // Aplicar efecto de hover a las tarjetas
        applyHoverEffect(document.querySelectorAll('.feria-card'));
    }

    // Función para aplicar efecto de hover a las tarjetas
    function applyHoverEffect(cards) {
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                // Añadir clase para aplicar efectos de hover
                cards.forEach(c => {
                    if (c !== this) {
                        c.classList.add('card-hover-effect');
                    }
                });
            });
            
            card.addEventListener('mouseleave', function() {
                // Remover clase cuando el mouse sale
                cards.forEach(c => {
                    c.classList.remove('card-hover-effect');
                });
            });
        });
    }

    // Funciones para mostrar/ocultar modales
    function openModal(modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Evitar scroll en el fondo
    }
    
    function closeModal(modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restaurar scroll
    }

    // Event Listeners para modales
    registerEventBtn.addEventListener('click', () => openModal(eventModal));
    registerFeriaBtn.addEventListener('click', () => openModal(feriaModal));
    
    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            closeModal(modal);
        });
    });
    
    cancelBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            closeModal(modal);
        });
    });
    
    // Cerrar modales al hacer clic fuera del contenido
    window.addEventListener('click', function(event) {
        if (event.target === eventModal) {
            closeModal(eventModal);
        } else if (event.target === feriaModal) {
            closeModal(feriaModal);
        }
    });

    // Manejo de formularios
    eventForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Aquí podrías procesar los datos del formulario
        // Como es solo un prototipo, mostramos un mensaje de éxito
        alert('¡Evento registrado con éxito!');
        
        // Limpiar formulario y cerrar modal
        this.reset();
        closeModal(eventModal);
    });
    
    feriaForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Aquí podrías procesar los datos del formulario
        alert('¡Feria registrada con éxito!');
        
        // Limpiar formulario y cerrar modal
        this.reset();
        closeModal(feriaModal);
    });

    // Funcionalidad adicional: Animación al hacer scroll por las tarjetas
    function addScrollButtons() {
        // Para eventos
        const scrollLeftEventos = document.createElement('button');
        scrollLeftEventos.classList.add('scroll-btn', 'scroll-left');
        scrollLeftEventos.innerHTML = '&lt;';
        scrollLeftEventos.addEventListener('click', () => {
            eventosContainer.scrollBy({ left: -350, behavior: 'smooth' });
        });
        
        const scrollRightEventos = document.createElement('button');
        scrollRightEventos.classList.add('scroll-btn', 'scroll-right');
        scrollRightEventos.innerHTML = '&gt;';
        scrollRightEventos.addEventListener('click', () => {
            eventosContainer.scrollBy({ left: 350, behavior: 'smooth' });
        });
        
        document.querySelector('.eventos-container').prepend(scrollLeftEventos);
        document.querySelector('.eventos-container').append(scrollRightEventos);
        
        // Para ferias
        const scrollLeftFerias = document.createElement('button');
        scrollLeftFerias.classList.add('scroll-btn', 'scroll-left');
        scrollLeftFerias.innerHTML = '&lt;';
        scrollLeftFerias.addEventListener('click', () => {
            feriasContainer.scrollBy({ left: -350, behavior: 'smooth' });
        });
        
        const scrollRightFerias = document.createElement('button');
        scrollRightFerias.classList.add('scroll-btn', 'scroll-right');
        scrollRightFerias.innerHTML = '&gt;';
        scrollRightFerias.addEventListener('click', () => {
            feriasContainer.scrollBy({ left: 350, behavior: 'smooth' });
        });
        
        document.querySelector('.ferias-container').prepend(scrollLeftFerias);
        document.querySelector('.ferias-container').append(scrollRightFerias);
    }

    // Inicializar la página
    renderEventos();
    renderFerias();
    addScrollButtons();

    // Agregar estilos dinámicos para los botones de scroll
    const style = document.createElement('style');
    style.textContent = `
        .eventos-container, .ferias-container {
            position: relative;
            padding: 0 40px;
        }
        
        .scroll-btn {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 35px;
            height: 35px;
            background-color: #428709;
            color: white;
            border: none;
            border-radius: 50%;
            font-size: 18px;
            cursor: pointer;
            z-index: 10;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0.8;
            transition: opacity 0.3s, background-color 0.3s;
        }
        
        .scroll-btn:hover {
            opacity: 1;
            background-color: #8bc34a;
        }
        
        .scroll-left {
            left: 5px;
        }
        
        .scroll-right {
            right: 5px;
        }
    `;
    document.head.appendChild(style);
});