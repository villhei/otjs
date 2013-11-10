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

    _typeOfTest: function(type, input) {
        if(typeof input !== type) {
            return false;
        }
        return true;
    }

};
