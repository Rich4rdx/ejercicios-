const habitaciones = [
    {numero:101, tipo: `individual`, precio: 100, ocupada: false},
    {numero:102, tipo:`doble`, precio: 150, ocupada:false},
    {numero:103, tipo: `suice`, precio: 250, ocupada: false}
]
let reservas = [];


function reservaHabitacion (numeroHabitacion,huesped,fechaIngreso,fechaSalida){
    const habitacion = habitaciones.find (h=> h.numero === numeroHabitacion);
    if(!habitacion){
        return `la habitacion ${numeroHabitacion} no existe`
    }
    habitacionOcuapada = true;
    const nuevaReserva = { 
        id: reservas.length + 1,
        habitacion: numeroHabitacion,
        huesped,
        fechaIngreso,
        fechaSalida
    };
    reservas.push(nuevaReserva);
    return`reserva confirmada para ${ huesped} en habitacion ${numeroHabitacion}`;

    function verDisponible (){
        return habitaciones.filter(h => !h.ocupada);
    }

    function cancelarReserva(numeroHabitacion) {
        const habitacion = habitaciones.find (h => h.numero === numeroHabitacion);

        if (!habitacion) {
            return ` la habitacion ${numeroHabitacion}  no existe`;
        }
        if (!habitacion.ocupada) {
            return `la habitacion ${numeroHabitacion} ya esta libre`
        }
        habitacion.ocupada = false;
        reservas = reservas.filter (r => r.habitacion !== numeroHabitacion)
        return `reserva cancelada para la habitacion ${numeroHabitacion}`;
        
        
    }
}



console.log(cancelarReserva(102))
