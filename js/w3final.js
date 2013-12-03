/*
 Olion omien kenttien läpikäynnissä tulee olla tarkkana. Seuraava triviaali toteutus johtaa odottamattomiin seurauksiin
*/
for (var key in myObject) {
    console.log(myObject[key])
}

/*
 Mikäli tarkoituksena on käydä läpi vain kyseisen olion _omat_ kentät, jättäen väliin kaikki prototyyppiketjusta perityt,
 onnistuu se seuraavasti
 */
for (var key in myObject) {
    if (myObject.hasOwnProperty(key)) {
        console.log(myObject[key])
    }
}


/*
Singleton-mallissa perinteinen literaalitoteutus on hyväksyttävä tapa. 
*/
function SingletonObject() {

	this.instance = null;

	this.getInstance = function() {
		if(this.instance === null) {
			return this.instance = new SingletonObject();
		} else {
			return this.instance;
		}
	}
}
/*
Selkein olion määrittely saadaan aikaiseksi kuitenkin Javastakin tutulla konstruktoritoteutuksella.
*/
function Product(material, cost) {
   
         this.material = material;
         this.cost = cost;
         this.totalCost = function() { return this.material*this.cost };
}
   
   var product = new Product(100, 50);

/* 

*/

