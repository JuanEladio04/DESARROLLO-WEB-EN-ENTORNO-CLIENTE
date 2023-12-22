class Carta {
    constructor(palo, valor) {
        this.palo = palo;
        this.valor = valor;
    }

    nombreCarta() {
        let cardName = '';

        switch (this.valor) {
            case 1:
                cardName = cardName + ' ' + "AS";
                break;
            case 11:
                cardName = cardName + ' ' + "J";
                break;
            case 12:
                cardName = cardName + ' ' + "Reina";
                break;
            case 13:
                cardName = cardName + ' ' + "Rey";
                break;
            default:
                cardName = cardName + ' ' + this.valor;
                break;
        }

        cardName = cardName + ' de ';

        switch (this.palo) {
            case 1:
                cardName = cardName + ' ' + "corazones";
                break;
            case 2:
                cardName = cardName + ' ' + "diamantes";
                break;
            case 3:
                cardName = cardName + ' ' + "picas";
                break;
            case 4:
                cardName = cardName + ' ' + "trébol";
                break;
            default:
                break;
        }

        return cardName;
    }
}
