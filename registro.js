document.addEventListener('DOMContentLoaded', function() {
    // Referencias a elementos del DOM
    const stepButtons = document.querySelectorAll('.step');
    const formSections = document.querySelectorAll('.form-section');
    const nextButtons = document.querySelectorAll('.btn-siguiente');
    const prevButtons = document.querySelectorAll('.btn-anterior');
    const finishButton = document.querySelector('.btn-finalizar');
    const confirmationModal = document.getElementById('confirmation-modal');
    const closeModalBtn = document.querySelector('.close-modal');
    const btnDirectorio = document.querySelector('.btn-directorio');
    const btnHome = document.querySelector('.btn-home');
    const logoInput = document.getElementById('logo-file');
    const logoUpload = document.getElementById('logo-upload');
    const productInput = document.getElementById('product-file');
    const productUpload = document.getElementById('product-upload');
    const productPreview = document.getElementById('product-images-preview');

    // Objeto para almacenar la información del registro
    const registroData = {
        informacionBasica: {},
        detallesNegocio: {},
        multimedia: {
            logo: null,
            productos: []
        }
    };

    // Función para cambiar el paso actual
    function changeStep(newStep) {
        // Actualizar estado de los botones de pasos
        stepButtons.forEach(btn => {
            const stepNum = parseInt(btn.dataset.step);
            if (stepNum <= newStep) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Actualizar secciones de formulario
        formSections.forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(`step-${newStep}`).classList.add('active');
    }

    // Event listeners para botones de pasos
    stepButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const stepNum = parseInt(this.dataset.step);
            // Solo permitir ir a pasos ya completados o al siguiente
            if (stepNum <= getCurrentActiveStep() + 1) {
                changeStep(stepNum);
            }
        });
    });

    // Obtener el paso actual
    function getCurrentActiveStep() {
        let currentStep = 1;
        formSections.forEach((section, index) => {
            if (section.classList.contains('active')) {
                currentStep = index + 1;
            }
        });
        return currentStep;
    }

    // Event listeners para botones de siguiente
    nextButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const currentStep = getCurrentActiveStep();
            const nextStep = parseInt(this.dataset.next);

            // Validar el formulario actual antes de avanzar
            if (validateStep(currentStep)) {
                saveStepData(currentStep);
                changeStep(nextStep);
            }
        });
    });

    // Event listeners para botones de anterior
    prevButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const prevStep = parseInt(this.dataset.prev);
            changeStep(prevStep);
        });
    });

    // Validar datos del paso actual
    function validateStep(step) {
        let isValid = true;
        const section = document.getElementById(`step-${step}`);

        // Validación básica: comprobar que los campos requeridos no estén vacíos
        section.querySelectorAll('input, select, textarea').forEach(field => {
            if (field.hasAttribute('required') && !field.value.trim()) {
                field.classList.add('invalid');
                isValid = false;
            } else {
                field.classList.remove('invalid');
            }
        });

        // Si no es válido, mostrar un mensaje
        if (!isValid) {
            alert('Por favor, completa todos los campos requeridos.');
        }

        return isValid;
    }

    // Guardar datos del paso actual
    function saveStepData(step) {
        const section = document.getElementById(`step-${step}`);

        switch (step) {
            case 1:
                registroData.informacionBasica = {
                    nombre: document.getElementById('nombre-emprendimiento').value,
                    categoria: document.getElementById('categoria-principal').value,
                    descripcion: document.getElementById('descripcion-corta').value
                };
                break;
            case 2:
                registroData.detallesNegocio = {
                    ubicacion: document.getElementById('ubicacion').value,
                    telefono: document.getElementById('telefono').value,
                    correo: document.getElementById('correo').value,
                    instagram: document.getElementById('instagram').value,
                    facebook: document.getElementById('facebook').value
                };
                break;
            case 3:
                // Los datos multimedia se guardan en los event listeners de los inputs file
                break;
        }

        console.log('Datos guardados del paso', step, registroData);
    }

    // Event listener para finalizar registro
    finishButton.addEventListener('click', function() {
        if (validateStep(3)) {
            saveStepData(3);
            submitForm();
        }
    });

    // Enviar formulario
    function submitForm() {
        // Aquí se podría hacer un fetch a una API para guardar los datos
        // Como es solo un prototipo, mostrar el modal de confirmación
        showConfirmationModal();
    }

    // Funciones para el modal de confirmación
    function showConfirmationModal() {
        confirmationModal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Evitar scroll en el fondo
    }

    function closeConfirmationModal() {
        confirmationModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restaurar scroll
    }

    // Event listeners para el modal
    closeModalBtn.addEventListener('click', closeConfirmationModal);

    window.addEventListener('click', function(event) {
        if (event.target === confirmationModal) {
            closeConfirmationModal();
        }
    });

    btnDirectorio.addEventListener('click', function() {
        window.location.href = 'directorio.html';
    });

    btnHome.addEventListener('click', function() {
        window.location.href = 'index.html';
    });

    // Manejo de carga de archivos - Logo
    logoInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            // Validar tipo y tamaño del archivo
            if (!validateImageFile(file)) return;

            // Guardar en registroData
            registroData.multimedia.logo = file;

            // Actualizar vista previa
            updateLogoPreview(file);
        }
    });

    // Manejo de carga de archivos - Productos
    productInput.addEventListener('change', function(e) {
        const files = e.target.files;
        if (files.length > 0) {
            for (let i = 0; i < files.length; i++) {
                // Validar tipo y tamaño del archivo
                if (validateImageFile(files[i])) {
                    // Guardar en registroData
                    registroData.multimedia.productos.push(files[i]);

                    // Actualizar vista previa
                    addProductPreview(files[i]);
                }
            }
        }
    });

    // Validar archivo de imagen
    function validateImageFile(file) {
        const acceptedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/gif'];
        const maxSize = 10 * 1024 * 1024; // 10MB

        if (!acceptedTypes.includes(file.type)) {
            alert('El archivo debe ser una imagen (PNG, JPG, JPEG, GIF)');
            return false;
        }

        if (file.size > maxSize) {
            alert('El tamaño del archivo no debe exceder 10MB');
            return false;
        }

        return true;
    }

    // Actualizar vista previa del logo
    function updateLogoPreview(file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            // Eliminar contenido previo
            logoUpload.innerHTML = '';

            // Crear elemento de imagen
            const img = document.createElement('img');
            img.src = e.target.result;
            img.style.maxWidth = '100%';
            img.style.maxHeight = '150px';
            img.style.borderRadius = '5px';

            // Añadir imagen al contenedor
            logoUpload.appendChild(img);

            // Añadir de nuevo el input
            logoUpload.appendChild(logoInput);
        };
        reader.readAsDataURL(file);
    }

    // Añadir vista previa de producto
    function addProductPreview(file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            // Crear contenedor para la vista previa
            const previewContainer = document.createElement('div');
            previewContainer.className = 'image-preview';

            // Crear elemento de imagen
            const img = document.createElement('img');
            img.src = e.target.result;

            // Crear botón para eliminar
            const removeBtn = document.createElement('div');
            removeBtn.className = 'remove-image';
            removeBtn.innerHTML = '×';
            removeBtn.addEventListener('click', function() {
                // Eliminar de registroData
                const index = registroData.multimedia.productos.indexOf(file);
                if (index > -1) {
                    registroData.multimedia.productos.splice(index, 1);
                }
                // Eliminar vista previa
                previewContainer.remove();
            });

            // Añadir elementos al contenedor
            previewContainer.appendChild(img);
            previewContainer.appendChild(removeBtn);

            // Añadir contenedor a la vista previa
            productPreview.appendChild(previewContainer);
        };
        reader.readAsDataURL(file);
    }

    // Drag and drop para logo
    setupDragAndDrop(logoUpload, logoInput);

    // Drag and drop para productos
    setupDragAndDrop(productUpload, productInput);

    // Configurar funcionalidad de drag and drop
    function setupDragAndDrop(dropArea, fileInput) {
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            dropArea.addEventListener(eventName, preventDefaults, false);
        });

        function preventDefaults(e) {
            e.preventDefault();
            e.stopPropagation();
        }

        ['dragenter', 'dragover'].forEach(eventName => {
            dropArea.addEventListener(eventName, highlight, false);
        });

        ['dragleave', 'drop'].forEach(eventName => {
            dropArea.addEventListener(eventName, unhighlight, false);
        });

        function highlight() {
            dropArea.classList.add('highlight');
        }

        function unhighlight() {
            dropArea.classList.remove('highlight');
        }

        dropArea.addEventListener('drop', handleDrop, false);

        function handleDrop(e) {
            const dt = e.dataTransfer;
            const files = dt.files;

            if (fileInput === logoInput && files.length > 0) {
                fileInput.files = files;
                const event = new Event('change');
                fileInput.dispatchEvent(event);
            } else if (fileInput === productInput) {
                fileInput.files = files;
                const event = new Event('change');
                fileInput.dispatchEvent(event);
            }
        }
    }

    // Añadir clase CSS para destacar la sección de carga
    logoUpload.addEventListener('dragenter', function() {
        this.style.backgroundColor = 'rgba(66, 135, 9, 0.1)';
    });

    logoUpload.addEventListener('dragleave', function() {
        this.style.backgroundColor = '';
    });

    productUpload.addEventListener('dragenter', function() {
        this.style.backgroundColor = 'rgba(66, 135, 9, 0.1)';
    });

    productUpload.addEventListener('dragleave', function() {
        this.style.backgroundColor = '';
    });
});