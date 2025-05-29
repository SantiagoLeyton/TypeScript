"use strict";
// Arreglo para almacenar los libros
let library = [];
// ----------------- Funciones de lógica -----------------
// Agrega un libro al arreglo
function addBook(title, author, year) {
    const newBook = { title, author, year };
    library.push(newBook);
}
// Busca libros por coincidencia parcial de título
function searchBooksByTitle(query) {
    return library.filter(book => book.title.toLowerCase().includes(query.toLowerCase()));
}
// Devuelve todos los libros disponibles
function getAllBooks() {
    return library;
}
// ----------------- Interacción con el DOM -----------------
// Muestra un arreglo de libros en el HTML
function displayBooks(books) {
    const list = document.getElementById("booksList");
    list.innerHTML = "";
    books.forEach(book => {
        const li = document.createElement("li");
        li.textContent = `${book.title} - ${book.author} (${book.year})`;
        list.appendChild(li);
    });
}
// Asocia eventos a los botones cuando se carga la página
window.onload = () => {
    var _a, _b, _c;
    // Evento para agregar libro
    (_a = document.getElementById("addButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        const title = document.getElementById("titleInput").value;
        const author = document.getElementById("authorInput").value;
        const year = parseInt(document.getElementById("yearInput").value);
        addBook(title, author, year);
        alert("Book successfully added.");
    });
    // Evento para buscar libro
    (_b = document.getElementById("searchButton")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
        const query = document.getElementById("searchInput").value;
        const results = searchBooksByTitle(query);
        displayBooks(results);
    });
    // Evento para mostrar todos los libros
    (_c = document.getElementById("showAllButton")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => {
        displayBooks(getAllBooks());
    });
};
