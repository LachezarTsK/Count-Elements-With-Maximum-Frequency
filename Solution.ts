
function maxFrequencyElements(input: number[]): number {
    const RANGE_OF_VALUES: number[] = [1, 100];
    const frequency: number[] = new Array(RANGE_OF_VALUES[1] + 1).fill(0);

    let maxFrequency: number = 0;
    let numberOfMaxFrequencyElements: number = 0;

    for (let value of input) {
        if (++frequency[value] > maxFrequency) {
            maxFrequency = frequency[value];
            numberOfMaxFrequencyElements = 0;
        }
        numberOfMaxFrequencyElements += (frequency[value] === maxFrequency) ? frequency[value] : 0;
    }

    return numberOfMaxFrequencyElements;
};
