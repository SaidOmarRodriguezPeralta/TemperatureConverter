import { TemperatureVO } from '../valueobjects/TemperatureVO';

/**
 * Converts a temperature to the unit to be converted.
 * 
 * @param {TemperatureVO} temperature - Object that contains a value and a unit representing the temperature.
 * @param {string} unit - The unit to convert to. Valid values are: CELSIUS and FAHRENHEIT.
 * @returns {TemperatureVO} - Object containing a value and unit representing the converted temperature.
 */
const TemperatureUtil = () => {
    function convert(temperature, unit) {
        if (temperature.unit == "CELSIUS" && unit == "FAHRENHEIT") {
            let convertedValue = (temperature.value * 9/5) + 32;
            return new TemperatureVO(convertedValue, unit);
        } else if (temperature.unit == "FAHRENHEIT" && unit == "CELSIUS") {
            let convertedValue = (temperature.value - 32) * 5/9;
            return new TemperatureVO(convertedValue, unit);
        } else {
            return new TemperatureVO(temperature.value, unit);
        }
    }

    return { convert };
}

export default TemperatureUtil;











const GameUtil = () => {
    function convert(temperature, unit) {
        if (temperature.unit == "CELSIUS" && unit == "FAHRENHEIT") {
            let convertedValue = (temperature.value * 9/5) + 32;
            return new TemperatureVO(convertedValue, unit);
        } else if (temperature.unit == "FAHRENHEIT" && unit == "CELSIUS") {
            let convertedValue = (temperature.value - 32) * 5/9;
            return new TemperatureVO(convertedValue, unit);
        } else {
            return new TemperatureVO(temperature.value, unit);
        }
    }

    return { convert };
}