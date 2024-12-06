const doctores = [
    {id:1, nombre:"Dra. Garcia",especialidad: "medicina general"},
    {id:2, nobre:"Dra.Rodriguez", especialidad: "pediatria"}
]
 let citas = []

 function agendarCita (paciente, doctorId,fecha,hora) {
    const doctor = doctores.find(d=> d.id === doctorId)
    if(!doctor) {
        return `Doctro no encontrado`
    }
    if(citaExiste(fecha,hora,doctorId)){
        return `horario no disponible`
    }

    const nuevaCita = {
        id:citas.length + 1,
        paciente,
        doctor:doctor.nombre,
        fecha,
        hora
    }
    citas.push(nuevaCita)
    return`Cita agendada para ${paciente} con ${doctor.nombre}`
 }

 function citaExiste (fecha,hora,doctorId) {
    return citas.some ( c =>
        c.fecha === fecha &&
        c.hora === hora &&
        doctores.find(d => d.nombre === c.doctor) ?.id === doctorId
    )
 }

 function verCitasPaciente (paciente) {
    return citas.filter (c => c.paciente === paciente)
 }

 function cancelarCita(citaId) {
    const index =citas.findIndex (C => C.id === citaId)
    if (index === -1) return`cita no encontrada`

    citas.splice (index, 1)
    return `Cita cancelada exitosamente `
 }

 console.log(agendarCita(`ana lopez`, 1, `2024-11-28`,`09:00`))
 console.log(verCitasPaciente(`ana lopez`))
 console.log(cancelarCita(1))