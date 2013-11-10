/**
 * Created with JetBrains WebStorm.
 * User: Ville
 * Date: 8.11.2013
 * Time: 23:47
 * INSERT W1 TypeCheck -class or something
 */


var Type = {

    integer: function(input) {
        if(!this.number(input)) {
            return false;
        }
        return input % 1 === 0;
    },

    number: function(input) {
        return this._typeOfTest('number', input);
    },

    string: function(input) {
        return this._typeOfTest('string', input);
    },

    intArray: function(input) {

        // first we need to check if input really is an array
        if (Object.prototype.toString.call(input) !== '[object Array]') {
            return false;
        }

        for (var i = 0, len = input.length; i < len; i++) {
            if (!this.integer(input[i])) {
                return false;
            }
        }
        return true;
    },

    _typeOfTest: function(type, input) {
        return typeof input === type;
    }

};
