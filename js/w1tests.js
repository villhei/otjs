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