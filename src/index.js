module.exports =
    function toReadable(number) {
        "use strict";
        const matrix = [
            ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
            ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
        ];
        let desString = '';
        if (number < 20) { // number in range [0..19]
            desString = matrix[0][number];
        } else if (number < 100) { // number in range [20..99]
            if (number % 10 === 0) {
                desString = matrix[1][(number / 10) - 2];
            } else {
                desString = `${matrix[1][Math.floor(number/10)-2]} ${matrix[0][number % 10]}`;
            }
        } else { // number in range [100..999]
            if (number % 100 === 0) {
                desString = `${matrix[0][number/100]} hundred`;
            } else if (number % 100 < 20) {
                desString = `${matrix[0][Math.floor(number/100)]} hundred ${matrix[0][number % 100]}`;
            } else {
                if (number % 10 === 0) {
                    desString = `${matrix[0][Math.floor(number/100)]} hundred ${matrix[1][Math.floor((number % 100)/10)-2]}`;
                } else {
                    desString = `${matrix[0][Math.floor(number/100)]} hundred ${matrix[1][Math.floor((number % 100)/10)-2]} ${matrix[0][number % 10]}`;
                }   
            }

        }
        return desString;
    }
