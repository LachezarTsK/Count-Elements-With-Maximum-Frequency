
/**
 * @param {number[]} input
 * @return {number}
 */
var maxFrequencyElements = function (input) {
    const RANGE_OF_VALUES = [1, 100];
    const frequency = new Array(RANGE_OF_VALUES[1] + 1).fill(0);

    let maxFrequency = 0;
    let numberOfMaxFrequencyElements = 0;

    for (let value of input) {
        if (++frequency[value] > maxFrequency) {
            maxFrequency = frequency[value];
            numberOfMaxFrequencyElements = 0;
        }
        numberOfMaxFrequencyElements += (frequency[value] === maxFrequency) ? frequency[value] : 0;
    }

    return numberOfMaxFrequencyElements;
};
