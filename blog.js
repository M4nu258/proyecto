// Función para abrir la barra lateral
function openNav() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.width = "250px";
    document.body.style.marginLeft = "250px"; // Mover el contenido cuando se abre la barra lateral
}

// Función para cerrar la barra lateral
function closeNav() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.width = "0";
    document.body.style.marginLeft = "0"; // Volver al estado original cuando se cierra
}

// Obtener elementos del DOM
const postContainer = document.getElementById("post-container");
const postForm = document.getElementById("post-form");
const publishButton = document.getElementById("publish-post");
const createPostSection = document.getElementById("create-post");
const categoryLinks = document.querySelectorAll(".category-link"); // Enlaces del menú de categorías
const imageInput = document.getElementById("post-image");
const imagePreview = document.getElementById("image-preview");

// Funcionalidad para publicar entradas
publishButton.addEventListener("click", () => {
    const title = document.getElementById("post-title").value.trim();
    const content = document.getElementById("post-content").value.trim();
    const fontColor = document.getElementById("font-color").value;
    const fontFamily = document.getElementById("font-family").value;
    const category = document.getElementById("post-category").value;

    // Validar campos requeridos
    if (!title || !content) {
        alert("Por favor, completa todos los campos obligatorios.");
        return;
    }

    // Crear una nueva entrada
    const post = document.createElement("div");
    post.classList.add("blog-post");
    post.dataset.category = category; // Asociar la categoría con la publicación
    post.innerHTML = `
        <h3 style="color:${fontColor}; font-family:${fontFamily};">${title}</h3>
        <p style="color:${fontColor}; font-family:${fontFamily};">${content}</p>
    `;

    // Adjuntar imagen si se subió alguna
    if (imageInput.files.length > 0) {
        const img = document.createElement("img");
        img.src = URL.createObjectURL(imageInput.files[0]);
        img.alt = "Imagen de la publicación";
        post.appendChild(img);
    }

    // Agregar la entrada al contenedor de publicaciones
    postContainer.prepend(post);

    // Limpiar el formulario
    postForm.reset();
    imagePreview.innerHTML = ""; // Limpiar la previsualización de la imagen

    // Ocultar el formulario
    createPostSection.style.display = "none";
});

// Mostrar previsualización de imagen en tiempo real
imageInput.addEventListener("change", () => {
    const file = imageInput.files[0];

    // Validar si hay una imagen seleccionada
    if (file) {
        const img = document.createElement("img");
        img.src = URL.createObjectURL(file);
        img.alt = "Previsualización de la imagen";
        imagePreview.innerHTML = ""; // Limpiar cualquier imagen previa
        imagePreview.appendChild(img);
    } else {
        imagePreview.innerHTML = ""; // Limpiar si no se selecciona imagen
    }
});

// Filtrar las publicaciones por categoría
categoryLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault(); // Prevenir comportamiento predeterminado del enlace
        const selectedCategory = event.target.dataset.category;
        const posts = document.querySelectorAll(".blog-post");

        posts.forEach(post => {
            if (selectedCategory === "todas" || post.dataset.category === selectedCategory) {
                post.style.display = "block"; // Mostrar publicación
            } else {
                post.style.display = "none"; // Ocultar publicación
            }
        });
    });
});

// Mostrar/Ocultar el formulario de publicación al presionar el botón flotante
document.getElementById("new-post-btn").addEventListener("click", () => {
    if (createPostSection.style.display === "none" || createPostSection.style.display === "") {
        createPostSection.style.display = "block"; // Mostrar formulario
    } else {
        createPostSection.style.display = "none"; // Ocultar formulario
    }
});
