function obtenerInformacionFecha() {
  const fechaActual = new Date();

  const fecha = {
    diaDelMes: [1 - 30],
    diasSemana: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
    meses: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
    cuatrimestre: Math.floor((fechaActual.getMonth() + 1) / 4) + 1
  }

  fecha.diaDelMes = fecha.diaDelMes[fechaActual.getDay()];
  fecha.diaSemana = fecha.diasSemana[fechaActual.getDay()]; 
  fecha.mes = fecha.meses[fechaActual.getMonth()]; 
  fecha.año = fechaActual.getFullYear();

  const mensaje = `Estamos en el día ${fecha.diaSemana}, ${fecha.diaDelMes} del mes ${fecha.mes} del ${fecha.cuatrimestre === 1 ? 'primer' : fecha.cuatrimestre === 2 ? 'segundo' : 'tercer'} cuatrimestre del año ${fecha.año}`;

  document.write(mensaje);
}