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
        if(typeof input !== 'number') {
            return false;
        }
        return true;

    }

};
