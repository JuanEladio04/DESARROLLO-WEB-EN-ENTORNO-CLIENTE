function checkString(textChain) {
    let textArray = textChain.split(" ");
    let isLowercase = false;
    let isUppercase = false;
    let both = false;

    textArray.forEach(text => {
        alert(text);
        if (text == text.toLowerCase()) {
            isLowercase = true;
        }
        else if (text == text.toUpperCase()){
            isUppercase = true;
        }
        else if(text != text.toUpperCase() && text != text.toLowerCase()){
            both = true;
        }
        });

        if(both == true){
            alert('Esta cadena de texto contiene mayúsculas y minúsculas.');
        }
        else if(isLowercase == true){
            alert('Esta cadena de texto está en minúsculas.');
        }
        else if(isUppercase == true){
            alert('Esta cadena de texto está en mayúsculas.');
        }

}