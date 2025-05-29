// Definición del tipo Book
type Book = {
  title: string;
  author: string;
  year: number;
};

// Arreglo para almacenar los libros
let library: Book[] = [];

// ----------------- Funciones de lógica -----------------

// Agrega un libro al arreglo
function addBook(title: string, author: string, year: number): void {
  const newBook: Book = { title, author, year };
  library.push(newBook);
}

// Busca libros por coincidencia parcial de título
function searchBooksByTitle(query: string): Book[] {
  return library.filter(book => book.title.toLowerCase().includes(query.toLowerCase()));
}

// Devuelve todos los libros disponibles
function getAllBooks(): Book[] {
  return library;
}

// ----------------- Interacción con el DOM -----------------

// Muestra un arreglo de libros en el HTML
function displayBooks(books: Book[]): void {
  const list = document.getElementById("booksList") as HTMLUListElement;
  list.innerHTML = "";
  books.forEach(book => {
    const li = document.createElement("li");
    li.textContent = `${book.title} - ${book.author} (${book.year})`;
    list.appendChild(li);
  });
}

// Asocia eventos a los botones cuando se carga la página
window.onload = () => {
  // Evento para agregar libro
  document.getElementById("addButton")?.addEventListener("click", () => {
    const title = (document.getElementById("titleInput") as HTMLInputElement).value;
    const author = (document.getElementById("authorInput") as HTMLInputElement).value;
    const year = parseInt((document.getElementById("yearInput") as HTMLInputElement).value);
    addBook(title, author, year);
    alert("Book successfully added.");
  });

  // Evento para buscar libro
  document.getElementById("searchButton")?.addEventListener("click", () => {
    const query = (document.getElementById("searchInput") as HTMLInputElement).value;
    const results = searchBooksByTitle(query);
    displayBooks(results);
  });

  // Evento para mostrar todos los libros
  document.getElementById("showAllButton")?.addEventListener("click", () => {
    displayBooks(getAllBooks());
  });
};
