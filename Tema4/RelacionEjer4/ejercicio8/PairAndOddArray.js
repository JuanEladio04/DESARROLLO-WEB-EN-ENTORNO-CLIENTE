class PairAndOddArray{

    constructor(pString) {
        this.pairArray = [];
        this.oddArray = [];
        let nArray = pString.split(",");

        nArray.forEach(number => {
            if((number % 2) == 0){
                this.pairArray.push(number);
            }
            else{
                this.oddArray.push(number);
            }
        });
    }
    
    toString() {
        document.write("Pares:");
        this.pairArray.forEach(number => {
            document.write(number + ",")
        });
        document.write("<br>")

        document.write("Inpares:");
        this.oddArray.forEach(number => {
            document.write(number + ",")
        });
        document.write("<br>")
    }

}