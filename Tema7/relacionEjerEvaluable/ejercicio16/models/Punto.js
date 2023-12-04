class Punto{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    cambiar(x, y) {
        this.x = x;
        this.y = y;
    }

    iguales(point) {
        if(this.x == point.x && this.y == point.y) {
            return true;
        }
        else {
            return false;
        }
    }

    sumar(point) {
        let newX = this.x + point.x;
        let newY = this.y + point.y;
        let newPoint = new Punto(newX, newY);
        return newPoint;
    }

    distancia(point) {
        return Math.sqrt(this.x * point.x + this.y * point.y);
    }

    toString() {
        return "Este punto esta en: X:" + this.x + ", Y:" + this.y;
    }
    
}