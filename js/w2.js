/*
	Esimerkki väljien tyyppiparametrien käytöstä
*/


function logStuff() {
	var args = Array.prototype.slice.call(arguments);
	for(var i = 0 ; i < args.length; ++i) {
		console.log(args[i]);
	}
}

var exampleObject = {
	type: "example",
	name: "exampleObject"
}

function concatenate() {
	return Array.prototype.slice.call(arguments).join(" ")
}

logStuff(concatenate(exampleObject, exampleObject.type, exampleObject.name));
