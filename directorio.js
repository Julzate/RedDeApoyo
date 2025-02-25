document.addEventListener('DOMContentLoaded', function() {
    // Datos de ejemplo para los directorios
    const directorios = [
        {
            nombre: "Café del Valle",
            categoria: "Alimentos",
            descripcion: "Café de especialidad cultivado en las montañas del Valle de Aburrá.",
            descripcionLarga: "Café del Valle es un emprendimiento familiar dedicado al cultivo, tostión y comercialización de café de especialidad. Nuestros granos son cultivados a más de 1.800 metros sobre el nivel del mar en las laderas del Valle de Aburrá, lo que les confiere un perfil de sabor único con notas de chocolate, caramelo y frutas cítricas. Trabajamos directamente con pequeños productores locales, asegurando prácticas sostenibles y comercio justo. Ofrecemos diferentes métodos de preparación y capacitaciones para amantes del café.",
            ubicacion: "Envigado, Antioquia",
            telefono: "+57 300 123 4567",
            email: "cafe@delvalle.com",
            mapa: "img/mapa-generico.jpg"
        },
        {
            nombre: "Artesanías Ancestrales",
            categoria: "Artesanías",
            descripcion: "Productos artesanales que rescatan técnicas tradicionales indígenas colombianas.",
            descripcionLarga: "Artesanías Ancestrales es un colectivo de artesanos dedicados a preservar y difundir las técnicas tradicionales de las comunidades indígenas del Valle de Aburrá. Cada pieza es única y elaborada a mano utilizando materiales naturales y sostenibles como fibras vegetales, semillas, arcilla y tintes naturales. Nuestro catálogo incluye cestas, tejidos, cerámicas decorativas y joyería inspirada en la cosmogonía indígena. A través de nuestros productos no solo ofrecemos belleza y funcionalidad, sino que contribuimos a mantener vivo el patrimonio cultural de nuestros pueblos originarios.",
            ubicacion: "Bello, Antioquia",
            telefono: "+57 311 234 5678",
            email: "info@artesaniasancestrales.co",
            mapa: "img/mapa-generico.jpg"
        },
        {
            nombre: "TechValle Solutions",
            categoria: "Tecnología",
            descripcion: "Desarrollo de software y soluciones tecnológicas para pequeñas empresas.",
            descripcionLarga: "TechValle Solutions es una empresa de desarrollo tecnológico que se especializa en crear soluciones digitales accesibles para pequeños y medianos negocios del Valle de Aburrá. Ofrecemos servicios de desarrollo de aplicaciones móviles, páginas web, sistemas de gestión empresarial y consultoría en transformación digital. Nuestro enfoque se basa en entender las necesidades específicas de cada cliente para ofrecer soluciones personalizadas, escalables y amigables que realmente impulsen su crecimiento. Contamos con un equipo de desarrolladores locales altamente capacitados que combinan conocimiento técnico con entendimiento del mercado regional.",
            ubicacion: "Medellín, Antioquia",
            telefono: "+57 322 345 6789",
            email: "contacto@techvalle.co",
            mapa: "img/mapa-generico.jpg"
        },
        {
            nombre: "EcoLimpia",
            categoria: "Servicios",
            descripcion: "Servicios de limpieza ecológica para hogares y empresas con productos biodegradables y certificados.",
            descripcionLarga: "EcoLimpia ofrece servicios profesionales de limpieza utilizando exclusivamente productos biodegradables y técnicas que minimizan el impacto ambiental. Atendemos tanto hogares como oficinas y locales comerciales en todo el Valle de Aburrá. Nuestro equipo está formado por profesionales certificados en técnicas de limpieza ecológica, quienes además reciben compensación justa y beneficios sociales completos. Ofrecemos planes personalizados según las necesidades de cada cliente, desde servicios puntuales hasta contratos permanentes. Con EcoLimpia no solo obtienes espacios impecables, sino que también contribuyes al cuidado del planeta y apoyas una economía más equitativa.",
            ubicacion: "Itagüí, Antioquia",
            telefono: "+57 333 456 7890",
            email: "servicios@ecolimpia.com.co",
            mapa: "img/mapa-generico.jpg"
        },
        {
            nombre: "Valle Fashion",
            categoria: "Moda",
            descripcion: "Diseño y confección de ropa sostenible con materiales reciclados y orgánicos.",
            descripcionLarga: "Valle Fashion es un atelier de moda sostenible que diseña y produce prendas contemporáneas utilizando materiales reciclados, telas orgánicas y técnicas de bajo impacto ambiental. Cada colección está inspirada en la biodiversidad colombiana y es producida localmente por mujeres cabeza de familia del Valle de Aburrá, quienes reciben capacitación constante y remuneración justa. Nuestra propuesta estética combina funcionalidad, confort y diseño atemporal, creando prendas duraderas que trascienden las tendencias pasajeras. Además de nuestra línea regular, ofrecemos servicios de personalización y diseño a medida para clientes que buscan exclusividad con consciencia.",
            ubicacion: "Sabaneta, Antioquia",
            telefono: "+57 344 567 8901",
            email: "hola@vallefashion.co",
            mapa: "img/mapa-generico.jpg"
        },
        {
            nombre: "NutriValle",
            categoria: "Salud y Bienestar",
            descripcion: "Asesoría nutricional personalizada y productos alimenticios saludables elaborados con ingredientes locales.",
            descripcionLarga: "NutriValle es un centro integral de nutrición que combina la asesoría profesional personalizada con una línea de productos alimenticios saludables elaborados con ingredientes locales. Nuestro equipo de nutricionistas certificados desarrolla planes alimenticios adaptados a las necesidades específicas de cada cliente, considerando factores como condiciones médicas, objetivos de salud, preferencias personales y presupuesto. Complementamos el servicio con talleres educativos, seguimiento continuo y nuestra tienda de alimentos que incluye opciones sin gluten, bajas en azúcar, vegetarianas y veganas. Trabajamos en red con agricultores del Valle de Aburrá para garantizar la frescura y trazabilidad de nuestros ingredientes.",
            ubicacion: "La Estrella, Antioquia",
            telefono: "+57 355 678 9012",
            email: "nutricion@nutrivalle.com",
            mapa: "img/mapa-generico.jpg"
        },
        {
            nombre: "Eco Muebles Valle",
            categoria: "Artesanías",
            descripcion: "Fabricación de muebles artesanales con materiales reciclados y maderas sostenibles certificadas.",
            descripcionLarga: "Eco Muebles Valle es un taller de ebanistería que se especializa en la creación de mobiliario artesanal utilizando materiales reciclados y maderas certificadas de fuentes sostenibles. Cada pieza es diseñada y fabricada a mano por maestros ebanistas del Valle de Aburrá, combinando técnicas tradicionales con estética contemporánea. Nuestro catálogo incluye muebles para hogar y oficina, así como piezas personalizadas según las especificaciones del cliente. Nos enorgullece ofrecer productos de alta calidad y durabilidad que reflejan nuestro compromiso con el medio ambiente, la excelencia artesanal y el diseño funcional. Todos nuestros acabados son naturales y libres de tóxicos.",
            ubicacion: "Copacabana, Antioquia",
            telefono: "+57 366 789 0123",
            email: "contacto@ecomueblesvalle.co",
            mapa: "img/mapa-generico.jpg"
        },
        {
            nombre: "Valle Tours",
            categoria: "Servicios",
            descripcion: "Tours especializados por el Valle de Aburrá con enfoque cultural y ecológico, guiados por expertos locales.",
            descripcionLarga: "Valle Tours ofrece experiencias turísticas auténticas y responsables que permiten descubrir las riquezas naturales, culturales y gastronómicas del Valle de Aburrá. Nuestros recorridos son diseñados y guiados por locales expertos en la historia, biodiversidad y tradiciones de la región, garantizando una inmersión profunda y respetuosa. Ofrecemos tours urbanos, rurales, gastronómicos, de avistamiento de aves y personalizados para grupos pequeños, priorizando siempre el contacto con comunidades locales y la conservación del entorno. Cada tour incluye transporte en vehículos confortables, refrigerios con productos locales y material informativo sobre los sitios visitados.",
            ubicacion: "Girardota, Antioquia",
            telefono: "+57 377 890 1234",
            email: "info@valletours.com.co",
            mapa: "img/mapa-generico.jpg"
        }
    ];

    // Referencia a elementos del DOM
    const directoryListElement = document.querySelector('.directory-list');
    const detailContentElement = document.querySelector('.detail-content');
    const detailEmptyStateElement = document.querySelector('.detail-empty-state');
    const searchInput = document.getElementById('search-input');
    const categoriaSelect = document.getElementById('categoria');

    // Función para crear las tarjetas de directorio
    function renderDirectories(directories) {
        directoryListElement.innerHTML = '';
        
        directories.forEach((directorio, index) => {
            const card = document.createElement('div');
            card.classList.add('directory-card');
            card.dataset.index = index;
            
            card.innerHTML = `
                <h3>${directorio.nombre}</h3>
                <span class="category-tag">${directorio.categoria}</span>
                <p>${directorio.descripcion}</p>
                <div class="card-footer">${directorio.ubicacion}</div>
            `;
            
            // Añadir evento click a cada tarjeta
            card.addEventListener('click', function() {
                showDirectoryDetail(index);
                
                // Marcar esta tarjeta como activa
                document.querySelectorAll('.directory-card').forEach(card => {
                    card.classList.remove('active');
                });
                card.classList.add('active');
            });
            
            directoryListElement.appendChild(card);
        });
    }

    // Función para mostrar los detalles de un directorio
    function showDirectoryDetail(index) {
        const directorio = directorios[index];
        
        // Actualizar el contenido del detalle
        document.getElementById('detail-title').textContent = directorio.nombre;
        document.getElementById('detail-category').textContent = directorio.categoria;
        document.getElementById('detail-location').textContent = directorio.ubicacion;
        document.getElementById('detail-phone').textContent = directorio.telefono;
        
        const emailElement = document.getElementById('detail-email');
        emailElement.textContent = directorio.email;
        emailElement.href = `mailto:${directorio.email}`;
        
        document.getElementById('detail-description').textContent = directorio.descripcionLarga;
        
        // Cargar imagen del mapa
        document.getElementById('detail-map').src = directorio.mapa || 'img/mapa-generico.jpg';
        
        // Mostrar el detalle y ocultar mensaje vacío
        detailEmptyStateElement.style.display = 'none';
        detailContentElement.style.display = 'block';
    }

    // Función para filtrar directorios
    function filterDirectories() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedCategory = categoriaSelect.value;
        
        const filteredDirectories = directorios.filter(dir => {
            const matchSearch = dir.nombre.toLowerCase().includes(searchTerm) || 
                               dir.descripcion.toLowerCase().includes(searchTerm);
            
            const matchCategory = selectedCategory === '' || dir.categoria === selectedCategory;
            
            return matchSearch && matchCategory;
        });
        
        renderDirectories(filteredDirectories);
        
        // Si no hay resultados después de filtrar
        if (filteredDirectories.length === 0) {
            directoryListElement.innerHTML = '<p class="no-results">No se encontraron emprendimientos que coincidan con tu búsqueda.</p>';
        }
    }

    // Eventos para filtrado
    searchInput.addEventListener('input', filterDirectories);
    categoriaSelect.addEventListener('change', filterDirectories);

    // Inicializar la página
    renderDirectories(directorios);
});