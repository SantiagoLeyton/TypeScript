// Este programa permite gestionar estudiantes: se pueden agregar, buscar y calcular el promedio general

type Student = {
    name: string;
    grade: number;
};

const students: Student[] = [];

function addStudent(name: string, grade: number): void {
    // Agrega un nuevo estudiante al arreglo
    students.push({ name, grade });
}

function searchStudentByName(name: string): Student[] {
    // Busca estudiantes cuyo nombre incluya la cadena escrita (mayúsculas y minúsculas ignoradas)
    return students.filter(student =>
        student.name.toLowerCase().includes(name.toLowerCase())
    );
}

function calculateAverageGrade(): number {
    // Calcula el promedio de las notas de todos los estudiantes
    if (students.length === 0) return 0;
    const total = students.reduce((sum, student) => sum + student.grade, 0);
    return total / students.length;
}

// Manejadores de los eventos de los botones
function handleAddStudent() {
    const nameInput = document.getElementById('studentName') as HTMLInputElement;
    const gradeInput = document.getElementById('studentGrade') as HTMLInputElement;
    const name = nameInput.value.trim();
    const grade = parseFloat(gradeInput.value);

    if (name && !isNaN(grade)) {
        addStudent(name, grade);
        alert('Student added successfully');
        nameInput.value = '';
        gradeInput.value = '';
    } else {
        alert('Please enter a valid name and grade');
    }
}

function handleSearchStudent() {
    const searchInput = document.getElementById('searchName') as HTMLInputElement;
    const resultsDiv = document.getElementById('searchResults')!;
    const query = searchInput.value.trim();

    const results = searchStudentByName(query);
    resultsDiv.innerHTML = results.length > 0
        ? results.map(s => `${s.name} - ${s.grade}`).join('<br>')
        : 'No students found';
}

function handleCalculateAverage() {
    const avgDiv = document.getElementById('averageResult')!;
    const avg = calculateAverageGrade();
    avgDiv.textContent = `Average grade: ${avg.toFixed(2)}`;
}

// Enlazamos los botones con sus funciones
document.getElementById('addBtn')?.addEventListener('click', handleAddStudent);
document.getElementById('searchBtn')?.addEventListener('click', handleSearchStudent);
document.getElementById('averageBtn')?.addEventListener('click', handleCalculateAverage);
