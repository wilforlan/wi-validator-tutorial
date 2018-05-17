var Validator = require('./index');

var a = [20];

Validator.isArray(a, function(state, msg){
    console.log(state);
    console.log(msg);
});