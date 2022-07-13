// function declaration
function suma(a, b) {
    return a + b;
}

// anonimine funkcija
const skirtumas = function (a, b) {
    return a - b;
}

// arrow function (rodykline)
const daugyba = (a, b) => {
    return a * b;
}

// arrow function - jeigu logikos kune yra TIK 1 statement (salyga)
// galima nerasyti riestiniu skliaustu ir return
const dalyba = (a, b) => a / b;

// arrow function - jeigu parametru bloke yra TIK 1 parametras
// galima nerasyti paprastuju skliaustu
const kvadratu = a => a ** 2;