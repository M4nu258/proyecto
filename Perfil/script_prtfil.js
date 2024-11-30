document.addEventListener('DOMContentLoaded', function () {
    // Cargar los datos de perfil por defecto (simulación)
    const profileName = document.getElementById('profile-name');
    const profileImg = document.getElementById('profile-img');
    const nameInput = document.getElementById('name');
    const bioInput = document.getElementById('bio');
    const emailInput = document.getElementById('email');
    
    // Valores predeterminados (simulados)
    profileName.textContent = 'Juan Pérez';
    nameInput.value = 'Juan Pérez';
    bioInput.value = 'Web developer passionate about coding and design.';
    emailInput.value = 'juanperez@example.com';

    // Evento para actualizar los datos del perfil
    const profileForm = document.getElementById('profile-form');
    profileForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Evitar el comportamiento predeterminado del formulario

        // Actualizar la información del perfil
        const updatedName = nameInput.value;
        const updatedBio = bioInput.value;
        const updatedEmail = emailInput.value;

        // Si se selecciona una nueva imagen de perfil, actualizarla (simulación)
        const fileInput = document.getElementById('profile_img');
        if (fileInput.files.length > 0) {
            const fileReader = new FileReader();
            fileReader.onload = function (event) {
                profileImg.src = event.target.result; // Establecer la imagen seleccionada
            };
            fileReader.readAsDataURL(fileInput.files[0]);
        }

        // Actualizar el nombre del perfil en la interfaz
        profileName.textContent = updatedName;

        // Aquí puedes agregar lógica para guardar los datos de perfil en una base de datos, por ejemplo

        alert('Perfil actualizado con éxito.');
    });
});
