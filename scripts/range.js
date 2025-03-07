const rangeSlider = document.querySelector('.range-slider__slider');
const inputMin = document.querySelector('.range-slider__input--min');
const inputMax = document.querySelector('.range-slider__input--max');
const inputs = [inputMin, inputMax];

noUiSlider.create(rangeSlider, {
    start: [0, 900],
    connect: true,
    step: 1,
    range: {
        'min': 0,
        'max': 1000
    },
    cssPrefix: 'noui-',
});

rangeSlider.classList.add('custom-range-slider');

rangeSlider.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = Math.round(values[handle]);
});

inputs.forEach((input, index) => {
    input.addEventListener('change', function () {
        const value = parseFloat(this.value);
        if (!isNaN(value) && value >= 0 && value <= 1000) {
            const setValues = [null, null];
            setValues[index] = value;
            rangeSlider.noUiSlider.set(setValues);
        }
    });
});

document.getElementById('reset-button').addEventListener('click', function() {
    inputMin.value = 0;
    inputMax.value = 900;
    rangeSlider.noUiSlider.set([0, 900]);
});
