const Model = require('./model/Model');
const testModel = new Model();
testModel.addContact(1,'Oscar', '4622168183');
testModel.addContact(2,'Pedro', '5564446362');
testModel.deleteContact(2);
testModel.addDate(1,'Cita con pedro', 'Cibeles','20/02/2012', 2);
console.log(testModel.readDate(1));
