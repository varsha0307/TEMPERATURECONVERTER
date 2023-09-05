document.addEventListener('DOMContentLoaded', function () {
    const celsiusInput = document.getElementById('celsius');
    const convertButton = document.getElementById('convert');
    const resultElement = document.getElementById('result');

    convertButton.addEventListener('click', function () {
        const celsius = parseFloat(celsiusInput.value);
        if (!isNaN(celsius)) {
            const fahrenheit = (celsius * 9/5) + 32;
            resultElement.textContent = fahrenheit.toFixed(2);
        } else {
            resultElement.textContent = 'Invalid Input';
        }
    });
});
