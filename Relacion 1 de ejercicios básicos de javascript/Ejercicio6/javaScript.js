function generaRadio(){
    for(let i = 2; i <= 9; i++ ){
        document.write('<input type="radio" name="numbers" value = "' + i + '">' + i + '<br>')
    };
};

function calculaTabla(numToMultiply){
    if(numToMultiply >= 2 && numToMultiply <= 9){
        document.write('<table border = "1">');
        for(let i = 0; i <= 10; i++){
            document.write('<tr>')
            document.write('<td>' +i+ '</td>')
            document.write('<td>' +numToMultiply * i+ '</td>')
            document.write('</tr>')
        };
    
        document.write('</table>');
    }
    else{
        alert('Debe ser un numero entre 2 y 9.');
    }
};

