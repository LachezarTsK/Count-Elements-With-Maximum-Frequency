
using System;

public class Solution
{
    private static readonly int[] RANGE_OF_VALUES = { 1, 100 };

    public int MaxFrequencyElements(int[] input)
    {
        int[] frequency = new int[RANGE_OF_VALUES[1] + 1];
        int maxFrequency = 0;
        int numberOfMaxFrequencyElements = 0;

        foreach (int value in input)
        {
            if (++frequency[value] > maxFrequency)
            {
                maxFrequency = frequency[value];
                numberOfMaxFrequencyElements = 0;
            }
            numberOfMaxFrequencyElements += (frequency[value] == maxFrequency) ? frequency[value] : 0;
        }

        return numberOfMaxFrequencyElements;
    }
}
