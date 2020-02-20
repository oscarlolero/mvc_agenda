const Model = require('./model/Model');
const testModel = new Model();
testModel.addContact(1,'Oscar', '4622168183');
testModel.addContact(2,'Pedro', '5564446362');
testModel.addDate(1,'Cita con pedro', 'Cibeles','20/02/2012', 2);
testModel.addDate(2,'Cita con pedro 2', 'Delta','21/02/2012', 2);
console.log(testModel.searchDateFromDate('20/02/2012'));
