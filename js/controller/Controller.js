const Model  = require('../model/Model');
module.exports = class Controller {
    constructor() {
        this.model = new Model();
    }

};