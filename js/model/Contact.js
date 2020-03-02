module.exports = class Contact {
    constructor(contact_id, name, phone) {
        this.contact_id = contact_id;
        this.name = name;
        this.phone = phone;
    }
    getName() {
        return this.name;
    }
    updateContact(name, phone) {
        this.name = name;
        this.phone = phone;
    }
};