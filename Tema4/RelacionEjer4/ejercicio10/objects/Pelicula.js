class Pelicula {

    constructor(id, titulo, director, anioEstreno, pais, genero, calificacion) {
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.anioEstreno = anioEstreno;
        this.pais = pais;
        this.genero = genero;
        this.calificacion = calificacion;

        this.validateObject();
    }

    validateObject() {
        this.checkId();
        this.checkTitulo();
        this.checkAnioEstreno();
        this.checkPais();
        this.checkGender();
    }

    checkId() {
        let regex = /^[a-zA-z]{2}[\d]{7}$/;
        if (!regex.test(this.id)) {
            this.id = null;
            alert('Id no válida');
        }
    }

    checkTitulo() {
        let regex = /.{1,100}/;
        if (!regex.test(this.titulo)) {
            this.titulo = null;
            alert('Título no válido');
        }
    }

    checkAnioEstreno() {
        let regex = /\d{4}/;
        if (!regex.test(parseInt(this.anioEstreno))) {
            this.anioEstreno = null;
            alert('Año de estreno no válido');
        }
    }    

    checkPais(){
        this.pais = this.pais.split(",");
    }

    checkGender(){
        let acceptedGenders = this.getAccepetedGenders();
        let isAceptedGender = false;
        let cont = 0;
        do {
            if(this.genero == acceptedGenders[cont]){
                isAceptedGender = true;
            }
            cont++;
        } while (!isAceptedGender || cont == acceptedGenders.length - 1);
        
        if (!isAceptedGender) {
            this.genero = null;
            alert("Género no válido");
        }
    }

    getAccepetedGenders(){
        let acceptedGenders = [ "Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary" ,
            "Drama", "Family", "Fantasy", "Film", "Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery",
            "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];

            return acceptedGenders;
    }

    toString() {
        return `Cartelera de Cine:
        Película: ${this.titulo}
        Director: ${this.director}
        Año de Estreno: ${this.anioEstreno}
        País: ${this.pais}
        Género: ${this.genero}
        Calificación: ${this.calificacion}`;
    }
}