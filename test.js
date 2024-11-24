test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One dollar should be 146 yen", function() {
    const { fromDollarToYen } = require('./app.js');
    const yens = fromDollarToYen(5);
    const yensExpected = 5 * 146;
    expect(fromDollarToYen(5)).toBe(730); 
})

test("One yen should be 0.0055 pounds", function() {
    const { fromYenToPound } = require('./app.js');
    const pounds = fromYenToPound(3500);
    const poundsExpected = 3500 * 0.0055;
    expect(fromYenToPound(3500)).toBe(19.25);
})
