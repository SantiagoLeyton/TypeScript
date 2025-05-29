"use strict";
// Este programa permite gestionar estudiantes: se pueden agregar, buscar y calcular el promedio general
var _a, _b, _c;
const students = [];
function addStudent(name, grade) {
    // Agrega un nuevo estudiante al arreglo
    students.push({ name, grade });
}
function searchStudentByName(name) {
    // Busca estudiantes cuyo nombre incluya la cadena escrita (mayúsculas y minúsculas ignoradas)
    return students.filter(student => student.name.toLowerCase().includes(name.toLowerCase()));
}
function calculateAverageGrade() {
    // Calcula el promedio de las notas de todos los estudiantes
    if (students.length === 0)
        return 0;
    const total = students.reduce((sum, student) => sum + student.grade, 0);
    return total / students.length;
}
// Manejadores de los eventos de los botones
function handleAddStudent() {
    const nameInput = document.getElementById('studentName');
    const gradeInput = document.getElementById('studentGrade');
    const name = nameInput.value.trim();
    const grade = parseFloat(gradeInput.value);
    if (name && !isNaN(grade)) {
        addStudent(name, grade);
        alert('Student added successfully');
        nameInput.value = '';
        gradeInput.value = '';
    }
    else {
        alert('Please enter a valid name and grade');
    }
}
function handleSearchStudent() {
    const searchInput = document.getElementById('searchName');
    const resultsDiv = document.getElementById('searchResults');
    const query = searchInput.value.trim();
    const results = searchStudentByName(query);
    resultsDiv.innerHTML = results.length > 0
        ? results.map(s => `${s.name} - ${s.grade}`).join('<br>')
        : 'No students found';
}
function handleCalculateAverage() {
    const avgDiv = document.getElementById('averageResult');
    const avg = calculateAverageGrade();
    avgDiv.textContent = `Average grade: ${avg.toFixed(2)}`;
}
// Enlazamos los botones con sus funciones
(_a = document.getElementById('addBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', handleAddStudent);
(_b = document.getElementById('searchBtn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', handleSearchStudent);
(_c = document.getElementById('averageBtn')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', handleCalculateAverage);
