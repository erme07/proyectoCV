const addRemove = document.querySelectorAll('[data-item="experiencia"], [data-item="formacion"], [data-item="adicional"]');
const form = document.getElementById("form");
const exp = document.getElementById("exp");
const extras = document.getElementById("extras");
const addImage = document.getElementById("addImage");
const dataVcard = document.querySelectorAll(".vcardQr p");
const generarQR = document.getElementById("generarQr");
const QR = document.getElementById("codigoQR");

const layoutLeft = document.querySelectorAll('[data-layout="left"]');
const layoutRight = document.querySelectorAll('[data-layout="right"]');

let expCont = 0, formCont = 0, adCont = 0;
let vcard='',nombre='', apellido='', correo='', telefono='', web='', comprobarQr=false;

//window.onbeforeunload = function() {
//   return 'You have unsaved changes!';
//}

function imprimir(){
  window.print();
}

layoutLeft.forEach((e,i)=>{
  e.onclick=()=>{
    if(e.getAttribute('data-value') === 'perfil' && e.getAttribute('data-state') != 'select'){
      e.setAttribute('data-state','select');
      
    }
  }
});

function addItem(i){
  if(addRemove[i].getAttribute("data-item")==='experiencia'){
    exp.insertAdjacentHTML("beforeend",
    `<div class="exp-item">
       <h3 class="puesto" contenteditable="true" placeholder="Puesto Laboral"></h3>
       <div class="empresa">
         <h4 contenteditable="true" placeholder="Empleador"></h4>
         <p class="fecha" contenteditable="true" placeholder="Desde-Hasta"></p>
       </div>
       <p class="texto" contenteditable="true" placeholder="Ingresa la descripción de su experiencia laboral. Incluya información relevante que demuestre a los empleadores potenciales cómo ha agregado valor en roles anteriores. Escribe sobre tus"></p>
     </div>`);
     expCont++;
  }else if(addRemove[i].getAttribute("data-item")==='formacion'){
    form.insertAdjacentHTML("beforeend",
    `<div class="form-item">
         <div class="titulo">
         <h3 class="especialidad" contenteditable="true" placeholder="Especialidad o Carrera"></h3>
         <p class="fecha" contenteditable="true" placeholder="Desde-Hasta"></p>
       </div>
       <div class="establecimiento">
         <h4 contenteditable="true" placeholder="Escuela - Instituto"></h4>
         <p class="estado" contenteditable="true" placeholder="Estado"></p>
       </div>
     </div>`);
     formCont++;
  }else if(addRemove[i].getAttribute("data-item")==='adicional'){
    extras.insertAdjacentHTML("beforeend",
    `<div class="ad-item">
       <i class="fa-solid fa-circle-check"></i>
       <p contenteditable="true" placeholder="Habilidad - Pretencion- Disponibilidad"></p>
     </div>`);
     adCont++;
  }
}

function removeItem(i){
  if(addRemove[i].getAttribute("data-item")==='experiencia' && expCont>0){
    console.log(expCont);
    exp.removeChild(exp.lastChild);
    expCont--;
    console.log(expCont)
  }else if(addRemove[i].getAttribute("data-item")==='formacion' && formCont>0){
    form.removeChild(form.lastChild);
    formCont--;
  }else if(addRemove[i].getAttribute("data-item")==='adicional' && adCont>0){
    extras.removeChild(extras.lastChild);
    adCont--;
  }
}

function uploadImage() {
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

addRemove.forEach((e,i)=>{
  e.onclick=()=>{
    if(e.getAttribute("data-value")==='add'){
      addItem(i);
    }
    else if(e.getAttribute("data-value")==='remove'){
      removeItem(i)
    }
  }
});

addImage.onchange=uploadImage;

// const element = document.getElementById("curriculum");
// let text = "";
// text += "clientHeight: " + element.clientHeight + "px<br>";
// text += "offsetHeight: " + element.offsetHeight + "px<br>";
// text += "clientWidth: " + element.clientWidth + "px<br>";
// text += "offsetWidth: " + element.offsetWidth + "px";
// document.getElementById("demo").innerHTML = text;



var imgcontact="data:image/png;base64,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";

generarQR.onclick = mostrarQR;

function mostrarQR(){
  if(comprobarQr){
    QR.innerHTML='';
  }
  comprobarQr=true;
  nombre = dataVcard[0].innerHTML
  apellido = dataVcard[1].innerHTML
  correo = dataVcard[2].innerHTML
  telefono = dataVcard[3].innerHTML
  web = dataVcard[4].innerHTML

  vcard =
`BEGIN:VCARD
VERSION:3.0
N:${apellido};${nombre}
FN:${nombre} ${apellido}
TEL;CELL:${telefono}
EMAIL:${correo}
URL:${web}
END:VCARD`;

  const qrCode = new QRCodeStyling({
    width:150,
    height:150,
    type: "svg",
    data:vcard,
    margin:0,
    qrOptions:{
      typeNumber:0,
      mode:"Byte",
      errorCorrectionLevel:"M"
    },
    imageOptions:{
      hideBackgroundDots:true,
      imageSize:0.6,
      margin:4
    },
    dotsOptions:{
      type:"extra-rounded",
      color:"#000000"
    },
    backgroundOptions:{
      color:"#ffffff"
    },
    image:imgcontact,
    dotsOptionsHelper:{
      colorType:{
        single:true,
        gradient:false
      },
      gradient:{
        linear:true,
        radial:false,
        color1:"#6a1a4c",
        color2:"#6a1a4c",
        rotation:0
      }
    },
    cornersSquareOptions:{type:"extra-rounded",color:"#EC6F09"},
    cornersSquareOptionsHelper:{colorType:{single:true,gradient:false},
    gradient:{linear:true,radial:false,color1:"#000000",color2:"#000000",rotation:0}},
    cornersDotOptions:{type:"",color:"#000000"},
    cornersDotOptionsHelper:{colorType:{single:true,gradient:false},
    gradient:{linear:true,"radial":false,color1:"#000000",color2:"#000000",rotation:0}},
    backgroundOptionsHelper:{colorType:{single:true,gradient:false},
    gradient:{linear:true,radial:false,color1:"#ffffff",color2:"#ffffff",rotation:0}}}
);

  qrCode.append(document.getElementById("codigoQR"));
}


//qrCode.download({ name: "qr", extension: "png" });
