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
// Función para busca
