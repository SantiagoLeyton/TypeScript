"use strict";
var _a, _b, _c;
// Creamos un arreglo para almacenar todas las reservas
let reservations = [];
// Función para agregar una nueva reserva
function addReservation(guestName, roomNumber, numberOfNights, pricePerNight) {
    const reservation = {
        guestName,
        roomNumber,
        numberOfNights,
        pricePerNight
    };
    reservations.push(reservation);
    displayMessage("Reservation added successfully.");
}
// Función para buscar una reserva por nombre del huésped
function searchReservationByGuestName(name) {
    return reservations.filter(reservation => reservation.guestName.toLowerCase().includes(name.toLowerCase()));
}
// Función para calcular el ingreso total del hotel
function calculateTotalIncome() {
    return reservations.reduce((total, reservation) => {
        return total + (reservation.numberOfNights * reservation.pricePerNight);
    }, 0);
}
// Función para mostrar un mensaje al usuario
function displayMessage(message) {
    const output = document.getElementById("output");
    if (output) {
        output.innerText = message;
    }
}
// Función para mostrar los resultados de una búsqueda
function displaySearchResults(results) {
    const output = document.getElementById("output");
    if (output) {
        if (results.length === 0) {
            output.innerText = "No reservations found.";
        }
        else {
            output.innerText = results.map(r => `Guest: ${r.guestName}, Room: ${r.roomNumber}, Nights: ${r.numberOfNights}, Price per night: $${r.pricePerNight}`).join("\n");
        }
    }
}
// Eventos para los botones
(_a = document.getElementById("addBtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    const name = document.getElementById("guestName").value;
    const room = parseInt(document.getElementById("roomNumber").value);
    const nights = parseInt(document.getElementById("nights").value);
    const price = parseFloat(document.getElementById("pricePerNight").value);
    addReservation(name, room, nights, price);
});
(_b = document.getElementById("searchBtn")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
    const name = document.getElementById("searchName").value;
    const results = searchReservationByGuestName(name);
    displaySearchResults(results);
});
(_c = document.getElementById("incomeBtn")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => {
    const total = calculateTotalIncome();
    displayMessage(`Total income: $${total}`);
});
