const Contact = require('./Contact');
const Date = require('./Date');
module.exports = class Model {
    constructor() {
        this.contacts = [];
        this.dates = [];
    }

    //Contacts
    searchContactByLetter(search_string) {
        return this.contacts.filter(contact => contact.getName()[0] === search_string).map(contact => contact.getName());
    }
    searchContactById(contact_id) {
        return this.contacts.findIndex(contact => contact_id === contact.contact_id);
    }
    searchDatesByContactId(contact_id) {
        let list = [];
        this.dates.forEach(date => {
            if(date.contact_id === contact_id) {
                list.push(contact_id);
            }
        });
        return list;
    }
    addContact(contact_id, name, phone) {
        if(this.searchContactById(contact_id) === -1) {
            const newContact = new Contact(contact_id, name, phone);
            this.contacts.push(newContact);
            return true;
        } else {
            return false;
        }
    }
    readContact(contact_id) {
        if(this.searchContactById(contact_id) !== -1) {
            return this.contacts[this.searchContactById(contact_id)].getName();
        } else {
            return false;
        }
    }
    updateContact(contact_id, name, phone) {
        if(this.searchContactById(contact_id) === -1) {
            this.contacts[contact_id].updateContact(name, phone);
            return true;
        } else {
            return false;
        }
    }
    deleteContact(contact_id) {
        if(this.searchContactById(contact_id) !== -1) {
            this.contacts = this.contacts.filter(contact => contact.contact_id !== contact_id);
            const includesId = this.searchDatesByContactId(contact_id);
            this.dates = this.dates.filter(date => date.contact_id !== includesId.includes(date.contact_id));
            return true;
        } else {
            return false;
        }
    }

    //Dates
    addDate(date_id, name, place, date, contact_id) {
        const foundId = this.searchContactById(contact_id);
        if(foundId !== -1) {
            const newDate = new Date(date_id, name, place, date, this.contacts[foundId].getName());
            this.dates.push(newDate);
            return true;
        } else {
            return false;
        }

    }
    readDate(date_id) {
        const foundDateId = this.dates.findIndex(date => date.date_id === date_id);
        if(foundDateId !== -1) {
            return this.dates[foundDateId].getDate();
        } else {
            return false;
        }
    }
    updateDate(date_id, name, place, date) {
        const foundDateId = this.dates.findIndex(date => date.date_id === date_id);
        if(foundDateId !== -1) {
            this.dates[foundDateId].editDate(name, place, date);
        } else {
            return false;
        }
    }

    deleteDate(date_id) {
        const foundDateId = this.dates.findIndex(date => date.date_id === date_id);
        if(foundDateId !== -1) {
            this.dates.filter(date => date_id !== date.date_id);
            return true;
        } else {
            return false;
        }
    }

    searchDateFromDate(date) {
        return this.dates.filter(actualDate => actualDate.getDateTime() !== date).map(actualDate => actualDate.getDateName());
    }
};