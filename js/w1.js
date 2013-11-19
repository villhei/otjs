/*
 Luokan käyttämä poikkeus
 */
function IllegalArgumentException(message) {
    this.message = message;
}

/*
 Tyyppitarkistusluokka
 */

var Type = {

    /* Päätellään, että luku on INT, mikäli se on jaollinen yhdellä */

    integer:function (input) {
        if (!this.number(input)) {
            return false;
        }
        return input % 1 === 0;
    },

    /* JS: perustyypit, yksinkertainen testi */

    number:function (input) {
        return this._typeOfTest('number', input);
    },

    string:function (input) {
        return this._typeOfTest('string', input);
    },

    boolean:function (input) {
        return this._typeOfTest('boolean', input);
    },

    /* Taulukot tarkistetaan kutsumalla apufunktiota arrayContains

     *  Huomaa this -viittauksen pakottaminen _this -muuttujaan.
     *  Tämä täytyy tehdä anonyymin funktion näkvyyden takia, sillä
     *  this viittaisi testifunktion kutsuvaiheessa väärään olioon
     * */

    intArray:function (input) {
        var _this = this;
        return this.arrayContains(
            (function (testValue) {
                return _this.integer(testValue);
            }), input);
    },

    numberArray:function (input) {
        var _this = this;
        return this.arrayContains(
            (function (testValue) {
                return _this.number(testValue);
            }), input);
    },

    array:function (input) {
        if (Object.prototype.toString.call(input) !== '[object Array]') {
            return false;
        }
        return true;
    },

    isFunction: function(input) {
    return !!(input && input.constructor && input.call && input.apply);
    },

    /*
     arrayContains -funktio heitää poikkeuksen, mikäli jompi kumpi
     sen parametreista puuttuu. Tyyppitarkistus voisi palauttaa erikoisia arvoja ilman tätä
     */

    arrayContains:function (testFunction, inputArray) {
        if (!testFunction) {
            throw new IllegalArgumentException("Missing test function!");
        } else if (!inputArray) {
            throw new IllegalArgumentException("Missing test array!");
        }
        //  Tarkistetaan että taulukko on taulukko sen toString -esityksellä
        if (!this.array(inputArray)) {
            return false;
        }
        // Iteroidaan taulukko, palautetaan tulos

        return this._testArrayElementsWith(testFunction, inputArray);
    },

    /*
     Iteroidaan taulukko testifunktiolla
     */

    _testArrayElementsWith:function (testFunction, inputArray) {
        for (var i = 0, len = inputArray.length; i < len; i++) {
            if (!testFunction(inputArray[i])) {
                return false;
            }
        }
        return true;
    },

    /*
     Wrapatty typeof -tarkistus
     */
    _typeOfTest:function (type, input) {
        return typeof input === type;
    }

};