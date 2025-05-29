// Definimos un tipo para las reservas
type Reservation = {
    guestName: string;
    roomNumber: number;
    numberOfNights: number;
    pricePerNight: number;
};

// Creamos un arreglo para almacenar todas las reservas
let reservations: Reservation[] = [];

// Función para agregar una nueva reserva
function addReservation(guestName: string, roomNumber: number, numberOfNights: number, pricePerNight: number): void {
    const reservation: Reservation = {
        guestName,
        roomNumber,
        numberOfNights,
        pricePerNight
    };
    reservations.push(reservation);
    displayMessage("Reservation added successfully.");
}

// Función para buscar una reserva por nombre del huésped
function searchReservationByGuestName(name: string): Reservation[] {
    return reservations.filter(reservation => reservation.guestName.toLowerCase().includes(name.toLowerCase()));
}

// Función para calcular el ingreso total del hotel
function calculateTotalIncome(): number {
    return reservations.reduce((total, reservation) => {
        return total + (reservation.numberOfNights * reservation.pricePerNight);
    }, 0);
}

// Función para mostrar un mensaje al usuario
function displayMessage(message: string): void {
    const output = document.getElementById("output");
    if (output) {
        output.innerText = message;
    }
}

// Función para mostrar los resultados de una búsqueda
function displaySearchResults(results: Reservation[]): void {
    const output = document.getElementById("output");
    if (output) {
        if (results.length === 0) {
            output.innerText = "No reservations found.";
        } else {
            output.innerText = results.map(r =>
                `Guest: ${r.guestName}, Room: ${r.roomNumber}, Nights: ${r.numberOfNights}, Price per night: $${r.pricePerNight}`
            ).join("\n");
        }
    }
}

// Eventos para los botones
document.getElementById("addBtn")?.addEventListener("click", () => {
    const name = (document.getElementById("guestName") as HTMLInputElement).value;
    const room = parseInt((document.getElementById("roomNumber") as HTMLInputElement).value);
    const nights = parseInt((document.getElementById("nights") as HTMLInputElement).value);
    const price = parseFloat((document.getElementById("pricePerNight") as HTMLInputElement).value);
    addReservation(name, room, nights, price);
});

document.getElementById("searchBtn")?.addEventListener("click", () => {
    const name = (document.getElementById("searchName") as HTMLInputElement).value;
    const results = searchReservationByGuestName(name);
    displaySearchResults(results);
});

document.getElementById("incomeBtn")?.addEventListener("click", () => {
    const total = calculateTotalIncome();
    displayMessage(`Total income: $${total}`);
});
