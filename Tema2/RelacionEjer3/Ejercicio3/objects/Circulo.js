class Circulo{
    constructor(radio){
        this.radio = radio;
    }

    calculaArea(){
        let area = Math.pow((Math.PI * this.radio), 2);
        return area;
    }

    calculaLongitud(){
        let longitud = 2 * Math.PI * this.radio;
        return longitud;
    }
}