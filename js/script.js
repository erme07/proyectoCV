window.onbeforeunload = function() {
  return 'You have unsaved changes!';
};

function previewFile() {
    const preview = document.getElementById('fotoPerfil');
    const file = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();

    reader.addEventListener("load", function () {
      // convierte la imagen a una cadena en base64
    preview.src = reader.result;
    }, false);

    if (file) {
    reader.readAsDataURL(file);
    }
}