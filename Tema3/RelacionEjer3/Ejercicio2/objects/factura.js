class Factura{
    constructor(empresa, cliente, productos, fPago) {
        this.empresa = empresa;
        this.cliente = cliente;
        this.productos = productos;
        this.importeT = 0;
        this.fPago = fPago;
    }
        
    calculaImporte(productos){
        let sum = 0;
        productos.forEach(producto => {
            sum = sum + producto.precio;
        });
        this.importeT = sum;
     }

    muestraImporte(){
        document.write('Importe total: ' + this.importeT);
     }
}
