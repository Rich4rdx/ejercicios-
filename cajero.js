const cuentas = [
    {id:1,usuario:`juan`,pin:`1234`,saldo: 1000},
    {id:2,usuario:`ana`,pin:`4321`, saldo:2000}
]

// historial de transacciones 

let transacciones = []

function consultarSaldo (userId,pin){
    const cuenta = cuentas.find(c=> c.id === userId && c.pin === pin)
    return cuenta ? cuenta.saldo : `credenciales invalida`
}
function retirar (userId,pin,monto){
    const cuenta = cuentas.find(c => c.id === userId && c.pin === pin)
    if(!cuenta ) return `credenciales invalidas`
    if(cuenta.saldo < monto) return `saldo insuficiente `
    if(monto > 1000) return `excede el limite de retiro`

    cuenta.saldo -= monto
    registraTransaccion(userId,`retiro`, monto)
    return `retiro exitoso. Nuevo saldo: ${cuenta.saldo}`
}

function depositar (userId,pin,monto) {
    const cuenta = cuentas.find (c => c.id ===userId && c.pin === pin )
    if (!cuenta) return`credenciales invalidas`

    cuenta.saldo += monto 
    registraTransaccion (userId , `deposito`, monto)
    return `deposito exitoso . nuevo saldo: ${cuenta.saldo}`
}

function registraTransaccion (userId,tipo,monto) {
    transacciones.push({
        fecha: new Date ().toISOString(),
        userId,
        tipo,
        monto
    })
}

console.log (consultarSaldo(1,`1234`))
console.log (retirar(1,`1234`, 500))
console.log (depositar(1, `1234`, 300))
console.log(transacciones)