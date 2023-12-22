class Reserva {
    constructor(aula, profesor, fecha, hora){
        this.aula = aula;
        this.profesor = profesor;
        this.fecha = fecha;
        this.hora = hora;
        this.duracion = parseFloat(1);
    }

    aumentarTiempo(tiempo){
        if((parseFloat(this.duracion) + parseFloat(tiempo)) < 3.5){
            this.duracion = parseFloat(this.duracion) + parseFloat(tiempo);
        }
        else{
            alert("La duracion sobrepasa el tiempo máximo de reserva");
        }
    }

    imprimirReserva(){
        //Consola
        console.log("Nombre aula: " + this.aula);
        console.log("Profesor: " + this.profesor);
        console.log("Fecha: " + this.fecha);
        console.log("Hora: " + this.hora);
        console.log("Duración de la reserva: " + this.duracion);

        //Documento
        document.write("Nombre aula: " + this.aula + "<br>");
        document.write("Profesor: " + this.profesor + "<br>");
        document.write("Fecha: " + this.fecha + "<br>");
        document.write("Hora: " + this.hora + "<br>");
        document.write("Duración de la reserva: " + this.duracion  + "<br>");
        
    }
}