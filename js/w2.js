/*
 Esimerkki JavaScript-tyylisestä virhekäsittelystä
 */

function ArrayError(message) {
    this.message = message;
}
ArrayError.prototype = new Error();

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
    throw new ArrayError("Input is not an array: " + errValue);
}

function functionError(errValue) {
        throw new TypeError("Parameter was not a function: "+ errValue);
}

function forEach(array, targetFunction) {
    if(!Type.array(array)) {
        throwArrayError(array);
    }
    if(!Type.isFunction(targetFunction)) {
        functionError(targetFunction);
    }
    for(var i = 0, len = array.length; i < len ; ++i) {
        targetFunction.apply(null, [array[i], i]);    }
}

function map(targetFunction, array) {
    if(!Type.array(array)) {
        throwArrayError(array);
    }
    if(!Type.isFunction(targetFunction)) {
        functionError(targetFunction);
    }
    var result = [];
    forEach(array, function(element) {
       result.push(targetFunction(element));
    });
    return result;
}


