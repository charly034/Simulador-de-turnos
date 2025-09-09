// Simulación de un sistema de reservas de turnos
// CLASE TURNO
class Turno {
  constructor(hora) {
    this.hora = hora;
    this.nombre = null;
    this.apellido = null;
    this.fecha = null;
    this.disponible = true;
  }

  reservar(nombre, apellido) {
    if (this.disponible) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.disponible = false;
      return true;
    } else {
      return false;
    }
  }
}

const turnos = [];
crearTurnos();

let salir = false;

/**
 * Menú principal
 */
while (!salir) {
  let opcion = prompt(
    "Seleccione una opción:\n1. Mostrar turnos disponibles\n2. Reservar turno\n3. Mostrar turnos reservados\n4. Salir"
  );
  switch (opcion) {
    case "1":
      mostrarTurnos();
      break;
    case "2":
      let nombre = prompt("Ingrese su nombre:");
      let apellido = prompt("Ingrese su apellido:");
      let hora = parseInt(prompt("Ingrese la hora del turno (8-20):"));
      reservarTurno(nombre, apellido, hora);
      break;
    case "3":
      mostrarReservas();
      break;
    case "4":
      salir = true;
      break;
    default:
      alert("Opción inválida.");
  }
}

/**
 * Crea los turnos desde las 8 hasta las 20 y los agrega al arreglo.
 */
function crearTurnos() {
  for (let i = 8; i <= 20; i++) {
    turnos.push(new Turno(i));
  }
}

/**
 * Muestra todos los turnos disponibles.
 */
function mostrarTurnos() {
  let mensaje = "Turnos disponibles:\n";
  turnos.forEach((turno) => {
    if (turno.disponible) {
      mensaje += `- ${turno.hora}:00\n`;
    }
  });
  if (mensaje === "Turnos disponibles:\n") {
    alert("No hay turnos disponibles.");
  } else {
    alert(mensaje);
  }
}

/**
 * Reserva un turno para una persona en la hora indicada.
 */
function reservarTurno(nombre, apellido, hora) {
  const turno = turnos.find((t) => t.hora === hora);
  if (turno && turno.disponible) {
    turno.reservar(nombre, apellido);
    alert(`Turno reservado a las ${hora}:00 para ${nombre} ${apellido}`);
  } else {
    alert("El turno no está disponible o la hora es inválida.");
  }
}

/**
 * Muestra todos los turnos que ya están reservados.
 */
function mostrarReservas() {
  let mensaje = "Turnos reservados:\n";
  turnos.forEach((turno) => {
    if (!turno.disponible) {
      mensaje += `- ${turno.hora}:00 - ${turno.nombre} ${turno.apellido}\n`;
    }
  });
  if (mensaje === "Turnos reservados:\n") {
    alert("No hay turnos reservados.");
  } else {
    alert(mensaje);
  }
}
