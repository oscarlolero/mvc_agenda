const Contact = require('./Contact');
module.exports = class Date {
    constructor(date_id, name, place, date, contact) {
        this.place = place;
        this.date = date;
        this.name = name;
        this.date_id = date_id;
        this.contact = contact;
    }
    getDate() {
        return `Cita: ${this.name}, Lugar: ${this.place}, Fecha: ${this.date}, Con: ${this.contact}, ID: ${this.date_id}`;
    }
    editDate(name = null, place = null, date = null) {
        name ? this.name = name : null;
        name ? this.place = name : null;
        name ? this.date = name : null;
    }
};