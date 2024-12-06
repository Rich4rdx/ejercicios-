let Restaurante = [
    {nombre:"richard", mesa:1, precio: 900,cantidad:1 },
    {nombre:"luis", mesa:2, precio: 800,cantidad:2},
    {nombre:"camilo", mesa:3, precio: 600, cantidad:3},
    {nombre:"andrea", mesa:5, precio: 500,cantidad:3}

];

let calcularTotal =(productos) => {
    return productos.reduce((total, productos) => {
        const subTotal = productos.precio + productos.cantidad;
        return total + subTotal;
    }, 0)
   
}
 


const total = calcularTotal (Restaurante)


//console.log(`su total es de:`+ total )
//console.log( Restaurante)
//Restaurante.forEach(x => console.log(`${x.nombre }  ${x.mesa}  ${x.precio}  ${x.cantidad}`))


let jugadores = [
    {nombre:"juan", goles: 4},
    {nombre:"andres", goles: 2},
    {nombre: "camilo", goles:1},
    {nombre: "eduard", goles:3}
]

let clasificados = jugadores
.filter(jugadores => jugadores.goles >= 3)
.map(jugadores => jugadores.nombre)
console.log("jugadores clasificados:", clasificados)