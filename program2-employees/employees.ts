// Arreglo para almacenar los empleados
type Employee = {
  name: string;
  salary: number;
};

const employees: Employee[] = [];

// Función para agregar un empleado nuevo
function addEmployee(): void {
  const nameInput = document.getElementById("nameInput") as HTMLInputElement;
  const salaryInput = document.getElementById("salaryInput") as HTMLInputElement;

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
