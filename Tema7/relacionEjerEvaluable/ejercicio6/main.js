function generarNumeros() {
    var numeros = [];
    while(numeros.length < 6){
      var numero = Math.floor(Math.random()*49) + 1;
      if(numeros.indexOf(numero) === -1) numeros.push(numero);
    }
  
    var tabla = "<table border='1|1'>";
    for (var i=0; i<numeros.length; i++) {
      tabla += "<tr><td>" + numeros[i] + "</td><td>X</td></tr>";
    }
    tabla += "</table>";
  
    document.getElementById("demo").innerHTML = tabla;
  }
  