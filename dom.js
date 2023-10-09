var convertButton = document.querySelector('input[type="button"]');
var inputElement = document.getElementById('inp');

function convertWeight() {
    var weightInKgs = parseFloat(inputElement.value);
    if (!isNaN(weightInKgs)) {
        var weightInPounds = weightInKgs * 2.20462;
        inputElement.value = weightInPounds.toFixed(2);
    } else {
        alert('Please enter a valid weight in kilograms.');
    }
}

convertButton.addEventListener('click', convertWeight);
