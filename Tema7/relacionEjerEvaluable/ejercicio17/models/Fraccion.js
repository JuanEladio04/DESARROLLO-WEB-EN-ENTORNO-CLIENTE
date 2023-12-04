class Fraccion {
    constructor(numerador, denominador) {
        this.numerador = numerador;
        this.denominador = denominador;
    }

    getNumerador() {
        return this.numerador;
    }

    getDenominador() {
        return this.denominador;
    }

    setNumerador(numerador) {
        this.numerador = numerador;
    }

    setDenominador(denominador) {
        this.denominador = denominador;
    }

    toString() {
        return "Numerador: " + this.numerador + "\nDenominador: " + this.denominador;
    }

    simplificar() {
        let mcd = this.mcd(this.numerador, this.denominador);
        let newNum = this.numerador / mcd;
        let newDen = this.denominador / mcd;

        this.setNumerador(newNum);
        this.setDenominador(newDen);
    }

    multiplicarF(fraccion) {
        let num = this.numerador * fraccion.getNumerador();
        let den = this.denominador * fraccion.getDenominador();
        let result = new Fraccion(num, den);
        result.simplificar();
        return result;
    }

    dividirF(fraccion) {
        let num = this.numerador * fraccion.getDenominador();
        let den = this.denominador * fraccion.getNumerador();
        let result = new Fraccion(num, den);
        result.simplificar();
        return result;
    }

    mcd(a, b) {
        while (b != 0) {
            let t = b;
            b = a % b;
            a = t;
        }
        return a;
    }

}