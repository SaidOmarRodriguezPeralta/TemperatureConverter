//JSDoc es un comentario que da informacion sobre el codigo

/**
 * Temperature Representation.
 * @constructor
 * @param {number} value - The temperature value.
 * @param {string} unit - The temperatura unit. Valid values: CELSIUS or FAHREHEIT
 */
 exports.TemperatureVO = function (value, unit) {
    this.value = value;
    this.unit = unit;
 };