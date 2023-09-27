
function compruebaTriangulo(ladoI, ladoD, base){
    let resultado;
    if(ladoI == ladoD && ladoD == base && ladoI == base){
        resultado = "equilatero";
    }
    else if(ladoI == ladoD && ladoI != base && ladoD != base){
        resultado = "isosceles";
    }
    else if(ladoI != ladoD && ladoD != base && ladoI != base){
        resultado = "escaleno";
    }
    alert(resultado);
}

