// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { oneEuroIs, fromEuroToDollar }


const fromDollarToYen = function(valueInDollar) {
    let valueInYen = valueInDollar * 146;
    return valueInYen;
}
let oneDollarIs = {
    "JPY": 146, // japan yen
    "EUR": 0.93, // us dollar
    "GBP": 0.80, // british pound
}
module.exports = { oneDollarIs, fromDollarToYen }

const fromYenToPound = function(valueInYen) {
    let valueInPound = valueInYen * 0.0055;
    return valueInPound;
}
let oneYenIs = {
    "EUR": 0.0064, // japan yen
    "USD": 0.0068, // us dollar
    "GBP": 0.0055, // british pound
}

module.exports = { oneEuroIs, fromEuroToDollar, oneDollarIs, fromDollarToYen, oneYenIs, fromYenToPound }


