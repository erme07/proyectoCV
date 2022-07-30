window.onbeforeunload = function() {
  return 'You have unsaved changes!';
}
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
expCont=0;
formCont=0;
adCont=0;


function addElemento(id){
  const item = document.querySelector(id);
  if(id == "#exp"){
    item.insertAdjacentHTML("beforeend", '<div class=\"exp-item\"><div class=\"timeline_circulo\"></div><h3 class=\"puesto\" contenteditable=\"true\" placeholder=\"Puesto Laboral\"></h3><div class=\"empresa\"><h4 contenteditable=\"true\" placeholder=\"Empleador\"></h4><p class=\"fecha\" contenteditable=\"true\" placeholder=\"Desde-Hasta\"></p></div><p class=\"texto\" contenteditable=\"true\" placeholder=\"Ingresa la descripción de su experiencia laboral. Incluya información relevante que demuestre a los empleadores potenciales cómo ha agregado valor en roles anteriores. Escribe sobre tus\"></p><div class=\"timeline_linea\"></div></div>');
    expCont++;
    
  }else if(id == "#form"){
    item.insertAdjacentHTML("beforeend", '<div class=\"form-item\"><div class=\"timeline_circulo\"></div><div class=\"titulo\"><h3 class=\"especialidad\" contenteditable=\"true\" placeholder=\"Especialidad o Carrera\"></h3><p class=\"fecha\" contenteditable=\"true\" placeholder=\"Desde-Hasta\"></p></div><div class=\"establecimiento\"><h4 contenteditable=\"true\" placeholder=\"Escuela - Instituto\"></h4><p class=\"estado\" contenteditable=\"true\" placeholder=\"Estado\"></p></div><div class=\"timeline_linea\"></div></div>');
    formCont++;
    
  }else if(id == "#extras"){
    item.insertAdjacentHTML("beforeend", '<div class="ad-item"><i class="fa-solid fa-circle-check"></i><p contenteditable="true" placeholder="Habilidad - Pretencion- Disponibilidad"></p></div>');
    adCont++;
  }
  
  
}


function restElemento(id){
  const item = document.querySelector(id);
  if(id=="#exp"&& expCont!=0){
    item.removeChild(item.lastChild);
    expCont--;
  }
  else if(id == "#form"&& formCont!=0){
    item.removeChild(item.lastChild);
    formCont--;
  }
  else if(id == "#extras"&& adCont!=0){
    item.removeChild(item.lastChild);
    adCont--;
      // console.log("experiencia: "+expCont);
      // console.log("formacion: "+formCont);
      // console.log("experiencia: "+adCont);
  }
}
