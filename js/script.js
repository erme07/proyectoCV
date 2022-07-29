
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