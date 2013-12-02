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
    };
};
