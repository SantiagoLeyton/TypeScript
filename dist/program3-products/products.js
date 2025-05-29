"use strict";
// Creamos un arreglo para almacenar los productos
const products = [];
// Función para agregar un producto
function addProduct() {
    // Obtenemos los valores de los campos de entrada
    const nameInput = document.getElementById("productNameInput");
    const priceInput = document.getElementById("productPriceInput");
    const quantityInput = document.getElementById("productQuantityInput");
    const name = nameInput.value.trim();
    const price = parseFloat(priceInput.value);
    const quantity = parseInt(quantityInput.value);
    // Verificamos que los datos ingresados sean válidos
    if (!name || isNaN(price) || isNaN(quantity)) {
        alert("Please enter valid product information.");
        return;
    }
    // Agregamos el nuevo producto al arreglo
    products.push({ name, price, quantity });
    // Limpiamos los campos de entrada
    nameInput.value = "";
    priceInput.value = "";
    quantityInput.value = "";
    // Mostramos nuevamente la lista de productos
    renderProductList();
}
// Función para buscar un producto por su nombre
function searchProduct() {
    const searchInput = document.getElementById("searchInput");
    const searchResult = document.getElementById("searchResult");
    const query = searchInput.value.trim().toLowerCase();
    // Buscamos el producto que coincida con el nombre
    const foundProduct = products.find(product => product.name.toLowerCase() === query);
    // Mostramos el resultado de la búsqueda
    if (foundProduct) {
        searchResult.textContent = `Found: ${foundProduct.name}, Price: $${foundProduct.price}, Quantity: ${foundProduct.quantity}`;
    }
    else {
        searchResult.textContent = "Product not found.";
    }
}
// Función para mostrar todos los productos en la interfaz
function renderProductList() {
    const productList = document.getElementById("productList");
    productList.innerHTML = "";
    // Recorremos la lista de productos y los agregamos como elementos <li>
    products.forEach(product => {
        const li = document.createElement("li");
        li.textContent = `${product.name} - $${product.price} x ${product.quantity}`;
        productList.appendChild(li);
    });
}
// Función para calcular el valor total del inventario
function calculateTotalValue() {
    const totalValueResult = document.getElementById("totalValueResult");
    // Sumamos el precio * cantidad de cada producto
    const total = products.reduce((acc, product) => acc + (product.price * product.quantity), 0);
    // Mostramos el valor total
    totalValueResult.textContent = `Total Inventory Value: $${total.toFixed(2)}`;
}
