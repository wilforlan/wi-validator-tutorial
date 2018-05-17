//  Module to validate variable types.

var Validator = {}

const ERRORS = {
    INVALID_STRING: 'This value is not a valid string',
    INVALID_ARRAY: 'This value is not a valid array',
    INVALID_NUMBER: 'This value is not a valid NUMBER',
    INVALID_FUNCTION_ARG: 'fn has to be a function'    
};

// @params value string
// @params fn fn
// @return fn(boolean, msg)

Validator.isString = function(value, fn) {
    if(typeof fn !== 'function') return fn(false, ERRORS.INVALID_FUNCTION_ARG);
    if (typeof value === 'string') {
        fn(true, null);
    } else {
        fn(false, ERRORS.INVALID_STRING);
    }
};

Validator.isArray = function(value, fn) {
    if(typeof fn !== 'function') return fn(false, ERRORS.INVALID_FUNCTION_ARG);
    if (Object.prototype.toString.call(value) === '[object Array]') {
        fn(true, null);
    } else {
        fn(false, ERRORS.INVALID_ARRAY);
    }
};

Validator.isNumber = function(value, fn) {
    if(typeof fn !== 'function') return fn(false, ERRORS.INVALID_FUNCTION_ARG);
    if (typeof value === 'number') {
        fn(true, null);
    } else {
        fn(false, ERRORS.INVALID_NUMBER);
    }
};

module.exports = Validator;