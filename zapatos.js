let precio = 0
let modelo = ""
let talla = 0
let cantidad = 0
let total = 0


let opcionModelo = prompt("seleccione el modelo: \n1 Clasicos \n2 Running \n3 Basketball")

switch (opcionModelo) {
    case "1":
        modelo = "clasicos"
        precio = "500000"
        
        break;

    case "2" :
        modelo = "Running"
        precio = "800000"
        break;
    case "3":
        modelo = "Basketball"
        precio = "1000000"
        break;

    default:
        alert("opcion incorrecta")
}


while (talla < 35 || talla > 44) {
    talla = prompt("ingrese la talla (35-44)")
    if(talla >= 35 && talla <= 44){
    
        break;
}else {
    alert("talla invalida")
}
    

}

while (cantidad >=1 || cantidad <=5) {
    cantidad = prompt("ingrese la cantidad que desea(1-5)")
    if(cantidad >= 1 && cantidad <=5){
        break;
    }else {
        alert("cantidad invalida")
    }
    
}

total = precio * cantidad


if(cantidad >= 3){
    total = total - (total * 0.10)
}

alert("resumen de compra:" + "\nmodelo:" + modelo + "\ntalla:" + talla + "\ncanttidad:" +
    cantidad + "total a pagar: $" + total);