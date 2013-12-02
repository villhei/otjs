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

/*
  Sulkeumaa voidaan käyttää myös konstruktoreissa. Sulkeumafunktioiden suorittamisen jälkeen sulkeumaan jää
muistiin sen muuttujien arvot.
*/

function Person() {
    var name = "Generic George", age=0;

    return {
        getName: function() {return name},
        setName: function(newName) {name = newName;},
        getAge: function() {return age},
        oneUp: function() {age++},
        print: function() {document.write("My name is "+name+" and I just turned "+age)}

    }
}

/*
  Sulkeumaa hyödyntäen toteutettu globaali Counter-singleton, jossa vapaat muuttujat säilyvät suorituksen jälkeiseen aikaan.
*/

function initNewCounter() {
    var count = 0;
    function nextCount() {
        return ++count;
    }
    return nextCount;
}

var counter = initNewCounter();

