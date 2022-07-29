
const getLink = () =>{
    let inputLink = document.getElementById("linkFoto").value; 
    document.getElementById("foto").src=inputLink;
}

var cont=0;
const mostrarPanel = () =>{
    cont++;
    if(cont==1){
        document.getElementById("Panel").style.display = ''; // hide
    }
    else{
        document.getElementById("Panel").style.display = 'none'; // hide
    }
}

function mostrarImagen(event){
    var imagenSource = event.target.result;
    var previewImage = document.getElementById('preview');

    previewImage.src = imagenSource;
}

function procesarArchivo(event){
    var imagen = event.target.files[0];

    var lector = new FileReader();

    lector.addEventListener('load', mostrarImagen, false);

    lector.readAsDataURL(imagen);
}

document.getElementById('archivo').addEventListener('change', procesarArchivo, false)