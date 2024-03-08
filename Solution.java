
public class Solution {

    private static final int[] RANGE_OF_VALUES = {1, 100};

    public int maxFrequencyElements(int[] input) {
        int[] frequency = new int[RANGE_OF_VALUES[1] + 1];
        int maxFrequency = 0;
        int numberOfMaxFrequencyElements = 0;

        for (int value : input) {
            if (++frequency[value] > maxFrequency) {
                maxFrequency = frequency[value];
                numberOfMaxFrequencyElements = 0;
            }
            numberOfMaxFrequencyElements += (frequency[value] == maxFrequency) ? frequency[value] : 0;
        }

        return numberOfMaxFrequencyElements;
    }
}
