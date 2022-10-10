class Producto {
    constructor(producto, marca, modelo, origen,precio,stock) {
        this.producto = producto;
        this.marca = marca;
        this.modelo= modelo;
        this.origen = origen;
        this.precio = precio;
        this.stock = stock;
    }
}
//La carga de los productos se detiene cuando se ingresa la palabra "fin".
let listaProd = [];
function prod() {
    let nombreProducto = prompt("Ingrese nombre: ");
    if (nombreProducto == "") {
        alert("No se ingreso producto");
    }
    while (nombreProducto != "fin" ) {
        let marcaProducto = prompt("Ingrese marca: ");
        if (marcaProducto == "") {
            alert("No se ingreso marca");
            
        }
        else if (marcaProducto == "gibson") {
            alert("El precio de una Gibson es de 3000 usd en adelante");
            
        }else if (marcaProducto == "epiphone") {
            alert("El precio de una Epiphone es de 200 usd en adelante");
            
        }else if (marcaProducto == "fender") {
            alert("El precio de una Fender es de 2800 usd en adelante");
            
        }else if (marcaProducto == "squier") {
            alert("El precio de una Squier es de 600 usd en adelante")
            
        }else{
            alert("Precio sin definir");
        }
        let modeloProducto = prompt("Ingrese modelo: ");
        if (modeloProducto  == "") {
            alert("No se ingreso modelo");
            
        }
        let origenProducto = prompt("Ingrese origen: ");
        if (origenProducto == "") {
            alert("No se ingreso origen");
        }
        let precioProducto = parseFloat(prompt("Ingrese precio: "));
        if (precioProducto == "") {
            alert("No se ingreso precio del producto");
        }
        let stockProducto = parseFloat(prompt("Ingrese stock: "));
        if (stockProducto == "") {
            alert("No se ingreso stock");
        }
        
        let producto = new Producto(nombreProducto,marcaProducto,modeloProducto ,origenProducto,precioProducto,stockProducto);
        listaProd.push(producto)
        nombreProducto = prompt("Ingrese nombre: ");
        if (nombreProducto == "") {
            alert("No se ingreso producto");
        } 
    }
    return listaProd
    
}
//Se aplica el descuento del 10% cuando se quiere comprar un producto mayor a 5000 dolares. 
function descuento() {
    for (const producto of listaProd) {
        let conDescuento = `${producto.precio}` * 0.9;
        if (`${producto.precio}` > 5000){
            console.log(`el precio paso de ser de ${producto.precio} con descuento de 10% a: `+ conDescuento)
        } 
      
    }
  
    return listaProd
    
}





