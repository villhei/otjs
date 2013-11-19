/*
	Esimerkki väljien tyyppiparametrien käytöstä
*/

function logStuff() {
	var args = Array.prototype.slice.call(arguments);
	for(var i = 0 ; i < args.length; ++i) {
		console.log(args[i]);
	}
}

/*
    Donde esta mia input parameter!?
 */

function concatenate() {
    return Array.prototype.slice.call(arguments).join(" ")
}

/*
    Esimerkki funktionaalisen tyylin selkeydestä
 */

function throwArrayError(errValue) {
    throw new TypeError("Input is not an array: " + errValue);
}

function forEach(array, targetFunction) {
    if(!Type.array(array)) {
        throwArrayError();
    }
    for(var i = 0, len = array.length; i < len ; ++i) {
        targetFunction.apply(null, [array[i]]);    }
}

function map(targetFunction, array) {
    if(!Type.array(array)) {
        throwArrayError();
    }
    var result = [];
    forEach(array, function(element) {
       result.push(targetFunction(element));
    });
    return result;
}



var exampleObject = {
	type: "example",
	name: "exampleObject"
}

var exNestedArray = [["one", "two"], ["foo", "bar"]];
