let productos = [
    {nombre:"laptop", precio:800, cantidad:1},
    {nombre:"mouse",precio: 200, cantidad:2},
    {nombre:"teclado", precio: 400,cantidad:1}
]
const calcularTotal =(productos) => {
    return productos.reduce((total, producto) => {
        const subTotal = producto.precio + producto.cantidad;
        return total + subTotal;
    }, 0)
    }


    const total = calcularTotal(productos)
    console.log("productos en carrito", productos)
    console.log("total a pagar :$" + total)

    const estudiantes = [
        {nombre:"ana", nota:8.5},
        {nombre:"juan", nota:6.5},
        {nombre:"maria", nota:9.0},
        {nombre:"pedro", nota:5.8},
        {nombre:"luis", nota:7.2}
    ]

const aprobados= estudiantes
.filter(estudiantes => estudiantes.nota >= 7)
.map(estudiantes => estudiantes.nombre)

//console.log("estudiantes aprobados:", aprobados)

const ventas= [
    {producto:"manzana", categoria: "frutas", monto:150},
    {producto:"leche", categoria: "lacteos", monto:200},
    {producto:"peras", categoria: "frutas", monto:100},
    {producto:"queso", categoria: "lacteos", monto:300},
    {producto:"yogurt", categoria: "lacteos", monto:180}
]   

const ventasPorCategoria = ventas.reduce((acc, ventas) => {
    acc[ventas.categoria] = (acc[ventas.categoria]|| 0) + ventas.monto;
    return acc;
},{});

 //console.log("ventas por categoria:", ventasPorCategoria)
