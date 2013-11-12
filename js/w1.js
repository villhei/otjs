/**
 * Created with JetBrains WebStorm.
 * User: Ville
 * Date: 8.11.2013
 * Time: 23:47
 * INSERT W1 TypeCheck -class or something
 */

function IllegalArgumentException(message) {
    this.message = message;
}

var Type = {


        integer:function (input) {
            if (!this.number(input)) {
                return false;
            }
            return input % 1 === 0;
        },

        number:function (input) {
            return this._typeOfTest('number', input);
        },

        string:function (input) {
            return this._typeOfTest('string', input);
        },

        boolean:function (input) {
            return this._typeOfTest('boolean', input);
        },

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

        arrayContains:function (testFunction, inputArray) {
            if(!testFunction)  {
                throw new IllegalArgumentException("Missing test function!");
            } else if(!inputArray) {
                throw new IllegalArgumentException("Missing test array!");
            }
            // first we need to check if input really is an array
            if (Object.prototype.toString.call(inputArray) !== '[object Array]') {
                console.log("was not an array", inputArray);
                return false;
            }
            return this._testArrayElementsWith(testFunction, inputArray);
        },

        _testArrayElementsWith:function (testFunction, inputArray) {
            for (var i = 0, len = inputArray.length; i < len; i++) {
                if (!testFunction(inputArray[i])) {
                    console.log("was not: ", inputArray[i]);
                    return false;
                }
            }
            return true;
        },

        _typeOfTest:function (type, input) {
            return typeof input === type;
        }

    };
