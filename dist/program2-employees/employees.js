"use strict";
const employees = [];
// Función para agregar un empleado nuevo
function addEmployee() {
    const nameInput = document.getElementById("nameInput");
    const salaryInput = document.getElementById("salaryInput");
    const name = nameInput.value.trim();
    const salary = parseFloat(salaryInput.value);
    // Validación básica
    if (!name || isNaN(salary)) {
        alert("Please enter a valid name and salary.");
        return;
    }
    // Se agrega el nuevo empleado al arreglo
    employees.push({ name, salary });
    // Se limpian los campos
    nameInput.value = "";
    salaryInput.value = "";
}
// Función para buscar un empleado por nombre
function searchEmployee() {
    const searchInput = document.getElementById("searchInput");
    const result = document.getElementById("searchResult");
    const name = searchInput.value.trim();
    // Busca un empleado cuyo nombre coincida (ignorando mayúsculas/minúsculas)
    const found = employees.find(emp => emp.name.toLowerCase() === name.toLowerCase());
    // Muestra el resultado
    result.textContent = found
        ? `Found: ${found.name}, Salary: $${found.salary}`
        : "Employee not found.";
}
// Función para mostrar todos los empleados
function showAllEmployees() {
    const list = document.getElementById("employeeList");
    // Se borra el contenido anterior
    list.innerHTML = "";
    // Se agregan los empleados uno a uno como elementos <li>
    employees.forEach(emp => {
        const li = document.createElement("li");
        li.textContent = `${emp.name} - $${emp.salary}`;
        list.appendChild(li);
    });
}
// Función para calcular el salario promedio
function calculateAverage() {
    const result = document.getElementById("averageResult");
    // Si no hay empleados, se muestra mensaje
    if (employees.length === 0) {
        result.textContent = "No employees available.";
        return;
    }
    // Se suman todos los salarios y se divide por la cantidad
    const total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    const average = total / employees.length;
    result.textContent = `Average salary: $${average.toFixed(2)}`;
}
