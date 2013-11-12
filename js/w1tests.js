/**
 * Created with JetBrains WebStorm.
 * User: Ville
 * Date: 10.9.2013
 * Time: 15:55
 * To change this template use File | Settings | File Templates.
 */

test("Integer tests", function () {

    ok(Type.integer(1), "Should determine 1 is an integer");
    ok(Type.integer(-1), "Should determine -1 is a valid integer");
    ok(Type.integer(0), "Should determine 0 is an integer");
    equal(Type.integer(1.1), false, "Should determine 1.1 is not an integer");
    equal(Type.integer(1.0001), false, "Should determine 1.0001 is not an integer");
    equal(Type.integer(-1.0001), false, "Should determine -1.0001 is not an integer");
    equal(Type.integer("1"), false, "Should determine string '1' is not an integer");
    equal(Type.integer("abc"), false, "Should determine string 'abc' is not an integer");
    equal(Type.integer("123abc"), false, "Should determine string '123abc' is not an integer");
    equal(Type.integer("-325"), false, "Should determine string '-325' is not an integer");
    equal(Type.integer(null), false, "Should determine string null is not an integer");
    equal(Type.integer([]), false, "Should determine string an array is not an integer");

});

test("Number tests", function () {

    ok(Type.number(1), "Should determine 1 is a number");
    ok(Type.number(-1), "Should determine -1 is a number");
    equal(Type.number(1.1), true, "Should determine 1.1 is a number");
    equal(Type.number("1"), false, "Should determine string '1' is not a number but string");
    equal(Type.number("abc"), false, "Should determine string 'abc' is not a number");
    equal(Type.number("123abc"), false, "Should determine string '123abc' is not a number");
    equal(Type.number(null), false, "Should determine string null is not a number");
    equal(Type.number([]), false, "Should determine string an array is not a number");

});

test("String tests", function () {

    ok(Type.string('kissa'), "Should determine that 'kissa' is a string");
    ok(Type.string('123kissa'), "Should determine that '123kissa' is a string");
    ok(Type.string(123 + 'kissa'), "Should determine that 123 + 'kissa' is a string");
    equal(Type.string(123), false, "Should determine that 123 is not a string");
    equal(Type.string(1.23), false, "Should determine that 1.23 is not a string");
    equal(Type.string(null), false, "Should determine that null is not a string");
    equal(Type.string(undefined), false, "Should determine that 1.23 is not a string");
    equal(Type.string(['kissa']), false, "Should determine that an array with 'kissa' is not a string");

});

test("Boolean tests", function () {

    ok(Type.boolean(true), "Should determine true is a boolean");
    ok(Type.boolean(false), "Should determine false is a boolean");
    equal(Type.boolean("true"), false, "Should determine that 'true' is not a boolean value");
    equal(Type.boolean("false"), false, "Should determine that 'false' is not a boolean value");
    equal(Type.boolean(null), false, "Should determine that null is not a boolean");
    equal(Type.boolean(undefined), false, "Should determine that undefined is not a boolean");
    equal(Type.boolean(1), false, "Should determine that an array with 1 is not a boolean");
    equal(Type.boolean(0), false, "Should determine that an array with 1 is not a boolean");

});

test("Integer array tests", function () {

    ok(Type.intArray([1]), "Should determine that [1] is an int array");
    ok(Type.intArray([1, 2, 3]), "Should determine that [1, 2, 3] is an int array");
    ok(Type.intArray([]), "Should determine that an empty array is an int array");
    equal(Type.intArray('kissa'), false, "Should determine that a 'kissa' is not an int array");
    equal(Type.intArray(1), false, "Should determine that a 1 is not an int array");
    equal(Type.intArray([1, 2.1, 3]), false, "Should determine that [1, 2.1, 3] is not an int array");
    equal(Type.intArray([1, 2, '3']), false, "Should determine that [1, 2, '3'] is not an int array");
    equal(Type.intArray([null, 2, 3]), false, "Should determine that [null, 2, 3] is not an int array");
    equal(Type.intArray([1, undefined, 3]), false, "Should determine that [1, undefined, 3] is not an int array");
    equal(Type.intArray([1, , 3]), false, "Should determine that [1, , 3] is not an int array");

    throws(
        function () {
            Type.intArray(null)
        }, IllegalArgumentException, "Should throw an IllegalArgumentException");

    throws(
        function () {
            Type.intArray(undefined)
        }, IllegalArgumentException, "Should throw an IllegalArgumentException");

});

test("Number array tests", function () {

    ok(Type.numberArray([1]), "Should determine that [1] is a number array");
    ok(Type.numberArray([1, 2.0, 3]), "Should determine that [1, 2.0, 3] is a number array");
    ok(Type.numberArray([]), "Should determine that an empty array is a number array");
    equal(Type.numberArray([1, 2.1, 3]), true, "Should determine that [1, 2.1, 3] is a number array");
    equal(Type.numberArray([1, 2, '3']), false, "Should determine that [1, 2, '3'] is a number array");
    equal(Type.numberArray([null, 2, 3]), false, "Should determine that [null, 2, 3] is not a number array");
    equal(Type.numberArray([1, undefined, 3]), false, "Should determine that [1, undefined, 3] is not a number array");
    equal(Type.numberArray([1, , 3]), false, "Should determine that [1, , 3] is not a number array");

    throws(
        function () {
            Type.numberArray(null)
        }, IllegalArgumentException,  "Should throw an IllegalArgumentException");

    throws(
        function () {
            Type.numberArray(undefined)
        }, IllegalArgumentException, "Should throw an IllegalArgumentException");

});

test("String and other typed arrays", function () {

    equal(Type.arrayContains((function (input) {
        return Type.string(input)
    }), ["abc", "foo", "bar"]), true, "Should determine that 'abc','foo','bar' is an array of Strings");
    equal(Type.arrayContains((function (input) {
        return Type.string(input)
    }), ["abc", 1, "bar"]), false, "Should determine that 'abc',1,'bar' is NOT an array of Strings");

    throws(
        function () {
            Type.arrayContains(undefined)
        }, IllegalArgumentException, "Should throw an IllegalArgumentException");

    throws(
        function () {
            Type.arrayContains((function (input) {
                return Type.string(input)
            }), undefined)
        }, IllegalArgumentException, "Should throw an IllegalArgumentException");

});
