//instanciando la clase
class ProductManager {
    constructor(){
        this.products = [];
    }
/**
 * 
 * @param {string} title 
 * @param {string} description 
 * @param {number} price 
 * @param {string} thumbnail 
 * @param {string} code 
 * @param {number} stock 
 */
//agregar un producto
    addProduct(title, description, price, thumbnail, code, stock){
      //verificar que todos los campos sean obligatorios  
    if (!title, !description, !price, !thumbnail, !code, !stock) {
        console.error('Todos los campos son requeridos')
        return;
    } 
    const newProduct ={
        id: this.#nextId(),
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
    }
    //verificar que el code sea unico y no se repita
    if (this.products.find((productManager) => productManager.code === code)) {
        console.log(`ya existe un producto con el code: ${code}`);
        return;
    }
    this.products.push(newProduct);
    console.log('Producto agregado');
    }
    //incrementar id
    #nextId(){
        if(this.products.length === 0){
            return 0
        }
        return this.products.at(-1).id + 1
    }
    //Obtener productos para mostrar todos los productos agreados, o si el array esta vacio
    getProducts(){
        return this.products;
    }
    // obtener productos por Id y verificar que existe y no se repita
    getProductsById(id){
        const products = this.products
        const product = products.find((p) => p.id === parseInt(id));
        if (!product) {
         console.log('Not found',`el id: ${id}` );
            return;
        } 
        console.log(`Product con id: ${id}`, product);
    }
}
//testing
const productManager = new ProductManager();
console.log(productManager.getProducts());
    productManager.addProduct ("producto prueba", "Este es un producto prueba", 200, "sin imagen", "a123", 3) 
    console.log(productManager.getProducts());
    productManager.addProduct ("producto prueba2", "Este es un producto prueba2", 200, "sin imagen", "a123", 3)
    
    productManager.addProduct ("producto prueba3", "Este es un producto prueba3", 522, "sin imagen", "a1245", 20)
    console.log(productManager.getProducts());
console.log(productManager.getProductsById(1));