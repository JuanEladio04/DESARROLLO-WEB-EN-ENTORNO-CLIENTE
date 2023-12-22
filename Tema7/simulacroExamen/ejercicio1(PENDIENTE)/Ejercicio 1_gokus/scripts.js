 function mostrar(){
    var checkbox = document.querySelectorAll("input[type=checkbox]"); 
    console.clear();

    checkbox.forEach(function(element) {
        if(element.checked){
        console.log(element.value); 
        }
    });
 }

 function negro(){
    document.getElementById("observaciones1").style.color = "white";
    document.getElementById("observaciones1").style.backgroundColor = "black";
 }

 function poner(){
    document.getElementById("noVisible").style.display = "block";   
}

function quitar(){
    document.getElementById("noVisible").style.display = "none";   
}

function enviar(){
    let marcado = false;
    $checkbox = document.querySelectorAll("input[type=checkbox]");
    $checkbox.forEach(element =>{
        if (element.checked == true) {
            marcado = true;
        }
    })
    if (!marcado) {
        alert("Tienes que marcar un síntoma");
        event.preventDefault();
    }
}