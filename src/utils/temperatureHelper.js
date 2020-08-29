

const convertToFahrenheit = (C) => {
    return C*(9/5) + 32;
};


const convertToCelsius = (F) => {
    return ((F - 32) * (5/9));
};

export {convertToCelsius, convertToFahrenheit};
