const precioBasico = 2000
const precioPremiun = 4000

let opcionBasico = 1
let opcionPremiun = 2

let costoUnidad;
let piezas;

let opcionSeleccionada = parseInt (prompt("seleccione tipo de servicio: \n1. (Basico 2000$ ) \n2. (Premium 4000$ )"))

if(opcionSeleccionada == opcionBasico){
    costoUnidad = precioBasico;
    piezas =parseInt(prompt("ingrese cantidad de piezas (1-20)"))

}else if (opcionSeleccionada == opcionPremiun){
    costoUnidad = precioPremiun;
    piezas = parseInt (prompt("ingrese la cantidad de piezas (1-20)"))
    alert("piezas")
} else {
    console.log("opcion invalida")
}if(piezas < 1 || piezas > 20 ){
    console.log("opcion incorrecta")
}else {
    console.log("costo total: $" +(costoUnidad * piezas) )
}
