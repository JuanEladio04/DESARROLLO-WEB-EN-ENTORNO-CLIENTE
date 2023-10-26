class OrderedNumberarray{

    constructor(pString){
        this.ascOrderedArray = this.ascOrder(pString);
        this.dscOrderedArray = this.descOrder(pString);
    }

    ascOrder(pSTring) {
        let arr = pSTring.split(",");
        let longitud = arr.length;
        let intercambiado;
        do {
            intercambiado = false;
            for (let i = 0; i < longitud; i++) {
                if (arr[i] > arr[i + 1]) {
                    let temp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = temp;
                    intercambiado = true;
                }
            }
        } while (intercambiado);
        return arr;
    }

    descOrder(pSTring) {
        let arr = pSTring.split(",");
        let longitud = arr.length;
        let intercambiado;
        do {
            intercambiado = false;
            for (let i = 0; i < longitud; i++) {
                if (arr[i] < arr[i + 1]) {
                    let temp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = temp;
                    intercambiado = true;
                }
            }
        } while (intercambiado);
        return arr;
    }

    toString(){
        document.write("<h1> Orden ascendente</h1>")
        document.write("<p>")
        this.ascOrderedArray.forEach(number => {
            document.write(number + ", ")
        });
        document.write("</p>")

        document.write("<p>")
        document.write("<h1> Orden descendente</h1>")
        this.dscOrderedArray.forEach(number => {
            document.write(number + ", ")
        });
        document.write("</p>")
    }

}